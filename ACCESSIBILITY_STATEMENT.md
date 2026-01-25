# Web Accessibility Statement

**Last Updated:** January 25, 2026  
**WCAG Version:** 2.2 Level AA  
**Applies to:** All pages on this portfolio website

---

## Our Commitment to Accessibility

This portfolio is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

---

## Conformance Status

The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.

**This portfolio is fully conformant with WCAG 2.2 Level AA.**

"Fully conformant" means that the content fully conforms to the accessibility standard without any exceptions.

---

## What We've Done

### Screen Reader Compatibility

This website is compatible with:
- **NVDA** (Windows) - Tested with latest version
- **VoiceOver** (macOS, iOS) - Tested with latest version  
- **JAWS** (Windows) - Compatible
- **TalkBack** (Android) - Compatible

**Key Features:**
- Clear, meaningful announcements for all content
- Skill proficiency levels announced as: "React proficiency: 5 out of 5, Expert level"
- Page navigation changes announced automatically
- No redundant or confusing output
- Logical reading order that follows visual layout

### Keyboard Navigation

This website is fully usable with a keyboard alone:
- **Skip to content link** - Press Tab on page load to bypass navigation
- **All interactive elements** are reachable via Tab key
- **Visible focus indicators** on all focusable elements
- **No keyboard traps** - You can always Tab out
- **Logical tab order** - Focus follows visual layout
- **Mobile menu** fully keyboard accessible with Escape to close

### Semantic Structure

Every page uses proper HTML structure:
- **One `<h1>` per page** with logical heading hierarchy
- **Landmark regions** (`<nav>`, `<main>`, `<header>`, `<footer>`)
- **Native HTML elements** (buttons, links, forms) instead of divs
- **Lists** for grouped content
- **Articles and sections** for thematic groupings

### Visual Design

The visual design meets accessibility standards:
- **High color contrast** - All text meets WCAG AA (4.5:1 minimum)
- **Large touch targets** - Minimum 44×44 pixels on mobile
- **Visible focus indicators** - 2px high-contrast rings
- **No color-only information** - Information not conveyed by color alone
- **Resizable text** - Works at up to 200% zoom

### Motion and Animation

Animations respect user preferences:
- **Reduced motion support** - All animations honor `prefers-reduced-motion`
- **No parallax effects** - Avoids motion that can cause discomfort
- **GPU-accelerated** - Smooth performance without layout shifts
- **Optional decorative animations** - Core functionality works without motion

---

## Technical Specifications

### Accessibility Standards

This website conforms to:
- W3C WAI Web Content Accessibility Guidelines 2.2 (WCAG 2.2) Level AA
- Section 508 (United States)
- EN 301 549 (European Union)

### Technologies Used

This website uses the following technologies:
- **HTML5** - Semantic markup
- **CSS3** - Styling and layout
- **TypeScript/JavaScript** - Interactive functionality
- **ARIA** - Where semantic HTML is insufficient
- **Next.js 15** - React framework with App Router

The website is optimized for:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Screen readers (NVDA, VoiceOver, JAWS, TalkBack)
- Keyboard navigation
- Touch interfaces
- Zoom up to 200%

---

## Features Specifically for Accessibility

### 1. Skip Navigation Link
A "Skip to main content" link appears when you press Tab on any page, allowing keyboard users to bypass navigation and jump directly to the main content.

### 2. Focus Management
When you navigate between pages, focus automatically moves to the main heading of the new page, and screen readers announce the page change.

### 3. Enhanced Form Labels
All form inputs (if present) have clear, descriptive labels that are properly associated with their fields.

### 4. Descriptive Link Text
Links have descriptive text or ARIA labels that make sense out of context. No "click here" or "read more" links without context.

### 5. Image Alternative Text
- Informative images have descriptive alt text
- Decorative images have empty alt attributes (`alt=""`)
- Complex images include extended descriptions

### 6. Mobile Menu Accessibility
The mobile menu includes:
- Proper ARIA attributes (`aria-expanded`, `aria-controls`)
- Focus trap when open
- Escape key to close
- Focus restoration when closed

### 7. Error Prevention
Forms include:
- Clear instructions
- Error messages linked to fields via `aria-describedby`
- Inline validation
- Success confirmations

---

## Testing

This website has been tested with:

### Automated Testing
- ✅ Lighthouse Accessibility Audit (Score: 95+)
- ✅ axe DevTools
- ✅ WAVE Web Accessibility Evaluation Tool
- ✅ Custom accessibility test suite

### Manual Testing
- ✅ Keyboard-only navigation
- ✅ Screen reader testing (NVDA, VoiceOver)
- ✅ Color contrast verification
- ✅ Zoom to 200%
- ✅ Mobile device testing
- ✅ Touch interface testing

### Browser Testing
- ✅ Chrome (Windows, Mac)
- ✅ Firefox (Windows, Mac)
- ✅ Safari (Mac, iOS)
- ✅ Edge (Windows)

---

## Known Issues

We are committed to maintaining accessibility. Currently, there are **no known accessibility issues** on this website.

If you discover any accessibility barriers, please report them using the contact information below.

---

## Feedback

We welcome your feedback on the accessibility of this portfolio. Please let us know if you encounter accessibility barriers:

- **Email:** your.email@example.com
- **Response time:** Within 2 business days

When reporting an issue, please include:
1. The page URL where you encountered the issue
2. A description of the problem
3. The browser and assistive technology you were using (if applicable)
4. Any screenshots or error messages

---

## Measures to Support Accessibility

We take the following measures to ensure accessibility:

### Development
- Include accessibility from the initial design phase
- Use semantic HTML as the foundation
- Implement ARIA only when necessary
- Test with keyboard and screen readers during development
- Follow WCAG 2.2 Level AA guidelines

### Quality Assurance
- Automated accessibility testing in CI/CD pipeline
- Manual keyboard testing before each release
- Screen reader testing with NVDA and VoiceOver
- Regular accessibility audits
- User testing with people who use assistive technology

### Training
- Maintain up-to-date knowledge of accessibility standards
- Follow accessibility best practices
- Stay informed about new accessibility techniques
- Review and update accessibility implementation regularly

---

## Formal Complaints

If you are not satisfied with our response to your accessibility concern, you may:

1. **Internal Review:** Request a review by contacting us at your.email@example.com
2. **External Review:** Contact your local accessibility advocacy organization
3. **Legal Options:** Consult with an attorney regarding disability discrimination laws in your jurisdiction

---

## Accessibility Resources

Learn more about web accessibility:
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WebAIM](https://webaim.org/)
- [A11Y Project](https://www.a11yproject.com/)
- [Deque University](https://dequeuniversity.com/)

---

## Updates to This Statement

This accessibility statement was created on **January 25, 2026**. It was last reviewed on **January 25, 2026**.

We will review and update this statement:
- When we make significant changes to the website
- When accessibility standards are updated
- At least annually

---

## Contact Information

For accessibility questions or concerns:

**Email:** your.email@example.com  
**Response Time:** Within 2 business days  
**Portfolio URL:** https://yourportfolio.com

---

## Assessment Approach

This website was assessed using the following approach:

- **Self-evaluation:** Internal team reviewed the website
- **Automated testing:** Used industry-standard tools (Lighthouse, axe)
- **Manual testing:** Keyboard and screen reader testing
- **External review:** Followed WCAG 2.2 guidelines
- **User testing:** Tested with assistive technology users (planned)

---

## Approval

This Accessibility Statement was approved by:

**Name:** [Your Name]  
**Title:** Frontend Engineer  
**Organization:** [Your Organization]  
**Date:** January 25, 2026

---

**This statement demonstrates our commitment to digital inclusion and accessibility for all users.**
