/**
 * Home Page
 * 
 * Architecture:
 * - Server Component (default, no 'use client')
 * - Static rendering for optimal performance
 * - Minimal JavaScript sent to client
 * 
 * LCP Optimization:
 * - Hero content rendered on server (no client-side fetch)
 * - Critical content above the fold
 * - Text content loads immediately
 * - Optimized with next/font
 * 
 * CLS Prevention:
 * - All layout dimensions are stable
 * - No dynamic content that causes reflow
 * - Skeleton loaders where needed
 * - Grid layout prevents shifts
 * 
 * Performance Budget:
 * - Minimal dependencies
 * - No heavy libraries
 * - CSS-only animations
 */

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Senior Staff Frontend Engineer specializing in Next.js, React, and Web Performance optimization',
}

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section - LCP optimized */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="text-center">
          {/* Text content loads immediately - no image to slow LCP */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Senior Staff Frontend Engineer
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up">
            Building production-grade applications with Next.js, React, and TypeScript.
            Obsessed with Core Web Vitals and frontend performance.
          </p>
          
          {/* Key metrics showcase */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">LCP &lt; 2.5s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Largest Contentful Paint</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">CLS &lt; 0.1</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cumulative Layout Shift</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">INP &lt; 200ms</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Interaction to Next Paint</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/engineering-decisions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Engineering Decisions
            </Link>
            <Link
              href="/performance"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Performance Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pages */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Explore My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {page.title} →
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Static Data
 * 
 * Performance Note:
 * - Defined at module scope (evaluated once)
 * - No runtime computation needed
 * - Can be tree-shaken if not used
 */
const expertise = [
  {
    icon: '⚡',
    title: 'Web Performance',
    description: 'Core Web Vitals optimization, LCP, CLS, INP tuning. Expert in measuring and improving real-world performance metrics.',
  },
  {
    icon: '⚛️',
    title: 'React & Next.js',
    description: 'App Router, Server Components, Streaming SSR. Building scalable applications with modern React patterns.',
  },
  {
    icon: '🏗️',
    title: 'Frontend Architecture',
    description: 'System design, component architecture, and scalable patterns. Building maintainable and performant codebases.',
  },
  {
    icon: '🔍',
    title: 'SEO & Accessibility',
    description: 'Technical SEO, structured data, WCAG compliance. Building inclusive and discoverable web applications.',
  },
  {
    icon: '📊',
    title: 'Data Visualization',
    description: 'Performance dashboards, analytics, and metrics visualization. Making data actionable and understandable.',
  },
  {
    icon: '🚀',
    title: 'DevOps & CI/CD',
    description: 'Build optimization, deployment strategies, and monitoring. Shipping fast and reliably.',
  },
]

const featuredPages = [
  {
    title: 'Engineering Decisions',
    href: '/engineering-decisions',
    description: 'Deep dive into architectural choices, tradeoffs, and the reasoning behind key technical decisions.',
  },
  {
    title: 'Performance Dashboard',
    href: '/performance',
    description: 'Real-time Core Web Vitals tracking, performance metrics, and optimization strategies.',
  },
  {
    title: 'SEO Laboratory',
    href: '/seo-lab',
    description: 'Comparing rendering strategies: SSR vs CSR vs ISR. Learn the SEO implications of each approach.',
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
    description: 'Real-world frontend problems and solutions. Learn from production challenges and optimizations.',
  },
]
