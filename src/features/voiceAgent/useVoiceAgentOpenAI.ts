/**
 * Voice Agent Implementation with OpenAI TTS & STT
 * Integrates OpenAI Whisper (STT) + State Machine + Server LLM + OpenAI TTS
 * 
 * Решает 3 проблемы:
 * 1. Предотвращает дублирующие запросы на сервер (State Machine)
 * 2. Предотвращает эхо микрофона (Echo Cancellation + VAD)
 * 3. Обрабатывает прерывания пользователя
 */

import { useEffect, useRef, useState } from 'react';
import { VoiceAgentStateMachine, VoiceAgentState } from './voiceAgentStateMachine';
import { VoiceActivityDetector } from './voiceActivityDetection';
import { transcribeAudioOpenAI, OpenAISTTConfig } from '../transcription/openaiStt';
import { synthesizeSpeechOpenAI, OpenAITTSConfig } from '../voices/openaiTts';

export interface VoiceAgentConfig {
  // STT Configuration
  sttConfig?: OpenAISTTConfig;
  
  // TTS Configuration
  ttsConfig?: OpenAITTSConfig;
  
  // VAD Configuration
  vadSilenceDuration?: number; // Milliseconds of silence before stopping (default: 1500)
  vadVolumeThreshold?: number; // Volume threshold for speech detection (default: 20)
  
  // Server Configuration
  serverEndpoint: string; // Your LLM server endpoint
  
  // Callbacks
  onTranscription?: (text: string) => void;
  onServerResponse?: (text: string) => void;
  onError?: (error: Error) => void;
  onStateChange?: (state: VoiceAgentState) => void;
}

export interface VoiceAgentControls {
  isActive: boolean;
  currentState: VoiceAgentState;
  isListening: boolean;
  isProcessing: boolean;
  isSpeaking: boolean;
  init: () => Promise<void>;
  stop: () => void;
  interrupt: () => void;
}

/**
 * React Hook for Voice Agent with OpenAI TTS/STT
 */
export function useVoiceAgentOpenAI(config: VoiceAgentConfig): VoiceAgentControls {
  const [isActive, setIsActive] = useState(false);
  const [currentState, setCurrentState] = useState<VoiceAgentState>('idle');

  const stateMachineRef = useRef<VoiceAgentStateMachine | null>(null);
  const vadRef = useRef<VoiceActivityDetector | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Initialize Voice Agent
  const init = async () => {
    try {
      // 1. Create State Machine
      stateMachineRef.current = new VoiceAgentStateMachine();
      stateMachineRef.current.subscribe((state) => {
        setCurrentState(state);
        config.onStateChange?.(state);
      });

      // 2. Request microphone access with echo cancellation
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true, // Prevents mic from catching TTS output
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      mediaStreamRef.current = stream;

      // 3. Initialize VAD
      vadRef.current = new VoiceActivityDetector({
        minVolume: (config.vadVolumeThreshold || 20) / 255, // Convert to 0-1 range
        pauseDuration: config.vadSilenceDuration || 1500,
        minSpeechDuration: 300,
        analyzeInterval: 100,
      });

      // Set VAD callbacks
      vadRef.current.setSpeechStartCallback(() => {
        console.log('[VoiceAgent] Speech detected');
        stateMachineRef.current?.transition('START_LISTENING');
      });

      vadRef.current.setSpeechEndCallback(async () => {
        console.log('[VoiceAgent] Speech ended, transcribing...');
        await handleSpeechEnd();
      });

      // 4. Start VAD
      await vadRef.current.start(stream);

      // 5. Transition to listening
      stateMachineRef.current.transition('START_LISTENING');
      setIsActive(true);

      console.log('[VoiceAgent] Initialized successfully');
    } catch (error) {
      console.error('[VoiceAgent] Initialization error:', error);
      config.onError?.(error as Error);
      stop();
    }
  };

  // Handle speech end -> STT -> Server -> TTS
  const handleSpeechEnd = async () => {
    const stateMachine = stateMachineRef.current;
    if (!stateMachine || !stateMachine.canSendRequest()) {
      console.log('[VoiceAgent] Cannot process speech - wrong state:', stateMachine?.getCurrentState());
      return;
    }

    try {
      // 1. Stop recording and get audio
      if (!mediaRecorderRef.current || mediaRecorderRef.current.state !== 'recording') {
        console.warn('[VoiceAgent] MediaRecorder not recording');
        return;
      }

      // Stop recording
      await new Promise<void>((resolve) => {
        mediaRecorderRef.current!.addEventListener('stop', () => resolve(), { once: true });
        mediaRecorderRef.current!.stop();
      });

      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      audioChunksRef.current = []; // Clear chunks

      // 2. Transcribe audio with OpenAI Whisper
      stateMachine.transition('STOP_LISTENING');
      stateMachine.transition('SEND_TO_SERVER'); // Move to processing state

      const transcriptionResult = await transcribeAudioOpenAI(audioBlob, config.sttConfig);
      const userText = transcriptionResult.text.trim();

      if (!userText) {
        console.log('[VoiceAgent] Empty transcription, returning to listening');
        stateMachine.transition('RESET');
        startRecording(); // Resume recording
        return;
      }

      console.log('[VoiceAgent] Transcription:', userText);
      config.onTranscription?.(userText);

      // 3. Send to server for LLM response
      const serverResponse = await sendToServer(userText);
      
      stateMachine.transition('SERVER_RESPONSE');
      config.onServerResponse?.(serverResponse);

      // 4. Synthesize response with OpenAI TTS
      await playTTS(serverResponse);

      // 5. Return to listening
      stateMachine.transition('RESET');
      startRecording(); // Resume recording

    } catch (error) {
      console.error('[VoiceAgent] Processing error:', error);
      config.onError?.(error as Error);
      stateMachineRef.current?.transition('RESET');
      startRecording(); // Resume recording even on error
    }
  };

  // Send text to server LLM
  const sendToServer = async (userText: string): Promise<string> => {
    const response = await fetch(config.serverEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.text || data.message || data.response || '';
  };

  // Play TTS and notify VAD to ignore echo
  const playTTS = async (text: string): Promise<void> => {
    // Notify VAD that TTS is about to play (ignore microphone input during TTS)
    vadRef.current?.notifyTTSStart();

    try {
      // Synthesize speech with OpenAI TTS
      const audioBlob = await synthesizeSpeechOpenAI(text, config.ttsConfig);
      const audioUrl = URL.createObjectURL(audioBlob);

      const audio = new Audio(audioUrl);
      audioElementRef.current = audio;

      // Wait for TTS to finish
      await new Promise<void>((resolve, reject) => {
        audio.addEventListener('ended', () => {
          URL.revokeObjectURL(audioUrl);
          resolve();
        });
        audio.addEventListener('error', (e) => {
          URL.revokeObjectURL(audioUrl);
          reject(e);
        });
        audio.play().catch(reject);
      });

    } finally {
      // Notify VAD that TTS finished
      vadRef.current?.notifyTTSEnd();
      audioElementRef.current = null;
    }
  };

  // Start MediaRecorder
  const startRecording = () => {
    if (!mediaStreamRef.current) return;

    audioChunksRef.current = [];
    mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current, {
      mimeType: 'audio/webm;codecs=opus',
    });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.start();
  };

  // Stop Voice Agent
  const stop = () => {
    // Stop VAD
    vadRef.current?.stop();
    vadRef.current = null;

    // Stop MediaRecorder
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null;

    // Stop media stream
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;

    // Stop TTS playback
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current = null;
    }

    // Reset state machine
    stateMachineRef.current = null;

    setIsActive(false);
    setCurrentState('idle');
  };

  // Interrupt bot speech (user wants to speak while bot is talking)
  const interrupt = () => {
    if (stateMachineRef.current?.isSpeaking()) {
      console.log('[VoiceAgent] User interrupted bot speech');
      
      // Stop TTS playback
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current = null;
      }

      // Transition to interrupting state
      stateMachineRef.current.transition('INTERRUPT');
      
      // Return to listening
      vadRef.current?.notifyTTSEnd();
      stateMachineRef.current.transition('RESET');
      startRecording();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  // Start recording when initialized
  useEffect(() => {
    if (isActive && currentState === 'listening') {
      startRecording();
    }
  }, [isActive, currentState]);

  return {
    isActive,
    currentState,
    isListening: currentState === 'listening',
    isProcessing: stateMachineRef.current?.isProcessing() || false,
    isSpeaking: stateMachineRef.current?.isSpeaking() || false,
    init,
    stop,
    interrupt,
  };
}
