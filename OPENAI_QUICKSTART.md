# OpenAI TTS & STT Integration - Quick Start

## 🎯 Что реализовано

✅ **OpenAI Text-to-Speech (TTS)** - синтез речи с низкой задержкой  
✅ **OpenAI Speech-to-Text (STT)** - распознавание речи Whisper  
✅ **Voice Agent** - полный цикл голосового взаимодействия  
✅ **State Machine** - предотвращает дублирующие запросы  
✅ **Echo Cancellation** - микрофон не ловит собственный TTS  
✅ **Безопасное хранение API ключа** - через `.env` файлы  

---

## 🚀 Быстрый старт

### 1. Получите OpenAI API ключ

```
https://platform.openai.com/api-keys
```

Создайте новый ключ (начинается с `sk-proj-`)

### 2. Настройте `.env` файл

```powershell
# Создайте .env файл в корне проекта
echo "VITE_OPENAI_API_KEY=sk-proj-ВАШ_КЛЮЧ_ЗДЕСЬ" > .env
```

### 3. Перезапустите dev сервер

```powershell
npm run dev
```

**Важно:** Vite читает `.env` только при запуске!

### 4. Тестируйте API

#### TTS (Text-to-Speech)

```typescript
import { speakWithOpenAI } from '@/features/voices/openaiTts';

// Синтез и воспроизведение
await speakWithOpenAI('Привет, мир!', {
  voice: 'nova', // alloy, echo, fable, onyx, nova, shimmer
  speed: 1.1,
});
```

#### STT (Speech-to-Text)

```typescript
import { transcribeFromMicrophoneOpenAI } from '@/features/transcription/openaiStt';

// Запись с микрофона + транскрипция
const result = await transcribeFromMicrophoneOpenAI(1500, {
  language: 'ru',
});

console.log(result.text); // "Ваш текст здесь"
```

#### Voice Agent (Full Pipeline)

```typescript
import { useVoiceAgentOpenAI } from '@/features/voiceAgent/useVoiceAgentOpenAI';

const voiceAgent = useVoiceAgentOpenAI({
  sttConfig: { language: 'ru' },
  ttsConfig: { voice: 'nova', model: 'tts-1' },
  serverEndpoint: '/api/chat',
  onTranscription: (text) => console.log('User:', text),
  onServerResponse: (text) => console.log('Bot:', text),
});

// Запуск
await voiceAgent.init();

// Остановка
voiceAgent.stop();

// Прерывание бота
voiceAgent.interrupt();
```

---

## 📁 Структура файлов

### Созданные файлы

```
local-chat-vrm/
├── .env.example                     # Шаблон для переменных окружения
├── OPENAI_SETUP_GUIDE.md           # Подробная документация (READ THIS!)
├── OPENAI_QUICKSTART.md            # Этот файл
├── src/
│   ├── vite-env.d.ts               # ✏️ Обновлено: TypeScript типы для .env
│   ├── utils/
│   │   └── openaiConfig.ts         # ✨ Новый: Безопасное получение API ключа
│   ├── features/
│   │   ├── voices/
│   │   │   └── openaiTts.ts        # ✨ Новый: OpenAI TTS API
│   │   ├── transcription/
│   │   │   └── openaiStt.ts        # ✨ Новый: OpenAI STT (Whisper) API
│   │   └── voiceAgent/
│   │       ├── voiceAgentStateMachine.ts  # Уже был
│   │       ├── voiceActivityDetection.ts  # Уже был
│   │       └── useVoiceAgentOpenAI.ts     # ✨ Новый: Voice Agent Hook
│   └── components/
│       ├── OpenAIVoiceDemo.tsx     # ✨ Новый: Demo компонент
│       └── OpenAIVoiceDemo.module.css
```

---

## 🔑 Безопасность API ключа

### ✅ Что сделано

1. **`.env` файл** - для хранения секретных ключей
2. **`.gitignore`** - `.env` уже добавлен (не попадет в Git)
3. **`.env.example`** - шаблон без реальных ключей
4. **`openaiConfig.ts`** - централизованное управление ключами
5. **TypeScript типы** - автодополнение для `import.meta.env`

### Проверка безопасности

```powershell
# Убедитесь что .env НЕ в Git
git ls-files | Select-String ".env"
# Должно быть пусто (или только .env.example)

# Проверьте .gitignore
git check-ignore .env
# Должно вывести: .env
```

### ⚠️ Важно

- **НИКОГДА** не коммитьте `.env` файл
- **НИКОГДА** не публикуйте API ключ в коде
- **Используйте** `.env.example` как шаблон для команды
- **Ротируйте** ключи если они скомпрометированы

---

## 💰 Стоимость

### OpenAI Pricing

| Сервис | Стоимость | Примечание |
|--------|-----------|------------|
| TTS (tts-1) | $15 / 1M символов | ~66 часов аудио |
| TTS (tts-1-hd) | $30 / 1M символов | Высокое качество |
| STT (Whisper) | $0.006 / минута | 99+ языков |

### Пример расчета

**1 час непрерывного разговора:**

- STT: 60 мин × $0.006 = **$0.36**
- TTS: ~10,000 символов × $0.000015 = **$0.15**
- **ИТОГО: $0.51 / час**

**10 минут в день:**

- STT: 10 мин × $0.006 = **$0.06**
- TTS: ~1,500 символов × $0.000015 = **$0.02**
- **ИТОГО: $0.08 / день** или **$2.40 / месяц**

💡 **Вывод:** Очень доступно для личных проектов!

---

## 🎤 Доступные голоса TTS

| Голос | Описание | Рекомендация |
|-------|----------|--------------|
| `alloy` | Нейтральный, сбалансированный | Универсальный |
| `echo` | Мужской, четкий | Профессиональный |
| `fable` | Британский акцент | Выразительный |
| `onyx` | Глубокий мужской | Авторитетный |
| `nova` | Женский, энергичный | **Voice Agent** |
| `shimmer` | Мягкий, нежный | Дружелюбный |

Все голоса поддерживают **многоязычность** (русский, английский, японский, и т.д.)

---

## 🌍 Поддерживаемые языки STT

OpenAI Whisper поддерживает **99+ языков** с автоопределением.

**Популярные языки:**

- `en` - English (~95% точность)
- `ru` - Русский (~90% точность)
- `ja` - 日本語
- `zh` - 中文
- `es` - Español
- `fr` - Français
- `de` - Deutsch

Полный список: https://github.com/openai/whisper#available-models-and-languages

---

## 🛡️ Решенные проблемы Voice Agent

### Проблема 1: Дублирующие запросы на сервер

**Проблема:** Каждая пауза пользователя отправляет новый запрос, даже если сервер еще обрабатывает предыдущий.

**Решение:** State Machine с состояниями:
- `idle` - ожидание
- `listening` - слушаем пользователя ✅ **может отправить запрос**
- `processing` - обработка на сервере ❌ **блокирует новые запросы**
- `speaking` - бот говорит ❌ **блокирует новые запросы**
- `interrupting` - пользователь прервал бота

```typescript
// В useVoiceAgentOpenAI.ts
if (!stateMachine.canSendRequest()) {
  return; // Блокируем дублирующие запросы
}
```

### Проблема 2: Микрофон ловит собственный TTS (эхо)

**Проблема:** Микрофон слышит звук из динамиков и распознает его как речь пользователя.

**Решение #1:** Echo Cancellation в `getUserMedia`

```typescript
const stream = await navigator.mediaDevices.getUserMedia({
  audio: {
    echoCancellation: true, // 🔥 Браузер фильтрует эхо аппаратно
    noiseSuppression: true,
    autoGainControl: true,
  }
});
```

**Решение #2:** VAD уведомления о TTS

```typescript
// Перед TTS
vad.notifyTTSStart();

// После TTS
vad.notifyTTSEnd();

// VAD игнорирует микрофон когда isTTSPlaying = true
```

### Проблема 3: Прерывания пользователя

**Проблема:** Если бот говорит, а пользователь хочет ответить - нужно прервать бота.

**Решение:** Функция `interrupt()`

```typescript
voiceAgent.interrupt(); // Останавливает TTS, возвращается к listening
```

---

## 📚 Документация

### Полная документация

👉 **[OPENAI_SETUP_GUIDE.md](./OPENAI_SETUP_GUIDE.md)** - Подробное руководство

### Официальная документация OpenAI

- **TTS API:** https://platform.openai.com/docs/api-reference/audio/createSpeech
- **STT API:** https://platform.openai.com/docs/api-reference/audio/createTranscription
- **Pricing:** https://openai.com/api/pricing/

### Дополнительно

- **Voice Agent Architecture:** [VOICE_AGENT_GUIDE.md](./VOICE_AGENT_GUIDE.md)
- **State Machine:** `src/features/voiceAgent/voiceAgentStateMachine.ts`
- **VAD:** `src/features/voiceAgent/voiceActivityDetection.ts`

---

## 🧪 Тестирование

### Demo компонент

Добавьте в ваш `index.tsx`:

```typescript
import { OpenAIVoiceDemo } from '@/components/OpenAIVoiceDemo';

<OpenAIVoiceDemo />
```

### Консольные тесты

```typescript
// Тест TTS
import { speakWithOpenAI } from '@/features/voices/openaiTts';
await speakWithOpenAI('Test message', { voice: 'nova' });

// Тест STT
import { transcribeFromMicrophoneOpenAI } from '@/features/transcription/openaiStt';
const result = await transcribeFromMicrophoneOpenAI();
console.log(result.text);
```

---

## ❓ FAQ

### Q: Vite не видит `VITE_OPENAI_API_KEY`?

**A:** Перезапустите dev сервер (`npm run dev`). Vite читает `.env` только при старте.

### Q: Ошибка "OpenAI API Key не настроен"?

**A:** Проверьте:
1. Файл `.env` существует в корне проекта
2. Переменная называется **VITE**_OPENAI_API_KEY (с префиксом `VITE_`)
3. Dev сервер перезапущен

### Q: Ошибка 401 Unauthorized?

**A:** Неверный API ключ. Проверьте:
1. Ключ начинается с `sk-proj-`
2. Скопирован полностью без пробелов
3. Ключ активен на https://platform.openai.com/api-keys

### Q: Ошибка 429 Too Many Requests?

**A:** Превышен лимит запросов или баланс исчерпан. Проверьте [Usage](https://platform.openai.com/usage).

### Q: Whisper не распознает русский?

**A:** Добавьте `language: 'ru'` в конфиг STT:

```typescript
transcribeAudioOpenAI(audioBlob, { language: 'ru' })
```

### Q: Задержка TTS слишком большая?

**A:** Используйте:
- `model: 'tts-1'` (не `tts-1-hd`) - задержка ~300ms
- `speed: 1.1` - немного быстрее

### Q: Микрофон все равно ловит эхо?

**A:** Проверьте:
1. `echoCancellation: true` в `getUserMedia`
2. `vad.notifyTTSStart()` вызывается перед TTS
3. Используйте наушники вместо динамиков

---

## 🎉 Готово!

Теперь у вас есть полностью рабочий **real-time voice agent** с OpenAI TTS & STT!

**Следующие шаги:**

1. ✅ Получите API ключ
2. ✅ Создайте `.env` файл
3. ✅ Перезапустите сервер
4. ✅ Протестируйте TTS/STT
5. ✅ Интегрируйте Voice Agent в UI

**Нужна помощь?** Читайте [OPENAI_SETUP_GUIDE.md](./OPENAI_SETUP_GUIDE.md)

---

**Создано для проекта Local Chat VRM**  
Версия: 1.0  
Лицензия: MIT
