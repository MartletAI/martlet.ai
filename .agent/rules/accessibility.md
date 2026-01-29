---
trigger: always_on
---

# Web Accessibility, SEO & Semantic HTML Guidelines

Write universally accessible, SEO-optimized, performant code following WCAG 2.1 AA standards.

## Core Principles

- **Semantic HTML First** — Use correct elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`)
- **Mobile-First** — Design for mobile, then scale up
- **Keyboard Accessible** — All interactive elements must work via keyboard
- **Progressive Enhancement** — Core functionality first, enhancements second

## HTML Essentials

### Interactive Elements
- Use `<button>` for actions, `<a>` for navigation (never `<div>` or `<span>`)
- Forms: proper `<label for="id">`, `<fieldset>`, `<legend>`, correct `type` attributes, `autocomplete`

### Images
- Informative: descriptive `alt` text
- Decorative: `alt=""`
- Complex (charts): use `aria-describedby`
- Always specify `width`/`height` to prevent layout shift
- Use `loading="lazy"` below fold, `srcset` for responsive

### Headings
- One `<h1>` per page, never skip levels (h1→h2→h3)
- Use for structure, not styling

### Tables
- For data only, never layout
- Include `<caption>`, `<th scope="col|row">`, `<thead>`/`<tbody>`

## Accessibility (WCAG 2.1 AA)

### Perceivable
- **Contrast**: 4.5:1 normal text, 3:1 large text/UI components
- **Resize**: Support 200% zoom without breaking
- **No color-only info**: Use icons, text, patterns alongside color

### Operable
- **Keyboard**: Full functionality, no traps, logical tab order
- **Focus visible**: Never `outline: none` without alternative (2px, 3:1 contrast)
- **Skip links**: Provide "Skip to main content"
- **Touch targets**: Min 44×44px with 8px spacing

### Understandable
- Set `<html lang="en">` (or appropriate language)
- Clear error messages with `aria-describedby`/`aria-invalid`
- Consistent navigation across pages

### Robust
- Valid HTML, proper nesting
- Use `role="status"` or `role="alert"` for dynamic messages

### ARIA (Use Sparingly)
Prefer semantic HTML. When needed:
- `aria-label`, `aria-labelledby`, `aria-describedby`
- `aria-hidden="true"` for decorative elements
- `aria-expanded`, `aria-current`, `aria-live`

## SEO

### Meta Tags
```html
<title>Primary Keyword | Brand (50-60 chars)</title>
<meta name="description" content="Compelling description (150-160 chars)">
<link rel="canonical" href="https://example.com/page">
```

### Open Graph & Twitter
```html
<meta property="og:title|description|image|url|type">
<meta name="twitter:card|title|description|image">
```

### Content Structure
- Descriptive link text (never "click here")
- Clean URLs: `/web-accessibility-guide` not `?id=123`
- Structured data (JSON-LD) for rich results

### Technical
- HTTPS always
- XML sitemap + robots.txt
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

## Performance

- **Fonts**: `font-display: swap`, preload critical fonts, limit families
- **Images**: WebP/AVIF with fallback, compress, use `<picture>`
- **Code**: Minify, split, defer non-critical JS
- **Resources**: `preconnect`, `dns-prefetch`, `preload` for critical assets

## CSS

- External stylesheets only (no inline)
- Relative units (`rem`, `em`, `%`) for fonts/spacing
- Flexbox/Grid for layout
- BEM naming convention

## Testing Checklist

- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces content correctly
- [ ] Lighthouse accessibility/SEO scores 90+
- [ ] Valid HTML (W3C validator)
- [ ] Contrast ratios pass
- [ ] 200% zoom works
- [ ] Mobile responsive
