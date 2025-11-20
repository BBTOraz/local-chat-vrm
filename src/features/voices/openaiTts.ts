/**
 * OpenAI Text-to-Speech (TTS) Implementation
 * Official Documentation: https://platform.openai.com/docs/api-reference/audio/createSpeech
 * 
 * Модели TTS:
 * - tts-1: Быстрая генерация, низкая задержка (~300ms)
 * - tts-1-hd: Высокое качество, немного медленнее (~500ms)
 * 
 * Голоса: alloy, echo, fable, onyx, nova, shimmer
 * Форматы: mp3, opus, aac, flac, wav, pcm
 * Скорость: 0.25 - 4.0 (1.0 по умолчанию)
 */

import { getOpenAIApiKey, getOpenAIApiBase } from '../../utils/openaiConfig';

export type OpenAITTSVoice = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
export type OpenAITTSModel = 'tts-1' | 'tts-1-hd';
export type OpenAITTSFormat = 'mp3' | 'opus' | 'aac' | 'flac' | 'wav' | 'pcm';

export interface OpenAITTSConfig {
  model?: OpenAITTSModel;
  voice?: OpenAITTSVoice;
  speed?: number; // 0.25 - 4.0
  responseFormat?: OpenAITTSFormat;
}

/**
 * Synthesize speech using OpenAI TTS API
 * @param text Text to convert to speech (max 4096 characters)
 * @param config TTS configuration
 * @returns Audio blob
 */
export async function synthesizeSpeechOpenAI(
  text: string,
  config: OpenAITTSConfig = {}
): Promise<Blob> {
  const {
    model = 'tts-1', // Используем tts-1 для низкой задержки
    voice = 'alloy',
    speed = 1.0,
    responseFormat = 'mp3',
  } = config;

  console.log("🎙️ [OpenAI TTS API] Starting synthesis", {
    textLength: text.length,
    textPreview: text.substring(0, 50) + "...",
    model,
    voice,
    speed,
    responseFormat
  });

  // Validate text length (OpenAI limit: 4096 characters)
  if (text.length > 4096) {
    console.error("❌ [OpenAI TTS API] Text too long:", text.length);
    throw new Error('Text exceeds 4096 characters limit');
  }

  // Validate speed range
  if (speed < 0.25 || speed > 4.0) {
    console.error("❌ [OpenAI TTS API] Invalid speed:", speed);
    throw new Error('Speed must be between 0.25 and 4.0');
  }

  const apiKey = getOpenAIApiKey();
  const apiBase = getOpenAIApiBase();

  console.log("🔑 [OpenAI TTS API] API Config", {
    apiKeyExists: !!apiKey,
    apiKeyLength: apiKey?.length,
    apiBase,
    apiKeyPrefix: apiKey?.substring(0, 10) + "..."
  });

  const response = await fetch(`${apiBase}/audio/speech`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      input: text,
      voice,
      speed,
      response_format: responseFormat,
    }),
  });

  console.log("📡 [OpenAI TTS API] Response received", {
    status: response.status,
    statusText: response.statusText,
    contentType: response.headers.get('content-type'),
    contentLength: response.headers.get('content-length')
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
    console.error("❌ [OpenAI TTS API] Request failed:", {
      status: response.status,
      error: error.error?.message
    });
    throw new Error(`OpenAI TTS error: ${error.error?.message || response.statusText}`);
  }

  const blob = await response.blob();
  console.log("✅ [OpenAI TTS API] Synthesis complete", {
    blobSize: blob.size,
    blobType: blob.type,
    estimatedDuration: `~${(blob.size / 24000).toFixed(1)}s`
  });

  return blob;
}

/**
 * Synthesize and play speech directly
 * @param text Text to speak
 * @param config TTS configuration
 * @returns Audio element for control
 */
export async function speakWithOpenAI(
  text: string,
  config: OpenAITTSConfig = {}
): Promise<HTMLAudioElement> {
  const audioBlob = await synthesizeSpeechOpenAI(text, config);
  const audioUrl = URL.createObjectURL(audioBlob);
  
  const audio = new Audio(audioUrl);
  
  // Cleanup URL after playback
  audio.addEventListener('ended', () => {
    URL.revokeObjectURL(audioUrl);
  });
  
  await audio.play();
  
  return audio;
}

/**
 * Stream TTS for chunked text (for real-time voice agent)
 * Splits long text into chunks and plays them sequentially
 * @param text Full text to speak
 * @param config TTS configuration
 * @param onChunkStart Callback when chunk starts playing
 * @param onComplete Callback when all chunks complete
 */
export async function streamSpeechOpenAI(
  text: string,
  config: OpenAITTSConfig = {},
  onChunkStart?: (chunkIndex: number, totalChunks: number) => void,
  onComplete?: () => void
): Promise<void> {
  // Split text into sentences (max 4096 chars per chunk)
  const chunks = splitIntoChunks(text, 4000);
  
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    
    onChunkStart?.(i, chunks.length);
    
    const audio = await speakWithOpenAI(chunk, config);
    
    // Wait for chunk to finish before next chunk
    await new Promise<void>((resolve) => {
      audio.addEventListener('ended', () => resolve());
      audio.addEventListener('error', () => resolve()); // Continue even on error
    });
  }
  
  onComplete?.();
}

/**
 * Split text into chunks respecting sentence boundaries
 */
function splitIntoChunks(text: string, maxChunkSize: number): string[] {
  if (text.length <= maxChunkSize) {
    return [text];
  }
  
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const chunks: string[] = [];
  let currentChunk = '';
  
  for (const sentence of sentences) {
    if ((currentChunk + sentence).length <= maxChunkSize) {
      currentChunk += sentence;
    } else {
      if (currentChunk) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = sentence;
    }
  }
  
  if (currentChunk) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
}

/**
 * Get available voices with descriptions
 */
export function getAvailableVoices(): Array<{ id: OpenAITTSVoice; name: string; description: string }> {
  return [
    { id: 'alloy', name: 'Alloy', description: 'Neutral, balanced voice' },
    { id: 'echo', name: 'Echo', description: 'Male, clear voice' },
    { id: 'fable', name: 'Fable', description: 'British accent, expressive' },
    { id: 'onyx', name: 'Onyx', description: 'Deep, authoritative male voice' },
    { id: 'nova', name: 'Nova', description: 'Female, energetic voice' },
    { id: 'shimmer', name: 'Shimmer', description: 'Soft, gentle female voice' },
  ];
}
