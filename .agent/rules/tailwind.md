---
trigger: always_on
---

# Tailwind CSS v4 Rules (STRICT)

You are an expert in Tailwind CSS v4. **Never use Tailwind v3 syntax or patterns.**

## Core Principle: Design Tokens First

All design values MUST be defined as CSS custom properties in `globals.css` and registered via `@theme inline`. **Never use hardcoded Tailwind utility values directly.**

### ❌ NEVER DO THIS
```html
<!-- Hardcoded colors -->
<div class="bg-blue-500 text-gray-900">

<!-- Hardcoded spacing -->
<div class="p-4 m-8 gap-6">

<!-- Hardcoded sizing -->
<div class="w-64 h-screen max-w-lg">

<!-- Hardcoded typography -->
<p class="text-lg font-semibold">

<!-- Hardcoded shadows/borders -->
<div class="shadow-lg rounded-xl border-2">
```

### ✅ ALWAYS DO THIS
```html
<!-- Use semantic token-based classes -->
<div class="bg-primary text-foreground">

<!-- Use named spacing tokens -->
<div class="p-section m-container gap-card">

<!-- Use semantic sizing tokens -->
<div class="w-sidebar h-full max-w-content">

<!-- Use semantic typography -->
<p class="text-body font-heading">

<!-- Use custom utility classes -->
<div class="shadow-card rounded-card border-subtle">
```

---

## globals.css Structure

All design tokens MUST be defined in `src/app/globals.css`:

```css
@import "tailwindcss";

/* ========================================
   1. CSS Custom Properties (Design Tokens)
   ======================================== */

:root {
  /* Colors */
  --color-primary: #...;
  --color-secondary: #...;
  --color-accent: #...;
  --color-background: #...;
  --color-foreground: #...;
  --color-muted: #...;
  --color-border: #...;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-section: 4rem;
  
  /* Sizing */
  --width-sidebar: 16rem;
  --width-content: 65ch;
  --width-container: 80rem;
  
  /* Typography */
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0a0a0a;
    --color-foreground: #ededed;
    /* ... other dark mode tokens */
  }
}

/* ========================================
   2. Register Tokens with Tailwind v4
   ======================================== */

@theme inline {
  /* Colors */
  --color-primary: var(--color-primary);
  --color-secondary: var(--color-secondary);
  --color-accent: var(--color-accent);
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  --color-muted: var(--color-muted);
  --color-border: var(--color-border);
  
  /* Spacing */
  --spacing-xs: var(--spacing-xs);
  --spacing-sm: var(--spacing-sm);
  --spacing-md: var(--spacing-md);
  --spacing-lg: var(--spacing-lg);
  --spacing-xl: var(--spacing-xl);
  --spacing-2xl: var(--spacing-2xl);
  --spacing-section: var(--spacing-section);
  
  /* Sizing */
  --width-sidebar: var(--width-sidebar);
  --width-content: var(--width-content);
  --width-container: var(--width-container);
  
  /* Fonts */
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  
  /* Border Radius */
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-full: var(--radius-full);
}

/* ========================================
   3. Custom Utility Classes
   ======================================== */

/* Shadows */
.shadow-card {
  box-shadow: var(--shadow-md);
}

.shadow-elevated {
  box-shadow: var(--shadow-lg);
}

/* Gradients */
.gradient-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

.gradient-hero {
  background: linear-gradient(to bottom, var(--color-background), var(--color-muted));
}

/* Animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(1rem); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in var(--transition-base) ease-out;
}

.animate-slide-up {
  animation: slide-up var(--transition-slow) ease-out;
}

/* Glass Effects */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## Rules Summary

| Category | Rule |
|----------|------|
| **Colors** | Define in `:root`, register in `@theme inline`, use as `bg-primary`, `text-foreground` |
| **Spacing** | Define custom spacing tokens, use as `p-md`, `gap-lg`, `m-section` |
| **Sizing** | Define semantic sizes, use as `w-sidebar`, `max-w-content` |
| **Typography** | Define font scales, use as `text-lg`, `font-sans` |
| **Shadows** | Create `.shadow-*` classes in globals.css |
| **Gradients** | Create `.gradient-*` classes in globals.css |
| **Animations** | Define `@keyframes` + `.animate-*` classes in globals.css |
| **Borders** | Define radius tokens, use as `rounded-md`, `rounded-lg` |

---

## Why This Matters

1. **Single Source of Truth** — Change a value in `globals.css`, entire app updates
2. **Semantic Naming** — `bg-primary` is more meaningful than `bg-blue-500`
3. **Maintainability** — Easy theme changes, dark mode support, brand updates
4. **Consistency** — Team uses the same design tokens everywhere
5. **Tailwind v4 Native** — Uses CSS-first `@theme inline` configuration

---

## Allowed Tailwind Utilities

These utilities are safe to use directly (they don't involve hardcoded design values):

- **Layout**: `flex`, `grid`, `block`, `inline`, `hidden`
- **Flexbox/Grid**: `items-center`, `justify-between`, `col-span-2`, `row-start-1`
- **Positioning**: `relative`, `absolute`, `fixed`, `sticky`, `z-10`
- **Display**: `overflow-hidden`, `overflow-auto`
- **Responsive**: `sm:`, `md:`, `lg:`, `xl:` prefixes
- **States**: `hover:`, `focus:`, `active:`, `disabled:` prefixes
- **Full/Auto values**: `w-full`, `h-full`, `w-auto`, `h-auto`, `flex-1`