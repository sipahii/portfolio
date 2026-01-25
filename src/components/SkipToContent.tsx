/**
 * Skip to Content Link
 * 
 * Purpose: Keyboard-first accessibility - allows users to bypass navigation
 * 
 * Accessibility:
 * - WCAG 2.4.1 Bypass Blocks (Level A)
 * - Appears only when focused (keyboard users only)
 * - Positioned above all content with high z-index
 * - Styled for visibility with high contrast
 * 
 * Performance:
 * - Server Component (zero JS)
 * - CSS-only visibility toggle
 * - No layout shift (absolute positioning)
 * 
 * Usage:
 * - Press Tab on any page to reveal
 * - Press Enter to jump to main content
 * - Bypasses navigation links
 */

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-neon-purple focus:text-white focus:rounded-lg focus:font-bold focus:shadow-lg"
    >
      Skip to main content
    </a>
  )
}
