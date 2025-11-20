/**
 * Пример использования OpenAI Voice Agent
 * Демонстрирует работу real-time TTS & STT с State Machine
 */

import { useState } from 'react';
import { useVoiceAgentOpenAI } from '../features/voiceAgent/useVoiceAgentOpenAI';
import styles from './OpenAIVoiceDemo.module.css';

export function OpenAIVoiceDemo() {
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const voiceAgent = useVoiceAgentOpenAI({
    // STT Configuration (Whisper)
    sttConfig: {
      language: 'ru', // or 'en', 'ja', etc.
      temperature: 0.0, // Максимальная точность
    },

    // TTS Configuration
    ttsConfig: {
      model: 'tts-1', // Низкая задержка для real-time
      voice: 'nova', // Женский голос
      speed: 1.1, // Немного быстрее
    },

    // VAD Configuration
    vadSilenceDuration: 1500, // 1.5 секунды тишины = конец фразы
    vadVolumeThreshold: 20,

    // Your Server Endpoint
    serverEndpoint: 'http://localhost:8181/api/chat',

    // Callbacks
    onTranscription: (text) => {
      console.log('👤 User said:', text);
      setTranscript(text);
    },

    onServerResponse: (text) => {
      console.log('🤖 Bot replied:', text);
      setResponse(text);
    },

    onError: (err) => {
      console.error('❌ Error:', err);
      setError(err.message);
    },

    onStateChange: (state) => {
      console.log('🔄 State:', state);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>OpenAI Voice Agent Demo</h2>
        <div className={styles.status}>
          {voiceAgent.isListening && <span className={styles.badge}>🎤 Listening</span>}
          {voiceAgent.isProcessing && <span className={styles.badge}>⚙️ Processing</span>}
          {voiceAgent.isSpeaking && <span className={styles.badge}>🔊 Speaking</span>}
          {!voiceAgent.isActive && <span className={styles.badge}>⏸️ Stopped</span>}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={voiceAgent.init}
          disabled={voiceAgent.isActive}
        >
          {voiceAgent.isActive ? '✅ Active' : '▶️ Start Voice Agent'}
        </button>

        <button
          className={styles.button}
          onClick={voiceAgent.stop}
          disabled={!voiceAgent.isActive}
        >
          ⏹️ Stop
        </button>

        <button
          className={styles.button}
          onClick={voiceAgent.interrupt}
          disabled={!voiceAgent.isSpeaking}
        >
          ⏸️ Interrupt Bot
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h3>👤 Your Speech (STT)</h3>
          <div className={styles.box}>
            {transcript || 'Start speaking...'}
          </div>
        </div>

        <div className={styles.section}>
          <h3>🤖 Bot Response (TTS)</h3>
          <div className={styles.box}>
            {response || 'Waiting for response...'}
          </div>
        </div>

        <div className={styles.section}>
          <h3>ℹ️ State</h3>
          <div className={styles.box}>
            Current State: <strong>{voiceAgent.currentState}</strong>
          </div>
        </div>

        {error && (
          <div className={styles.section}>
            <h3>❌ Error</h3>
            <div className={`${styles.box} ${styles.error}`}>
              {error}
            </div>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <h4>💡 How it works:</h4>
        <ol>
          <li>Click "Start Voice Agent"</li>
          <li>Allow microphone access</li>
          <li>Speak into microphone (pause 1.5s to finish)</li>
          <li>OpenAI Whisper transcribes your speech</li>
          <li>Server generates response</li>
          <li>OpenAI TTS speaks the response</li>
          <li>Returns to listening automatically</li>
        </ol>
        
        <h4>🛡️ Solved Problems:</h4>
        <ul>
          <li>✅ No duplicate server requests (State Machine)</li>
          <li>✅ No microphone echo (Echo Cancellation + VAD)</li>
          <li>✅ User can interrupt bot speech</li>
        </ul>
      </div>
    </div>
  );
}
