/**
 * OpenAI Speech-to-Text (STT) Implementation using Whisper
 * Official Documentation: https://platform.openai.com/docs/api-reference/audio/createTranscription
 * 
 * Модель: whisper-1
 * Поддерживаемые форматы: mp3, mp4, mpeg, mpga, m4a, wav, webm
 * Максимальный размер файла: 25 MB
 * Языки: 99+ языков (автоопределение или указание)
 * 
 * Точность Whisper:
 * - Английский: ~95% WER (Word Error Rate)
 * - Русский: ~90% WER
 * - Другие языки: 85-95% WER
 */

import { getOpenAIApiKey, getOpenAIApiBase } from '../../utils/openaiConfig';

/**
 * Конвертирует audio Blob в WAV формат для OpenAI API
 */
async function convertToWav(blob: Blob): Promise<Blob> {
  console.log('🔄 [OpenAI STT] Converting audio to WAV...');
  
  const arrayBuffer = await blob.arrayBuffer();
  const audioContext = new AudioContext({ sampleRate: 16000 });
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  
  // Создаем WAV файл вручную
  const numberOfChannels = audioBuffer.numberOfChannels;
  const length = audioBuffer.length * numberOfChannels * 2;
  const buffer = new ArrayBuffer(44 + length);
  const view = new DataView(buffer);
  
  // WAV заголовок
  const writeString = (offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };
  
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + length, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numberOfChannels, true);
  view.setUint32(24, audioBuffer.sampleRate, true);
  view.setUint32(28, audioBuffer.sampleRate * numberOfChannels * 2, true);
  view.setUint16(32, numberOfChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, length, true);
  
  // Записываем PCM данные
  const channels = [];
  for (let i = 0; i < numberOfChannels; i++) {
    channels.push(audioBuffer.getChannelData(i));
  }
  
  let offset = 44;
  for (let i = 0; i < audioBuffer.length; i++) {
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const sample = Math.max(-1, Math.min(1, channels[channel][i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
      offset += 2;
    }
  }
  
  await audioContext.close();
  console.log('✅ [OpenAI STT] WAV conversion complete');
  return new Blob([buffer], { type: 'audio/wav' });
}

export interface OpenAISTTConfig {
  language?: string; // ISO-639-1 код (например, 'en', 'ru', 'ja')
  prompt?: string; // Контекст для улучшения точности
  temperature?: number; // 0-1, контролирует "креативность" транскрипции
  responseFormat?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt';
}

export interface OpenAITranscriptionResult {
  text: string;
  language?: string;
  duration?: number;
  segments?: Array<{
    id: number;
    start: number;
    end: number;
    text: string;
  }>;
}

/**
 * Transcribe audio using OpenAI Whisper API
 * @param audioBlob Audio file to transcribe
 * @param config STT configuration
 * @returns Transcription result
 */
export async function transcribeAudioOpenAI(
  audioBlob: Blob,
  config: OpenAISTTConfig = {}
): Promise<OpenAITranscriptionResult> {
  const {
    language,
    prompt,
    temperature = 0.0, // 0 для максимальной точности
    responseFormat = 'verbose_json',
  } = config;

  // Validate file size (OpenAI limit: 25 MB)
  if (audioBlob.size > 25 * 1024 * 1024) {
    throw new Error('Audio file exceeds 25 MB limit');
  }

  const apiKey = getOpenAIApiKey();
  const apiBase = getOpenAIApiBase();

  // Определяем расширение файла по MIME типу
  const extension = audioBlob.type.includes('wav') ? 'audio.wav' : 'audio.webm';
  console.log('📎 [OpenAI STT] File extension:', extension);

  // Create FormData for multipart/form-data request
  const formData = new FormData();
  formData.append('file', audioBlob, extension);
  formData.append('model', 'whisper-1');
  
  if (language) {
    formData.append('language', language);
  }
  
  if (prompt) {
    formData.append('prompt', prompt);
  }
  
  formData.append('temperature', temperature.toString());
  formData.append('response_format', responseFormat);

  const response = await fetch(`${apiBase}/audio/transcriptions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      // Don't set Content-Type - browser will set it with boundary
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
    throw new Error(`OpenAI STT error: ${error.error?.message || response.statusText}`);
  }

  const result = await response.json();

  if (responseFormat === 'verbose_json') {
    return {
      text: result.text,
      language: result.language,
      duration: result.duration,
      segments: result.segments,
    };
  } else if (responseFormat === 'json') {
    return { text: result.text };
  } else {
    // text, srt, vtt formats
    return { text: result };
  }
}

/**
 * Real-time transcription from MediaRecorder
 * Transcribes audio chunks as they are recorded
 * @param stream MediaStream from microphone
 * @param onTranscription Callback with transcription result
 * @param onError Error handler
 * @param config STT configuration
 * @returns MediaRecorder instance for control
 */
export function startRealtimeTranscriptionOpenAI(
  stream: MediaStream,
  onTranscription: (result: OpenAITranscriptionResult) => void,
  onError: (error: Error) => void,
  config: OpenAISTTConfig = {}
): MediaRecorder {
  const mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'audio/webm;codecs=opus',
  });

  const audioChunks: Blob[] = [];

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = async () => {
    try {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const result = await transcribeAudioOpenAI(audioBlob, config);
      onTranscription(result);
    } catch (error) {
      onError(error as Error);
    }
  };

  mediaRecorder.onerror = (event) => {
    onError(new Error(`MediaRecorder error: ${event}`));
  };

  mediaRecorder.start();

  return mediaRecorder;
}

/**
 * Transcribe from microphone with automatic stop after silence
 * @param silenceDurationMs Duration of silence before stopping (default: 1500ms)
 * @param config STT configuration
 * @returns Promise with transcription result
 */
export async function transcribeFromMicrophoneOpenAI(
  silenceDurationMs: number = 1500,
  config: OpenAISTTConfig = {}
): Promise<OpenAITranscriptionResult> {
  const stream = await navigator.mediaDevices.getUserMedia({ 
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    } 
  });

  return new Promise((resolve, reject) => {
    const audioChunks: Blob[] = [];
    
    // Попробуем разные форматы в порядке приоритета
    let mimeType = 'audio/webm;codecs=opus';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'audio/webm';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'audio/ogg;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = ''; // Let browser choose
        }
      }
    }
    
    console.log('🎙️ [OpenAI STT] Using mimeType:', mimeType);
    
    const mediaRecorder = mimeType 
      ? new MediaRecorder(stream, { mimeType })
      : new MediaRecorder(stream);

    // Voice Activity Detection
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    microphone.connect(analyser);

    analyser.fftSize = 512;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let silenceStart = Date.now();
    let isSpeaking = false;

    const checkAudio = () => {
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / bufferLength;

      if (average > 20) { // Voice detected
        isSpeaking = true;
        silenceStart = Date.now();
      } else if (isSpeaking) { // Silence after speech
        const silenceDuration = Date.now() - silenceStart;
        if (silenceDuration > silenceDurationMs) {
          stopRecording();
          return;
        }
      }

      requestAnimationFrame(checkAudio);
    };

    const stopRecording = () => {
      console.log('🛑 [OpenAI STT] Stopping MediaRecorder...');
      mediaRecorder.stop();
    };

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        console.log('📼 [OpenAI STT] Data chunk received:', event.data.size, 'bytes');
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      console.log('🛑 [OpenAI STT] MediaRecorder stopped, total chunks:', audioChunks.length);
      stream.getTracks().forEach(track => track.stop());
      audioContext.close();

      try {
        // Собираем аудио blob
        const webmBlob = new Blob(audioChunks, { type: mimeType || 'audio/webm' });
        console.log('🎵 [OpenAI STT] WebM blob created:', {
          size: webmBlob.size,
          type: webmBlob.type,
          chunks: audioChunks.length
        });
        
        if (webmBlob.size === 0) {
          throw new Error('Recorded audio is empty');
        }
        
        // Конвертируем WebM в WAV для OpenAI
        const wavBlob = await convertToWav(webmBlob);
        console.log('✅ [OpenAI STT] Converted to WAV:', {
          size: wavBlob.size,
          type: wavBlob.type
        });
        
        const result = await transcribeAudioOpenAI(wavBlob, config);
        resolve(result);
      } catch (error) {
        console.error('❌ [OpenAI STT] stopRecording error:', error);
        reject(error);
      }
    };

    mediaRecorder.onerror = (event) => {
      reject(new Error(`MediaRecorder error: ${event}`));
      stream.getTracks().forEach(track => track.stop());
      audioContext.close();
    };

    // Запускаем запись с timeslice 100ms для получения данных порциями
    console.log('▶️ [OpenAI STT] Starting MediaRecorder with 100ms timeslice');
    mediaRecorder.start(100);
    checkAudio();

    // Timeout protection (max 60 seconds)
    setTimeout(() => {
      if (mediaRecorder.state === 'recording') {
        stopRecording();
      }
    }, 60000);
  });
}

/**
 * Get supported languages for Whisper
 */
export function getSupportedLanguages(): Array<{ code: string; name: string }> {
  return [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ko', name: '한국어' },
    // ... Whisper поддерживает 99+ языков
    // Полный список: https://github.com/openai/whisper#available-models-and-languages
  ];
}
