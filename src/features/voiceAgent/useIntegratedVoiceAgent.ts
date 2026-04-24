import { useEffect, useRef, useState, useCallback } from 'react';
import { VoiceAgentStateMachine, VoiceAgentState } from './voiceAgentStateMachine';
import { VoiceActivityDetector } from './voiceActivityDetection';
import { transcribeAudioOpenAI, OpenAISTTConfig } from '../transcription/openaiStt';

export interface IntegratedVoiceAgentConfig {
  sttConfig?: OpenAISTTConfig;
  vadSilenceDuration?: number;
  vadVolumeThreshold?: number;
  onTranscription?: (text: string) => void;
  onError?: (error: Error) => void;
  onStateChange?: (state: VoiceAgentState) => void;
}

export interface IntegratedVoiceAgentControls {
  isActive: boolean;
  currentState: VoiceAgentState;
  isListening: boolean;
  isProcessing: boolean;
  isSpeaking: boolean;
  init: () => Promise<void>;
  stop: () => void;
  interrupt: () => void;
  notifyResponseStarted: () => void;
  notifyResponseFinished: () => void;
}

export function useIntegratedVoiceAgent(
  config: IntegratedVoiceAgentConfig,
  sendMessage: (message: string) => void,
  abortCurrentStream: () => void
): IntegratedVoiceAgentControls {
  const [isActive, setIsActive] = useState(false);
  const [currentState, setCurrentState] = useState<VoiceAgentState>('idle');

  const stateMachineRef = useRef<VoiceAgentStateMachine | null>(null);
  const vadRef = useRef<VoiceActivityDetector | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = useCallback(() => {
    if (!mediaStreamRef.current) return;

    audioChunksRef.current = [];
    
    try {
      mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current, {
        mimeType: 'audio/webm;codecs=opus',
      });
    } catch {
      mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current);
    }

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.start();
  }, []);

  const handleSpeechEnd = useCallback(async () => {
    const stateMachine = stateMachineRef.current;
    if (!stateMachine || !stateMachine.canSendRequest()) {
      console.log('[IntegratedVoiceAgent] Cannot process - wrong state:', stateMachine?.getCurrentState());
      return;
    }

    try {
      if (!mediaRecorderRef.current || mediaRecorderRef.current.state !== 'recording') {
        console.warn('[IntegratedVoiceAgent] MediaRecorder not recording');
        return;
      }

      await new Promise<void>((resolve) => {
        mediaRecorderRef.current!.addEventListener('stop', () => resolve(), { once: true });
        mediaRecorderRef.current!.stop();
      });

      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      audioChunksRef.current = [];

      if (audioBlob.size < 1000) {
        console.log('[IntegratedVoiceAgent] Audio too short, ignoring');
        stateMachine.transition('RESET');
        startRecording();
        return;
      }

      stateMachine.transition('STOP_LISTENING');
      stateMachine.transition('SEND_TO_SERVER');

      const transcriptionResult = await transcribeAudioOpenAI(audioBlob, config.sttConfig);
      const userText = transcriptionResult.text.trim();

      if (!userText) {
        console.log('[IntegratedVoiceAgent] Empty transcription, returning to listening');
        stateMachine.transition('RESET');
        startRecording();
        return;
      }

      console.log('[IntegratedVoiceAgent] Transcription:', userText);
      config.onTranscription?.(userText);

      sendMessage(userText);

    } catch (error) {
      console.error('[IntegratedVoiceAgent] Processing error:', error);
      config.onError?.(error as Error);
      stateMachineRef.current?.transition('RESET');
      startRecording();
    }
  }, [config, sendMessage, startRecording]);

  const notifyResponseStarted = useCallback(() => {
    stateMachineRef.current?.transition('SERVER_RESPONSE');
    vadRef.current?.notifyTTSStart();
  }, []);

  const notifyResponseFinished = useCallback(() => {
    vadRef.current?.notifyTTSEnd();
    stateMachineRef.current?.transition('RESET');
    if (isActive) {
      startRecording();
    }
  }, [isActive, startRecording]);

  const init = useCallback(async () => {
    try {
      stateMachineRef.current = new VoiceAgentStateMachine();
      stateMachineRef.current.subscribe((state) => {
        setCurrentState(state);
        config.onStateChange?.(state);
      });

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      mediaStreamRef.current = stream;

      vadRef.current = new VoiceActivityDetector({
        minVolume: (config.vadVolumeThreshold || 20) / 255,
        pauseDuration: config.vadSilenceDuration || 1500,
        minSpeechDuration: 300,
        analyzeInterval: 100,
      });

      vadRef.current.setSpeechStartCallback(() => {
        console.log('[IntegratedVoiceAgent] Speech detected');
        
        if (stateMachineRef.current?.isSpeaking() || stateMachineRef.current?.isProcessing()) {
          console.log('[IntegratedVoiceAgent] User interrupting AI');
          abortCurrentStream();
          vadRef.current?.notifyTTSEnd();
          stateMachineRef.current.transition('INTERRUPT');
        }
        
        stateMachineRef.current?.transition('START_LISTENING');
      });

      vadRef.current.setSpeechEndCallback(async () => {
        console.log('[IntegratedVoiceAgent] Speech ended');
        await handleSpeechEnd();
      });

      await vadRef.current.start(stream);

      stateMachineRef.current.transition('START_LISTENING');
      setIsActive(true);

      startRecording();

      console.log('[IntegratedVoiceAgent] Initialized successfully');
    } catch (error) {
      console.error('[IntegratedVoiceAgent] Initialization error:', error);
      config.onError?.(error as Error);
      stop();
    }
  }, [config, handleSpeechEnd, abortCurrentStream, startRecording]);

  const stop = useCallback(() => {
    vadRef.current?.stop();
    vadRef.current = null;

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null;

    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;

    stateMachineRef.current = null;

    setIsActive(false);
    setCurrentState('idle');
  }, []);

  const interrupt = useCallback(() => {
    if (stateMachineRef.current?.isSpeaking() || stateMachineRef.current?.isProcessing()) {
      console.log('[IntegratedVoiceAgent] Manual interrupt');
      abortCurrentStream();
      stateMachineRef.current.transition('INTERRUPT');
      vadRef.current?.notifyTTSEnd();
      stateMachineRef.current.transition('RESET');
      startRecording();
    }
  }, [abortCurrentStream, startRecording]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return {
    isActive,
    currentState,
    isListening: currentState === 'listening',
    isProcessing: stateMachineRef.current?.isProcessing() || false,
    isSpeaking: stateMachineRef.current?.isSpeaking() || false,
    init,
    stop,
    interrupt,
    notifyResponseStarted,
    notifyResponseFinished,
  };
}
