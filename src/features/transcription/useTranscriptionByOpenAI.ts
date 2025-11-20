/**
 * React Hook for OpenAI Whisper Speech-to-Text
 * Provides real-time transcription with Voice Activity Detection (VAD)
 */

import { useCallback, useRef, useState } from 'react';
import { 
  transcribeFromMicrophoneOpenAI,
  OpenAITranscriptionResult 
} from './openaiStt';

export const useTranscriptionByOpenAI = () => {
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  /**
   * Start transcription from microphone
   * Automatically stops after 1.5 seconds of silence
   */
  const transcribe = useCallback(async (): Promise<string> => {
    console.log('🎤 [OpenAI STT] Starting transcription...');
    setIsTranscribing(true);
    setError(null);

    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 16000, // Whisper optimized
        },
      });

      streamRef.current = stream;
      console.log('✅ [OpenAI STT] Microphone access granted');

      // Start transcription with VAD
      const result: OpenAITranscriptionResult = await transcribeFromMicrophoneOpenAI(
        1500, // Stop after 1.5s silence
        {
          language: 'ru', // Russian language (or 'kk' for Kazakh)
          temperature: 0.2, // Slightly more flexible for names/unusual words
          responseFormat: 'verbose_json',
          // Context prompt для лучшего распознавания имен, фамилий, терминов
          prompt: 'Это разговор на русском языке с возможными казахскими именами и фамилиями. Примеры: Жартыбаева, Макпал, Айгуль, Нурлан, Дюсекеев, Даурен, Оразалы, Нурболат.',
        }
      );

      console.log('✅ [OpenAI STT] Transcription complete:', {
        text: result.text,
        language: result.language,
        duration: result.duration,
      });

      setIsTranscribing(false);
      
      // Clean up stream
      stream.getTracks().forEach(track => track.stop());
      streamRef.current = null;

      return result.text;
    } catch (err) {
      console.error('❌ [OpenAI STT] Transcription failed:', err);
      const error = err as Error;
      setError(error);
      setIsTranscribing(false);

      // Clean up on error
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }

      throw error;
    }
  }, []);

  /**
   * Stop transcription manually
   */
  const stopTranscribing = useCallback(() => {
    console.log('⏹️ [OpenAI STT] Stopping transcription...');

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    setIsTranscribing(false);
    console.log('✅ [OpenAI STT] Transcription stopped');
  }, []);

  /**
   * No pre-loading needed for OpenAI Whisper
   */
  const load = useCallback(async () => {
    console.log('✅ [OpenAI STT] No pre-loading required');
    return;
  }, []);

  return {
    load,
    transcribe,
    stopTranscribing,
    isTranscribing,
    error,
  };
};
