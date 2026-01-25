/**
 * Case Studies Page
 * 
 * Purpose: Showcase real-world frontend problems and solutions
 * 
 * Architecture:
 * - Server Component
 * - Static content for fast loading
 * - Educational case studies format
 * 
 * Performance:
 * - Text-based content (fast LCP)
 * - No client-side JavaScript needed
 * - Optimized for reading experience
 */

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world frontend problems and solutions. Learn from production challenges and optimizations.',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
          <span className="text-neon">Case Studies</span>
        </h1>
        <p className="text-xl text-gray-400 mb-16 animate-fade-in-up animate-delay-100">
          Real-world frontend challenges and the solutions that worked in production.
          Each case study includes the problem, approach, implementation, and measured results.
        </p>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="card-clean card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{study.icon}</span>
                <div>
                  <h2 className="text-3xl font-semibold text-white">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {study.company} • {study.year}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-neon-pink mb-3">
                  🚨 Challenge
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {study.challenge}
                </p>
                {study.metrics && (
                  <div className="glass-dark rounded-lg p-6 card-hover">
                    <p className="text-sm font-mono text-gray-300">
                      {study.metrics}
                    </p>
                  </div>
                )}
              </section>

              {/* Solution */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-neon-cyan mb-3">
                  💡 Solution
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {study.solution}
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium text-white">
                    Key Techniques:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.techniques.map((technique) => (
                      <span
                        key={technique}
                        className="badge-neon"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Implementation */}
              {study.implementation && (
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    🔧 Implementation Highlights
                  </h3>
                  <ul className="space-y-3">
                    {study.implementation.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neon-purple mr-3 mt-1">•</span>
                        <span className="flex-1 text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Results */}
              <section className="terminal-box border-neon-cyan/30">
                <h3 className="text-xl font-semibold text-neon-cyan mb-4">
                  📊 Results
                </h3>
                <ul className="space-y-3">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-neon-cyan mr-3 mt-1 text-lg">✓</span>
                      <span className="flex-1 text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Lessons Learned */}
              {study.lessons && (
                <section className="mt-6 glass-dark rounded-lg p-6 card-hover">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    💭 Lessons Learned
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {study.lessons}
                  </p>
                </section>
              )}
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 card-clean card-hover text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-neon">Interested in discussing frontend challenges?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            I love solving complex performance problems and building scalable architectures.
          </p>
          <Link
            href="/frontend-system-design"
            className="btn-neon inline-block"
          >
            View System Design Examples →
          </Link>
        </section>
      </div>
    </div>
  )
}

/**
 * Case Studies Data
 * 
 * Real-world examples of frontend performance optimization and problem-solving
 */
const caseStudies = [
  {
    icon: '⚡',
    title: 'Reducing E-Commerce LCP by 2.3 Seconds',
    company: 'Large E-Commerce Platform',
    year: '2025',
    challenge: 'Homepage was loading slowly with LCP consistently over 4 seconds. Users were abandoning before seeing products. Google PageSpeed Insights score was 45/100.',
    metrics: 'Before: LCP 4.2s | FCP 2.8s | CLS 0.25 | Lighthouse Score: 45',
    solution: 'Migrated from CSR to Next.js App Router with Server Components. Implemented aggressive image optimization with next/image, moved to edge rendering, and eliminated render-blocking JavaScript.',
    techniques: [
      'Server Components',
      'Image Optimization',
      'Edge Rendering',
      'Critical CSS',
      'Font Subsetting',
      'Resource Hints',
    ],
    implementation: [
      'Converted homepage to Server Component, eliminating 150KB of client JavaScript',
      'Used next/image with priority flag for hero images, reducing image size by 70%',
      'Implemented font subsetting with next/font, cutting font payload from 120KB to 25KB',
      'Added resource hints (preconnect, dns-prefetch) for third-party services',
      'Deferred non-critical third-party scripts using Next.js Script component',
      'Implemented progressive JPEG loading for above-fold images',
    ],
    results: [
      'LCP reduced from 4.2s to 1.9s (55% improvement)',
      'First Contentful Paint improved from 2.8s to 1.1s',
      'Cumulative Layout Shift reduced from 0.25 to 0.04',
      'Lighthouse Performance score increased from 45 to 96',
      'Conversion rate increased by 23% (A/B tested)',
      'Bounce rate decreased by 31%',
    ],
    lessons: 'Early wins came from Server Components. The biggest impact was eliminating client-side data fetching. Image optimization was second most impactful. Measuring with Web Vitals API revealed that real user metrics were worse than lab scores.',
  },
  {
    icon: '📱',
    title: 'Eliminating Layout Shift in a SaaS Dashboard',
    company: 'B2B SaaS Product',
    year: '2024',
    challenge: 'Dashboard had severe layout shift issues with CLS of 0.42. Charts and widgets would jump around during load, causing user frustration and mis-clicks.',
    metrics: 'Before: CLS 0.42 | LCP 3.1s | User complaints: High',
    solution: 'Implemented skeleton screens with exact dimensions, used CSS containment, preloaded critical resources, and fixed all dimension-less elements.',
    techniques: [
      'Skeleton Loaders',
      'CSS Containment',
      'Aspect Ratio Boxes',
      'Suspense Boundaries',
      'Font Fallbacks',
    ],
    implementation: [
      'Created skeleton components matching exact dimensions of loaded content',
      'Added explicit width/height to all images and iframes',
      'Used CSS containment (contain: layout) to isolate component layouts',
      'Implemented aspect-ratio boxes for dynamic content',
      'Added font-display: swap with size-adjust for fallback fonts',
      'Used Suspense boundaries to prevent parent layout shifts',
    ],
    results: [
      'CLS reduced from 0.42 to 0.02 (95% improvement)',
      'User complaints about "jumpy UI" dropped to zero',
      'Task completion time improved by 12%',
      'Lighthouse Accessibility score increased to 100',
      'Mobile CLS improved even more (was 0.58, now 0.03)',
    ],
    lessons: 'Font loading was a hidden CLS culprit. Using size-adjust with fallback fonts prevented text reflow. Skeleton screens need exact dimensions, not approximate. Chrome DevTools Layout Shift Regions tool was essential for debugging.',
  },
  {
    icon: '🚀',
    title: 'Optimizing INP for a Trading Platform',
    company: 'FinTech Trading App',
    year: '2025',
    challenge: 'Real-time trading interface had INP values over 500ms. Users complained about laggy interactions when clicking buy/sell buttons. Long tasks were blocking the main thread.',
    metrics: 'Before: INP 520ms | Long Tasks: 45 | Main Thread Blocking: 3.2s',
    solution: 'Broke up long tasks, implemented code splitting, used Web Workers for calculations, and optimized re-renders with React.memo and useMemo.',
    techniques: [
      'Code Splitting',
      'Web Workers',
      'React.memo',
      'Debouncing',
      'RequestIdleCallback',
      'Virtual Scrolling',
    ],
    implementation: [
      'Moved heavy calculations to Web Workers (price calculations, portfolio analytics)',
      'Implemented virtualized table rendering for order book (only renders visible rows)',
      'Used scheduler.yield() to break up long tasks into smaller chunks',
      'Added React.memo to prevent unnecessary re-renders of price components',
      'Debounced search and filter operations with 150ms delay',
      'Lazy-loaded non-critical chart libraries using dynamic imports',
    ],
    results: [
      'INP reduced from 520ms to 85ms (84% improvement)',
      'Long tasks reduced from 45 to 3',
      'Main thread blocking time reduced from 3.2s to 0.4s',
      'User-reported lag complaints dropped by 95%',
      'Trade execution time perceived as "instant" by users',
      'Support tickets related to performance decreased by 78%',
    ],
    lessons: 'Profiling with Chrome DevTools Performance tab was essential. Web Workers are underused but powerful. Breaking up long tasks improved perceived performance dramatically. Virtual scrolling was critical for large lists.',
  },
  {
    icon: '🎨',
    title: 'Building a Zero-CLS Marketing Site',
    company: 'Marketing Agency Client',
    year: '2024',
    challenge: 'Marketing site with rich animations and dynamic content had CLS of 0.38. Google Ads quality score was suffering, increasing cost per click.',
    metrics: 'Before: CLS 0.38 | Ad Quality Score: 5/10 | Cost per Click: $4.20',
    solution: 'Replaced JavaScript animation library with CSS animations, used transform/opacity only, added aspect ratio containers, and implemented FOUT prevention.',
    techniques: [
      'CSS Animations',
      'Transform/Opacity',
      'Aspect Ratio',
      'Font Loading API',
      'Preconnect Hints',
    ],
    implementation: [
      'Removed Framer Motion (45KB), implemented CSS animations with Tailwind',
      'Used only transform and opacity properties (GPU accelerated, no layout)',
      'Added aspect-ratio CSS property to all media containers',
      'Implemented progressive font loading with Font Loading API',
      'Used preload for hero images with explicit dimensions',
      'Added will-change CSS property only during animations',
    ],
    results: [
      'CLS reduced from 0.38 to 0.001 (99.7% improvement)',
      'Google Ads quality score increased from 5/10 to 9/10',
      'Cost per click decreased from $4.20 to $2.10 (50% reduction)',
      'Conversion rate increased by 18%',
      'Lighthouse Performance score: 98/100',
      'ROI on performance work: 340% in first quarter',
    ],
    lessons: 'CLS affects business metrics directly (Ads quality score). CSS animations are vastly underrated. Transform and opacity are the only safe properties for animations. Business stakeholders care about $ saved more than technical metrics.',
  },
  {
    icon: '🔍',
    title: 'Improving SEO with Next.js App Router',
    company: 'Content Publishing Platform',
    year: '2025',
    challenge: 'React SPA had poor SEO despite content being valuable. Google was indexing empty HTML shells. Organic traffic was 60% below projections.',
    metrics: 'Before: Indexed Pages: 12% | Organic Traffic: 2,000/month | Google Search Console Errors: 450',
    solution: 'Migrated from Create React App to Next.js App Router with SSR. Implemented proper metadata, structured data, and XML sitemap generation.',
    techniques: [
      'SSR',
      'Metadata API',
      'JSON-LD',
      'XML Sitemap',
      'Canonical URLs',
      'Open Graph',
    ],
    implementation: [
      'Migrated to Next.js App Router, enabling SSR for all article pages',
      'Added Metadata API to each page with dynamic titles and descriptions',
      'Implemented JSON-LD structured data (Article, Person, Organization)',
      'Generated XML sitemap automatically from content database',
      'Added canonical URLs to prevent duplicate content issues',
      'Implemented Open Graph and Twitter Card tags for social sharing',
    ],
    results: [
      'Indexed pages increased from 12% to 94%',
      'Organic traffic grew from 2,000 to 14,500 monthly visitors (625% increase)',
      'Google Search Console errors dropped from 450 to 8',
      'Average SERP position improved from 45 to 12',
      'Social media referrals increased by 220% (better sharing previews)',
      'Content reached Google Discover, adding 3,000 monthly visits',
    ],
    lessons: 'SSR is essential for content sites. Structured data helps Google understand content. Metadata API makes it easy to get SEO right. Measuring with Google Search Console is critical. Social sharing metadata (Open Graph) drove unexpected traffic.',
  },
]
