import { wait } from "@/utils/wait";
import { Viewer } from "../vrmViewer/viewer";
import {
  OpenAITtsTalk,
  Screenplay,
  VoiceEngine,
} from "./messages";
import { synthesizeSpeechOpenAI } from "../voices/openaiTts";

const createSpeakCharacter = () => {
  let lastTime = 0;
  let prevFetchPromise: Promise<unknown> = Promise.resolve();
  let prevSpeakPromise: Promise<unknown> = Promise.resolve();
  let stopRequested = false;

  const continuousFetchAudio = (
    screenplay: Screenplay,
    viewer: Viewer,
    fetchInterval: number,
    fetchAudio: () => Promise<ArrayBuffer>,
    onStart?: () => void,
    onComplete?: () => void
  ) => {
    console.log("⏳ [TTS] continuousFetchAudio called", {
      fetchInterval,
      stopRequested
    });
    
    const fetchPromise = prevFetchPromise.then(async () => {
      if (stopRequested) {
        console.warn("⚠️ [TTS] Fetch cancelled - stop requested");
        return null;
      }

      const now = Date.now();
      if (now - lastTime < fetchInterval) {
        await wait(fetchInterval - (now - lastTime));
      }

      console.log("📡 [TTS] Fetching audio...");
      const buffer = await fetchAudio().catch((err) => {
        console.error("❌ [TTS] Fetch audio failed:", err);
        return null;
      });
      lastTime = Date.now();
      
      if (buffer) {
        console.log("✅ [TTS] Audio fetched successfully:", buffer.byteLength, "bytes");
      }
      
      return buffer;
    });

    prevFetchPromise = fetchPromise;
    prevSpeakPromise = Promise.all([fetchPromise, prevSpeakPromise])
      .then(async ([audioBuffer]) => {
        if (stopRequested || !audioBuffer) {
          console.warn("⚠️ [TTS] Playback cancelled", { stopRequested, hasBuffer: !!audioBuffer });
          return;
        }
        
        console.log("🎵 [TTS] Starting audio playback...");
        onStart?.();
        await viewer.model?.speak(audioBuffer, screenplay);
        console.log("✅ [TTS] Audio playback finished");
      })
      .finally(() => {
        console.log("🏁 [TTS] Finally block - calling onComplete");
        onComplete?.();
      });
  };

  const getFunctionToFetchOpenAITtsAudio =
    (talk: OpenAITtsTalk) => async (): Promise<ArrayBuffer> => {
      console.log("🎤 [OpenAI TTS] Starting synthesis...", {
        message: talk.message.substring(0, 50) + "...",
        voice: talk.voice,
        model: 'tts-1'
      });
      
      try {
        const audioBlob = await synthesizeSpeechOpenAI(talk.message, {
          model: 'tts-1', // Быстрая модель для real-time
          voice: talk.voice,
          speed: 1.0,
        });
        
        const arrayBuffer = await audioBlob.arrayBuffer();
        console.log("✅ [OpenAI TTS] Synthesis successful!", {
          audioSize: arrayBuffer.byteLength,
          duration: `~${(arrayBuffer.byteLength / 24000).toFixed(1)}s`
        });
        
        return arrayBuffer;
      } catch (error) {
        console.error("❌ [OpenAI TTS] Synthesis failed:", error);
        throw error;
      }
    };

  const load = async (voiceEngine: VoiceEngine): Promise<void> => {
    console.log("🔧 [TTS] Loading voice engine:", voiceEngine);
    // OpenAI TTS doesn't require pre-loading
    console.log("✅ [TTS] Voice engine loaded (no pre-loading needed for OpenAI)");
    return;
  };

  const speak = (
    screenplay: Screenplay,
    viewer: Viewer,
    koeiroApiKey: string,
    onStart?: () => void,
    onComplete?: () => void
  ) => {
    console.log("🗣️ [TTS] speak() called", {
      voiceEngine: screenplay.talk.voiceEngine,
      expression: screenplay.expression,
      messagePreview: screenplay.talk.message.substring(0, 50) + "..."
    });
    
    stopRequested = false;

    const talk = screenplay.talk;
    continuousFetchAudio(
      screenplay,
      viewer,
      0,
      getFunctionToFetchOpenAITtsAudio(talk),
      () => {
        console.log("🎵 [TTS] Audio playback started");
        onStart?.();
      },
      () => {
        console.log("✅ [TTS] Audio playback completed");
        onComplete?.();
      }
    );
  };

  const stop = (viewer: Viewer) => {
    stopRequested = true;
    prevFetchPromise = Promise.resolve();
    prevSpeakPromise = Promise.resolve();
    lastTime = 0;
    viewer.model?.stopSpeaking();
  };

  return {
    load,
    speak,
    stop,
  };
};

export const speakCharacter = createSpeakCharacter();
