import { useCallback, useState } from "react";
import { useTranscriptionByGeminiNano } from "./transcriptionByGeminiNano";
import { useTranscriptionBySpeechRecognition } from "./transcriptionBySpeechRecognition";
import { useTranscriptionByOpenAI } from "./useTranscriptionByOpenAI";

export const TRANSCRIPTION_ENGINES = [
  "OpenAI Whisper",
  "Gemini Nano",
  "SpeechSynthesis",
] as const;

export type TranscriptionEngine = (typeof TRANSCRIPTION_ENGINES)[number];

export const DEFAULT_TRANSCRIPTION_ENGINE: TranscriptionEngine = "OpenAI Whisper";

export const useTranscription = () => {
  const [transcriptionEngine, setTranscriptionEngine] =
    useState<TranscriptionEngine>(DEFAULT_TRANSCRIPTION_ENGINE);

  const {
    load: loadGeminiNano,
    transcribe: transcribeByGeminiNano,
    stopTranscribing: stopTranscribingByGemini,
  } = useTranscriptionByGeminiNano();
  const {
    transcribe: transcribeBySpeechRecognition,
    stopTranscribing: stopTranscribingBySpeechRecognition,
  } = useTranscriptionBySpeechRecognition();
  const {
    load: loadOpenAI,
    transcribe: transcribeByOpenAI,
    stopTranscribing: stopTranscribingByOpenAI,
  } = useTranscriptionByOpenAI();

  const load = useCallback(
    async (transcriptionEngine: TranscriptionEngine) => {
      console.log('🔧 [Transcription] Loading engine:', transcriptionEngine);
      setTranscriptionEngine(transcriptionEngine);
      switch (transcriptionEngine) {
        case "OpenAI Whisper":
          return await loadOpenAI();
        case "Gemini Nano":
          return await loadGeminiNano();
        default:
      }
    },
    [loadOpenAI, loadGeminiNano]
  );

  const transcribe = useCallback(async () => {
    console.log('🎤 [Transcription] Starting transcription with:', transcriptionEngine);
    switch (transcriptionEngine) {
      case "OpenAI Whisper":
        return await transcribeByOpenAI();
      case "Gemini Nano":
        return await transcribeByGeminiNano();
      case "SpeechSynthesis":
        return await transcribeBySpeechRecognition();
      default:
        throw Error("Selected transcription engine is not supported");
    }
  }, [
    transcribeByOpenAI,
    transcribeByGeminiNano,
    transcribeBySpeechRecognition,
    transcriptionEngine,
  ]);

  const stopTranscribing = useCallback(() => {
    console.log('⏹️ [Transcription] Stopping transcription');
    switch (transcriptionEngine) {
      case "OpenAI Whisper":
        return stopTranscribingByOpenAI();
      case "Gemini Nano":
        return stopTranscribingByGemini();
      case "SpeechSynthesis":
        return stopTranscribingBySpeechRecognition();
      default:
        throw Error("Selected transcription engine is not supported");
    }
  }, [
    stopTranscribingByOpenAI,
    stopTranscribingByGemini,
    stopTranscribingBySpeechRecognition,
    transcriptionEngine,
  ]);

  return { load, transcribe, stopTranscribing };
};
