/**
 * Voice Activity Detection (VAD) + Echo Cancellation
 * Решает проблему: микрофон не должен ловить собственный TTS
 */

export interface VADConfig {
  // Минимальный уровень громкости для распознавания речи (0-1)
  minVolume: number;
  
  // Минимальная длительность речи (мс)
  minSpeechDuration: number;
  
  // Длительность паузы для завершения фразы (мс)
  pauseDuration: number;
  
  // Частота анализа (мс)
  analyzeInterval: number;
}

const DEFAULT_VAD_CONFIG: VADConfig = {
  minVolume: 0.01,          // Очень низкий порог
  minSpeechDuration: 300,   // 300ms минимум
  pauseDuration: 800,       // 800ms пауза = конец фразы
  analyzeInterval: 100,     // Анализ каждые 100ms
};

export class VoiceActivityDetector {
  private audioContext: AudioContext;
  private analyser: AnalyserNode;
  private microphone: MediaStreamAudioSourceNode | null = null;
  private dataArray: Uint8Array<ArrayBuffer>;
  private config: VADConfig;
  
  // Состояние
  private isSpeaking = false;
  private speechStartTime = 0;
  private lastSpeechTime = 0;
  private intervalId: number | null = null;
  
  // Echo cancellation
  private isTTSPlaying = false;
  private ttsVolume = 0;
  
  // Callbacks
  private onSpeechStart?: () => void;
  private onSpeechEnd?: () => void;
  private onVoiceActivity?: (volume: number) => void;

  constructor(config: Partial<VADConfig> = {}) {
    this.config = { ...DEFAULT_VAD_CONFIG, ...config };
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
  }

  async start(stream: MediaStream) {
    // 🔥 ВАЖНО: Echo Cancellation через getUserMedia constraints
    const enhancedStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,        // ✅ Убирает эхо!
        noiseSuppression: true,         // ✅ Убирает шум
        autoGainControl: true,          // ✅ Автоуровень
        // @ts-ignore - Chrome specific
        googEchoCancellation: true,     // Chrome fallback
        googNoiseSuppression: true,     // Chrome fallback
        googAutoGainControl: true,      // Chrome fallback
      }
    });

    this.microphone = this.audioContext.createMediaStreamSource(enhancedStream);
    this.microphone.connect(this.analyser);
    
    this.startAnalyzing();
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.microphone?.disconnect();
  }

  private startAnalyzing() {
    this.intervalId = window.setInterval(() => {
      this.analyze();
    }, this.config.analyzeInterval);
  }

  private analyze() {
    this.analyser.getByteFrequencyData(this.dataArray);
    
    // Вычисляем среднюю громкость
    const average = this.dataArray.reduce((sum, val) => sum + val, 0) / this.dataArray.length;
    const volume = average / 255; // Нормализация 0-1

    // 🔥 КЛЮЧЕВОЕ: Игнорируем звук если играет TTS
    if (this.isTTSPlaying) {
      // Если громкость микрофона > громкость TTS * 1.5 = точно пользователь говорит
      if (volume < this.ttsVolume * 1.5) {
        return; // Игнорируем, это эхо от TTS
      }
    }

    this.onVoiceActivity?.(volume);

    const now = Date.now();
    const isSpeechDetected = volume > this.config.minVolume;

    if (isSpeechDetected) {
      this.lastSpeechTime = now;

      if (!this.isSpeaking) {
        // Начало речи
        this.speechStartTime = now;
        this.isSpeaking = true;
        this.onSpeechStart?.();
      }
    } else {
      // Пауза
      if (this.isSpeaking) {
        const pauseDuration = now - this.lastSpeechTime;
        const speechDuration = now - this.speechStartTime;

        // Если пауза достаточно длинная И речь была достаточно длинной
        if (
          pauseDuration > this.config.pauseDuration &&
          speechDuration > this.config.minSpeechDuration
        ) {
          this.isSpeaking = false;
          this.onSpeechEnd?.();
        }
      }
    }
  }

  // 🔥 Вызывать когда начинается TTS
  notifyTTSStart(ttsVolume: number = 0.5) {
    this.isTTSPlaying = true;
    this.ttsVolume = ttsVolume;
  }

  // 🔥 Вызывать когда TTS закончился
  notifyTTSEnd() {
    this.isTTSPlaying = false;
    this.ttsVolume = 0;
  }

  setSpeechStartCallback(callback: () => void) {
    this.onSpeechStart = callback;
  }

  setSpeechEndCallback(callback: () => void) {
    this.onSpeechEnd = callback;
  }

  setVoiceActivityCallback(callback: (volume: number) => void) {
    this.onVoiceActivity = callback;
  }

  isCurrentlySpeaking(): boolean {
    return this.isSpeaking;
  }
}
