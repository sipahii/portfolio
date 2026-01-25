import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { WebVitalsReporter } from '@/components/WebVitalsReporter'
import { Navigation } from '@/components/Navigation'

/**
 * Font Loading Strategy
 * 
 * Performance:
 * - Using next/font for automatic font optimization
 * - Fonts are self-hosted and preloaded automatically
 * - Variable fonts for smaller payload
 * - Subset to latin characters only
 * - Display swap to prevent FOIT (Flash of Invisible Text)
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false, // Only preload primary font
})

/**
 * Root Metadata
 * 
 * SEO:
 * - Comprehensive metadata for search engines
 * - Open Graph tags for social sharing
 * - Twitter Card for Twitter shares
 * - Viewport settings for responsive design
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://yourportfolio.com'),
  title: {
    default: 'Senior Staff Frontend Engineer | Performance-First Portfolio',
    template: '%s | Your Name',
  },
  description: 'Senior Staff Frontend Engineer specializing in Next.js App Router, React, and Web Performance. Expert in Core Web Vitals optimization and frontend system design.',
  keywords: [
    'Frontend Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Web Performance',
    'Core Web Vitals',
    'LCP',
    'CLS',
    'INP',
    'Senior Staff Engineer',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Senior Staff Frontend Engineer | Performance-First Portfolio',
    description: 'Expert in Next.js, React, and Web Performance optimization',
    siteName: 'Your Name Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Staff Frontend Engineer',
    description: 'Expert in Next.js, React, and Web Performance optimization',
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

/**
 * Root Layout Component
 * 
 * Architecture:
 * - Server Component (no 'use client')
 * - Minimal JavaScript sent to client
 * - Stable layout prevents CLS
 * - Font classes applied at root for optimal loading
 * 
 * Performance:
 * - No layout shifts during hydration
 * - Fonts loaded with optimal strategy
 * - Navigation is stable (no reflow)
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Web Vitals reporting for performance monitoring */}
        <WebVitalsReporter />
        
        {/* Navigation component - stable height prevents CLS */}
        <Navigation />
        
        {/* Main content area with stable layout */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer with stable height */}
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>
                Built with Next.js App Router, React, and TypeScript
              </p>
              <p className="mt-2">
                Optimized for Core Web Vitals · LCP &lt; 2.5s · CLS &lt; 0.1 · INP &lt; 200ms
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
