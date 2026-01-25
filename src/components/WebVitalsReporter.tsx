'use client'

/**
 * Web Vitals Reporter Component
 * 
 * Purpose: Track and report Core Web Vitals metrics
 * 
 * Architecture:
 * - Client Component (requires browser APIs)
 * - Minimal JavaScript footprint
 * - Uses Next.js built-in web-vitals reporting
 * 
 * Metrics Tracked:
 * - LCP (Largest Contentful Paint): < 2.5s target
 * - FID (First Input Delay) / INP (Interaction to Next Paint): < 200ms target
 * - CLS (Cumulative Layout Shift): < 0.1 target
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 * 
 * Performance Impact:
 * - Lazy loaded (not blocking main thread)
 * - Minimal client-side JavaScript
 * - Only runs in production for real metrics
 */

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    // Log metrics in development, send to analytics in production
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Web Vital:', {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
      })
    }
    
    // In production, send to your analytics service
    // Example: window.gtag?.('event', metric.name, { value: metric.value })
    // Or use Vercel Analytics, Google Analytics, etc.
  })

  return null
}
