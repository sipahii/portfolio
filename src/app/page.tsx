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
import { skillCategories } from '@/data/tech-stack'

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center z-10">
          {/* Neon headline */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 animate-fade-in-up">
            <span className="text-neon">
              Senior Staff
            </span>
            <br />
            <span className="text-white">
              Frontend Engineer
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Building production-grade applications with{' '}
            <span className="text-neon-blue font-semibold">Next.js</span>,{' '}
            <span className="text-neon-purple font-semibold">React</span>, and{' '}
            <span className="text-neon-cyan font-semibold">TypeScript</span>.
            <br className="hidden sm:block" />
            Obsessed with Core Web Vitals and frontend performance.
          </p>
          
          {/* Metrics Cards - Decorative statistics */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-scale-in delay-300" role="list" aria-label="Core Web Vitals targets">
            <div className="card-clean min-w-[160px]" role="listitem">
              <div className="text-2xl sm:text-3xl font-black text-neon mb-2" aria-label="Largest Contentful Paint: less than 2.5 seconds">LCP &lt; 2.5s</div>
              <div className="text-xs text-gray-400">Largest Contentful Paint</div>
            </div>
            <div className="card-clean min-w-[160px] delay-100" role="listitem">
              <div className="text-2xl sm:text-3xl font-black text-neon mb-2" aria-label="Cumulative Layout Shift: less than 0.1">CLS &lt; 0.1</div>
              <div className="text-xs text-gray-400">Cumulative Layout Shift</div>
            </div>
            <div className="card-clean min-w-[160px] delay-200" role="listitem">
              <div className="text-2xl sm:text-3xl font-black text-neon mb-2" aria-label="Interaction to Next Paint: less than 200 milliseconds">INP &lt; 200ms</div>
              <div className="text-xs text-gray-400">Interaction to Next Paint</div>
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

      {/* Tech Stack Section - At a Glance */}
    

      {/* Expertise Section - 3D Cards */}
      <section aria-labelledby="expertise-heading" className="py-10 relative bg-dark-900">
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
      <section aria-labelledby="featured-heading" className="py-10 relative bg-dark-800/50">
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

      <section aria-labelledby="tech-stack-heading" className="py-16 relative bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 id="tech-stack-heading" className="text-4xl sm:text-5xl font-black mb-4">
              <span className="text-neon">Technical Skills at a Glance</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto">
              Comprehensive overview of technical expertise with production-tested proficiency levels (Max: 4.5/4.5)
            </p>
            {/* Rating Scale Legend */}
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8" role="list" aria-label="Skill rating scale">
              <div className="flex items-center gap-2" role="listitem">
                <span className="inline-block w-10 h-8 rounded bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-xs">4.5</span>
                <span className="text-gray-300">Expert</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="inline-block w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">4</span>
                <span className="text-gray-300">Advanced</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="inline-block w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xs">3</span>
                <span className="text-gray-300">Proficient</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="inline-block w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">2</span>
                <span className="text-gray-300">Competent</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <span className="inline-block w-8 h-8 rounded bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-white font-bold text-xs">1</span>
                <span className="text-gray-300">Beginner</span>
              </div>
            </div>
          </div>

          {/* Skills Table by Category */}
          <div className="space-y-10">
            {skillCategories.map((category) => {
              // Helper function to get level color and label
              const getLevelInfo = (level: number) => {
                // Cap level at 4.5
                const cappedLevel = Math.min(level, 4.5)
                
                const levelColors = {
                  4.5: { bg: 'bg-gradient-to-br from-pink-500 to-pink-600', text: 'text-pink-400', label: 'Expert' },
                  4: { bg: 'bg-gradient-to-br from-purple-500 to-purple-600', text: 'text-purple-400', label: 'Advanced' },
                  3: { bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600', text: 'text-cyan-400', label: 'Proficient' },
                  2: { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', text: 'text-blue-400', label: 'Competent' },
                  1: { bg: 'bg-gradient-to-br from-gray-500 to-gray-600', text: 'text-gray-400', label: 'Beginner' },
                }
                
                // Round to nearest valid level for color mapping
                let colorKey: keyof typeof levelColors = 3
                if (cappedLevel >= 4.5) colorKey = 4.5
                else if (cappedLevel >= 4) colorKey = 4
                else if (cappedLevel >= 3) colorKey = 3
                else if (cappedLevel >= 2) colorKey = 2
                else colorKey = 1
                
                return { ...levelColors[colorKey], level: cappedLevel }
              }

              return (
                <article 
                  key={category.title}
                  aria-labelledby={`category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-dark-900/50 rounded-lg border border-dark-700/50 overflow-hidden backdrop-blur-sm"
                >
                  {/* Category Header */}
                  <div className="p-6 pb-4 border-b border-dark-700/50">
                    <h3 
                      id={`category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                  
                  {/* Skills Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full" aria-label={`${category.title} skills table`}>
                      <thead>
                        <tr className="border-b border-dark-700/50 bg-dark-800/50">
                          <th scope="col" className="text-left p-4 text-sm font-semibold text-gray-300">Skill</th>
                          <th scope="col" className="text-center p-4 text-sm font-semibold text-gray-300 hidden sm:table-cell">Level</th>
                          <th scope="col" className="text-center p-4 text-sm font-semibold text-gray-300">Proficiency</th>
                          <th scope="col" className="text-center p-4 text-sm font-semibold text-gray-300 hidden md:table-cell">Experience</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.skills.map((skill, index) => {
                          const levelInfo = getLevelInfo(skill.level)
                          
                          return (
                            <tr 
                              key={skill.name}
                              className={`
                                border-b border-dark-700/30 transition-colors duration-200
                                hover:bg-dark-800/50
                                ${index % 2 === 0 ? 'bg-dark-900/20' : 'bg-dark-900/40'}
                              `}
                            >
                              {/* Skill Name */}
                              <td className="p-4">
                                <div className="text-white font-medium">{skill.name}</div>
                              </td>
                              
                              {/* Level Label (hidden on mobile) */}
                              <td className="p-4 text-center hidden sm:table-cell">
                                <span className={`text-sm font-medium ${levelInfo.text}`}>
                                  {levelInfo.label}
                                </span>
                              </td>
                              
                              {/* Proficiency Badge */}
                              <td className="p-4 text-center">
                                <span 
                                  className={`
                                    inline-flex items-center justify-center
                                    px-3 py-1 rounded-full
                                    ${levelInfo.bg}
                                    text-white font-bold text-xs
                                    shadow-lg min-w-[60px]
                                  `}
                                  aria-label={`Proficiency: ${levelInfo.level} out of 4.5`}
                                >
                                  {levelInfo.level}/4.5
                                </span>
                              </td>
                              
                              {/* Years of Experience (hidden on mobile) */}
                              <td className="p-4 text-center hidden md:table-cell">
                                <span className="text-gray-400 text-sm">
                                  {skill.yearsOfExperience ? `${skill.yearsOfExperience}+ years` : '—'}
                                </span>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </article>
              )
            })}
          </div>

          {/* CTA to detailed tech stack page */}
          <div className="text-center mt-12">
            <Link 
              href="/tech-stack"
              className="btn-neon-outline inline-flex items-center gap-2 group"
              aria-label="View detailed tech stack with context and experience details"
            >
              <span>View Detailed Tech Stack</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
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
