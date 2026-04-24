# Настройка OpenAI TTS & STT API

## 📋 Содержание

1. [Получение API ключа](#получение-api-ключа)
2. [Настройка переменных окружения](#настройка-переменных-окружения)
3. [Использование TTS (Text-to-Speech)](#использование-tts)
4. [Использование STT (Speech-to-Text)](#использование-stt)
5. [Интеграция Voice Agent](#интеграция-voice-agent)
6. [Стоимость использования](#стоимость-использования)

---

## 🔑 Получение API ключа

### Шаг 1: Создайте аккаунт OpenAI

1. Перейдите на https://platform.openai.com/signup
2. Зарегистрируйтесь или войдите через Google/Microsoft

### Шаг 2: Получите API ключ

1. Перейдите в [API Keys](https://platform.openai.com/api-keys)
2. Нажмите **"Create new secret key"**
3. Дайте имя ключу (например, "Local Chat VRM")
4. **ВАЖНО:** Скопируйте ключ сразу! Он больше не отобразится.

Формат ключа: `sk-proj-...` (начинается с `sk-`)

### Шаг 3: Пополните баланс

1. Перейдите в [Billing](https://platform.openai.com/settings/organization/billing/overview)
2. Добавьте способ оплаты
3. Пополните счет минимум на $5

**Важно:** OpenAI работает по предоплате (Pay-as-you-go)

---

## ⚙️ Настройка переменных окружения

### Шаг 1: Создайте `.env` файл

В корне проекта (`local-chat-vrm/`) создайте файл `.env`:

```bash
# В PowerShell:
New-Item -Path .env -ItemType File
```

### Шаг 2: Добавьте API ключ

Откройте `.env` файл и добавьте:

```env
# OpenAI API Configuration
VITE_OPENAI_API_KEY=sk-proj-ВАШ_КЛЮЧ_ЗДЕСЬ

# Optional: Custom API base (если используете прокси)
# VITE_OPENAI_API_BASE=https://api.openai.com/v1
```

**Замените** `sk-proj-ВАШ_КЛЮЧ_ЗДЕСЬ` на ваш реальный ключ.

### Шаг 3: Проверьте `.gitignore`

Убедитесь, что `.env` файл **НЕ попадет в Git**:

```gitignore
# .gitignore уже содержит:
.env
.env.local
```

✅ Файл `.gitignore` уже настроен правильно!

### Шаг 4: Перезапустите dev сервер

```powershell
# Остановите текущий сервер (Ctrl+C)
# Запустите заново:
npm run dev
```

**Важно:** Vite читает переменные окружения только при запуске!

---

## 🎤 Использование TTS (Text-to-Speech)

### Официальная документация

- **API Reference:** https://platform.openai.com/docs/api-reference/audio/createSpeech
- **Guide:** https://platform.openai.com/docs/guides/text-to-speech

### Модели TTS

| Модель | Задержка | Качество | Использование |
|--------|----------|----------|---------------|
| `tts-1` | ~300ms | Хорошее | Real-time диалоги |
| `tts-1-hd` | ~500ms | Отличное | Высокое качество |

**Рекомендация:** `tts-1` для voice agent (низкая задержка)

### Доступные голоса

| Голос | Описание | Язык |
|-------|----------|------|
| `alloy` | Нейтральный, сбалансированный | Английский |
| `echo` | Мужской, четкий | Английский |
| `fable` | Британский акцент, выразительный | Английский |
| `onyx` | Глубокий, авторитетный мужской | Английский |
| `nova` | Женский, энергичный | Английский |
| `shimmer` | Мягкий, нежный женский | Английский |

**Важно:** Все голоса поддерживают многоязычность (включая русский, японский, китайский)

### Пример использования

```typescript
import { synthesizeSpeechOpenAI, speakWithOpenAI } from '@/features/voices/openaiTts';

// Простой синтез
const audioBlob = await synthesizeSpeechOpenAI('Привет, мир!', {
  model: 'tts-1',
  voice: 'nova',
  speed: 1.0, // 0.25 - 4.0
});

// Синтез и воспроизведение
const audio = await speakWithOpenAI('Hello, world!', {
  voice: 'alloy',
});

// Остановить
audio.pause();
```

### Стоимость TTS

- **tts-1:** $15.00 / 1M символов (~66 часов аудио)
- **tts-1-hd:** $30.00 / 1M символов

**Пример:** 1000 сообщений по 100 символов = 100k символов = **$1.50**

---

## 🎧 Использование STT (Speech-to-Text)

### Официальная документация

- **API Reference:** https://platform.openai.com/docs/api-reference/audio/createTranscription
- **Guide:** https://platform.openai.com/docs/guides/speech-to-text

### Модель: Whisper-1

OpenAI Whisper - одна из лучших моделей распознавания речи:

- **Точность (Английский):** ~95% WER
- **Точность (Русский):** ~90% WER
- **Поддержка:** 99+ языков
- **Максимальный размер файла:** 25 MB

### Поддерживаемые языки

Whisper автоматически определяет язык, но можно указать явно:

```typescript
import { transcribeAudioOpenAI } from '@/features/transcription/openaiStt';

const result = await transcribeAudioOpenAI(audioBlob, {
  language: 'ru', // Русский
  temperature: 0.0, // Максимальная точность
});

console.log(result.text); // "Привет, как дела?"
console.log(result.language); // "russian"
```

Полный список: https://github.com/openai/whisper#available-models-and-languages

### Пример с микрофона

```typescript
import { transcribeFromMicrophoneOpenAI } from '@/features/transcription/openaiStt';

// Автоматически записывает с микрофона и транскрибирует
const result = await transcribeFromMicrophoneOpenAI(1500, {
  language: 'en',
  prompt: 'This is a conversation about AI and technology.',
});

console.log(result.text);
```

### Стоимость STT

- **Whisper-1:** $0.006 / минута аудио

**Пример:** 1000 минут разговоров = **$6.00**

---

## 🤖 Интеграция Voice Agent

### Полный Real-time Voice Agent с OpenAI

Файл: `src/features/voiceAgent/useVoiceAgentOpenAI.ts`

```typescript
import { useVoiceAgentOpenAI } from '@/features/voiceAgent/useVoiceAgentOpenAI';

function MyComponent() {
  const voiceAgent = useVoiceAgentOpenAI({
    // STT Configuration
    sttConfig: {
      language: 'ru',
      temperature: 0.0,
    },
    
    // TTS Configuration
    ttsConfig: {
      model: 'tts-1', // Низкая задержка
      voice: 'nova',
      speed: 1.1, // Немного быстрее
    },
    
    // VAD Configuration
    vadSilenceDuration: 1500, // 1.5 секунды тишины = конец фразы
    vadVolumeThreshold: 20,
    
    // Server Configuration
    serverEndpoint: '/api/chat',
    
    // Callbacks
    onTranscription: (text) => console.log('User said:', text),
    onServerResponse: (text) => console.log('Bot replied:', text),
    onError: (error) => console.error('Error:', error),
    onStateChange: (state) => console.log('State:', state),
  });
  
  return (
    <div>
      <button onClick={voiceAgent.init}>
        Start Voice Agent
      </button>
      
      <button onClick={voiceAgent.stop}>
        Stop
      </button>
      
      <button onClick={voiceAgent.interrupt}>
        Interrupt Bot
      </button>
      
      <div>
        Status: {voiceAgent.currentState}
        {voiceAgent.isListening && ' 🎤'}
        {voiceAgent.isProcessing && ' ⚙️'}
        {voiceAgent.isSpeaking && ' 🔊'}
      </div>
    </div>
  );
}
```

### Архитектура Voice Agent

```
User Speaks
    ↓
🎤 Microphone (с Echo Cancellation)
    ↓
🔍 VAD (обнаруживает речь, игнорирует TTS эхо)
    ↓
📝 State Machine (проверяет: можно ли отправлять запрос?)
    ↓
🎧 OpenAI Whisper STT (транскрибирует аудио)
    ↓
💬 Your Server LLM (генерирует ответ)
    ↓
🔊 OpenAI TTS (синтезирует речь)
    ↓
🔇 Notify VAD: "TTS playing, ignore microphone"
    ↓
🔊 Playback TTS
    ↓
🔇 Notify VAD: "TTS finished, resume listening"
    ↓
🔄 Return to Listening
```

### Решенные проблемы

✅ **Проблема 1:** Дублирующие запросы на сервер
- **Решение:** State Machine блокирует новые запросы во время `processing` и `speaking`

✅ **Проблема 2:** Микрофон ловит собственный TTS (эхо)
- **Решение:** 
  1. Echo Cancellation в `getUserMedia`
  2. VAD игнорирует микрофон когда `isTTSPlaying = true`

✅ **Проблема 3:** Прерывания пользователя
- **Решение:** `interrupt()` функция останавливает TTS и возвращается к listening

---

## 💰 Стоимость использования

### Пример расчета для Voice Agent

**Сценарий:** 1 час непрерывного разговора

| Компонент | Объем | Стоимость |
|-----------|-------|-----------|
| STT (Whisper) | 60 минут | $0.36 |
| TTS (tts-1) | ~10,000 символов | $0.15 |
| **ИТОГО** | | **$0.51 / час** |

**Реалистичный сценарий:** 10 минут разговора в день

- STT: 10 минут × $0.006 = **$0.06**
- TTS: ~1,500 символов × $0.000015 = **$0.02**
- **ИТОГО:** **$0.08 / день** или **$2.40 / месяц**

### Сравнение с конкурентами

| Сервис | STT | TTS | Качество |
|--------|-----|-----|----------|
| OpenAI | $0.006/мин | $15/1M chars | ⭐⭐⭐⭐⭐ |
| ElevenLabs | - | $0.18/1K chars | ⭐⭐⭐⭐⭐ |
| Google Cloud | $0.006/15s | $16/1M chars | ⭐⭐⭐⭐ |
| Azure | $1/час | $16/1M chars | ⭐⭐⭐⭐ |

OpenAI - **лучшее соотношение цена/качество** для voice agent!

---

## 🔐 Безопасность

### ✅ Что сделано

1. **API ключ в `.env`** - не попадет в Git
2. **`.gitignore` настроен** - блокирует `.env` файлы
3. **TypeScript типы** - безопасная работа с API
4. **Error handling** - обработка ошибок API

### ⚠️ Важно

- **Никогда** не коммитьте `.env` файл
- **Никогда** не публикуйте API ключ в коде
- **Используйте** `.env.example` как шаблон для команды
- **Ротируйте** ключи если они скомпрометированы

### Проверка безопасности

```powershell
# Проверьте что .env в .gitignore
git check-ignore .env
# Должно вывести: .env

# Проверьте что .env не в индексе Git
git ls-files | Select-String ".env"
# Должно быть пусто (или только .env.example)
```

---

## 🚀 Быстрый старт

### 1. Получите ключ

```
https://platform.openai.com/api-keys
```

### 2. Создайте `.env`

```powershell
echo "VITE_OPENAI_API_KEY=sk-proj-ВАШ_КЛЮЧ" > .env
```

### 3. Перезапустите сервер

```powershell
npm run dev
```

### 4. Тест TTS

```typescript
import { speakWithOpenAI } from '@/features/voices/openaiTts';

await speakWithOpenAI('Привет, мир!', { voice: 'nova' });
```

### 5. Тест STT

```typescript
import { transcribeFromMicrophoneOpenAI } from '@/features/transcription/openaiStt';

const result = await transcribeFromMicrophoneOpenAI();
console.log(result.text);
```

Готово! 🎉

---

## 📚 Дополнительные ресурсы

- **OpenAI Platform Docs:** https://platform.openai.com/docs
- **TTS API Reference:** https://platform.openai.com/docs/api-reference/audio/createSpeech
- **STT API Reference:** https://platform.openai.com/docs/api-reference/audio/createTranscription
- **Whisper GitHub:** https://github.com/openai/whisper
- **Pricing:** https://openai.com/api/pricing/

---

## ❓ FAQ

### Q: Почему Vite не видит `VITE_OPENAI_API_KEY`?

**A:** Перезапустите dev сервер. Vite читает `.env` только при старте.

### Q: Можно ли использовать без предоплаты?

**A:** Нет, OpenAI требует предоплаченный баланс ($5+).

### Q: Whisper поддерживает русский язык?

**A:** Да! Whisper отлично работает с русским (~90% точность).

### Q: Как уменьшить задержку TTS?

**A:** Используйте `tts-1` (не `tts-1-hd`) и `speed: 1.1-1.2`.

### Q: API ключ работает, но ошибка 429?

**A:** Превышен лимит запросов. Проверьте [Usage](https://platform.openai.com/usage) или добавьте баланс.

### Q: Можно ли использовать локально Whisper?

**A:** Да, но нужен мощный GPU. OpenAI API проще и дешевле для начала.

---

**Создано для проекта Local Chat VRM**  
Версия: 1.0  
Дата: 2025
