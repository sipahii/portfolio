/**
 * Tech Stack Page - /tech-stack
 * 
 * Purpose: High-signal technical expertise showcase for recruiters
 * 
 * Architecture:
 * - Server Component (zero client JS)
 * - Static metadata for SEO
 * - CSS-only animations
 * - Semantic HTML structure
 * 
 * Design Principles:
 * - Context over buzzwords
 * - Realistic ratings (not inflated)
 * - Mobile-first responsive
 * - Accessibility-first
 * 
 * Performance:
 * - No hydration cost
 * - Fast LCP (hero text paints immediately)
 * - Zero CLS (stable layout)
 * - Respects prefers-reduced-motion
 * 
 * SEO:
 * - Clear heading hierarchy (h1 → h3)
 * - Descriptive content for crawlability
 * - Structured data via semantic HTML
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { SkillRating, ToolItem } from '@/components/SkillRating'
import { skillCategories, toolCategories } from '@/data/tech-stack'

export const metadata: Metadata = {
  title: 'Tech Stack',
  description: 'Comprehensive overview of my technical expertise: React, Next.js, TypeScript, Web Performance, and modern frontend tooling. Real production experience with honest skill assessments.',
  openGraph: {
    title: 'Tech Stack - Senior Frontend Engineer',
    description: 'Deep expertise in React, Next.js, TypeScript, and Web Performance optimization',
  },
}

export default function TechStackPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-labelledby="tech-stack-heading" className="relative py-12 sm:py-16 overflow-hidden bg-cyber-grid">
        {/* Gradient orbs for visual interest - decorative */}
        <div className="gradient-orb w-96 h-96 -top-48 -right-48" aria-hidden="true" style={{ animationDelay: '0s' }}></div>
        <div className="gradient-orb w-80 h-80 -bottom-40 -left-40" aria-hidden="true" style={{ animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 id="tech-stack-heading" className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 animate-fade-in-up">
            <span className="text-neon">Tech Stack</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Production-proven expertise in modern frontend development.
            <br className="hidden sm:block" />
            Ratings reflect <span className="text-white font-semibold">real-world experience</span>, not aspirational levels.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in delay-300" role="list" aria-label="Experience statistics">
            <div className="card-clean min-w-[160px]" role="listitem">
              <div className="text-3xl font-black text-neon mb-1">6+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="card-clean min-w-[160px] delay-100" role="listitem">
              <div className="text-3xl font-black text-neon mb-1">30+</div>
              <div className="text-sm text-gray-400">Production Apps</div>
            </div>
            <div className="card-clean min-w-[160px] delay-200" role="listitem">
              <div className="text-3xl font-black text-neon mb-1">20+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid - Main Content */}
      <section aria-labelledby="core-skills-heading" className="py-12 sm:py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <h2 id="core-skills-heading" className="text-4xl sm:text-5xl font-black text-white mb-3">
              Core Skills
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Each skill includes context on where and how it was used in production environments.
              <br className="hidden sm:block" />
              Ratings are based on depth of experience, not time spent learning.
            </p>
          </header>

          {/* Skill Categories Grid */}
          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <article
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
                aria-labelledby={`category-${categoryIndex}`}
              >
                {/* Category Header */}
                <header className="mb-4">
                  <h3 id={`category-${categoryIndex}`} className="text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400">{category.description}</p>
                </header>

                {/* Skills Grid - Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" role="list">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="card-neon card-hover"
                      role="listitem"
                    >
                      <SkillRating
                        name={skill.name}
                        level={skill.level}
                        context={skill.context}
                        yearsOfExperience={skill.yearsOfExperience}
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Scale Legend */}
      <section aria-labelledby="rating-scale-heading" className="py-12 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="rating-scale-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Rating Scale Explained
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto" role="list">
            {[
              { level: 1, label: 'Beginner', description: 'Learning, limited experience' },
              { level: 2, label: 'Competent', description: 'Can complete tasks with guidance' },
              { level: 3, label: 'Proficient', description: 'Independent production experience' },
              { level: 4, label: 'Advanced', description: 'Deep knowledge, can mentor' },
              { level: 5, label: 'Expert', description: 'Industry-level expertise' },
            ].map((item) => (
              <article
                key={item.level}
                className="bg-dark-900 rounded-lg p-4 border border-neon-purple/20 text-center"
                role="listitem"
              >
                <div className="text-2xl font-black text-neon-purple mb-2" aria-label={`Level ${item.level}`}>
                  {item.level}
                </div>
                <div className="text-sm font-bold text-white mb-2">
                  {item.label}
                </div>
                <p className="text-xs text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm max-w-2xl mx-auto">
            Ratings reflect real production experience and depth of knowledge, not inflated self-assessment.
            <br />
            Each level requires demonstrable expertise and project deliverables.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section aria-labelledby="tools-heading" className="py-12 sm:py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-16 text-center">
            <h2 id="tools-heading" className="text-4xl sm:text-5xl font-black text-white mb-4">
              Daily Tools
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The tools and software I use daily to build production applications efficiently.
            </p>
          </header>

          {/* Tools Grid */}
          <div className="space-y-12">
            {toolCategories.map((category, categoryIndex) => (
              <article
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
                aria-labelledby={`tool-category-${categoryIndex}`}
              >
                <h3 id={`tool-category-${categoryIndex}`} className="text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                  {category.tools.map((tool) => (
                    <div key={tool.name} role="listitem">
                      <ToolItem
                        name={tool.name}
                        purpose={tool.purpose}
                        frequency={tool.frequency}
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-heading" className="py-12 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to see these skills in action?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Check out my engineering decisions, case studies, and performance optimizations.
          </p>
          <nav aria-label="Related pages" className="flex flex-wrap justify-center gap-4">
            <Link href="/engineering-decisions" className="btn-neon">
              Engineering Decisions
            </Link>
            <Link href="/case-studies" className="btn-neon-outline">
              Case Studies
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}
