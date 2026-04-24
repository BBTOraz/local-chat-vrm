# 🎨 Quick Reference: Modern UI Classes

## Быстрый справочник по новым классам

Используйте этот файл при добавлении новых компонентов, чтобы сохранить современный вид интерфейса.

---

## 📐 Border Radius (Скругление углов)

### Основные правила:
- **Маленькие элементы** (теги, чипы) → `rounded-lg` (16px)
- **Средние элементы** (кнопки, поля) → `rounded-xl` (20px)  
- **Большие элементы** (карточки) → `rounded-2xl` (24px)
- **Огромные элементы** (модалы, контейнеры) → `rounded-3xl` (32px)
- **Круглые элементы** (аватары, иконки) → `rounded-full`

### Примеры использования:

```tsx
// ✅ Кнопка
<button className="rounded-xl px-16 py-8 bg-secondary">
  Нажми меня
</button>

// ✅ Поле ввода
<input className="rounded-xl border border-surface1-hover px-12 py-8" />

// ✅ Карточка
<div className="rounded-2xl border border-surface1-hover bg-white p-24">
  Контент карточки
</div>

// ✅ Модальное окно
<div className="rounded-3xl bg-white p-24 shadow-soft-xl">
  Модальное окно
</div>

// ✅ Аватар / круглая иконка
<div className="rounded-full w-10 h-10 bg-primary">
  A
</div>
```

### Частичное скругление:

```tsx
// Верхние углы (например, для заголовка карточки)
<div className="rounded-t-2xl bg-secondary text-white">
  Заголовок
</div>

// Нижние углы
<div className="rounded-b-2xl bg-white">
  Контент
</div>
```

---

## 🌑 Shadows (Тени)

### Основные правила:
- **Hover эффекты** → `shadow-soft`
- **Карточки** → `shadow-soft-md`
- **Большие контейнеры** → `shadow-soft-lg`
- **Модальные окна, dropdowns** → `shadow-soft-xl`

### Примеры использования:

```tsx
// ✅ Кнопка с тенью
<button className="shadow-soft hover:shadow-soft-md transition-all">
  Кнопка
</button>

// ✅ Карточка
<div className="shadow-soft-md hover:shadow-soft-lg transition-all">
  Карточка с тенью
</div>

// ✅ Модальное окно
<div className="shadow-soft-xl">
  Модал
</div>

// ✅ Элемент без тени (плоский дизайн)
<div className="shadow-none">
  Без тени
</div>
```

---

## ⚡ Transitions (Анимации)

### Основное правило:
**Всегда добавляйте transitions к интерактивным элементам!**

### Стандартный transition:
```tsx
className="transition-all duration-200"
```

### Примеры использования:

```tsx
// ✅ Кнопка с плавным hover
<button className="bg-secondary hover:bg-secondary-hover transition-all duration-200">
  Hover me
</button>

// ✅ Карточка с плавной тенью
<div className="shadow-soft hover:shadow-soft-md transition-all duration-200">
  Наведи на меня
</div>

// ✅ Раскрывающийся элемент
<div className={`transition-all duration-300 ${isOpen ? 'h-auto' : 'h-0'}`}>
  Контент
</div>
```

---

## 🎯 Комплексные примеры

### Кнопка (полный пример):
```tsx
<button
  className="
    rounded-xl
    bg-secondary
    hover:bg-secondary-hover
    active:bg-secondary-press
    disabled:bg-secondary-disabled
    text-white
    px-16 py-8
    shadow-soft
    hover:shadow-soft-md
    transition-all duration-200
    font-semibold
  "
>
  Современная кнопка
</button>
```

### Карточка сообщения:
```tsx
<article className="
  rounded-2xl
  border border-surface1-hover
  bg-white
  shadow-soft
  hover:shadow-soft-md
  transition-all duration-200
">
  <header className="
    rounded-t-2xl
    bg-secondary
    text-white
    px-20 py-12
    font-semibold
  ">
    Заголовок
  </header>
  <div className="px-20 py-16">
    Содержимое карточки
  </div>
</article>
```

### Поле ввода:
```tsx
<input
  type="text"
  className="
    w-full
    rounded-xl
    border border-surface1-hover
    bg-surface0
    px-12 py-8
    focus:border-secondary
    focus:outline-none
    transition-all duration-200
  "
  placeholder="Введите текст..."
/>
```

### Модальное окно:
```tsx
<div className="
  fixed inset-0
  bg-black/30
  flex items-center justify-center
  z-40
">
  <div className="
    rounded-3xl
    bg-white
    p-24
    shadow-soft-xl
    max-w-2xl
    w-full
  ">
    <h2 className="text-2xl font-bold mb-16">Заголовок модала</h2>
    <p className="mb-24">Контент...</p>
    <button className="
      rounded-xl
      bg-secondary
      text-white
      px-24 py-8
      shadow-soft
      hover:shadow-soft-md
      transition-all duration-200
    ">
      Закрыть
    </button>
  </div>
</div>
```

---

## ❌ Что НЕ делать

```tsx
// ❌ НЕ используйте старые классы
<button className="rounded-8">      // ПЛОХО
<button className="rounded-12">     // ПЛОХО
<button className="rounded-16">     // ПЛОХО
<button className="rounded-24">     // ПЛОХО

// ✅ Используйте новые
<button className="rounded-lg">     // ХОРОШО
<button className="rounded-xl">     // ХОРОШО
<button className="rounded-2xl">    // ХОРОШО
<button className="rounded-3xl">    // ХОРОШО

// ❌ НЕ забывайте transitions
<button className="bg-primary">     // ПЛОХО (нет transition)

// ✅ Всегда добавляйте
<button className="bg-primary transition-all duration-200">  // ХОРОШО

// ❌ НЕ используйте жесткие тени
<div className="shadow-md">          // ПЛОХО (жесткая)

// ✅ Используйте мягкие
<div className="shadow-soft-md">     // ХОРОШО (мягкая)
```

---

## 📊 Шпаргалка по размерам

| Элемент | Border Radius | Shadow | Transition |
|---------|---------------|--------|------------|
| Маленькая кнопка | `rounded-xl` | `shadow-soft` | ✅ |
| Большая кнопка | `rounded-xl` | `shadow-soft` | ✅ |
| Поле ввода | `rounded-xl` | `shadow-none` | ✅ |
| Мини карточка | `rounded-xl` | `shadow-soft` | ✅ |
| Обычная карточка | `rounded-2xl` | `shadow-soft-md` | ✅ |
| Большая карточка | `rounded-2xl` | `shadow-soft-lg` | ✅ |
| Модальное окно | `rounded-3xl` | `shadow-soft-xl` | ✅ |
| Dropdown меню | `rounded-xl` | `shadow-soft-xl` | ✅ |
| Тултип | `rounded-lg` | `shadow-soft-md` | ✅ |
| Аватар | `rounded-full` | `shadow-soft` | ❌ |
| Чип/тег | `rounded-lg` | `shadow-none` | ✅ |

---

## 💡 Советы

1. **Консистентность**: Используйте одинаковые классы для похожих элементов
2. **Иерархия**: Большие элементы = больше радиус
3. **Transitions**: Добавляйте везде, где есть hover/active состояния
4. **Тени**: Используйте для создания глубины, но не переборщите
5. **Тестирование**: Проверяйте как выглядит на светлом и темном фоне

---

## 🔗 Дополнительные ресурсы

- `UI_MODERNIZATION_GUIDE.md` - Полное руководство
- `UI_MODERNIZATION_REPORT.md` - Детальный отчет
- `VISUAL_IMPROVEMENTS.md` - Визуальные диаграммы
- `tailwind.config.js` - Конфигурация Tailwind

---

**Создано:** 13 октября 2025  
**Для:** local-chat-vrm project  
**Автор:** GitHub Copilot
