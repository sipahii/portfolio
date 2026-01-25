/**
 * SEO Laboratory Page
 * 
 * Purpose: Demonstrate different rendering strategies and their SEO implications
 * 
 * Architecture:
 * - Server Component (demonstrates SSR benefits)
 * - Educational content about rendering strategies
 * - Performance comparisons
 * 
 * Rendering Strategies Covered:
 * - SSR (Server-Side Rendering)
 * - CSR (Client-Side Rendering)
 * - ISR (Incremental Static Regeneration)
 * - SSG (Static Site Generation)
 * 
 * Performance:
 * - Text-heavy, fast loading
 * - No client-side JavaScript needed for content
 * - Optimal for SEO demonstration
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Laboratory',
  description: 'Comparing rendering strategies: SSR vs CSR vs ISR. Understanding SEO implications of each approach.',
  openGraph: {
    title: 'SEO Laboratory - Rendering Strategies Comparison',
    description: 'Deep dive into SSR, CSR, ISR, and SSG with real SEO implications',
  },
}

export default function SEOLabPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
          <span className="text-neon">SEO Laboratory</span>
        </h1>
        <p className="text-xl text-gray-400 mb-16 animate-fade-in-up animate-delay-100">
          Understanding how different rendering strategies affect SEO, performance, and user experience.
          This page itself is server-rendered to demonstrate optimal SEO practices.
        </p>

        {/* Rendering Strategies Comparison */}
        <div className="space-y-10 mb-20">
          {strategies.map((strategy, index) => (
            <article
              key={strategy.name}
              className="card-clean card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-semibold text-white mb-2">
                    {strategy.name}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {strategy.acronym}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <SEOScore score={strategy.seoScore} />
                  <PerformanceScore score={strategy.performanceScore} />
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {strategy.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="terminal-box">
                  <h3 className="font-semibold text-neon-cyan mb-3 text-lg">
                    ✓ Advantages
                  </h3>
                  <ul className="space-y-2">
                    {strategy.pros.map((pro, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="text-neon-cyan mr-2 mt-1">•</span>
                        <span className="flex-1">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="terminal-box border-neon-pink/30">
                  <h3 className="font-semibold text-neon-pink mb-3 text-lg">
                    ✗ Disadvantages
                  </h3>
                  <ul className="space-y-2">
                    {strategy.cons.map((con, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="text-neon-pink mr-2 mt-1">•</span>
                        <span className="flex-1">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="glass-dark rounded-lg p-6 card-hover">
                <h3 className="font-semibold text-white mb-2 text-lg">
                  Best Use Cases
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {strategy.useCases}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Best Practices */}
        <section className="card-clean card-hover mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">
            <span className="text-neon">SEO Best Practices for Next.js</span>
          </h2>
          <div className="space-y-6">
            {seoBestPractices.map((practice, i) => (
              <div key={i} className="flex items-start">
                <span className="text-neon-purple mr-4 text-2xl">✓</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {practice.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Structured Data Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Structured Data (JSON-LD)
          </h2>
          <p className="text-gray-400 mb-4">
            This page includes JSON-LD structured data for better search engine understanding.
            View page source to see the implementation.
          </p>
          <div className="terminal-box">
            <pre className="text-green-400 text-sm font-mono">
{`{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "SEO Laboratory - Rendering Strategies",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "datePublished": "2026-01-25",
  "description": "Comparing SSR, CSR, and ISR rendering strategies"
}`}
            </pre>
          </div>
        </section>

        {/* Performance Comparison Table */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Performance Comparison
          </h2>
          <div className="overflow-x-auto card-clean card-hover">
            <table className="min-w-full border border-neon-purple/20">
              <thead className="bg-dark-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white border-b border-neon-purple/20">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-white border-b border-neon-purple/20">
                    SSR
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-white border-b border-neon-purple/20">
                    CSR
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-white border-b border-neon-purple/20">
                    ISR
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-white border-b border-neon-purple/20">
                    SSG
                  </th>
                </tr>
              </thead>
              <tbody className="bg-dark-800">
                {performanceComparison.map((row, i) => (
                  <tr key={i} className="border-b border-neon-purple/10">
                    <td className="px-4 py-3 text-sm font-medium text-white">
                      {row.metric}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-300">
                      {row.ssr}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-300">
                      {row.csr}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-300">
                      {row.isr}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-300">
                      {row.ssg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: 'SEO Laboratory - Rendering Strategies Comparison',
            author: {
              '@type': 'Person',
              name: 'Your Name',
            },
            datePublished: '2026-01-25',
            description: 'Comparing SSR, CSR, ISR, and SSG rendering strategies for optimal SEO and performance',
          }),
        }}
      />
    </div>
  )
}

/**
 * Score Badge Components
 */
function SEOScore({ score }: { score: number }) {
  const color = score >= 90 ? 'text-neon-cyan' : score >= 70 ? 'text-yellow-400' : 'text-neon-pink'
  return (
    <div className="terminal-box flex items-center gap-2">
      <span className="text-xs text-gray-400">SEO:</span>
      <span className={`font-bold ${color}`}>{score}/100</span>
    </div>
  )
}

function PerformanceScore({ score }: { score: number }) {
  const color = score >= 90 ? 'text-neon-cyan' : score >= 70 ? 'text-yellow-400' : 'text-neon-pink'
  return (
    <div className="terminal-box flex items-center gap-2">
      <span className="text-xs text-gray-400">Perf:</span>
      <span className={`font-bold ${color}`}>{score}/100</span>
    </div>
  )
}

/**
 * Static Data
 */
const strategies = [
  {
    name: 'Server-Side Rendering (SSR)',
    acronym: 'Dynamic rendering on each request',
    seoScore: 100,
    performanceScore: 85,
    description: 'Content is rendered on the server for each request. HTML is fully populated before reaching the browser, making it immediately crawlable by search engines.',
    pros: [
      'Perfect for SEO (content in initial HTML)',
      'Fast Time to First Byte',
      'Dynamic content per request',
      'Works without JavaScript',
    ],
    cons: [
      'Server compute cost per request',
      'Slower than static serving',
      'Requires server infrastructure',
      'Can be slow with complex data fetching',
    ],
    useCases: 'User-specific pages, frequently updated content, pages requiring authentication, real-time data.',
  },
  {
    name: 'Client-Side Rendering (CSR)',
    acronym: 'JavaScript renders content in browser',
    seoScore: 50,
    performanceScore: 60,
    description: 'JavaScript downloads, parses, and executes in the browser to render content. Initial HTML is minimal, requiring JS to display content.',
    pros: [
      'Rich interactivity',
      'Lower server costs',
      'Easy to build SPAs',
      'Good for authenticated apps',
    ],
    cons: [
      'Poor SEO (empty initial HTML)',
      'Slow Time to Interactive',
      'Large JavaScript bundles',
      'Requires JavaScript enabled',
    ],
    useCases: 'Internal dashboards, admin panels, highly interactive apps where SEO is not critical.',
  },
  {
    name: 'Incremental Static Regeneration (ISR)',
    acronym: 'Static pages that update periodically',
    seoScore: 95,
    performanceScore: 95,
    description: 'Pages are statically generated at build time but can be regenerated in the background. Best of both worlds: static performance with dynamic updates.',
    pros: [
      'Excellent SEO (static HTML)',
      'Fast serving (CDN cached)',
      'Automatic updates in background',
      'Scales to millions of pages',
    ],
    cons: [
      'Stale data between regenerations',
      'Complexity in cache invalidation',
      'First visitor after revalidation waits',
      'Requires careful revalidation timing',
    ],
    useCases: 'E-commerce product pages, blog posts, marketing pages with occasional updates.',
  },
  {
    name: 'Static Site Generation (SSG)',
    acronym: 'Pre-rendered at build time',
    seoScore: 100,
    performanceScore: 100,
    description: 'All pages are generated at build time and served as static files. Maximum performance and SEO, but requires rebuild for updates.',
    pros: [
      'Perfect SEO (static HTML)',
      'Fastest possible serving',
      'CDN-friendly',
      'No server needed',
    ],
    cons: [
      'Build time increases with pages',
      'Content is static until rebuild',
      'Not suitable for dynamic content',
      'Requires full rebuild for updates',
    ],
    useCases: 'Documentation sites, blogs, landing pages, portfolios (like this one!), marketing sites.',
  },
]

const seoBestPractices = [
  {
    title: 'Use Next.js Metadata API',
    description: 'Define metadata at page level for proper title, description, and Open Graph tags.',
  },
  {
    title: 'Implement Structured Data',
    description: 'Add JSON-LD schema for better search engine understanding of your content.',
  },
  {
    title: 'Optimize for Core Web Vitals',
    description: 'Google uses LCP, CLS, and INP as ranking factors. Keep them in green zone.',
  },
  {
    title: 'Create XML Sitemap',
    description: 'Generate sitemap.xml to help search engines discover all your pages.',
  },
  {
    title: 'Use Semantic HTML',
    description: 'Proper heading hierarchy (h1-h6), semantic elements, and ARIA labels.',
  },
  {
    title: 'Implement robots.txt',
    description: 'Control which pages crawlers can access and specify sitemap location.',
  },
  {
    title: 'Add Canonical URLs',
    description: 'Prevent duplicate content issues with proper canonical tags.',
  },
  {
    title: 'Optimize Images',
    description: 'Use next/image for automatic optimization and proper alt text for accessibility.',
  },
]

const performanceComparison = [
  { metric: 'TTFB', ssr: '~200ms', csr: '~100ms', isr: '~50ms', ssg: '~50ms' },
  { metric: 'FCP', ssr: '~800ms', csr: '~2000ms', isr: '~400ms', ssg: '~400ms' },
  { metric: 'LCP', ssr: '~1500ms', csr: '~3000ms', isr: '~1000ms', ssg: '~1000ms' },
  { metric: 'TTI', ssr: '~2000ms', csr: '~4000ms', isr: '~1500ms', ssg: '~1500ms' },
  { metric: 'SEO Score', ssr: '100', csr: '50-70*', isr: '95', ssg: '100' },
  { metric: 'Server Cost', ssr: 'High', csr: 'Low', isr: 'Low', ssg: 'Very Low' },
]
