# Accessibility Quick Reference

Quick reference for maintaining accessibility in this portfolio.

---

## ⌨️ Keyboard Navigation Checklist

```bash
✅ Tab → All interactive elements reachable
✅ Shift+Tab → Reverse navigation works
✅ Enter → Activates links
✅ Space → Activates buttons
✅ Escape → Closes mobile menu
✅ Skip link → First Tab press reveals it
✅ Focus visible → All elements have clear indicators
✅ No traps → Can Tab out of all components
```

---

## 🎤 Screen Reader Testing

### NVDA (Windows)
```
Insert + N → Toggle NVDA
H → Next heading
Shift + H → Previous heading
D → Next landmark
Insert + F7 → List elements
Tab → Navigate interactive elements
```

### VoiceOver (Mac)
```
Cmd + F5 → Toggle VoiceOver
VO + Right/Left → Navigate elements
VO + U → Rotor menu
VO + H H → Headings menu
Control + Option + Space → Activate
```

---

## 🏗️ Component Patterns

### ✅ Accessible Button with Icon
```tsx
<button
  type="button"
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
>
  <svg aria-hidden="true">...</svg>
</button>
```

### ✅ Accessible Card Link
```tsx
<Link
  href="/page"
  aria-label="Page Title: Full description"
>
  <h3>Page Title</h3>
  <p>Description</p>
</Link>
```

### ✅ Decorative Elements
```tsx
<div aria-hidden="true">
  {/* Gradients, icons, decorations */}
</div>
```

### ✅ Skip Link
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only ..."
>
  Skip to main content
</a>
```

### ✅ Section with Heading
```tsx
<section aria-labelledby="section-id">
  <h2 id="section-id">Section Title</h2>
  {/* Content */}
</section>
```

---

## 🚫 Anti-Patterns to Avoid

### ❌ Clickable Divs
```tsx
// BAD
<div onClick={handleClick}>Click me</div>

// GOOD
<button onClick={handleClick}>Click me</button>
```

### ❌ Missing Alt Text
```tsx
// BAD
<img src="profile.jpg" />

// GOOD
<img src="profile.jpg" alt="John Doe, Frontend Engineer" />

// GOOD (decorative)
<img src="decoration.svg" alt="" />
```

### ❌ Redundant ARIA
```tsx
// BAD
<button role="button" aria-label="Submit">Submit</button>

// GOOD
<button>Submit</button>
```

### ❌ Removing Focus Outline
```css
/* BAD */
button:focus {
  outline: none; /* Never do this without alternative */
}

/* GOOD */
button:focus-visible {
  outline: 2px solid #B794F6;
  outline-offset: 2px;
}
```

---

## 🎨 Color Contrast Requirements

### Text Contrast (WCAG AA)
- **Normal text** (< 18px): 4.5:1
- **Large text** (≥ 18px or bold 14px): 3:1

### Non-Text Contrast
- **UI components**: 3:1
- **Focus indicators**: 3:1

### Test With
```bash
# Browser DevTools → Inspect element → Color contrast
# Or use: https://webaim.org/resources/contrastchecker/
```

---

## 🏷️ ARIA Usage Guide

### When to Use ARIA

| Scenario | Solution |
|----------|----------|
| Button with icon only | `aria-label="Description"` |
| Current page in nav | `aria-current="page"` |
| Expandable menu | `aria-expanded={boolean}` |
| Error messages | `role="alert"` or `aria-live="polite"` |
| Decorative element | `aria-hidden="true"` |
| Loading state | `aria-busy="true"` |

### When NOT to Use ARIA

✅ Use native HTML instead:
- `<button>` not `<div role="button">`
- `<nav>` not `<div role="navigation">`
- `<header>` not `<div role="banner">`
- `<main>` not `<div role="main">`

---

## 📋 Pre-Deployment Checklist

### Before Every Deploy
```bash
✅ Run: npm run lint
✅ Test keyboard navigation on 3 pages
✅ Test with NVDA or VoiceOver
✅ Check color contrast in DevTools
✅ Verify skip link appears
✅ Mobile menu keyboard accessible
✅ All images have alt text
✅ No console errors/warnings
```

### Lighthouse Audit
```bash
✅ Accessibility score ≥ 95
✅ Best Practices score ≥ 90
✅ Performance score ≥ 90
✅ SEO score ≥ 95
```

---

## 🧪 Quick Tests

### 1. Unplug Your Mouse
Navigate the entire site using only keyboard. Can you reach everything?

### 2. Tab Test
Press Tab repeatedly. Does focus order match visual order?

### 3. Skip Link Test
Refresh page → Press Tab once → Should see "Skip to main content"

### 4. Zoom Test
Browser zoom to 200%. Does everything still work?

### 5. Screen Reader Test
Turn on VoiceOver/NVDA. Is everything announced clearly?

---

## 🔧 Common Fixes

### Fix: Focus Not Visible
```css
/* Add to globals.css */
*:focus-visible {
  outline: 2px solid #B794F6;
  outline-offset: 2px;
}
```

### Fix: Screen Reader Can't Find Main Content
```tsx
// Add to layout
<main id="main-content">
  {children}
</main>
```

### Fix: Button Text Not Announced
```tsx
// Add screen reader only text
<button>
  <svg>...</svg>
  <span className="sr-only">Close menu</span>
</button>
```

### Fix: Route Change Not Announced
```tsx
// Use FocusManager component (already implemented)
import { FocusManager } from '@/components/FocusManager'
```

---

## 📱 Mobile Accessibility

### Touch Targets
- Minimum size: 44x44px (48x48px recommended)
- Adequate spacing between targets

### Mobile Menu
- Keyboard accessible (tab navigation)
- Focus trap when open
- Escape key closes
- Focus restored on close

### Gestures
- All functionality available via touch
- No hover-only interactions
- No complex gestures required

---

## 🛠️ Tools & Resources

### Browser Extensions
- [axe DevTools](https://www.deque.com/axe/devtools/) - Automated testing
- [WAVE](https://wave.webaim.org/extension/) - Visual feedback
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Built into Chrome

### Screen Readers
- **Windows:** [NVDA](https://www.nvaccess.org/) (free)
- **Mac:** VoiceOver (built-in, Cmd+F5)
- **iOS:** VoiceOver (Settings → Accessibility)
- **Android:** TalkBack (Settings → Accessibility)

### Testing Tools
```bash
# Install
npm install -D @axe-core/playwright

# Run automated tests
npx playwright test --grep a11y
```

### Validators
- [W3C HTML Validator](https://validator.w3.org/)
- [WAVE API](https://wave.webaim.org/api/)
- [Pa11y](https://pa11y.org/)

---

## 📚 Quick Links

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## 💡 Remember

1. **Test with real screen readers** - Don't rely only on automated tools
2. **Keyboard users ≠ Screen reader users** - Test both scenarios
3. **Mobile matters** - Test on real devices
4. **Start with semantics** - Proper HTML beats ARIA every time
5. **Users first** - If it's confusing, it's not accessible

---

**Need help?** Check the full [ACCESSIBILITY_GUIDE.md](./ACCESSIBILITY_GUIDE.md)
