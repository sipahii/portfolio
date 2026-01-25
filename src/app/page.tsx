/**
 * Home Page - Linear-Style Dark Theme
 * 
 * Architecture:
 * - Server Component (no client JS)
 * - Dark-first futuristic design
 * - Neon accents and glows
 * - 3D card effects
 * - Animated grid background
 * 
 * Performance:
 * - CSS-only animations (GPU accelerated)
 * - No layout shifts
 * - Optimized for Core Web Vitals
 */

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Senior Staff Frontend Engineer specializing in Next.js, React, and Web Performance optimization',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Futuristic with grid background */}
      <section aria-labelledby="hero-heading" className="relative min-h-[20vh] flex items-center justify-center overflow-hidden bg-cyber-grid">
        {/* Animated gradient orbs - decorative */}
        
        {/* Scanline effect overlay - decorative */}
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          {/* Neon headline */}
          <h1 id="hero-heading" className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 animate-fade-in-up">
            <span className="text-neon">
              Senior Staff
            </span>
            <br />
            <span className="text-white">
              Frontend Engineer
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Building production-grade applications with{' '}
            <span className="text-neon-blue font-semibold">Next.js</span>,{' '}
            <span className="text-neon-purple font-semibold">React</span>, and{' '}
            <span className="text-neon-cyan font-semibold">TypeScript</span>.
            <br className="hidden sm:block" />
            Obsessed with Core Web Vitals and frontend performance.
          </p>
          
          {/* Metrics Cards - Decorative statistics */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-scale-in delay-300" role="list" aria-label="Core Web Vitals targets">
            <div className="card-clean min-w-[200px]" role="listitem">
              <div className="text-4xl font-black text-neon mb-2" aria-label="Largest Contentful Paint: less than 2.5 seconds">LCP &lt; 2.5s</div>
              <div className="text-sm text-gray-400">Largest Contentful Paint</div>
            </div>
            <div className="card-clean min-w-[200px] delay-100" role="listitem">
              <div className="text-4xl font-black text-neon mb-2" aria-label="Cumulative Layout Shift: less than 0.1">CLS &lt; 0.1</div>
              <div className="text-sm text-gray-400">Cumulative Layout Shift</div>
            </div>
            <div className="card-clean min-w-[200px] delay-200" role="listitem">
              <div className="text-4xl font-black text-neon mb-2" aria-label="Interaction to Next Paint: less than 200 milliseconds">INP &lt; 200ms</div>
              <div className="text-sm text-gray-400">Interaction to Next Paint</div>
            </div>
          </div>

          {/* Navigation CTAs */}
          <nav aria-label="Primary actions" className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
            <Link
              href="/engineering-decisions"
              className="btn-neon"
            >
              View Engineering Decisions
            </Link>
            <Link
              href="/performance"
              className="btn-neon-outline"
            >
              Performance Dashboard
            </Link>
          </nav>
        </div>
      </section>

      {/* Expertise Section - 3D Cards */}
      <section aria-labelledby="expertise-heading" className="py-32 relative bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="expertise-heading" className="text-5xl sm:text-6xl font-black text-center mb-6">
            <span className="text-neon">Areas of Expertise</span>
          </h2>
          <p className="text-center text-gray-400 mb-20 text-xl max-w-3xl mx-auto">
            Specialized in performance optimization, modern React patterns, and scalable frontend architecture
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {expertise.map((item, index) => (
              <article
                key={item.title}
                className="card-neon animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                role="listitem"
              >
                <div className="text-5xl mb-6" aria-hidden="true">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pages - Holographic Cards */}
      <section aria-labelledby="featured-heading" className="py-32 relative bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="featured-heading" className="text-5xl sm:text-6xl font-black text-center mb-6">
            <span className="text-neon">Explore My Work</span>
          </h2>
          <p className="text-center text-gray-400 mb-20 text-xl max-w-3xl mx-auto">
            Deep dives into performance optimization, system design, and real-world case studies
          </p>
          
          <nav aria-label="Featured portfolio pages" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPages.map((page, index) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-holographic card-hover cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`${page.title}: ${page.description}`}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {page.title} <span aria-hidden="true">→</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {page.description}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  )
}

/**
 * Static Data
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
    title: 'Tech Stack',
    href: '/tech-stack',
    description: 'Comprehensive overview of my technical expertise with realistic skill assessments and production context.',
  },
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
