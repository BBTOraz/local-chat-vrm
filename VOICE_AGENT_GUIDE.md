# Voice Agent: Решение проблем Real-Time STT/TTS

## 🎯 Архитектура решения

```
┌─────────────────────────────────────────────────────────┐
│                   VOICE AGENT PIPELINE                   │
└─────────────────────────────────────────────────────────┘

🎤 Микрофон (с Echo Cancellation)
        ↓
┌─────────────────────┐
│  VAD (Voice         │  ← Определяет: говорит ли пользователь
│  Activity           │  ← Игнорирует свой собственный TTS
│  Detection)         │
└──────┬──────────────┘
       │ Событие: "Речь началась"
       ↓
┌─────────────────────┐
│  State Machine      │  ← Проверка: можно ли слушать?
│  State: idle →      │  ← Блокирует параллельные запросы
│  listening          │
└──────┬──────────────┘
       │ Накопление текста...
       │ Событие: "Пауза 800ms"
       ↓
┌─────────────────────┐
│  STT → Transcript   │  ← Web Speech API / Deepgram
└──────┬──────────────┘
       │ Текст готов
       ↓
┌─────────────────────┐
│  State: processing  │  ← 🚫 БЛОКИРУЕМ новые запросы
└──────┬──────────────┘
       │
       ↓
📡 Сервер (ваш LLM)
       ↓
┌─────────────────────┐
│  Streaming Response │  ← Можно начать TTS до завершения
└──────┬──────────────┘
       │
       ↓
┌─────────────────────┐
│  State: speaking    │  ← 🚫 БЛОКИРУЕМ микрофон (кроме прерываний)
└──────┬──────────────┘
       │ VAD.notifyTTSStart()
       ↓
🔊 TTS → Динамик
       │ TTS завершен
       │ VAD.notifyTTSEnd()
       ↓
┌─────────────────────┐
│  State: idle        │  ← Готовы слушать снова
└─────────────────────┘
```

---

## ⚠️ Проблема 1: Параллельные запросы

### **Проблема:**
При real-time STT каждое предложение может отправиться на сервер, даже если:
- Предыдущий запрос еще обрабатывается
- TTS еще воспроизводится

### **Решение: State Machine (Конечный автомат)**

```typescript
// 5 состояний
type State = 'idle' | 'listening' | 'processing' | 'speaking' | 'interrupting';

// Правила переходов
const canSendRequest = () => {
  return currentState === 'listening'; // ✅ Только из этого состояния!
};

// Пример использования
if (speechEnded) {
  if (stateMachine.canSendRequest()) {
    stateMachine.transition('SEND_TO_SERVER');
    sendToServer(transcript);
  } else {
    console.log('Запрос заблокирован - бот занят');
  }
}
```

**Как это используют в продакшене:**
- **OpenAI Realtime API** - блокирует `input_audio_buffer` во время `response.audio`
- **ElevenLabs Conversational AI** - очередь запросов с приоритетами
- **Vapi.ai** - state machine с interruption handling

---

## ⚠️ Проблема 2: Микрофон ловит свой TTS (эхо)

### **Проблема:**
Микрофон слышит звук из динамиков → STT распознает → бесконечный цикл

### **Решение 1: Echo Cancellation (AEC) - Лучшее**

```typescript
// ✅ Встроенное в браузер решение
const stream = await navigator.mediaDevices.getUserMedia({
  audio: {
    echoCancellation: true,        // 🔥 Убирает эхо из динамиков!
    noiseSuppression: true,         // Убирает фоновый шум
    autoGainControl: true,          // Автоматический уровень
  }
});
```

**Как это работает:**
- Браузер анализирует аудио из динамиков
- Вычитает его из микрофона
- Остается только голос пользователя

**Эффективность:** ~95% (не 100%, но очень хорошо)

### **Решение 2: VAD + Muting**

```typescript
class VoiceActivityDetector {
  private isTTSPlaying = false;
  
  // Вызывать перед TTS
  notifyTTSStart() {
    this.isTTSPlaying = true;
  }
  
  // Вызывать после TTS
  notifyTTSEnd() {
    this.isTTSPlaying = false;
  }
  
  analyze() {
    const volume = getMicrophoneVolume();
    
    // 🔥 Игнорируем звук если TTS играет
    if (this.isTTSPlaying) {
      // Только если громкость > TTS * 1.5 = точно пользователь
      if (volume < this.ttsVolume * 1.5) {
        return; // Игнорируем
      }
    }
    
    // Обрабатываем как обычно
    if (volume > threshold) {
      onSpeechDetected();
    }
  }
}
```

### **Решение 3: Interruption Handling (прерывание)**

Если пользователь начал говорить ВО ВРЕМЯ TTS:

```typescript
vad.onSpeechStart(() => {
  if (stateMachine.isSpeaking()) {
    // Пользователь перебивает бота
    stateMachine.transition('INTERRUPT');
    
    // Останавливаем TTS
    audioPlayer.stop();
    
    // Начинаем слушать
    stateMachine.transition('START_LISTENING');
  }
});
```

**Как это используют:**
- **Google Duplex** - interruption detection с threshold
- **Hume AI** - expression detection для определения прерываний
- **AssemblyAI** - dual-channel audio (микрофон + TTS отдельно)

---

## ⚠️ Проблема 3: Дополнительные сложности

### **3.1 Push-to-Talk vs Always-On**

**Push-to-Talk (безопаснее):**
```typescript
// Пользователь держит кнопку
onButtonPress() {
  vad.start();
  stateMachine.transition('START_LISTENING');
}

onButtonRelease() {
  vad.stop();
  sendToServer(transcript);
}
```

**Always-On (удобнее, но сложнее):**
```typescript
// VAD сам определяет когда слушать
vad.onSpeechStart(() => {
  if (!stateMachine.isSpeaking()) {
    stateMachine.transition('START_LISTENING');
  }
});
```

### **3.2 Timeout Protection**

```typescript
const MAX_LISTENING_TIME = 30000; // 30 секунд макс

setTimeout(() => {
  if (stateMachine.getCurrentState() === 'listening') {
    stateMachine.transition('RESET');
    console.log('Timeout - сброс');
  }
}, MAX_LISTENING_TIME);
```

### **3.3 Streaming для меньшей задержки**

```typescript
// Начинаем TTS до завершения LLM
let buffer = '';
for await (const chunk of serverStream) {
  buffer += chunk;
  
  // Когда накопилась фраза - озвучиваем
  if (buffer.match(/[.!?]\s/)) {
    playTTS(buffer);  // Параллельно!
    buffer = '';
  }
}
```

### **3.4 Fallback при ошибках**

```typescript
try {
  await sendToServer(transcript);
} catch (error) {
  // Возврат в idle
  stateMachine.transition('RESET');
  
  // Уведомление пользователя
  showError('Не удалось отправить запрос');
}
```

---

## 📊 Сравнение решений

| Решение | Задержка | Точность | Сложность |
|---------|----------|----------|-----------|
| **Web Speech API** | 300-500ms | 85-90% | Низкая ✅ |
| **Deepgram** | 100-200ms | 94-96% | Средняя |
| **Whisper API** | 500-1000ms | 96-98% | Низкая |
| **Gemini Nano** | 200-400ms | 90-93% | Высокая ⚠️ |

## 🎯 Рекомендация для вашего проекта

```typescript
// Минимальная задержка (~800ms total)
const config = {
  stt: 'webspeech',        // 300ms (бесплатно)
  server: 'your-backend',  // 200ms (streaming)
  tts: 'kokoro',          // 300ms (локально)
};

// Максимальное качество (~1200ms total)
const config = {
  stt: 'deepgram',        // 150ms (платно)
  server: 'your-backend', // 200ms (streaming)
  tts: 'elevenlabs',      // 200ms (платно)
};
```

---

## 🚀 Готовые библиотеки

Если не хотите писать с нуля:

1. **LiveKit** - полный voice agent framework
2. **Vocode** - open-source conversation AI
3. **Pipecat** - real-time voice pipeline

---

## ✅ Чеклист реализации

- [ ] Добавить State Machine (voiceAgentStateMachine.ts)
- [ ] Добавить VAD (voiceActivityDetection.ts)
- [ ] Интегрировать Echo Cancellation
- [ ] Добавить Interruption Handling
- [ ] Реализовать Streaming TTS
- [ ] Добавить Timeout Protection
- [ ] Тестировать с реальными пользователями

---

Хотите чтобы я интегрировал это в ваш проект? 🚀
