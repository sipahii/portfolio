'use client'

/**
 * FocusManager Component - Route Change Announcements
 * 
 * Purpose: Manages focus and announces route changes to screen readers
 * 
 * Accessibility:
 * - WCAG 2.4.3 Focus Order (Level A)
 * - WCAG 4.1.3 Status Messages (Level AA)
 * - Moves focus to main heading after route change
 * - Announces page changes to screen readers
 * - Provides context for navigation
 * 
 * Implementation:
 * - Uses usePathname to detect route changes
 * - Automatically focuses h1 on page load
 * - Live region announces page title changes
 * - Respects user's navigation preferences
 * 
 * Usage:
 * - Include once in root layout
 * - Works automatically on all route changes
 * - No configuration needed
 */

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function FocusManager() {
  const pathname = usePathname()
  const previousPathRef = useRef<string | null>(null)
  const announceRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Only run on route changes, not initial mount
    if (previousPathRef.current !== null && previousPathRef.current !== pathname) {
      // Find the main heading on the page
      const mainHeading = document.querySelector('h1')
      
      if (mainHeading) {
        // Make heading focusable temporarily
        mainHeading.setAttribute('tabindex', '-1')
        
        // Focus the heading
        mainHeading.focus()
        
        // Remove tabindex after focus to restore normal behavior
        mainHeading.addEventListener('blur', () => {
          mainHeading.removeAttribute('tabindex')
        }, { once: true })
      } else {
        // Fallback: focus main content area
        const mainContent = document.getElementById('main-content')
        mainContent?.focus()
      }
      
      // Announce the page change to screen readers
      if (announceRef.current) {
        const titleParts = document.title.split('|')
        const pageTitle = titleParts[0]?.trim() || 'Page'
        announceRef.current.textContent = `Navigated to ${pageTitle} page`
        
        // Clear announcement after a short delay
        setTimeout(() => {
          if (announceRef.current) {
            announceRef.current.textContent = ''
          }
        }, 1000)
      }
    }
    
    previousPathRef.current = pathname
  }, [pathname])
  
  return (
    <>
      {/* 
        Live region for route change announcements
        - aria-live="polite" doesn't interrupt current screen reader output
        - aria-atomic="true" reads entire message as one unit
        - Visually hidden but available to assistive technology
      */}
      <div
        ref={announceRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </>
  )
}
