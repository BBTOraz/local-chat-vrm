# ПРОФЕССИОНАЛЬНЫЙ ПРОМПТ ДЛЯ UI/UX ДИЗАЙНА VRM CHATBOT (ENU THEME)

## 🎯 ЗАДАЧА
Создать визуально привлекательный, интуитивно понятный интерфейс для VRM chatbot'а на основе референса ogp.png с использованием цветовой палитры Евразийского национального университета (ENU).

---

## 🎨 ЦВЕТОВАЯ ПАЛИТРА ENU

### Основные цвета:
- **Primary Blue:** `#1B78BD` - официальный синий ЕНУ (для акцентов, кнопок, заголовков)
- **Light Blue:** `#4FC3F7` - светлый голубой (для hover состояний)
- **Accent Gold:** `#FFB800` - университетский золотой (для важных элементов)

### Фоновые оттенки:
- **Background:** очень светлый градиент `#F8FCFF` → `#EFF7FB` (едва заметный, воздушный)
- **Surface:** `#FFFFFF` (белый для карточек)
- **Border:** `#E8F1F8` (мягкий голубой)

### Текстовые цвета:
- **Primary text:** `#2C3E50` (тёмно-серый, читабельный)
- **Secondary text:** `#607D8B` (средний серый)
- **Light text:** `#FFFFFF` (белый на синем)

---

## 📐 РЕФЕРЕНС АНАЛИЗ (ogp.png)

### Layout Structure:
```
┌─────────────────────────────────────────┐
│ [会話ログ]              [Fork me GitHub]│
│                                         │
│  ┌─────────────┐                       │
│  │   YOU       │                       │
│  │ привет      │         VRM           │
│  └─────────────┘       CHARACTER       │
│                        (справа,        │
│  ┌─────────────┐       60% экрана)    │
│  │ CHARACTER   │                       │
│  │ Получено    │                       │
│  └─────────────┘                       │
│                                         │
│  ┌─────────────┐                       │
│  │   YOU       │                       │
│  │ ...         │                       │
│  └─────────────┘                       │
│                                         │
│ ┌──────────────────────────────────────┤
│ │🎤 [Введите сообщение...]        [>] │
│ └──────────────────────────────────────┘
└─────────────────────────────────────────┘
```

### Ключевые визуальные характеристики референса:
1. **Chat bubbles (пузыри чата):**
   - Большие, занимают ~80% ширины чат-панели
   - Заголовок отдельным блоком (YOU / CHARACTER)
   - Мягкие закругления (border-radius: 20px)
   - Выраженные тени для глубины
   - Комфортные отступы (padding: 20px)

2. **Размещение:**
   - Чат слева (~40% ширины экрана)
   - VRM персонаж справа (~60%)
   - Фон НЕ отвлекает от контента

3. **Стиль:**
   - Чистый, минималистичный
   - Отсутствие лишних элементов
   - Четкая визуальная иерархия
   - Приятные пастельные тона

---

## 🚀 ДЕТАЛЬНЫЕ ТРЕБОВАНИЯ К UI/UX

### 1. CHAT PANEL (Панель чата)

**Positioning:**
```css
position: fixed;
left: 0;
top: 0;
width: 450px; /* Фиксированная ширина */
height: 100vh;
padding: 120px 24px 160px; /* Отступы для меню и инпута */
overflow-y: auto;
```

**Chat Bubble Design (YOU):**
```
Структура:
┌────────────────────────────┐
│ YOU                        │ ← Header (бежевый #F5DEB3)
├────────────────────────────┤
│                            │
│  Текст сообщения...        │ ← Body (белый #FFFFFF)
│  С комфортными отступами   │
│                            │
└────────────────────────────┘

Стили:
- Header: background #F5DEB3, color #8B7355, padding 12px 24px, bold
- Body: background #FFFFFF, padding 20px 24px, line-height 1.6
- Border radius: 20px (мягкие углы)
- Box shadow: 0 4px 16px rgba(27, 120, 189, 0.12)
- Margin: 16px 0 (между пузырями)
- Max-width: 100% (занимает всю ширину чат-панели)
```

**Chat Bubble Design (CHARACTER):**
```
Структура:
┌────────────────────────────┐
│ CHARACTER                  │ ← Header (синий градиент ENU)
├────────────────────────────┤
│                            │
│  Текст ответа...           │ ← Body (белый #FFFFFF)
│  С комфортными отступами   │
│                            │
└────────────────────────────┘

Стили:
- Header: gradient #1B78BD → #2589CE, color #FFFFFF, padding 12px 24px, bold
- Body: background #FFFFFF, padding 20px 24px, line-height 1.6
- Border radius: 20px
- Box shadow: 0 4px 16px rgba(27, 120, 189, 0.15)
- Margin: 16px 0
```

---

### 2. INPUT PANEL (Панель ввода)

**Positioning:**
```css
position: fixed;
bottom: 0;
left: 0;
right: 0;
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
border-top: 1px solid #E8F1F8;
padding: 20px 24px;
z-index: 100;
```

**Layout:**
```
┌─────────────────────────────────────────┐
│  🎤    [Введите сообщение...]      [>]  │
│  52px  ← flex-grow →               52px │
└─────────────────────────────────────────┘
```

**Микрофон (кнопка):**
- Size: 52px × 52px
- Background: gradient #FFB800 → #FFC933 (золотой)
- Border radius: 50% (идеально круглая)
- Box shadow: 0 4px 12px rgba(255, 184, 0, 0.3)
- Icon: белая иконка микрофона, центрирована
- Hover: opacity 0.9, scale 1.05
- Active: scale 0.95

**Input Field:**
- Background: #F8FCFF
- Border: 2px solid transparent
- Border radius: 28px (pill-shaped)
- Padding: 14px 24px
- Font size: 16px
- Color: #2C3E50
- Placeholder: #B0C4D0
- Focus: border-color #1B78BD, background #FFFFFF
- Transition: all 0.2s ease

**Send Button:**
- Size: 52px × 52px
- Background: gradient #1B78BD → #2589CE
- Border radius: 50%
- Box shadow: 0 4px 12px rgba(27, 120, 189, 0.3)
- Icon: белая иконка отправки
- Hover: opacity 0.9, scale 1.05
- Active: scale 0.95
- Disabled: opacity 0.5

---

### 3. MENU BUTTONS (Кнопки меню)

**Positioning:**
```css
position: fixed;
top: 24px;
left: 24px;
z-index: 50;
```

**Button Design (会話ログ):**
```
┌──────────────────┐
│ 💬 会話ログ      │
└──────────────────┘

Стили:
- Background: gradient #1B78BD → #2589CE
- Color: #FFFFFF
- Padding: 12px 20px
- Border radius: 16px
- Font weight: bold
- Font size: 14px
- Box shadow: 0 4px 12px rgba(27, 120, 189, 0.2)
- Hover: opacity 0.9, translateY(-2px)
- Disabled: opacity 0.5
```

---

### 4. BACKGROUND (Фон)

**Gradient:**
```css
background: linear-gradient(135deg, #F8FCFF 0%, #EFF7FB 100%);
```

**Характеристики:**
- Очень светлый, едва заметный
- НЕ отвлекает от персонажа и чата
- Создаёт ощущение чистоты и воздуха
- Мягкий переход от белого к светло-голубому

---

### 5. VRM CHARACTER AREA (Область персонажа)

**Positioning:**
```css
position: absolute;
left: 450px; /* После чат-панели */
right: 0;
top: 0;
bottom: 0;
```

**Характеристики:**
- НЕ блокируется элементами UI
- Персонаж центрирован в доступной области
- Фон прозрачный, видна градиентная подложка

---

## 🎭 ДИЗАЙН-ПРИНЦИПЫ (UI/UX Best Practices)

### 1. Visual Hierarchy (Визуальная иерархия)
- **Primary action:** Send button - яркий синий градиент
- **Secondary action:** Mic button - золотой градиент
- **Tertiary:** Chat Log - менее яркий
- **Content:** Чат пузыри - белые с тенями

### 2. Spacing & Breathing Room
```
Система отступов (8px grid):
- xs: 8px   (между мелкими элементами)
- sm: 16px  (между пузырями чата)
- md: 24px  (padding панелей)
- lg: 32px  (section отступы)
- xl: 48px  (major sections)
```

### 3. Typography Scale
```
- H1 (Chat header): 14px, bold, uppercase, letter-spacing 0.5px
- Body text: 16px, regular, line-height 1.6
- Placeholder: 16px, regular, opacity 0.6
```

### 4. Shadows for Depth
```
Elevation levels:
- Low (buttons): 0 2px 8px rgba(27, 120, 189, 0.15)
- Medium (chat bubbles): 0 4px 16px rgba(27, 120, 189, 0.12)
- High (input panel): 0 -2px 12px rgba(27, 120, 189, 0.08)
```

### 5. Transitions & Micro-interactions
```css
/* Стандартный переход */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover эффекты */
- Buttons: transform scale(1.05), opacity 0.9
- Active: transform scale(0.95)
- Focus: outline 2px solid #1B78BD, offset 2px
```

---

## ⚠️ ЧТО ИЗБЕГАТЬ (Anti-patterns)

### ❌ Generic Design Mistakes:
1. **НЕ использовать:**
   - Идеально центрированные макеты
   - Одинаковый размер всех элементов
   - Uniform spacing везде
   - Simplistic gradients (#000 → #FFF)
   - Слишком яркие неоновые цвета

2. **НЕ создавать:**
   - Information overload (слишком много элементов)
   - Confusing navigation (непонятные иконки)
   - Zero hierarchy (всё одинаково важно)
   - Mobile mess (не адаптивно)

3. **НЕ делать пузыри чата:**
   - Маленькими (< 300px)
   - По центру (должны занимать всю ширину панели)
   - Квадратными (нужны мягкие rounded углы)
   - Без теней (нужна глубина)

---

## ✨ КРЕАТИВНЫЕ УЛУЧШЕНИЯ

### Fusion Aesthetics (Гибридный стиль):
Комбинируй элементы из разных источников:
- **Color scheme:** ENU университетский (синий + золотой)
- **Layout:** Messenger-стиль (широкие пузыри)
- **Typography:** Modern sans-serif (Inter, Segoe UI)
- **Shadows:** Material Design (многослойные, мягкие)

### Micro-interactions:
1. **Typing indicator:** Три прыгающие точки в пузыре CHARACTER
2. **Message sent:** Лёгкая анимация отправки (opacity + translateY)
3. **Scroll behavior:** Smooth scroll к новым сообщениям
4. **Button feedback:** Ripple effect при клике

---

## 📝 IMPLEMENTATION CHECKLIST

### Phase 1: Layout Structure
- [ ] Фиксированная чат-панель слева (450px)
- [ ] VRM область справа (flex-grow)
- [ ] Фиксированный input panel внизу
- [ ] Фиксированное меню вверху слева

### Phase 2: Chat Bubbles
- [ ] Большие пузыри (max-width 100% панели)
- [ ] Header + Body структура
- [ ] Мягкие тени (0 4px 16px)
- [ ] Border-radius 20px
- [ ] Комфортный padding (20px 24px)

### Phase 3: Colors & Gradients
- [ ] Фоновый градиент (#F8FCFF → #EFF7FB)
- [ ] Синий градиент для CHARACTER (#1B78BD → #2589CE)
- [ ] Золотой градиент для микрофона (#FFB800 → #FFC933)
- [ ] Бежевый для YOU (#F5DEB3)

### Phase 4: Input Panel
- [ ] Круглые кнопки (52px × 52px)
- [ ] Pill-shaped input (border-radius 28px)
- [ ] Backdrop blur эффект
- [ ] Правильные отступы (gap 12px)

### Phase 5: Interactions
- [ ] Hover эффекты (scale, opacity)
- [ ] Focus states (border, outline)
- [ ] Disabled states (opacity 0.5)
- [ ] Smooth transitions (0.2s ease)

---

## 🎯 ФИНАЛЬНАЯ ПРОВЕРКА (Quality Assurance)

### Visual Check:
- [ ] Пузыри чата достаточно большие?
- [ ] Тени создают глубину?
- [ ] Градиенты плавные и приятные?
- [ ] Отступы равномерные (8px grid)?
- [ ] Цвета из ENU палитры?

### UX Check:
- [ ] Интуитивная навигация?
- [ ] Понятная иерархия элементов?
- [ ] Кнопки достаточно большие для клика?
- [ ] Текст читабельный (контраст)?
- [ ] Hover states видимы?

### Responsive Check:
- [ ] Чат-панель не блокирует персонажа?
- [ ] Input panel доступен всегда?
- [ ] Меню не перекрывает контент?

---

## 💡 ПРИМЕР ПРОМПТА ДЛЯ AI

```
Создай интерфейс VRM chatbot со следующими характеристиками:

ЦЕЛИ:
- Визуально привлекательный дизайн с палитрой ENU
- Интуитивно понятная навигация
- Современный, чистый UI
- Комфортное чтение и взаимодействие

LAYOUT:
- Фиксированная чат-панель слева (450px width)
- VRM персонаж справа (60% экрана)
- Большие пузыри чата (занимают 100% ширины панели)
- Фиксированная панель ввода внизу

ЦВЕТА ENU:
- Primary: #1B78BD (синий)
- Accent: #FFB800 (золотой)
- Background: gradient #F8FCFF → #EFF7FB
- Text: #2C3E50

СТИЛЬ ПУЗЫРЕЙ:
- Header + Body структура
- Border-radius: 20px
- Padding: 20px 24px
- Box-shadow: 0 4px 16px rgba(27, 120, 189, 0.12)
- YOU: бежевый header (#F5DEB3)
- CHARACTER: синий градиент (#1B78BD → #2589CE)

INPUT PANEL:
- Круглая кнопка микрофона (золотой градиент, 52px)
- Pill-shaped input field (border-radius 28px)
- Круглая кнопка отправки (синий градиент, 52px)

ИЗБЕГАЙ:
- Маленькие пузыри чата
- Центрированный layout
- Квадратные углы
- Отсутствие теней
- Яркие неоновые цвета

ДОБАВЬ:
- Smooth transitions (0.2s ease)
- Hover effects (scale 1.05, opacity 0.9)
- Focus states (border #1B78BD)
- Backdrop blur на input panel
```

---

## 🔗 РЕФЕРЕНСЫ ДЛЯ ВДОХНОВЕНИЯ

1. **Messenger** - широкие пузыри чата
2. **Telegram** - чистый минималистичный UI
3. **Material Design** - elevation system, shadows
4. **Apple HIG** - spacing, typography
5. **ENU Website** - official color palette

---

**ИТОГ:** Следуй этому промпту, и ты получишь профессиональный UI/UX, который будет не просто красивым, но и функциональным, интуитивным и приятным в использовании! ✨
