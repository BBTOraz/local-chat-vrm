# 🧪 Как проверить OpenAI TTS (Синтез речи)

## 📋 3 способа тестирования

---

## ✅ Способ 1: HTML тест-страница (САМЫЙ ПРОСТОЙ)

### 1. Откройте файл в браузере

```powershell
# Откройте файл в браузере
start test-openai-tts.html
```

Или просто дважды кликните на файл `test-openai-tts.html`

### 2. Введите API ключ

Вставьте ваш OpenAI API ключ из `.env` файла:
```
sk-proj-yw9rGD94XoTvEcTHqp5TsyE4as7h...
```

### 3. Нажмите "Синтезировать речь"

Должен воспроизвестись голос! 🔊

**Возможности:**
- ✅ Выбор голоса (Alloy, Nova, Echo, Fable, Onyx, Shimmer)
- ✅ Выбор модели (tts-1 или tts-1-hd)
- ✅ Настройка скорости (0.25x - 4.0x)
- ✅ Свой текст для синтеза
- ✅ Показывает время синтеза

---

## ✅ Способ 2: Через консоль браузера

### 1. Убедитесь что .env настроен

Проверьте файл `.env`:
```env
VITE_OPENAI_API_KEY=sk-proj-ваш_ключ_здесь
```

### 2. Перезапустите dev сервер

```powershell
npm run dev
```

### 3. Откройте консоль браузера

- В Chrome/Edge: `F12` → вкладка "Console"
- В Firefox: `F12` → вкладка "Консоль"

### 4. Запустите тест

```javascript
// Импортируйте функцию (только если в вашем коде)
import { speakWithOpenAI } from '@/features/voices/openaiTts';

// Простой тест
await speakWithOpenAI('Привет! Это тест синтеза речи.', {
  voice: 'nova',
  model: 'tts-1',
  speed: 1.0,
});
```

**Или используйте готовые тесты:**

```javascript
// Если тесты подключены в приложении
window.openaiTtsTests.runAllTests();
```

---

## ✅ Способ 3: Прямой API запрос (cURL)

### Windows PowerShell:

```powershell
# Замените ВАШ_API_КЛЮЧ на реальный ключ
$headers = @{
    "Authorization" = "Bearer sk-proj-ВАШ_API_КЛЮЧ"
    "Content-Type" = "application/json"
}

$body = @{
    model = "tts-1"
    input = "Привет! Это тест OpenAI TTS."
    voice = "nova"
    speed = 1.0
} | ConvertTo-Json

Invoke-RestMethod `
    -Uri "https://api.openai.com/v1/audio/speech" `
    -Method Post `
    -Headers $headers `
    -Body $body `
    -OutFile "test-output.mp3"

# Воспроизведите файл
start test-output.mp3
```

### Linux/Mac (bash):

```bash
curl https://api.openai.com/v1/audio/speech \
  -H "Authorization: Bearer sk-proj-ВАШ_API_КЛЮЧ" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "tts-1",
    "input": "Привет! Это тест OpenAI TTS.",
    "voice": "nova",
    "speed": 1.0
  }' \
  --output test-output.mp3

# Воспроизведите
open test-output.mp3  # Mac
xdg-open test-output.mp3  # Linux
```

---

## 🎯 Быстрый тест (рекомендуется)

### Вариант A: HTML страница

```powershell
start test-openai-tts.html
```

1. Вставьте API ключ
2. Нажмите кнопку
3. Услышите голос ✅

### Вариант B: PowerShell команда

```powershell
# Скопируйте ваш API ключ из .env
$key = "sk-proj-ВАШ_КЛЮЧ"

# Запустите тест
$headers = @{"Authorization" = "Bearer $key"; "Content-Type" = "application/json"}
$body = '{"model":"tts-1","input":"Привет! Тест работает!","voice":"nova"}' 
Invoke-RestMethod -Uri "https://api.openai.com/v1/audio/speech" -Method Post -Headers $headers -Body $body -OutFile "test.mp3"
start test.mp3
```

---

## ❓ Что делать если не работает?

### Ошибка 401 Unauthorized

**Проблема:** Неверный API ключ

**Решение:**
1. Проверьте ключ в `.env` файле
2. Убедитесь что ключ начинается с `sk-proj-`
3. Скопируйте ключ без пробелов
4. Проверьте что ключ активен на https://platform.openai.com/api-keys

### Ошибка 429 Too Many Requests

**Проблема:** Превышен лимит запросов или нет баланса

**Решение:**
1. Проверьте баланс: https://platform.openai.com/usage
2. Добавьте средства: https://platform.openai.com/settings/organization/billing/overview
3. Подождите если превышен rate limit

### Ошибка 400 Bad Request

**Проблема:** Неверные параметры запроса

**Решение:**
1. Проверьте что текст не превышает 4096 символов
2. Проверьте что голос один из: alloy, echo, fable, onyx, nova, shimmer
3. Проверьте что скорость в диапазоне 0.25 - 4.0

### Нет звука

**Проблема:** Аудио не воспроизводится

**Решение:**
1. Проверьте громкость системы
2. Проверьте что браузер разрешает автовоспроизведение
3. Попробуйте кликнуть на странице перед тестом (браузерная политика)

### VITE_OPENAI_API_KEY undefined

**Проблема:** Vite не видит переменную окружения

**Решение:**
1. Убедитесь что файл называется `.env` (без расширения)
2. Убедитесь что переменная начинается с `VITE_`
3. **Перезапустите dev сервер:** `npm run dev`

---

## 🎤 Доступные голоса

Протестируйте разные голоса:

| Голос | Описание | Тест |
|-------|----------|------|
| **nova** | Женский, энергичный | Рекомендуется |
| **alloy** | Нейтральный | Универсальный |
| **echo** | Мужской, четкий | Профессиональный |
| **fable** | Британский акцент | Выразительный |
| **onyx** | Глубокий мужской | Авторитетный |
| **shimmer** | Мягкий, нежный | Дружелюбный |

**Все голоса поддерживают русский язык!**

---

## 📊 Ожидаемые результаты

### ✅ Успешный тест:

```
🔄 Отправка запроса в OpenAI...
✅ Успех! Синтез занял 287ms. Воспроизведение...
✅ Воспроизведение завершено. Голос: nova, Модель: tts-1, Скорость: 1.0x
```

### Время синтеза:

- **tts-1:** ~200-400ms (быстрая модель)
- **tts-1-hd:** ~400-700ms (высокое качество)

### Размер аудио:

- ~10-20 KB на секунду аудио (MP3 формат)

---

## 💡 Советы

1. **Используйте HTML тест-страницу** - самый простой способ
2. **Начните с голоса "nova"** - универсальный женский голос
3. **Используйте модель "tts-1"** - быстрее для тестирования
4. **Тестируйте короткие фразы** - 1-2 предложения
5. **Проверьте разные языки** - OpenAI поддерживает многоязычность

---

## 📚 Дополнительно

### Тест в коде приложения

Добавьте в ваш компонент:

```typescript
import { speakWithOpenAI } from '@/features/voices/openaiTts';

// В функции/обработчике
const testTTS = async () => {
  try {
    await speakWithOpenAI('Тест синтеза речи работает!', {
      voice: 'nova',
    });
    console.log('✅ TTS работает!');
  } catch (error) {
    console.error('❌ Ошибка:', error);
  }
};
```

### Автоматические тесты

```typescript
import { runAllTests } from '@/utils/testOpenAITTS';

// Запустить все тесты
await runAllTests();
```

---

## ✅ Готово!

Выберите любой способ и протестируйте TTS! 🎉

**Рекомендую:** Начните с HTML страницы (`test-openai-tts.html`)
