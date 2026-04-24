import { useCallback, useRef, useState } from "react";
import {
  createOpenAiRealtimeSession,
  OPENAI_REALTIME_CALLS_URL,
} from "@/features/voiceAgent/openAiRealtimeClient";

export type RealtimeVoiceState =
  | "idle"
  | "connecting"
  | "listening"
  | "speaking"
  | "error";

type UseOpenAiRealtimeVoiceAgentOptions = {
  onError?: (error: Error) => void;
  onEvent?: (event: unknown) => void;
};

type RealtimeServerEvent = {
  type?: string;
  error?: {
    message?: string;
  };
};

export function useOpenAiRealtimeVoiceAgent(
  options: UseOpenAiRealtimeVoiceAgentOptions = {}
) {
  const [state, setState] = useState<RealtimeVoiceState>("idle");
  const [isActive, setIsActive] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);

  const closeResources = useCallback(() => {
    dataChannelRef.current?.close();
    dataChannelRef.current = null;

    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;

    localStreamRef.current?.getTracks().forEach((track) => track.stop());
    localStreamRef.current = null;

    if (remoteAudioRef.current) {
      remoteAudioRef.current.pause();
      remoteAudioRef.current.srcObject = null;
      remoteAudioRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    closeResources();
    setIsActive(false);
    setState("idle");
  }, [closeResources]);

  const handleError = useCallback(
    (error: unknown) => {
      const normalized = error instanceof Error ? error : new Error(String(error));
      closeResources();
      setLastError(normalized.message);
      setIsActive(false);
      setState("error");
      options.onError?.(normalized);
    },
    [closeResources, options]
  );

  const handleServerEvent = useCallback(
    (event: RealtimeServerEvent) => {
      options.onEvent?.(event);

      switch (event.type) {
        case "input_audio_buffer.speech_started":
        case "input_audio_buffer.speech_stopped":
          setState("listening");
          break;
        case "response.created":
        case "response.output_audio.delta":
        case "response.audio.delta":
          setState("speaking");
          break;
        case "response.done":
        case "response.completed":
          setState("listening");
          break;
        case "error":
          handleError(new Error(event.error?.message || "OpenAI Realtime error"));
          break;
        default:
          break;
      }
    },
    [handleError, options]
  );

  const init = useCallback(async () => {
    if (peerConnectionRef.current || state === "connecting") {
      return;
    }

    try {
      setLastError(null);
      setState("connecting");

      const session = await createOpenAiRealtimeSession();
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      localStreamRef.current = localStream;

      const peerConnection = new RTCPeerConnection();
      peerConnectionRef.current = peerConnection;
      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });

      const remoteAudio = document.createElement("audio");
      remoteAudio.autoplay = true;
      remoteAudio.playsInline = true;
      remoteAudioRef.current = remoteAudio;

      peerConnection.ontrack = (event) => {
        const [remoteStream] = event.streams;
        if (!remoteStream) {
          return;
        }
        remoteAudio.srcObject = remoteStream;
        void remoteAudio.play().catch((error) => {
          console.warn("[OpenAI Realtime] autoplay was blocked", error);
        });
      };

      peerConnection.onconnectionstatechange = () => {
        if (
          peerConnection.connectionState === "failed" ||
          peerConnection.connectionState === "disconnected"
        ) {
          handleError(new Error(`Realtime connection ${peerConnection.connectionState}`));
        }
      };

      const dataChannel = peerConnection.createDataChannel("oai-events");
      dataChannelRef.current = dataChannel;
      dataChannel.onopen = () => {
        setIsActive(true);
        setState("listening");
      };
      dataChannel.onmessage = (message) => {
        try {
          handleServerEvent(JSON.parse(message.data) as RealtimeServerEvent);
        } catch (error) {
          console.warn("[OpenAI Realtime] event parse failed", error);
        }
      };
      dataChannel.onerror = () => {
        handleError(new Error("OpenAI Realtime data channel error"));
      };

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      const sdpResponse = await fetch(OPENAI_REALTIME_CALLS_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.clientSecret}`,
          "Content-Type": "application/sdp",
        },
        body: offer.sdp,
      });

      if (!sdpResponse.ok) {
        const details = await sdpResponse.text().catch(() => "");
        throw new Error(details || `OpenAI Realtime SDP failed: HTTP ${sdpResponse.status}`);
      }

      const answer: RTCSessionDescriptionInit = {
        type: "answer",
        sdp: await sdpResponse.text(),
      };
      await peerConnection.setRemoteDescription(answer);
    } catch (error) {
      handleError(error);
    }
  }, [handleError, handleServerEvent, state]);

  const interrupt = useCallback(() => {
    const dataChannel = dataChannelRef.current;
    if (dataChannel?.readyState === "open") {
      dataChannel.send(JSON.stringify({ type: "response.cancel" }));
      setState("listening");
    }
  }, []);

  return {
    init,
    stop,
    interrupt,
    isActive,
    isConnecting: state === "connecting",
    isListening: state === "listening",
    isSpeaking: state === "speaking",
    hasError: state === "error",
    state,
    lastError,
  };
}
