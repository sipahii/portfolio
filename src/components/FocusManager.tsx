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
    // #region agent log
    const activeEl = document.activeElement as HTMLElement;
    fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FocusManager.tsx:35',message:'FocusManager effect run',data:{pathname,previousPath:previousPathRef.current,activeElement:activeEl?.tagName,activeHref:(activeEl as HTMLAnchorElement)?.href},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H5'})}).catch(()=>{});
    // #endregion
    
    // Only run on route changes, not initial mount
    if (previousPathRef.current !== null && previousPathRef.current !== pathname) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FocusManager.tsx:43',message:'FocusManager: pathname changed, finding heading',data:{from:previousPathRef.current,to:pathname},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H5'})}).catch(()=>{});
      // #endregion
      
      // Find the main heading on the page
      const mainHeading = document.querySelector('h1')
      
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FocusManager.tsx:51',message:'FocusManager: heading search result',data:{foundHeading:!!mainHeading,headingText:mainHeading?.textContent?.substring(0,50)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H4,H5'})}).catch(()=>{});
      // #endregion
      
      if (mainHeading) {
        // Make heading focusable temporarily
        mainHeading.setAttribute('tabindex', '-1')
        
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FocusManager.tsx:61',message:'FocusManager: focusing heading',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H4,H5'})}).catch(()=>{});
        // #endregion
        
        // Focus the heading
        mainHeading.focus()
        
        // Remove tabindex after focus to restore normal behavior
        mainHeading.addEventListener('blur', () => {
          // #region agent log
          fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FocusManager.tsx:71',message:'FocusManager: heading blurred, removing tabindex',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H5'})}).catch(()=>{});
          // #endregion
          mainHeading.removeAttribute('tabindex')
        }, { once: true })
      } else {
        // Fallback: focus main content area
        const mainContent = document.getElementById('main-content')
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'FocusManager.tsx:80',message:'FocusManager: fallback to main-content',data:{foundMain:!!mainContent},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H4,H5'})}).catch(()=>{});
        // #endregion
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
