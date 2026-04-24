# Migration Guide: Tailwind → Traditional CSS

## ✅ Completed Migrations

### 1. ChatViewport
- **File**: `src/components/chat/ChatViewport.tsx`
- **CSS Module**: `src/components/chat/ChatViewport.module.css`
- **Status**: ✅ Complete

### 2. MessageInput
- **File**: `src/components/messageInput.tsx`
- **CSS Module**: `src/components/messageInput.module.css`
- **Status**: ✅ Complete

### 3. Global Components
- **File**: `src/styles/components.css`
- **Contains**: Sidebar, Introduction, Settings, Buttons, ThinkingPanel
- **Status**: ✅ Ready to use

## 📋 Pending Migrations

### Components that need CSS modules:

1. **sidebar/Sidebar.tsx**
   - Import: `import styles from './Sidebar.module.css'`
   - Replace: All `className` with `styles.className`

2. **introduction.tsx**
   - Import: `import styles from '../styles/components.css'` (use global)
   - Or create: `introduction.module.css`

3. **settings.tsx**
   - Can use global `components.css` classes
   - Or create dedicated module

4. **thinking/ThinkingPanel.tsx**
   - Can use global `.thinkingPanel` class

5. **iconButton.tsx & textButton.tsx**
   - Can use global `.iconButton` and `.textButton`

6. **messageInputContainer.tsx**
   - Simple wrapper, minimal CSS needed

7. **menu.tsx**
   - Check usage, likely simple

8. **assistantText.tsx, chatLog.tsx**
   - Check if still used

## 🔄 Migration Pattern

For each component:

### Step 1: Create CSS Module (if needed)
```css
/* ComponentName.module.css */
.container {
  /* styles */
}
```

### Step 2: Update Import
```tsx
// Before
import { classNames } from "@/utils/classNames";

// After
import styles from "./ComponentName.module.css";
```

### Step 3: Replace className
```tsx
// Before
<div className="flex items-center gap-8">

// After
<div className={styles.container}>
```

### Step 4: Handle Conditional Classes
```tsx
// Before
className={classNames("base", isActive && "active")}

// After
className={`${styles.base} ${isActive ? styles.active : ''}`}
```

## 🎯 Quick Reference

### Tailwind → CSS Mapping

| Tailwind Class | CSS Property |
|----------------|--------------|
| `flex` | `display: flex` |
| `items-center` | `align-items: center` |
| `justify-between` | `justify-content: space-between` |
| `gap-8` | `gap: 8px` |
| `px-16` | `padding-left: 16px; padding-right: 16px` |
| `py-12` | `padding-top: 12px; padding-bottom: 12px` |
| `rounded-xl` | `border-radius: 12px` |
| `rounded-2xl` | `border-radius: 16px` |
| `rounded-3xl` | `border-radius: 24px` |
| `bg-white` | `background-color: white` |
| `text-sm` | `font-size: 14px` |
| `font-semibold` | `font-weight: 600` |
| `transition-all` | `transition: all 0.2s` |
| `hover:bg-gray-100` | `.class:hover { background-color: #f5f5f5 }` |

### Spacing Scale (Tailwind uses 4px base)
- `1` = 4px
- `2` = 8px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px
- `20` = 80px
- `24` = 96px

## 🎨 Color Palette

```css
/* Primary Colors */
--primary: #856292;
--primary-hover: #8E76A1;
--primary-press: #988BB0;

/* Secondary Colors */
--secondary: #FF617F;
--secondary-hover: #FF849B;
--secondary-press: #FF9EB1;

/* Base Colors */
--base: #FBE2CA;
--text-primary: #514062;

/* Grays */
--gray-50: #f9f9f9;
--gray-100: #f5f5f5;
--gray-200: #e8e8e8;
--gray-800: #333333;
--gray-900: #111827;
```

## ⚡ Benefits of Traditional CSS

1. **No cache issues** - Changes apply immediately
2. **Better IDE support** - Autocomplete in CSS files
3. **Easier debugging** - Inspect in DevTools
4. **More control** - Exact pixel values
5. **Reusable** - Share styles across components
6. **Scoped** - CSS Modules prevent conflicts

## 📝 Notes

- Keep inline styles for dynamic values (width from props, etc.)
- Use CSS modules for component-specific styles
- Use global `components.css` for reusable patterns
- Always test after migration
- Remove `classNames` utility after full migration
