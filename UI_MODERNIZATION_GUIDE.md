# UI Modernization Guide - Border Radius Update

## Проблема
Текущий интерфейс использует слишком "квадратный" дизайн с острыми углами, что создает устаревший и неприятный вид.

## Решение
Применение современных практик дизайна от Google Material Design 3, Apple HIG и Microsoft Fluent Design.

## Ключевые принципы современного UI

### 1. **Google Material Design 3**
- **Extra Small**: 4px - для мелких элементов (чипы, теги)
- **Small**: 8px - кнопки, поля ввода
- **Medium**: 12px - карточки, контейнеры
- **Large**: 16px - большие карточки
- **Extra Large**: 20-28px+ - модальные окна, основные контейнеры

### 2. **Apple Human Interface Guidelines**
- Использует более крупные радиусы (10-20px) для создания дружелюбного интерфейса
- Акцент на плавность и органичность форм
- Избегает острых углов в интерактивных элементах

### 3. **Microsoft Fluent Design**
- 4px для мелких элементов
- 8px для стандартных компонентов
- 12-16px для карточек и контейнеров

## Таблица замены классов

### Старые → Новые классы

| Старый класс | Новый класс | Использование | Пиксели |
|--------------|-------------|---------------|---------|
| `rounded-8` | `rounded-lg` | Кнопки, инпуты, мелкие карточки | 8px → 16px |
| `rounded-12` | `rounded-xl` | Средние карточки, формы | 12px → 20px |
| `rounded-16` | `rounded-2xl` | Большие карточки, модальные окна | 16px → 24px |
| `rounded-20` | `rounded-2xl` | Крупные контейнеры | 20px → 24px |
| `rounded-24` | `rounded-3xl` | Главные контейнеры, hero секции | 24px → 32px |
| `rounded-t-8` | `rounded-t-lg` | Верхние углы карточек | 8px → 16px |
| `rounded-t-16` | `rounded-t-2xl` | Верхние углы больших карточек | 16px → 24px |
| `rounded-t-24` | `rounded-t-3xl` | Верхние углы контейнеров | 24px → 32px |
| `rounded-b-8` | `rounded-b-lg` | Нижние углы карточек | 8px → 16px |

### Новые тени (вместо sharp shadows)

| Старая тень | Новая тень | Использование |
|-------------|------------|---------------|
| `shadow-sm` | `shadow-soft` | Мягкая тень для hover эффектов |
| `shadow-md` | `shadow-soft-md` | Карточки и контейнеры |
| `shadow-lg` | `shadow-soft-lg` | Модальные окна |
| `shadow-xl` | `shadow-soft-xl` | Выпадающие меню |

## План обновления компонентов

### Приоритет 1: Основные интерактивные элементы
- ✅ `messageInput.tsx` - главное поле ввода
- ✅ `sidebar/Sidebar.tsx` - боковая панель
- ✅ `introduction.tsx` - модальное окно приветствия

### Приоритет 2: Контейнеры и карточки
- ✅ `chat/ChatViewport.tsx` - область чата
- ✅ `chatLog.tsx` - сообщения в чате
- ✅ `thinking/ThinkingPanel.tsx` - панель размышлений

### Приоритет 3: Вспомогательные элементы
- ✅ `settings.tsx` - настройки
- ✅ `iconButton.tsx` - иконочные кнопки
- ✅ `textButton.tsx` - текстовые кнопки
- ✅ `messageInputContainer.tsx` - контейнер ввода

## Дополнительные улучшения

### 1. Добавить transition для hover эффектов
```tsx
className="transition-all duration-200 ease-out"
```

### 2. Использовать мягкие тени
```tsx
className="shadow-soft hover:shadow-soft-md"
```

### 3. Добавить subtle градиенты для глубины
```tsx
className="bg-gradient-to-b from-white to-white/95"
```

## Примеры до/после

### Кнопка
```tsx
// ❌ Старое (квадратное)
<button className="rounded-8 bg-secondary px-12 py-8">

// ✅ Новое (современное)
<button className="rounded-lg bg-secondary px-12 py-8 shadow-soft hover:shadow-soft-md transition-all duration-200">
```

### Карточка
```tsx
// ❌ Старое
<div className="rounded-16 border border-surface1-hover bg-white">

// ✅ Новое
<div className="rounded-2xl border border-surface1-hover bg-white shadow-soft">
```

### Модальное окно
```tsx
// ❌ Старое
<div className="rounded-16 bg-white p-24">

// ✅ Новое
<div className="rounded-3xl bg-white p-24 shadow-soft-xl">
```

## Источники и references
- [Material Design 3 - Shape](https://m3.material.io/styles/shape/overview)
- [Apple HIG - Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Microsoft Fluent 2](https://fluent2.microsoft.design/)
