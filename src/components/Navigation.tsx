'use client'

/**
 * Navigation Component - Linear-Style Dark Theme
 * 
 * Architecture:
 * - Client Component (interactive)
 * - Dark glassmorphism with neon accents
 * - Glowing logo and active states
 * - Smooth animations
 * 
 * Performance:
 * - Minimal JavaScript
 * - CSS-only effects
 * - Stable dimensions (no CLS)
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tech Stack', href: '/tech-stack' },
  { name: 'Engineering', href: '/engineering-decisions' },
  { name: 'Performance', href: '/performance' },
  { name: 'SEO Lab', href: '/seo-lab' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'System Design', href: '/frontend-system-design' },
]

export function Navigation() {
  // #region agent log
  const renderCount = useRef(0);
  renderCount.current++;
  fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:33',message:'Navigation render',data:{renderCount:renderCount.current},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
  // #endregion
  
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  
  /**
   * Accessibility: Close mobile menu on Escape key
   * WCAG 2.1.1 Keyboard (Level A)
   */
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:44',message:'Escape listener effect run',data:{mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2'})}).catch(()=>{});
    // #endregion
    
    const handleEscape = (e: KeyboardEvent) => {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:49',message:'Escape key handler fired',data:{key:e.key,mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2'})}).catch(()=>{});
      // #endregion
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:60',message:'Escape listener cleanup',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2'})}).catch(()=>{});
        // #endregion
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [mobileMenuOpen])
  
  /**
   * Accessibility: Focus management and trap for mobile menu
   * WCAG 2.4.3 Focus Order (Level A)
   * - Moves focus to first menu item when opened
   * - Traps focus within menu while open
   * - Restores focus to toggle button when closed
   * 
   * Performance: Optimized to prevent unnecessary re-renders on mobile
   */
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:76',message:'Focus trap effect run',data:{mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
    // #endregion
    
    // Early return if menu is closed - prevents unnecessary DOM queries
    if (!mobileMenuOpen) {
      // Restore focus to toggle button when menu closes
      if (menuButtonRef.current) {
        menuButtonRef.current.focus()
      }
      return
    }
    
    // Only run focus trap logic when menu is open
    if (mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      )
      
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:95',message:'Focus trap DOM query',data:{focusableCount:focusableElements.length},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
      // #endregion
      
      // Early return if no focusable elements
      if (focusableElements.length === 0) return
      
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
      
      // Move focus to first element
      firstElement?.focus()
      
      // Focus trap: cycle focus within menu
      const handleTabKey = (e: KeyboardEvent) => {
        // #region agent log - Track ALL keyboard events in focus trap
        const activeEl = document.activeElement as HTMLElement;
        fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:119',message:'Focus trap keyboard event',data:{key:e.key,shiftKey:e.shiftKey,activeElement:activeEl?.tagName,activeHref:(activeEl as HTMLAnchorElement)?.href,isFirstElement:document.activeElement===firstElement,isLastElement:document.activeElement===lastElement},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1,H2'})}).catch(()=>{});
        // #endregion
        
        if (e.key !== 'Tab') return
        
        if (e.shiftKey) {
          // Shift + Tab: if on first element, wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault()
            // #region agent log
            fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:131',message:'Focus trap: preventDefault on Shift+Tab',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2'})}).catch(()=>{});
            // #endregion
            lastElement?.focus()
          }
        } else {
          // Tab: if on last element, wrap to first
          if (document.activeElement === lastElement) {
            e.preventDefault()
            // #region agent log
            fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:141',message:'Focus trap: preventDefault on Tab',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2'})}).catch(()=>{});
            // #endregion
            firstElement?.focus()
          }
        }
      }
      
      document.addEventListener('keydown', handleTabKey)
      return () => {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:132',message:'Focus trap listener cleanup',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H4'})}).catch(()=>{});
        // #endregion
        document.removeEventListener('keydown', handleTabKey)
      }
    }
  }, [mobileMenuOpen])

  return (
    <nav className="glass-dark border-b border-neon-purple/20 sticky top-0 z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center text-xl font-black text-neon transition-all duration-300 cursor-pointer hover:text-neon-cyan hover:scale-105"
              aria-label="Md Shahanshah home"
            >
              Md Shahanshah
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8" role="navigation" aria-label="Primary">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-bold transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? 'text-neon-purple'
                      : 'text-gray-400 hover:text-neon-cyan'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {/* Decorative underline - hidden from screen readers */}
                  <span 
                    aria-hidden="true"
                    className={`absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r transition-all duration-300 ${
                      isActive 
                        ? 'from-neon-purple to-neon-pink scale-x-100 opacity-100' 
                        : 'from-neon-cyan to-neon-blue scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 bg-dark-700/50 transition-all duration-300 cursor-pointer hover:text-neon-cyan hover:bg-neon-cyan/10 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {/* Screen reader text updates based on state */}
              <span className="sr-only">
                {mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              </span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden border-t border-neon-purple/20 animate-fade-in"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-neon-purple/10 text-neon-purple border border-neon-purple/50'
                      : 'text-gray-400 bg-dark-700/50 hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border hover:border-neon-cyan/30'
                  }`}
                  onClick={() => {
                    // #region agent log
                    fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:209',message:'Mobile link clicked',data:{href:item.href,name:item.name,mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H3'})}).catch(()=>{});
                    // #endregion
                    setMobileMenuOpen(false)
                  }}
                  onKeyDown={(e) => {
                    // #region agent log - Track Enter key on links
                    const activeEl = document.activeElement as HTMLElement;
                    fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:217',message:'Mobile link keydown',data:{key:e.key,href:item.href,name:item.name,activeElement:activeEl?.tagName,mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2,H4'})}).catch(()=>{});
                    // #endregion
                    if (e.key === 'Enter') {
                      // #region agent log
                      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navigation.tsx:222',message:'Enter key on mobile link - CRITICAL',data:{href:item.href,name:item.name,willCloseMenu:true},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2,H3'})}).catch(()=>{});
                      // #endregion
                      setMobileMenuOpen(false)
                    }
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
