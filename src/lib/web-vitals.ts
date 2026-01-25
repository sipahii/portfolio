/**
 * Core Web Vitals Utility Functions
 * 
 * Purpose: Helper functions for measuring and analyzing Web Vitals
 * 
 * Usage:
 * - Rating thresholds based on Google's recommendations
 * - Color coding for UI display
 * - Formatting utilities
 */

export type WebVitalMetric = 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP'

export type Rating = 'good' | 'needs-improvement' | 'poor'

/**
 * Web Vitals Thresholds (75th percentile)
 * Source: https://web.dev/articles/vitals
 */
const THRESHOLDS: Record<WebVitalMetric, { good: number; poor: number }> = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
  FID: { good: 100, poor: 300 }, // First Input Delay (ms)
  INP: { good: 200, poor: 500 }, // Interaction to Next Paint (ms)
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte (ms)
  CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift (score)
}

/**
 * Get rating for a metric value
 */
export function getRating(metric: WebVitalMetric, value: number): Rating {
  const threshold = THRESHOLDS[metric]
  if (!threshold) return 'good'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

/**
 * Get color for rating (Tailwind classes)
 */
export function getRatingColor(rating: Rating): {
  bg: string
  text: string
  border: string
} {
  switch (rating) {
    case 'good':
      return {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
      }
    case 'needs-improvement':
      return {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        text: 'text-yellow-600 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-800',
      }
    case 'poor':
      return {
        bg: 'bg-red-50 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
        border: 'border-red-200 dark:border-red-800',
      }
  }
}

/**
 * Format metric value for display
 */
export function formatMetricValue(metric: WebVitalMetric, value: number): string {
  if (metric === 'CLS') {
    return value.toFixed(3)
  }
  return `${Math.round(value)}ms`
}

/**
 * Get metric description
 */
export function getMetricDescription(metric: WebVitalMetric): string {
  const descriptions: Record<WebVitalMetric, string> = {
    LCP: 'Largest Contentful Paint - Time until largest content element is visible',
    FID: 'First Input Delay - Time from first user interaction to browser response',
    INP: 'Interaction to Next Paint - Responsiveness to user interactions',
    FCP: 'First Contentful Paint - Time until first content appears',
    TTFB: 'Time to First Byte - Server response time',
    CLS: 'Cumulative Layout Shift - Visual stability during page load',
  }
  return descriptions[metric] || ''
}

/**
 * Check if all Core Web Vitals are passing
 */
export function areAllVitalsGood(vitals: Record<WebVitalMetric, number>): boolean {
  const coreMetrics: WebVitalMetric[] = ['LCP', 'CLS', 'INP']
  return coreMetrics.every((metric) => getRating(metric, vitals[metric]) === 'good')
}
