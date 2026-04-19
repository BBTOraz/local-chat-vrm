import { useEffect, useCallback, useContext } from "react";
import { useChatDispatch, useChatState } from "@/state/chatStore";
import { useChatActions } from "@/hooks/useChatActions";
import { useIntegratedVoiceAgent } from "@/features/voiceAgent/useIntegratedVoiceAgent";
import { ViewerContext } from "@/features/vrmViewer/viewerContext";
import { speakCharacter } from "@/features/messages/speakCharacter";
import { DEFAULT_VOICE_ENGINE, textsToScreenplay } from "@/features/messages/messages";
import {
  onSpeakChunkRef,
  voiceAgentCallbackRef,
  voiceAgentStartCallbackRef,
} from "@/features/tts/ttsShared";

export const VoiceModeController = () => {
  const { isContinuousVoiceMode } = useChatState();
  const dispatch = useChatDispatch();
  const { sendMessage, abortCurrentStream } = useChatActions();
  const { viewer } = useContext(ViewerContext);

  const voiceAgent = useIntegratedVoiceAgent(
    {
      sttConfig: {
        language: "ru",
        temperature: 0.0,
      },
      vadSilenceDuration: 1500,
      vadVolumeThreshold: 25,
      onTranscription: (text) => {
        console.log("[VoiceModeController] Transcription:", text);
      },
      onError: (error) => {
        console.error("[VoiceModeController] Error:", error);
        dispatch({ type: "SET_ERROR", error: error.message });
      },
      onStateChange: (state) => {
        console.log("[VoiceModeController] State:", state);
      },
    },
    sendMessage,
    abortCurrentStream
  );

  // Wire the viewer-aware audio playback callback into the shared TTS singleton.
  // This runs whenever viewer becomes ready so the queue always has access to it.
  useEffect(() => {
    if (!viewer) {
      onSpeakChunkRef.current = null;
      return;
    }
    onSpeakChunkRef.current = async (audio: ArrayBuffer): Promise<void> => {
      // Build a minimal screenplay so speakCharacter animates the VRM
      const screenplays = textsToScreenplay(DEFAULT_VOICE_ENGINE, [""]);
      const screenplay = screenplays[0];

      await new Promise<void>((resolve) => {
        // Use the viewer model's speak() directly with the pre-fetched buffer
        void viewer.model?.speak(audio, screenplay).then(resolve).catch(resolve);
        // Fallback: if model isn't ready, resolve immediately
        if (!viewer.model) {
          resolve();
        }
      });
    };
  }, [viewer]);

  // Keep voiceAgentCallbackRef pointed at the current notifyResponseFinished so
  // the TTS queue's onComplete can advance the voice agent state machine.
  useEffect(() => {
    voiceAgentCallbackRef.current = voiceAgent.notifyResponseFinished;
    return () => {
      voiceAgentCallbackRef.current = null;
    };
  }, [voiceAgent.notifyResponseFinished]);

  // Keep voiceAgentStartCallbackRef pointed at the current notifyResponseStarted
  // so the TTS queue's onFirstChunkStart transitions the state machine to
  // speaking at the moment audio actually begins (not on FINAL_ANSWER receipt).
  useEffect(() => {
    voiceAgentStartCallbackRef.current = voiceAgent.notifyResponseStarted;
    return () => {
      voiceAgentStartCallbackRef.current = null;
    };
  }, [voiceAgent.notifyResponseStarted]);

  useEffect(() => {
    if (isContinuousVoiceMode && !voiceAgent.isActive) {
      voiceAgent.init();
    } else if (!isContinuousVoiceMode && voiceAgent.isActive) {
      voiceAgent.stop();
    }
  }, [isContinuousVoiceMode, voiceAgent]);

  useEffect(() => {
    if (!isContinuousVoiceMode || !voiceAgent.isActive) return;

    const handleSpeechEnd = () => {
      voiceAgent.notifyResponseFinished();
    };

    if (viewer) {
      const originalStop = speakCharacter.stop.bind(speakCharacter);
      speakCharacter.stop = (v) => {
        originalStop(v);
        if (isContinuousVoiceMode) {
          handleSpeechEnd();
        }
      };
    }
  }, [isContinuousVoiceMode, voiceAgent, viewer]);

  const handleInterrupt = useCallback(() => {
    if (viewer) {
      speakCharacter.stop(viewer);
    }
    voiceAgent.interrupt();
    dispatch({ type: "SET_VOICE_ACTIVE", active: false });
  }, [dispatch, viewer, voiceAgent]);

  if (!isContinuousVoiceMode) {
    return null;
  }

  return (
    <div className="fixed bottom-32 right-8 z-50 flex flex-col items-end gap-2">
      <div className="rounded-lg bg-black/80 px-4 py-2 text-white backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className={`h-3 w-3 rounded-full ${
            voiceAgent.isListening ? "bg-green-500 animate-pulse" :
            voiceAgent.isProcessing ? "bg-yellow-500 animate-pulse" :
            voiceAgent.isSpeaking ? "bg-blue-500 animate-pulse" :
            "bg-gray-500"
          }`} />
          <span className="text-sm">
            {voiceAgent.isListening ? "Слушаю..." :
             voiceAgent.isProcessing ? "Обработка..." :
             voiceAgent.isSpeaking ? "Говорю..." :
             "Голосовой режим"}
          </span>
        </div>
      </div>
      {(voiceAgent.isSpeaking || voiceAgent.isProcessing) && (
        <button
          onClick={handleInterrupt}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
        >
          Прервать
        </button>
      )}
    </div>
  );
};
