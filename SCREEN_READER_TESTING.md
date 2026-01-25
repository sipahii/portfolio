# Screen Reader Testing Guide

## How to Test Your Portfolio with Screen Readers

This guide provides step-by-step instructions for testing your portfolio with NVDA (Windows) and VoiceOver (Mac).

---

## 🪟 NVDA Testing (Windows)

### Installation
1. Download NVDA: https://www.nvaccess.org/download/
2. Run installer (free and open-source)
3. Follow installation prompts
4. Restart if prompted

### Basic Controls

| Action | Shortcut |
|--------|----------|
| Start/Stop NVDA | `Insert + N` |
| Stop speech | `Ctrl` |
| Read next item | `Down Arrow` |
| Read previous item | `Up Arrow` |
| Navigate by heading | `H` (previous: `Shift + H`) |
| Navigate by landmark | `D` (previous: `Shift + D`) |
| Navigate by link | `K` (previous: `Shift + K`) |
| Navigate by button | `B` (previous: `Shift + B`) |
| Tab to next interactive | `Tab` |
| List all elements | `Insert + F7` |

### Testing Steps

#### 1. Test Skip Link
```
1. Open homepage in browser
2. Start NVDA (Insert + N)
3. Press Tab once
4. NVDA should announce: "Skip to main content, link"
5. Press Enter
6. NVDA should announce the main heading: "Senior Staff Frontend Engineer"
✅ PASS: Skip link works
```

#### 2. Test Navigation
```
1. Press D repeatedly to navigate landmarks
2. Should hear: "Navigation, banner" → "Main, region" → "Contentinfo"
3. Press H repeatedly to navigate headings
4. Should hear headings in order: H1 → H2 → H3
✅ PASS: Landmarks and headings are logical
```

#### 3. Test Tech Stack Page
```
1. Navigate to /tech-stack
2. Press H to find "Core Skills" heading
3. Tab to a skill card
4. NVDA should announce: "React, heading level 3"
5. Tab to meter element
6. NVDA should announce: "React proficiency: 5 out of 5, Expert level, meter"
✅ PASS: Skill ratings are announced clearly
```

#### 4. Test Mobile Menu (Resize Browser)
```
1. Resize browser to mobile width (< 768px)
2. Tab to menu button
3. NVDA should announce: "Open navigation menu, button, collapsed"
4. Press Enter to open
5. NVDA should announce: "Expanded"
6. Press Tab repeatedly
7. Should cycle through menu items
8. Press Escape
9. Menu should close, focus returns to button
✅ PASS: Mobile menu is fully accessible
```

#### 5. Test Route Changes
```
1. On homepage, Tab to "Tech Stack" link
2. Press Enter to navigate
3. After page load, NVDA should announce: "Navigated to Tech Stack page"
4. Focus should be on the H1 heading
✅ PASS: Route changes are announced
```

---

## 🍎 VoiceOver Testing (Mac)

### Activation
- **Toggle:** `Cmd + F5`
- **Settings:** System Settings → Accessibility → VoiceOver

### Basic Controls

| Action | Shortcut |
|--------|----------|
| Start/Stop VoiceOver | `Cmd + F5` |
| Stop speech | `Control` |
| Next item | `VO + Right Arrow` |
| Previous item | `VO + Left Arrow` |
| Activate item | `VO + Space` |
| Rotor menu | `VO + U` |
| Next heading | `VO + Cmd + H` |
| Next landmark | `VO + Cmd + W` (Web spots) |
| Tab to next interactive | `Tab` |

**Note:** `VO` = `Control + Option`

### Testing Steps

#### 1. Test Skip Link
```
1. Open homepage in Safari
2. Enable VoiceOver (Cmd + F5)
3. Press Tab once
4. VoiceOver should announce: "Skip to main content, link"
5. Press VO + Space to activate
6. Should hear: "Senior Staff Frontend Engineer, heading level 1"
✅ PASS: Skip link works
```

#### 2. Test Page Structure
```
1. Press VO + U to open Rotor
2. Press Right Arrow to "Landmarks" tab
3. Should see: Navigation → Main → Content Info
4. Press Right Arrow to "Headings" tab
5. Should see hierarchical list: H1 → H2 → H3
6. Press Escape to close Rotor
✅ PASS: Page structure is semantic
```

#### 3. Test Skill Ratings
```
1. Navigate to /tech-stack
2. Press VO + Cmd + H to find "Core Skills" heading
3. Press Tab to enter first skill card
4. VoiceOver should announce: "React, heading level 3"
5. Press VO + Right Arrow
6. Should hear: "React proficiency: 5 out of 5, Expert level"
✅ PASS: Ratings are clearly announced
```

#### 4. Test Interactive Elements
```
1. Use VO + Right Arrow to navigate through page
2. All buttons should announce: "Button"
3. All links should announce: "Link"
4. Interactive cards should be announced with full context
5. Decorative elements should be skipped
✅ PASS: Elements have proper roles
```

#### 5. Test Keyboard Navigation
```
1. Disable VoiceOver (Cmd + F5)
2. Tab through entire page
3. All interactive elements should receive focus
4. Focus indicator should be visible (cyan/purple ring)
5. Focus order should match visual layout
✅ PASS: Keyboard navigation is logical
```

---

## 📱 Mobile Testing (iOS VoiceOver)

### Enable VoiceOver on iPhone/iPad
```
Settings → Accessibility → VoiceOver → Toggle On
```

### Basic Gestures
- **Next item:** Swipe right
- **Previous item:** Swipe left
- **Activate:** Double-tap
- **Rotor:** Rotate two fingers
- **Stop speech:** Two-finger tap

### Testing Steps
```
1. Open portfolio in Safari on iOS
2. Enable VoiceOver
3. Swipe right through page
4. All content should be announced clearly
5. Double-tap links to navigate
6. Test mobile menu by double-tapping menu button
7. Verify focus trap works with swipe gestures
✅ PASS: Mobile VoiceOver works correctly
```

---

## 🧪 Expected Announcements

### Homepage Hero
```
VoiceOver/NVDA: "Senior Staff Frontend Engineer, heading level 1"
VoiceOver/NVDA: "Building production-grade applications..."
```

### Navigation
```
Current page: "Tech Stack, link, current page"
Other links: "Engineering Decisions, link"
Menu button: "Open navigation menu, button, collapsed"
```

### Skill Ratings
```
Skill name: "React, heading level 3"
Years: "5 years of experience"
Rating: "React proficiency: 5 out of 5, Expert level, meter"
Context: "Built 20+ production apps. Expert in hooks..."
```

### Route Changes
```
After navigation: "Navigated to Tech Stack page"
Focus moves to: "Tech Stack, heading level 1"
```

### Cards
```
Card link: "Tech Stack: Comprehensive overview of technical expertise, link"
```

---

## ✅ Testing Checklist

### Basic Functionality
- [ ] Skip link appears and works (first Tab press)
- [ ] All headings are announced with correct level
- [ ] Landmarks are properly identified (nav, main, contentinfo)
- [ ] Links announce as "link"
- [ ] Buttons announce as "button"
- [ ] Current page announced as "current page"

### Tech Stack Page
- [ ] Skill names announced clearly
- [ ] Rating levels announced: "5 out of 5, Expert level"
- [ ] Years of experience announced
- [ ] Context descriptions readable
- [ ] Category headings in logical order

### Navigation
- [ ] Desktop nav is keyboard accessible
- [ ] Mobile menu button announces state (collapsed/expanded)
- [ ] Mobile menu items all reachable
- [ ] Focus trap works in mobile menu
- [ ] Escape closes mobile menu
- [ ] Focus restored to button on close

### Route Changes
- [ ] Page changes announced to screen reader
- [ ] Focus moves to H1 after navigation
- [ ] Back/forward browser buttons work correctly

### Interactive Elements
- [ ] All buttons are keyboard accessible
- [ ] All links have descriptive text or aria-label
- [ ] Form fields (if any) have proper labels
- [ ] No clickable divs or spans
- [ ] Focus indicators are visible

### Decorative Elements
- [ ] Icons marked as aria-hidden
- [ ] Gradients/animations ignored by screen reader
- [ ] Decorative arrows (→) hidden from screen readers

---

## 🚨 Common Issues to Watch For

### Issue: "Empty button"
**Cause:** Button has icon but no text or aria-label  
**Fix:** Add aria-label or sr-only text
```tsx
<button aria-label="Close menu">
  <svg>...</svg>
</button>
```

### Issue: "Link, no text"
**Cause:** Link has no visible text or aria-label  
**Fix:** Add descriptive aria-label
```tsx
<Link href="/page" aria-label="Tech Stack page">
  →
</Link>
```

### Issue: Redundant announcements
**Cause:** Both visible text and aria-label present  
**Example:** "Submit button, Submit, button" (announced twice)  
**Fix:** Remove aria-label when visible text is sufficient

### Issue: Heading hierarchy skipped
**Cause:** H1 followed by H3 (skipped H2)  
**Impact:** Screen reader users lose document structure  
**Fix:** Use sequential heading levels

### Issue: "Clickable div"
**Cause:** Using div with onClick instead of button  
**Fix:** Use semantic HTML
```tsx
// BAD
<div onClick={handleClick}>Click me</div>

// GOOD
<button onClick={handleClick}>Click me</button>
```

---

## 📊 Success Criteria

### Excellent Accessibility
- ✅ All tests pass
- ✅ No redundant announcements
- ✅ Logical reading order
- ✅ Clear, descriptive labels
- ✅ No screen reader errors
- ✅ Matches visual layout

### Acceptable
- ✅ All tests pass
- ⚠️ Minor issues (extra announcements)
- ✅ Content is understandable
- ✅ All functionality accessible

### Needs Improvement
- ❌ Tests fail
- ❌ Missing labels
- ❌ Confusing navigation
- ❌ Important content not announced

---

## 🎓 Learn More

### Official Documentation
- [NVDA User Guide](https://www.nvaccess.org/files/nvda/documentation/userGuide.html)
- [VoiceOver User Guide](https://support.apple.com/guide/voiceover/welcome/mac)

### Keyboard Shortcuts Reference
- [NVDA Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)
- [VoiceOver Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

### Testing Resources
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [A11y Project: Using NVDA](https://www.a11yproject.com/posts/nvda-screen-reader/)

---

## 💡 Pro Tips

1. **Test with real screen readers** - Automated tools catch ~30% of issues
2. **Close your eyes** - If you can navigate with eyes closed, it's accessible
3. **Test on real devices** - Desktop and mobile experiences differ
4. **Ask real users** - Nothing beats feedback from actual screen reader users
5. **Test regularly** - Make it part of your development workflow

---

**Ready to test?**
1. Install NVDA (Windows) or enable VoiceOver (Mac)
2. Open your portfolio
3. Follow the testing steps above
4. Check off the testing checklist
5. Fix any issues you find

**Need help?** Refer to `ACCESSIBILITY_GUIDE.md` for implementation details.
