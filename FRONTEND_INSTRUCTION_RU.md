# Руководство по интеграции фронтенда с агентной системой Orchestra

## 1. Обзор системы

Бэкенд предоставляет два режима работы:
- **Режим "Агенты"** — оркестрированный поток с верификацией, RAG-поиском, инструментами и структурированным выводом
- **Режим "Обычный"** — простой вызов LLM без агентной логики

### 1.1 Архитектура агентного режима

```
Пользователь → AgentChatController → AgentOrchestrator
                                         ↓
                         ┌───────────────┴───────────────┐
                         ↓                               ↓
                    SolverAgent                    VerifierAgent
                    (генерирует)                   (проверяет)
                         ↓                               ↓
                    RAG-поиск                      Итерации (до 3х)
                    Инструменты                         ↓
                         ↓                         Форматирование
                    Черновик ────────────────────→ Финальный ответ
                                                         ↓
                                                   {answer, summary}
```

**Ключевая идея**: Solver генерирует черновик, Verifier проверяет его на точность и релевантность. Если проверка не пройдена — система автоматически запускает новую итерацию с учетом замечаний. Максимум 3 итерации. В конце черновик форматируется в структурированный JSON с полным ответом (`answer`) и кратким резюме для озвучки (`summary`).

---

## 2. API эндпоинты

### 2.1 Режим "Агенты" — SSE потоковый (рекомендуется)

**URL**: `POST /api/agent/chat/{conversationId}`

**Headers**:
```
Content-Type: application/json
```

**Query Parameters** (опциональные):
- `provider` — провайдер по умолчанию для обоих агентов: `groq` или `ollama`
- `solverProvider` — переопределить провайдера только для Solver
- `verifierProvider` — переопределить провайдера только для Verifier
- `mode` — режим работы: `stream` (по умолчанию) или `blocking`
- `visibility` — уровень детализации событий: `trace` (всё) или `hint` (только важное)
- `thinking` — зарезервировано для будущих обновлений, пока не используется

**Body** (JSON):
```json
{
  "message": "Текст запроса пользователя",
  "provider": "groq",
  "mode": "stream",
  "visibility": "trace"
}
```

> ⚠️ **Важно**: Поле `message` обязательно! Остальные параметры можно передать как в body, так и в query string. Query string имеет приоритет над body.

**Response**: Server-Sent Events (SSE)

Поток событий с типом `event: <stage_name>` и payload `data: <AgentEvent JSON>`.

Структура каждого события `AgentEvent`:
```json
{
  "stage": "SOLVER_TOKEN",
  "visibility": "TRACE",
  "title": "Solver",
  "message": "текстовый фрагмент или статус",
  "data": {
    // дополнительные данные в зависимости от стадии
  }
}
```

---

### 2.2 Режим "Агенты" — Блокирующий (без SSE)

**URL**: `POST /api/agent/chat/envelope/{conversationId}`

**Headers**: `Content-Type: application/json`

**Parameters/Body**: те же, что и для SSE эндпоинта

**Response** (JSON):
```json
{
  "answer": "Полный развернутый ответ...",
  "summary": "Краткое резюме для TTS..."
}
```

Если произошла ошибка, вернется `{"answer": null, "summary": null}`.

---

### 2.3 Режим "Обычный" — JSON ответ

**URL**: `GET /api/chat/simple-json/{conversationId}/{message}`

**Response** (JSON):
```json
{
  "answer": "Полный ответ от LLM",
  "summary": "Краткое резюме"
}
```

> 📌 Для обычного режима используется только этот эндпоинт.

---

## 3. Потоковые события (SSE) — полный список стадий

При использовании SSE эндпоинта (`POST /api/agent/chat/{conversationId}`) фронтенд получит последовательность событий. Вот все возможные стадии (`stage`):

### 3.1 `SOLVER_STARTED`
- **Когда**: Начало новой итерации (обычно 1-я, но может быть 2-я или 3-я если Verifier отклонил черновик)
- **Visibility**: `TRACE`
- **Payload**: `{ "message": "Итерация 1 начата" }`
- **UI**: Можно показать индикатор "Агент думает..."

### 3.2 `RAG_CONTEXT`
- **Когда**: Завершен поиск релевантных документов
- **Visibility**: `TRACE`
- **Payload**:
```json
{
  "message": "Prepared 4 document(s)",
  "data": {
    "count": 4,
    "titles": [
      "Филологический факультет",
      "Военная кафедра",
      "..."
    ]
  }
}
```
- **UI**: Показать список найденных документов в аккордеоне "мыслей"

### 3.3 `TOOL_SELECTION`
- **Когда**: Агент выбрал инструмент (например, `platonusScheduleTool`)
- **Visibility**: `TRACE`
- **Payload**:
```json
{
  "message": "Selected tool: platonusScheduleTool",
  "data": {
    "toolName": "platonusScheduleTool",
    "status": "selected"
  }
}
```
- **UI**: Показать иконку инструмента в "мыслях"

### 3.4 `TOOL_SELECTION_SKIPPED`
- **Когда**: Инструменты не понадобились
- **Visibility**: `TRACE`
- **Payload**: `{ "message": "No tool matched" }`

### 3.5 `TOOL_EXECUTION`
- **Когда**: Вызов инструмента (может быть несколько событий: started → success/failed)
- **Visibility**: `TRACE`
- **Payload**:
```json
{
  "message": "Invoking platonusScheduleTool",
  "data": {
    "toolName": "platonusScheduleTool",
    "status": "started",
    "input": "...",
    "output": null
  }
}
```
Затем придет еще одно событие:
```json
{
  "message": "platonusScheduleTool completed",
  "data": {
    "status": "success",
    "output": "результат в формате Mermaid"
  }
}
```
- **UI**: Показать прогресс выполнения инструмента

### 3.6 `SOLVER_TOKEN`
- **Когда**: Каждый токен генерируемого ответа (только в режиме `stream`)
- **Visibility**: `TRACE`
- **Payload**: `{ "message": "фрагмент текста" }`
- **UI**: **Самое важное для UX!** Накапливать эти фрагменты и отображать как "черновик агента" внутри аккордеона в реальном времени (typewriter-эффект)

### 3.7 `DRAFT_READY`
- **Когда**: Solver завершил генерацию черновика
- **Visibility**: `TRACE`
- **Payload**: `{ "message": "Draft length: 1352 characters" }`
- **UI**: Можно показать "Черновик готов ✓"

### 3.8 `VERIFICATION_STARTED`
- **Когда**: Verifier начал проверку черновика
- **Visibility**: `TRACE`
- **Payload**: `{ "message": "Verifier is reviewing the draft" }`
- **UI**: Индикатор "Проверка..."

### 3.9 `VERIFICATION_PROGRESS`
- **Когда**: Промежуточный статус верификации
- **Visibility**: `TRACE`
- **Payload**: `{ "message": "Checking facts and relevance" }`

### 3.10 `VERIFICATION_FEEDBACK`
- **Когда**: Verifier завершил проверку
- **Visibility**: `TRACE`
- **Payload**:
```json
{
  "message": "OK: Draft is accurate and relevant",
  "data": {
    "ok": true,
    "reasons": [],
    "requiredChanges": ""
  }
}
```
Если проверка НЕ прошла:
```json
{
  "message": "Issues found: [Missing specific examples, Formatting needs improvement]",
  "data": {
    "ok": false,
    "reasons": ["Missing specific examples", "Formatting needs improvement"],
    "requiredChanges": "Add concrete examples from documents"
  }
}
```
- **UI**: Показать результат проверки. Если `ok: false`, показать что агент запускает новую итерацию

### 3.11 `FINAL_ANSWER` — ФИНАЛЬНОЕ СОБЫТИЕ 🎯
- **Когда**: После успешной верификации и форматирования
- **Visibility**: `HINT`
- **Payload**:
```json
{
  "stage": "FINAL_ANSWER",
  "title": "Answer",
  "message": "Результат доставлен",
  "data": {
    "solverProvider": "groq",
    "verifierProvider": "groq",
    "mode": "stream",
    "answer": "# 📅 РАСПИСАНИЕ ЗАНЯТИЙ\n\n```mermaid\ngraph TD...\n```",
    "summary": "Расписание на текущую неделю включает 5 занятий.",
    "documents": ["Филологический факультет", "Расписание"],
    "tool": "platonusScheduleTool"
  }
}
```

**Это самое важное событие!**
- `data.answer` — полный ответ для отображения в чате (может содержать Mermaid)
- `data.summary` — краткая версия для TTS/VRM
- `data.tool` — какой инструмент использовался (`"none"` если без инструментов)
- `data.documents` — список использованных RAG документов

После этого события поток закрывается (`stream complete`).

### 3.12 `ERROR`
- **Когда**: Критическая ошибка в процессе
- **Visibility**: `HINT`
- **Payload**: `{ "message": "описание ошибки" }`
- **UI**: Показать сообщение об ошибке пользователю

---

## 4. Уровни детализации (Visibility)

Параметр `visibility` управляет количеством событий:

### `CONVERSATION` (рекомендуется для основного UI)
Показывает **диалог между Solver и Verifier**:
- `SOLVER_TOKEN` — streaming генерация черновика
- `DRAFT_READY` — черновик завершён
- `VERIFICATION_STARTED` — Verifier начал проверку
- `VERIFICATION_PROGRESS` — промежуточный статус (важно для медленных моделей!)
- `VERIFICATION_FEEDBACK` — результат проверки (✅ OK или ❌ требуются изменения)
- `FINAL_ANSWER` — финальный ответ
- `ERROR` — ошибки

**Когда использовать**: Для основного интерфейса, где пользователь видит "мысли" агента, но без технических деталей типа RAG или выбора инструментов.

### `HINT` (минимальный режим)
Показывает только:
- `FINAL_ANSWER`
- `ERROR`

**Когда использовать**: Минималистичный UI, где важен только результат. Подходит для мобильных устройств или пользователей, которые не хотят видеть процесс.

### `TRACE` (режим отладки)
Показывает ВСЕ события, включая:
- Начало/конец итераций
- RAG-поиск документов
- Выбор и выполнение инструментов
- Каждый токен от Solver
- Все промежуточные стадии верификации

**Когда использовать**: Только для разработки и отладки. Не рекомендуется для конечных пользователей из-за информационной перегрузки.

---

## 5. Провайдеры LLM

Система поддерживает два провайдера:
- `groq` — быстрый (рекомендуется для Solver)
- `ollama` — локальный

### Логика выбора провайдера:

1. Если указан `solverProvider` → используется для Solver
2. Иначе если указан `provider` → используется для обоих агентов
3. Иначе используется дефолтный из конфигурации сервера (по умолчанию `groq`)

То же самое для `verifierProvider`.

**Примеры**:

```json
// Оба агента используют groq
{ "message": "...", "provider": "groq" }

// Solver — groq, Verifier — ollama
{
  "message": "...",
  "solverProvider": "groq",
  "verifierProvider": "ollama"
}
```

**Рекомендация**: Для production использовать `groq` для обоих агентов (быстрее), для разработки можно экспериментировать с `ollama`.

---

## 6. Режимы работы (Mode)

### `stream` (рекомендуется)
- События приходят в реальном времени через SSE
- Пользователь видит прогресс: "думает... ищет документы... проверяет..."
- Токены от Solver отображаются по мере генерации
- **Лучший UX!**

### `blocking`
- Эндпоинт блокируется до завершения всего процесса
- Возвращает только финальный `FINAL_ANSWER`
- Подходит для мобильных приложений или случаев где SSE недоступно

---

## 7. UI/UX компонент "Мысли агента" (Disclosure Toggle / Accordion)

Это ключевой элемент интерфейса, вдохновленный ChatGPT. Показывает **диалог между Solver и Verifier** в режиме реального времени.

### Как это должно выглядеть (свёрнуто):

```
┌─────────────────────────────────────────────────────┐
│ 🤖 Думал на протяжении 2m 17s  ▼                    │ ← кнопка-раскрывашка
└─────────────────────────────────────────────────────┘
```

### При клике (развёрнуто):

```
┌─────────────────────────────────────────────────────┐
│ 🤖 Думал на протяжении 2m 17s  ▲                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│ 💭 Solver                                           │
│ ┌─────────────────────────────────────────────────┐ │
│ │ # 📅 РАСПИСАНИЕ ЗАНЯТИЙ                         │ │
│ │                                                 │ │
│ │ Понедельник:                                    │ │
│ │ - 8:00-9:30 Математика... [streaming в реал.вр.]│ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
│ ✅ Черновик готов                                   │
│                                                     │
│ 🔍 Verifier проверяет...  ⏳                        │ ← индикатор для медленных моделей
│                                                     │
│ ❌ Verifier                                         │
│ Требуются изменения:                                │
│ • Нужно добавить номера аудиторий                   │
│ • Указать преподавателей                            │
│                                                     │
│ ─────────────────────────────────────────────────── │ ← разделитель (итерация 2 начинается)
│                                                     │
│ 💭 Solver                                           │
│ ┌─────────────────────────────────────────────────┐ │
│ │ # 📅 РАСПИСАНИЕ ЗАНЯТИЙ                         │ │
│ │                                                 │ │
│ │ Понедельник:                                    │ │
│ │ - 8:00-9:30 Математика (ауд. 204, проф. Иванов)│ │
│ │ - 10:00-11:30 Физика (ауд. 305, проф. Петров) │ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
│ ✅ Черновик готов                                   │
│                                                     │
│ 🔍 Verifier проверяет...  ⏳                        │
│                                                     │
│ ✅ Verifier                                         │
│ Всё верно! Ответ точный и полный.                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Технические детали:

**HTML/Accessibility**:
```html
<button 
  id="thinking-toggle"
  aria-expanded="false"
  aria-controls="thinking-panel"
  class="thinking-toggle-button"
>
  <span>Думал на протяжении <span id="thinking-duration">2m 17s</span></span>
  <span class="chevron" aria-hidden="true">▼</span>
</button>

<div id="thinking-panel" hidden class="thinking-panel">
  <!-- события здесь -->
</div>
```

**Поведение**:
- При клике меняем `aria-expanded` на `true/false`
- Переключаем `hidden` атрибут на панели
- Поворачиваем шеврон (▼ → ▲)
- Анимация высоты (CSS `transition` или JS animation)

**Стилизация**:
- Кнопка выглядит как текст (без рамок, только hover-эффект)
- Цвет текста: приглушенный серый
- Chevron: маленький, справа от текста
- Панель: отступы, легкий фон, моноширинный шрифт для временных меток

### Какие события показывать внутри (для `visibility: conversation`):

**Блок Solver** (появляется при первом `SOLVER_TOKEN`):
```
💭 Solver
┌─────────────────────────────────────┐
│ [streaming текст в реальном времени]│
└─────────────────────────────────────┘
```
- Накапливать токены из `SOLVER_TOKEN` в реальном времени
- При `DRAFT_READY` показать "✅ Черновик готов" под блоком

**Блок Verifier** (появляется при `VERIFICATION_STARTED`):
```
🔍 Verifier проверяет...  ⏳
```
- **Важно!** Индикатор `⏳` (или анимированный спиннер) нужен для медленных моделей (ollama)
- При получении `VERIFICATION_PROGRESS` обновить текст: "Проверяет факты..." или "Проверяет релевантность..."
- Это помогает пользователю понять, что модель работает, просто медленно

**Результат проверки** (`VERIFICATION_FEEDBACK`):

Если `ok: true`:
```
✅ Verifier
Всё верно! Ответ точный и полный.
```

Если `ok: false`:
```
❌ Verifier
Требуются изменения:
• [reason 1]
• [reason 2]
```

**Новая итерация** (если Verifier отклонил):
- Вставить тонкий разделитель `───────────────────────`
- Начать новый блок Solver → Verifier
- **НЕ показывать явно "Итерация 2"** — это видно по структуре (второй цикл Solver → Verifier)

### Подсчет времени:

**Общее время** отображается в заголовке кнопки:
```
🤖 Думал на протяжении 2m 17s  ▼
```

Засекать от момента отправки запроса до получения `FINAL_ANSWER`.

**Формат длительности**:
- `< 1 мин`: `"45s"`
- `>= 1 мин`: `"2m 17s"`
- `>= 1 час`: `"1h 15m"` (вряд ли, но на всякий случай)

**Время не показывается** для каждого отдельного события — только общее в заголовке.

---

## 8. Отображение финального ответа (Markdown)

Финальный ответ (`data.answer` в событии `FINAL_ANSWER`) содержит обычный **Markdown** (без Mermaid диаграмм).

**Пример**:
```markdown
# 📅 РАСПИСАНИЕ ЗАНЯТИЙ

> **Период:** Текущая неделя (неделя 7)

## Понедельник
- **8:00-9:30** Математика (ауд. 204, проф. Иванов И.И.)
- **10:00-11:30** Физика (ауд. 305, проф. Петров П.П.)

## Вторник
- **9:00-10:30** История (ауд. 101, проф. Сидорова С.С.)

Всего 3 занятия на неделю.
```

### Рендеринг на фронтенде:

1. Использовать библиотеку парсинга Markdown (например, `marked`, `markdown-it`, или `react-markdown`)
2. Применить стили для красивого отображения (заголовки, списки, цитаты)
3. **Поддержка эмодзи** (📅, ✅, ❌, 🔍 и т.д.)

```javascript
import { marked } from 'marked';

function renderAnswer(answerMarkdown) {
  const container = document.getElementById('answer-container');
  const html = marked.parse(answerMarkdown);
  container.innerHTML = html;
}
```

### Стилизация:

```css
.answer-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
  color: #333;
}

.answer-container h1 {
  font-size: 1.8em;
  margin-top: 0;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.3em;
}

.answer-container h2 {
  font-size: 1.4em;
  margin-top: 1.5em;
  color: #555;
}

.answer-container ul {
  padding-left: 1.5em;
}

.answer-container li {
  margin: 0.5em 0;
}

.answer-container blockquote {
  border-left: 4px solid #ddd;
  padding-left: 1em;
  color: #666;
  font-style: italic;
}
```

**Обработка ошибок**: Если парсинг сломался, показать исходный текст в `<pre>` блоке.

---

## 9. Интеграция с VRM (синтез речи)

Когда приходит событие `FINAL_ANSWER`, внутри `data.summary` находится краткое резюме, **специально подготовленное для озвучки**.

### Поток:

1. **Получено `FINAL_ANSWER`**
2. Извлечь `data.summary` (например: `"Расписание на текущую неделю включает 3 занятия."`)
3. **Автоматически** передать в TTS-движок
4. **VRM персонаж начинает говорить** summary
5. **Параллельно** отобразить `data.answer` в чате (полная версия с Markdown)

### Управление озвучкой:

**Кнопка "Стоп" 🔇**:
- Появляется рядом с VRM аватаром во время озвучки
- При клике → остановить текущую озвучку:
  ```javascript
  speechSynthesis.cancel();
  vrm.stopTalking();
  ```

**Автоматическое прерывание**:
- Если приходит новое сообщение пока VRM еще говорит:
  ```javascript
  // Останавливаем текущую озвучку
  speechSynthesis.cancel();
  
  // Начинаем озвучивать новое
  speakWithVRM(newSummary);
  ```

### Примерный код:

```javascript
let currentUtterance = null;

eventSource.addEventListener('final_answer', (event) => {
  const data = JSON.parse(event.data);
  const { answer, summary } = data.data;
  
  // 1. Отобразить полный ответ в чате
  displayMessageInChat(answer);
  
  // 2. Автоматически озвучить summary через VRM
  speakWithVRM(summary);
});

function speakWithVRM(text) {
  // Остановить предыдущую озвучку если есть
  if (currentUtterance) {
    speechSynthesis.cancel();
  }
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ru-RU';
  utterance.rate = 1.0; // скорость речи
  utterance.pitch = 1.0;
  
  utterance.onstart = () => {
    vrm.startTalking();
    showStopButton(); // показать кнопку "Стоп"
  };
  
  utterance.onend = () => {
    vrm.stopTalking();
    hideStopButton();
  };
  
  utterance.onerror = (error) => {
    console.error('TTS error:', error);
    vrm.stopTalking();
    hideStopButton();
  };
  
  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  speechSynthesis.cancel();
  vrm.stopTalking();
  hideStopButton();
}
```

### UI кнопки "Стоп":

```html
<div class="vrm-controls">
  <button id="stop-speech-btn" class="stop-btn" hidden onclick="stopSpeaking()">
    🔇 Остановить
  </button>
</div>
```

```css
.stop-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background: rgba(255, 59, 48, 0.9);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.2s;
}

.stop-btn:hover {
  background: rgba(255, 59, 48, 1);
  transform: scale(1.05);
}
```

---

## 10. История разговоров (Conversation History)

Система автоматически сохраняет каждый диалог:
- **User message** сохраняется в начале запроса
- **Final answer** сохраняется только после успешного получения `FINAL_ANSWER`

### Sidebar (боковая панель)

Боковая панель содержит список всех разговоров с возможностью **сворачивания**.

#### Структура (развёрнутая):

```
┌────────────────────────────┐
│  ☰  Orchestra              │ ← кнопка сворачивания + логотип
├────────────────────────────┤
│  ✏️  Новый чат             │ ← кнопка создания нового
├────────────────────────────┤
│  🔍 Поиск в чатах          │ ← поиск по заголовкам
├────────────────────────────┤
│                            │
│  Сегодня                   │ ← группировка по датам
│  ─────────────────────     │
│  📅 Расписание на текущ... │
│  📚 Информация о препод... │
│                            │
│  Вчера                     │
│  ─────────────────────     │
│  🏛️ Филологический факул...│
│  ⚙️ Настройки бота        │
│                            │
│  На этой неделе            │
│  ─────────────────────     │
│  💼 Практика в компании    │
│  📝 Диссертация помощь     │
│                            │
│  Ранее                     │
│  ─────────────────────     │
│  🎓 ЕНУ история            │
│  ...                       │
│                            │
│ [прокрутка при наличии]    │
│                            │
├────────────────────────────┤
│  👤 adik adikkk            │ ← профиль пользователя
│     Plus                   │
└────────────────────────────┘
```

#### Структура (свёрнутая):

```
┌───┐
│ ☰ │ ← кнопка разворачивания
├───┤
│ ✏️│ ← новый чат
├───┤
│ 🔍│ ← поиск
├───┤
│   │
│   │
│   │
│   │
│   │
│   │
├───┤
│ 👤│ ← профиль
└───┘
```

При сворачивании остаются только иконки, список чатов скрывается.

### API для получения истории:

#### 10.1 Получить список всех разговоров

**URL**: `GET /api/conversations`

**Response**:
```json
[
  {
    "conversationId": "conv-123",
    "title": "Расписание на текущую неделю",
    "createdAt": "2025-10-09T10:30:00Z",
    "updatedAt": "2025-10-09T10:32:00Z"
  },
  {
    "conversationId": "conv-124",
    "title": "Информация о преподавателях",
    "createdAt": "2025-10-08T14:20:00Z",
    "updatedAt": "2025-10-08T14:25:00Z"
  }
]
```

**Группировка по датам** (фронтенд):
- "Сегодня" — `createdAt` = сегодня
- "Вчера" — `createdAt` = вчера
- "На этой неделе" — `createdAt` в пределах текущей недели
- "Ранее" — старше недели

#### 10.2 Получить сообщения конкретного разговора

**URL**: `GET /api/conversations/{conversationId}/messages`

**Response** (Stream, порядок хронологический):
```json
[
  {
    "messageId": "msg-1",
    "conversationId": "conv-123",
    "role": "USER",
    "content": "Покажи расписание на текущую неделю",
    "timestamp": "2025-10-09T10:30:00Z"
  },
  {
    "messageId": "msg-2",
    "conversationId": "conv-123",
    "role": "ASSISTANT",
    "content": "# 📅 РАСПИСАНИЕ ЗАНЯТИЙ\n\n...",
    "timestamp": "2025-10-09T10:32:00Z"
  }
]
```

#### 10.3 Генерация заголовка для нового разговора

**URL**: `POST /api/conversations/{conversationId}/generate-title`

**Body**:
```json
{
  "message": "первое сообщение пользователя"
}
```

**Response**:
```json
"Расписание на текущую неделю"
```

> Вызывается автоматически при создании нового разговора.

---

## 11. Интерфейс ввода запроса (как у ChatGPT)

Внизу экрана располагается область ввода с расширенными настройками.

### Структура:

```
┌──────────────────────────────────────────────────────────┐
│  Спросите что-нибудь...                                  │
│                                                          │
│  [+]  [Extended ▼]                          [🎤]  [🔇]  │
└──────────────────────────────────────────────────────────┘
```

**Элементы**:
- **Текстовое поле**: Многострочный input для запроса (auto-resize при наборе)
- **[+]**: Кнопка прикрепления файлов (для будущих обновлений, пока неактивна)
- **[Extended ▼]**: Раскрывающееся меню с настройками (см. ниже)
- **[🎤]**: Голосовой ввод (Speech-to-Text)
- **[🔇]**: Кнопка "Стоп" для озвучки (появляется только когда VRM говорит)

### Меню "Extended" (развёрнутое):

```
┌───────────────────────────────────────┐
│  Режим                                │
│  ○ Обычный    ● Агенты                │ ← радиокнопки
│                                       │
│  Провайдеры (только для режима       │
│             "Агенты"):                │
│  Solver:      [groq        ▼]        │ ← выпадающие списки
│  Verifier:    [groq        ▼]        │
│                                       │
│  Детализация:                         │
│  ☑ Показывать мысли агента           │ ← чекбокс
│     (visibility: conversation)        │
│  ☐ Режим отладки (trace)             │
│                                       │
│  [Сохранить настройки]                │
└───────────────────────────────────────┘
```

**Логика**:
- Если выбран "Обычный" режим → блок "Провайдеры" становится неактивным (greyed out)
- Если выбран "Агенты" + снят чекбокс "Показывать мысли" → используется `visibility: hint`
- Если выбран "Агенты" + установлен чекбокс "Показывать мысли" → используется `visibility: conversation`
- Чекбокс "Режим отладки" → переключает на `visibility: trace` (для разработчиков)

### Сохранение настроек:

Настройки сохраняются в `localStorage`:
```javascript
const settings = {
  mode: 'agents', // 'simple' или 'agents'
  solverProvider: 'groq',
  verifierProvider: 'groq',
  showThinking: true, // показывать мысли
  debug: false // режим trace
};

localStorage.setItem('orchestraSettings', JSON.stringify(settings));
```

При открытии приложения — загрузить из `localStorage` и применить.

### Голосовой ввод (🎤):

```javascript
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = 'ru-RU';
recognition.continuous = false;
recognition.interimResults = false;

document.getElementById('voice-btn').addEventListener('click', () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  document.getElementById('input-field').value = transcript;
};

recognition.onerror = (error) => {
  console.error('Speech recognition error:', error);
  alert('Не удалось распознать речь. Попробуйте еще раз.');
};
```

### Стилизация (красивое оформление):

```css
.input-container {
  position: fixed;
  bottom: 0;
  left: 280px; /* ширина sidebar */
  right: 0;
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 16px 24px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
  transition: left 0.3s;
}

.input-container.sidebar-collapsed {
  left: 60px; /* ширина свёрнутого sidebar */
}

.input-field {
  width: 100%;
  min-height: 48px;
  max-height: 200px;
  padding: 12px 16px;
  border: 1px solid #d0d0d0;
  border-radius: 24px;
  font-size: 15px;
  resize: none;
  overflow-y: auto;
  transition: border-color 0.2s;
}

.input-field:focus {
  outline: none;
  border-color: #10a37f; /* цвет бренда */
  box-shadow: 0 0 0 3px rgba(16, 163, 127, 0.1);
}

.input-controls {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  align-items: center;
}

.btn-icon {
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background 0.2s;
}

.btn-icon:hover {
  background: #f0f0f0;
}

.btn-icon:active {
  background: #e0e0e0;
}

.extended-menu {
  position: absolute;
  bottom: 80px;
  left: 24px;
  background: white;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  min-width: 300px;
  z-index: 1000;
}

.extended-menu h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
  font-weight: 600;
}

.radio-group, .checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.radio-group label, .checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
}

.select-field {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  background: white;
}

.save-btn {
  width: 100%;
  padding: 10px;
  background: #10a37f;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.save-btn:hover {
  background: #0e8f6f;
}
```

---

## 12. Пример полного UX флоу (SSE режим "Агенты")

1. **Пользователь открывает приложение**:
   - Sidebar показывает историю чатов, группированную по датам
   - Внизу — область ввода с настройками
   - По центру — приветственное сообщение или последний открытый чат

2. **Пользователь вводит сообщение**: "Покажи расписание на эту неделю"
   - Нажимает Enter или кнопку отправки

3. **Фронтенд**:
   - Создает новый `conversationId` (UUID) или использует текущий
   - Отправляет `POST /api/agent/chat/{conversationId}` с настройками:
     ```json
     {
       "message": "Покажи расписание на эту неделю",
       "solverProvider": "groq",
       "verifierProvider": "groq",
       "mode": "stream",
       "visibility": "conversation"
     }
     ```
   - Открывает SSE соединение
   - Отображает сообщение пользователя в чате
   - Показывает индикатор загрузки

4. **Начинают приходить события**:

   **00:00** - `SOLVER_TOKEN` (первый токен):
   ```
   Чат:
   ┌─────────────────────────────┐
   │ User: Покажи расписание ... │
   ├─────────────────────────────┤
   │ AI: 🤖 Думает... 0s  ▼      │ ← кнопка аккордеона появилась
   │                             │
   │ [Печатающий курсор ▌]       │
   └─────────────────────────────┘
   ```

   Внутри аккордеона (если развернуть):
   ```
   💭 Solver
   ┌──────────────────┐
   │ #                │ ← streaming в реальном времени
   └──────────────────┘
   ```

   **00:01-01:30** - Продолжают приходить `SOLVER_TOKEN`:
   ```
   💭 Solver
   ┌────────────────────────────────┐
   │ # 📅 РАСПИСАНИЕ ЗАНЯТИЙ        │
   │                                │
   │ ## Понедельник                 │
   │ - 8:00-9:30 Математика...      │
   │ [продолжает печататься]        │
   └────────────────────────────────┘
   ```

   **01:45** - `DRAFT_READY`:
   ```
   💭 Solver
   ┌────────────────────────────────┐
   │ # 📅 РАСПИСАНИЕ ЗАНЯТИЙ        │
   │ ... (полный черновик)          │
   └────────────────────────────────┘
   
   ✅ Черновик готов
   ```

   **01:46** - `VERIFICATION_STARTED`:
   ```
   🔍 Verifier проверяет...  ⏳
   ```

   **01:47-02:00** - `VERIFICATION_PROGRESS` (обновляет текст):
   ```
   🔍 Verifier проверяет факты...  ⏳
   ```

   Если Verifier работает медленно (ollama), пользователь видит анимированный спиннер `⏳` и понимает, что процесс идёт.

   **02:05** - `VERIFICATION_FEEDBACK` (ok: false):
   ```
   ❌ Verifier
   Требуются изменения:
   • Нужно указать преподавателей
   • Добавить номера аудиторий
   ```

   **02:06** - Разделитель и новая итерация (автоматически, без явного "Итерация 2"):
   ```
   ───────────────────────────────────
   
   💭 Solver
   ┌────────────────────────────────┐
   │ # 📅 РАСПИСАНИЕ...             │ ← новый черновик
   │ ... (с учётом замечаний)       │
   └────────────────────────────────┘
   ```

   **03:30** - Вторая проверка пройдена:
   ```
   ✅ Verifier
   Всё верно! Ответ точный и полный.
   ```

   **03:35** - `FINAL_ANSWER`:
   ```
   Чат:
   ┌─────────────────────────────┐
   │ AI: 🤖 Думал 3m 35s  ▼      │ ← время обновилось
   │                             │
   │ # 📅 РАСПИСАНИЕ ЗАНЯТИЙ     │
   │                             │
   │ ## Понедельник              │
   │ - 8:00-9:30 Математика      │
   │   (ауд. 204, проф. Иванов)  │
   │ ...                         │
   └─────────────────────────────┘
   ```

5. **VRM автоматически озвучивает `summary`**:
   - Появляется кнопка "🔇 Остановить"
   - VRM анимирует губы
   - Говорит: "Расписание на текущую неделю включает 3 занятия."

6. **SSE соединение закрывается**

7. **Пользователь может**:
   - Раскрыть аккордеон "🤖 Думал 3m 35s ▼" и посмотреть весь диалог Solver ↔ Verifier
   - Нажать "🔇 Остановить" если не хочет слушать озвучку
   - Задать следующий вопрос в том же разговоре
   - Или создать новый чат через sidebar

---

## 13. Обработка ошибок

### 13.1 Ошибка на уровне SSE потока

Если приходит событие `event: error`:
```json
{
  "stage": "ERROR",
  "message": "Agent processing error: timeout"
}
```

**UI**:
- Показать toast/уведомление: "Произошла ошибка: timeout"
- Закрыть индикатор "думает"
- Предложить повторить запрос

### 13.2 Ошибка сети (SSE разрыв)

Если соединение оборвалось до получения `FINAL_ANSWER`:

```javascript
eventSource.onerror = (error) => {
  console.error('SSE connection error:', error);
  showErrorMessage('Соединение с сервером прервано. Пожалуйста, попробуйте еще раз.');
};
```

### 13.3 Пустой ответ (envelope режим)

Если `/api/agent/chat/envelope` вернул `{"answer": null, "summary": null}`:
- Показать: "Не удалось получить ответ. Попробуйте переформулировать запрос."

---

## 14. Рекомендации по производительности

1. **Используйте `visibility: hint` для простых запросов** — меньше событий, меньше нагрузка на рендеринг

2. **Debounce для streaming токенов** — не обновлять DOM на каждый токен, а батчить (например, раз в 50ms):
   ```javascript
   let tokenBuffer = '';
   let updateTimer;
   
   eventSource.addEventListener('solver_token', (e) => {
     tokenBuffer += e.data.message;
     clearTimeout(updateTimer);
     updateTimer = setTimeout(() => {
       updateDraftDisplay(tokenBuffer);
       tokenBuffer = '';
     }, 50);
   });
   ```

3. **Lazy loading для истории чатов** — загружать по 20 разговоров при скролле

4. **Кэшировать Mermaid рендеры** — если пользователь скроллит назад, не перерендеривать диаграмму

5. **Offload тяжелых операций в Web Worker** — парсинг больших Markdown документов

---

## 15. Примеры JSON запросов

### 15.1 Простой запрос (агенты, streaming, trace)

```json
POST /api/agent/chat/conv-abc-123
{
  "message": "Расскажи о Филологическом факультете"
}
```

### 15.2 С выбором провайдеров

```json
POST /api/agent/chat/conv-abc-123
{
  "message": "Какие есть кафедры?",
  "solverProvider": "groq",
  "verifierProvider": "ollama",
  "visibility": "trace"
}
```

### 15.3 Блокирующий режим (без SSE)

```json
POST /api/agent/chat/envelope/conv-abc-123
{
  "message": "Покажи расписание",
  "mode": "blocking",
  "visibility": "hint"
}
```

### 15.4 Обычный режим (без агентов)

```
GET /api/chat/simple-json/conv-abc-123/Что%20такое%20ЕНУ?
```

Response:
```json
{
  "answer": "ЕНУ — Евразийский национальный университет...",
  "summary": "ЕНУ — крупнейший университет Казахстана."
}
```

---

## 16. Итоговая архитектура фронтенда

```
┌────────────────────────────────────────────────────────────────────┐
│                         Orchestra UI                               │
├────────────┬───────────────────────────────────────────────────────┤
│            │                                                       │
│  SIDEBAR   │                   MAIN CHAT AREA                     │
│  (280px)   │                                                       │
│            │  ┌─────────────────────────────────────────────────┐ │
│  ☰ Orches- │  │ User: Покажи расписание на эту неделю           │ │
│    tra     │  ├─────────────────────────────────────────────────┤ │
│            │  │ AI: 🤖 Думал 2m 17s  ▼                          │ │
│  ✏️ Новый  │  │     [Аккордеон раскрывается при клике]         │ │
│    чат     │  │                                                 │ │
│            │  │     # 📅 РАСПИСАНИЕ ЗАНЯТИЙ                    │ │
│  🔍 Поиск  │  │                                                 │ │
│            │  │     ## Понедельник                              │ │
│  Сегодня   │  │     - 8:00-9:30 Математика                     │ │
│  ────────  │  │       (ауд. 204, проф. Иванов И.И.)            │ │
│  📅 Распи- │◄─┼─┐   - 10:00-11:30 Физика                       │ │
│    сание   │  │ │     (ауд. 305, проф. Петров П.П.)            │ │
│  📚 Препо- │  │ │                                               │ │
│    даватели│  │ │   ## Вторник                                  │ │
│            │  │ │   ...                                         │ │
│  Вчера     │  └─┼───────────────────────────────────────────────┘ │
│  ────────  │    │                                                 │
│  🏛️ Факул- │    └─ активный разговор                             │
│    ьтет    │                                                     │
│            │                                                     │
│  [scroll]  │                                                     │
│            │                                                     │
│  👤 adik   │                                                     │
│     adikkk │                                                     │
│     Plus   │                                                     │
└────────────┴─────────────────────────────────────────────────────┘
│                                                                   │
│  INPUT AREA                                                       │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Спросите что-нибудь...                                      │ │
│  │                                                             │ │
│  │ [+]  [Extended ▼]                          [🎤]  [🔇]      │ │
│  └─────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────┘
                              ↓
                    ┌──────────────────┐
                    │   VRM AVATAR     │
                    │   (озвучка)      │
                    │                  │
                    │     🔇 Стоп      │ ← кнопка появляется при озвучке
                    └──────────────────┘
```

### Свёрнутый sidebar (60px):

```
┌───┬────────────────────────────────────────────────────────────────┐
│   │                                                                │
│ ☰ │                     MAIN CHAT AREA                            │
│───│                  (занимает всю ширину)                         │
│ ✏️│                                                                │
│───│                                                                │
│ 🔍│                                                                │
│   │                                                                │
│   │                                                                │
│   │                                                                │
│   │                                                                │
│   │                                                                │
│   │                                                                │
│ 👤│                                                                │
└───┴────────────────────────────────────────────────────────────────┘
```

### Extended меню (раскрытое):

```
┌───────────────────────────────────┐
│  Режим                            │
│  ○ Обычный    ● Агенты            │
│                                   │
│  Провайдеры:                      │
│  Solver:      [groq        ▼]    │
│  Verifier:    [groq        ▼]    │
│                                   │
│  Детализация:                     │
│  ☑ Показывать мысли агента       │
│  ☐ Режим отладки (trace)         │
│                                   │
│  [Сохранить настройки]            │
└───────────────────────────────────┘
       ↑
       └─ появляется над полем ввода при клике на [Extended ▼]
```

---

## 17. Checklist для разработчика фронтенда

### Основной функционал:
- [ ] **Sidebar с историей чатов**
  - [ ] Сворачивание/разворачивание (280px ↔ 60px)
  - [ ] Группировка по датам (Сегодня, Вчера, На этой неделе, Ранее)
  - [ ] Кнопка "Новый чат"
  - [ ] Поиск по заголовкам
  - [ ] Загрузка истории из API (`GET /api/conversations`)
  - [ ] Подсветка активного разговора

- [ ] **Интерфейс ввода (как у ChatGPT)**
  - [ ] Многострочное текстовое поле с auto-resize
  - [ ] Меню "Extended" с настройками:
    - [ ] Выбор режима (Обычный / Агенты)
    - [ ] Выбор провайдеров (Solver, Verifier)
    - [ ] Чекбокс "Показывать мысли агента" (visibility: conversation/hint)
    - [ ] Чекбокс "Режим отладки" (visibility: trace)
    - [ ] Сохранение в localStorage
  - [ ] Голосовой ввод (🎤) через Web Speech API
  - [ ] Кнопка прикрепления файлов (заглушка на будущее)

- [ ] **Режим "Обычный"**
  - [ ] Интеграция с `GET /api/chat/simple-json/{conversationId}/{message}`
  - [ ] Отображение ответа в виде Markdown
  - [ ] Автоматическая озвучка `summary` через VRM

- [ ] **Режим "Агенты" (SSE)**
  - [ ] SSE клиент с обработкой всех стадий
  - [ ] Обработка событий для `visibility: conversation`:
    - [ ] `SOLVER_TOKEN` → streaming в реальном времени
    - [ ] `DRAFT_READY` → статус "✅ Черновик готов"
    - [ ] `VERIFICATION_STARTED` → статус "🔍 Verifier проверяет... ⏳"
    - [ ] `VERIFICATION_PROGRESS` → обновление текста индикатора
    - [ ] `VERIFICATION_FEEDBACK` → результат проверки (✅/❌)
    - [ ] `FINAL_ANSWER` → финальный ответ + озвучка
    - [ ] `ERROR` → показ ошибки
  - [ ] Индикатор загрузки для медленных моделей (анимированный спиннер ⏳)
  - [ ] Разделитель между итерациями (тонкая линия)

- [ ] **Аккордеон "Мысли агента"**
  - [ ] Кнопка disclosure toggle: "🤖 Думал Xm Xs ▼"
  - [ ] Подсчёт времени от начала запроса до `FINAL_ANSWER`
  - [ ] Accessibility: `aria-expanded`, `aria-controls`
  - [ ] Отображение диалога Solver ↔ Verifier:
    - [ ] Блок Solver с streaming токенами
    - [ ] Блок Verifier с результатом проверки
    - [ ] Несколько итераций (если были)
  - [ ] Анимация открытия/закрытия

- [ ] **Отображение ответов**
  - [ ] Парсинг и рендеринг Markdown (библиотека `marked` или `markdown-it`)
  - [ ] Поддержка эмодзи
  - [ ] Красивая стилизация (заголовки, списки, цитаты)
  - [ ] Fallback на `<pre>` если парсинг сломался

- [ ] **VRM и озвучка**
  - [ ] Автоматический запуск озвучки `summary` при получении `FINAL_ANSWER`
  - [ ] Кнопка "🔇 Остановить" (появляется только во время озвучки)
  - [ ] Анимация губ VRM персонажа
  - [ ] Прерывание текущей озвучки при новом сообщении
  - [ ] Обработка ошибок TTS

- [ ] **История разговоров**
  - [ ] Загрузка списка разговоров с группировкой по датам
  - [ ] Загрузка сообщений конкретного разговора
  - [ ] Генерация заголовка для нового разговора
  - [ ] Сохранение контекста при переключении между чатами

### Обработка ошибок:
- [ ] Ошибка SSE потока (событие `ERROR`)
- [ ] Разрыв SSE соединения (reconnection logic)
- [ ] Пустой ответ в envelope режиме
- [ ] Ошибка TTS (Web Speech API)
- [ ] Ошибка парсинга Markdown
- [ ] Таймауты запросов
- [ ] Отображение user-friendly сообщений об ошибках

### UI/UX детали:
- [ ] Индикаторы загрузки ("думает...", "проверяет...")
- [ ] Smooth scroll при добавлении нового сообщения
- [ ] Анимация появления сообщений
- [ ] Typewriter-эффект для streaming токенов
- [ ] Hover-эффекты для кнопок и элементов списка
- [ ] Focus states для accessibility
- [ ] Keyboard shortcuts (Enter для отправки, Escape для закрытия меню)

### Адаптивность и accessibility:
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Адаптация sidebar (скрыт на мобильных, overlay на планшетах)
- [ ] Touch gestures (swipe для открытия sidebar на мобильных)
- [ ] ARIA атрибуты для всех интерактивных элементов
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] High contrast mode support

### Производительность:
- [ ] Debounce для streaming токенов (обновление DOM раз в 50ms)
- [ ] Virtual scrolling для длинных списков чатов (если > 100 разговоров)
- [ ] Lazy loading истории сообщений
- [ ] Кэширование Markdown рендеров
- [ ] Web Worker для парсинга больших Markdown документов (опционально)

### Дополнительно:
- [ ] Темная тема (опционально)
- [ ] Экспорт разговора в PDF/TXT (опционально)
- [ ] Копирование сообщений в буфер обмена
- [ ] Редактирование/удаление сообщений (если поддерживается бэкендом)

---

## 18. Часто задаваемые вопросы

**Q: Что делать если Mermaid рендеринг сломался?**  
A: Обернуть блок в `<details>` с исходным кодом диаграммы:
```html
<details>
  <summary>⚠️ Ошибка рендеринга. Показать код</summary>
  <pre><code>graph TD...</code></pre>
</details>
```

**Q: Можно ли отменить запрос если пользователь передумал?**  
A: Да, закрыть SSE соединение:
```javascript
eventSource.close();
```
Бэкенд получит событие `cancel` и остановит обработку.

**Q: Как понять что пользователь кликнул на старый разговор?**  
A: При клике на элемент в sidebar:
1. Взять `conversationId` из элемента
2. Загрузить историю: `GET /api/conversations/{conversationId}/messages`
3. Отобразить в чате
4. При отправке нового сообщения использовать тот же `conversationId`

**Q: Сохраняется ли контекст между сообщениями в одном разговоре?**  
A: Да! Solver и Verifier используют `ChatMemory`, привязанную к `conversationId`. Поэтому агент "помнит" предыдущие сообщения в рамках одного разговора.

**Q: Можно ли изменить количество итераций верификации?**  
A: Нет, это hardcoded в `AgentOrchestrator` (максимум 3 итерации). Если нужно больше — требуется изменение на бэкенде.

---

## 19. Дополнительные материалы

- [Спецификация Server-Sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html)
- [Markdown парсинг: marked.js](https://marked.js.org/)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [ARIA Authoring Practices: Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) (для lazy loading)

---

## 20. Примеры JavaScript кода

### 20.1 SSE клиент (упрощённая версия)

```javascript
async function sendAgentMessage(conversationId, message, settings) {
  const url = `/api/agent/chat/${conversationId}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      solverProvider: settings.solverProvider || 'groq',
      verifierProvider: settings.verifierProvider || 'groq',
      mode: 'stream',
      visibility: settings.showThinking ? 'conversation' : 'hint'
    })
  });

  const eventSource = new EventSource(url);
  const startTime = Date.now();

  eventSource.addEventListener('solver_token', (e) => {
    const event = JSON.parse(e.data);
    onSolverToken(event.message);
  });

  eventSource.addEventListener('verification_progress', (e) => {
    const event = JSON.parse(e.data);
    updateVerifierStatus(event.message);
  });

  eventSource.addEventListener('final_answer', (e) => {
    const event = JSON.parse(e.data);
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    displayFinalAnswer(event.data.answer, elapsed);
    speakWithVRM(event.data.summary);
    eventSource.close();
  });

  eventSource.addEventListener('error', (e) => {
    const event = e.data ? JSON.parse(e.data) : {};
    showError(event.message || 'Ошибка соединения');
    eventSource.close();
  });
}
```

### 20.2 VRM озвучка с кнопкой "Стоп"

```javascript
let currentUtterance = null;

function speakWithVRM(text) {
  // Остановить предыдущую озвучку
  if (currentUtterance) {
    speechSynthesis.cancel();
  }
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ru-RU';
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  
  utterance.onstart = () => {
    document.getElementById('vrm-avatar').classList.add('talking');
    document.getElementById('stop-speech-btn').hidden = false;
  };
  
  utterance.onend = () => {
    document.getElementById('vrm-avatar').classList.remove('talking');
    document.getElementById('stop-speech-btn').hidden = true;
  };
  
  utterance.onerror = (error) => {
    console.error('TTS error:', error);
    document.getElementById('stop-speech-btn').hidden = true;
  };
  
  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  speechSynthesis.cancel();
  document.getElementById('vrm-avatar').classList.remove('talking');
  document.getElementById('stop-speech-btn').hidden = true;
}
```

### 20.3 Sidebar с группировкой по датам

```javascript
function groupConversationsByDate(conversations) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 7);

  const groups = {
    'Сегодня': [],
    'Вчера': [],
    'На этой неделе': [],
    'Ранее': []
  };

  conversations.forEach(conv => {
    const date = new Date(conv.createdAt);
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    if (dateOnly.getTime() === today.getTime()) {
      groups['Сегодня'].push(conv);
    } else if (dateOnly.getTime() === yesterday.getTime()) {
      groups['Вчера'].push(conv);
    } else if (dateOnly >= weekAgo) {
      groups['На этой неделе'].push(conv);
    } else {
      groups['Ранее'].push(conv);
    }
  });

  return groups;
}

async function loadConversations() {
  const response = await fetch('/api/conversations');
  const conversations = await response.json();
  const groups = groupConversationsByDate(conversations);
  
  let html = '';
  Object.entries(groups).forEach(([groupName, convs]) => {
    if (convs.length === 0) return;
    
    html += `<div class="group-header">${groupName}</div>`;
    convs.forEach(conv => {
      html += `
        <div class="conversation-item" onclick="selectConversation('${conv.conversationId}')">
          <span class="conv-icon">💬</span>
          <span class="conv-title">${truncate(conv.title, 30)}</span>
        </div>
      `;
    });
  });
  
  document.getElementById('conversations-list').innerHTML = html;
}

function truncate(text, maxLength) {
  return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
}
```

---

## Приложение: Спецификация нового уровня visibility

### Необходимые изменения на бэкенде

Для поддержки режима `visibility: conversation` нужно добавить новое значение в enum `AgentVisibility`:

```java
// AgentVisibility.java
public enum AgentVisibility {
    TRACE,        // все события (для отладки)
    CONVERSATION, // только диалог Solver ↔ Verifier (для UI)
    HINT;         // только финальный ответ

    public static AgentVisibility from(String value, AgentVisibility defaultVisibility) {
        if (value == null || value.isBlank()) {
            return defaultVisibility;
        }
        try {
            return AgentVisibility.valueOf(value.trim().toUpperCase(Locale.ROOT));
        } catch (IllegalArgumentException ex) {
            return defaultVisibility;
        }
    }
}
```

События для каждого уровня:

| Событие | HINT | CONVERSATION | TRACE |
|---------|------|--------------|-------|
| SOLVER_TOKEN | ❌ | ✅ | ✅ |
| DRAFT_READY | ❌ | ✅ | ✅ |
| VERIFICATION_STARTED | ❌ | ✅ | ✅ |
| VERIFICATION_PROGRESS | ❌ | ✅ | ✅ |
| VERIFICATION_FEEDBACK | ❌ | ✅ | ✅ |
| FINAL_ANSWER | ✅ | ✅ | ✅ |
| ERROR | ✅ | ✅ | ✅ |
| SOLVER_STARTED | ❌ | ❌ | ✅ |
| RAG_CONTEXT | ❌ | ❌ | ✅ |
| TOOL_SELECTION | ❌ | ❌ | ✅ |
| TOOL_EXECUTION | ❌ | ❌ | ✅ |

---

**Подготовлено**: GitHub Copilot  
**Дата**: 9 октября 2025  
**Версия**: 2.0 (обновлено с учётом всех требований)

Успехов в разработке! 🚀
