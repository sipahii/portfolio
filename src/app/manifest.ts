/**
 * Manifest for PWA (Progressive Web App) metadata
 * 
 * Purpose: Define app metadata for mobile devices
 * 
 * Benefits:
 * - Enables "Add to Home Screen"
 * - Defines app icons and colors
 * - Improves mobile UX
 * 
 * Performance:
 * - Loaded on demand
 * - Cached by browser
 */

import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Senior Staff Frontend Engineer Portfolio',
    short_name: 'Portfolio',
    description: 'Performance-first portfolio showcasing Next.js, React, and Web Performance expertise',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0070f3',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
