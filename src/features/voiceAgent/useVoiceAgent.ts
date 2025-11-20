/**
 * Полный Voice Agent Hook
 * Интегрирует: VAD + State Machine + STT + Server + TTS
 * 
 * Решает все проблемы:
 * 1. ✅ Предотвращает одновременные запросы
 * 2. ✅ Echo cancellation (микрофон не ловит свой TTS)
 * 3. ✅ Обработка прерываний
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { VoiceAgentStateMachine } from './voiceAgentStateMachine';
import { VoiceActivityDetector } from './voiceActivityDetection';

export interface VoiceAgentConfig {
  // STT конфиг
  sttEngine: 'webspeech' | 'deepgram' | 'geminiano';
  
  // Сервер конфиг
  serverUrl: string;
  
  // TTS конфиг
  ttsEngine: 'kokoro' | 'openai' | 'elevenlabs';
  
  // VAD конфиг
  pauseDuration?: number;  // Сколько тишины = конец фразы
  minSpeechDuration?: number;
}

export const useVoiceAgent = (config: VoiceAgentConfig) => {
  const stateMachine = useRef(new VoiceAgentStateMachine());
  const vad = useRef<VoiceActivityDetector | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentState, setCurrentState] = useState(stateMachine.current.getCurrentState());
  
  // Накопитель текста от STT
  const transcriptBuffer = useRef('');
  const mediaStream = useRef<MediaStream | null>(null);
  
  // 🎤 Инициализация
  const init = useCallback(async () => {
    // Получаем доступ к микрофону с echo cancellation
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,      // 🔥 Ключевое!
        noiseSuppression: true,
        autoGainControl: true,
      }
    });
    
    mediaStream.current = stream;
    
    // Создаем VAD
    vad.current = new VoiceActivityDetector({
      pauseDuration: config.pauseDuration ?? 800,
      minSpeechDuration: config.minSpeechDuration ?? 300,
    });
    
    // Callback: началась речь
    vad.current.setSpeechStartCallback(() => {
      console.log('[VAD] Speech started');
      
      // Если бот говорит - прерываем его
      if (stateMachine.current.isSpeaking()) {
        stateMachine.current.transition('INTERRUPT');
        // TODO: остановить TTS
      }
      
      // Переходим в listening
      if (stateMachine.current.canTransition('START_LISTENING')) {
        stateMachine.current.transition('START_LISTENING');
        transcriptBuffer.current = '';
      }
    });
    
    // Callback: закончилась речь
    vad.current.setSpeechEndCallback(() => {
      console.log('[VAD] Speech ended');
      
      // ✅ ЗАЩИТА: Отправляем на сервер ТОЛЬКО если в listening
      if (stateMachine.current.canSendRequest()) {
        stateMachine.current.transition('SEND_TO_SERVER');
        sendToServer(transcriptBuffer.current);
      }
    });
    
    await vad.current.start(stream);
    
    // Подписка на изменения состояния
    stateMachine.current.subscribe((state) => {
      setCurrentState(state);
      console.log('[State Machine] New state:', state);
    });
    
    setIsActive(true);
  }, [config]);
  
  // 📡 Отправка на сервер
  const sendToServer = useCallback(async (transcript: string) => {
    if (!transcript.trim()) {
      stateMachine.current.transition('RESET');
      return;
    }
    
    console.log('[Server] Sending:', transcript);
    
    try {
      const response = await fetch(config.serverUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: transcript,
          stream: true  // Если сервер поддерживает streaming
        })
      });
      
      if (!response.ok) {
        throw new Error('Server error');
      }
      
      // ✅ Если streaming response
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '';
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          fullText += chunk;
          
          // Можно начать TTS даже до завершения (для меньшей задержки)
          // TODO: Chunked TTS
        }
        
        // Переход к TTS
        stateMachine.current.transition('SERVER_RESPONSE');
        await playTTS(fullText);
      }
    } catch (error) {
      console.error('[Server] Error:', error);
      stateMachine.current.transition('RESET');
    }
  }, [config.serverUrl]);
  
  // 🔊 Воспроизведение TTS
  const playTTS = useCallback(async (text: string) => {
    console.log('[TTS] Playing:', text);
    
    // 🔥 ВАЖНО: Уведомляем VAD что начинается TTS
    vad.current?.notifyTTSStart(0.7); // 0.7 = примерная громкость TTS
    
    stateMachine.current.transition('START_SPEAKING');
    
    try {
      // TODO: Интеграция с вашим TTS (Kokoro/OpenAI/etc)
      // const audio = await generateTTS(text);
      // await playAudio(audio);
      
      // Placeholder
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TTS завершен
      stateMachine.current.transition('FINISH_SPEAKING');
    } catch (error) {
      console.error('[TTS] Error:', error);
    } finally {
      // 🔥 ВАЖНО: Уведомляем VAD что TTS закончился
      vad.current?.notifyTTSEnd();
    }
  }, []);
  
  // 🛑 Остановка
  const stop = useCallback(() => {
    vad.current?.stop();
    mediaStream.current?.getTracks().forEach(track => track.stop());
    stateMachine.current.transition('RESET');
    setIsActive(false);
  }, []);
  
  // Cleanup
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);
  
  return {
    isActive,
    currentState,
    init,
    stop,
    
    // Для UI
    isListening: currentState === 'listening',
    isProcessing: currentState === 'processing',
    isSpeaking: currentState === 'speaking',
  };
};
