/**
 * Frontend System Design Page
 * 
 * Purpose: Demonstrate frontend architecture and system design thinking
 * 
 * Architecture:
 * - Server Component
 * - Educational content with collapsible ASCII diagrams
 * - Optimized for performance
 * 
 * Performance:
 * - Diagrams hidden by default (on-demand)
 * - No animation overload
 * - Semantic HTML for accessibility
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend System Design',
  description: 'Frontend architecture patterns, system design examples, and scalable solutions for complex web applications.',
}

export default function FrontendSystemDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-labelledby="system-design-heading" className="relative py-10 sm:py-10 overflow-hidden bg-cyber-grid">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 id="system-design-heading" className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="text-neon">Frontend System Design</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Scalable frontend architectures, design patterns, and system design approaches
            for building production-grade web applications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="space-y-20">
            {systemDesigns.map((design, index) => (
              <article 
                key={design.title} 
                className="card-clean card-hover"
                aria-labelledby={`design-${index}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl" aria-hidden="true">{design.icon}</span>
                  <h2 id={`design-${index}`} className="text-4xl font-bold text-white">
                    {design.title}
                  </h2>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {design.description}
                </p>

                {/* Problem Statement */}
                <section className="mb-8" aria-labelledby={`problem-${index}`}>
                  <h3 id={`problem-${index}`} className="text-2xl font-semibold text-white mb-4">
                    Problem Statement
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {design.problem}
                  </p>
                </section>

                {/* Requirements */}
                <section className="mb-8" aria-labelledby={`requirements-${index}`}>
                  <h3 id={`requirements-${index}`} className="text-2xl font-semibold text-white mb-4">
                    Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="terminal-box">
                      <h4 className="font-semibold text-neon-cyan mb-3 text-lg">
                        Functional
                      </h4>
                      <ul className="space-y-2" role="list">
                        {design.requirements.functional.map((req, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-300" role="listitem">
                            <span className="text-neon-cyan mr-2 mt-1" aria-hidden="true">•</span>
                            <span className="flex-1">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="terminal-box border-neon-purple/30">
                      <h4 className="font-semibold text-neon-purple mb-3 text-lg">
                        Non-Functional
                      </h4>
                      <ul className="space-y-2" role="list">
                        {design.requirements.nonFunctional.map((req, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-300" role="listitem">
                            <span className="text-neon-purple mr-2 mt-1" aria-hidden="true">•</span>
                            <span className="flex-1">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Architecture Overview */}
                {design.architecture && (
                  <section className="mb-6" aria-labelledby={`architecture-${index}`}>
                    <h3 id={`architecture-${index}`} className="text-xl font-semibold text-white mb-3">
                      Architecture Overview
                    </h3>
                    <ul className="space-y-2 terminal-box" role="list">
                      {design.architecture.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300" role="listitem">
                          <span className="text-neon-cyan mr-2 flex-shrink-0">→</span>
                          <span className="flex-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Architecture Diagram */}
                {design.diagram && (
                  <section className="mb-8" aria-labelledby={`diagram-${index}`}>
                    <h3 id={`diagram-${index}`} className="text-xl font-semibold text-white mb-4">
                      Architecture Diagram
                    </h3>
                    <div className="bg-[#020617] rounded-lg p-4 overflow-x-auto">
                      <img 
                        src={design.diagram} 
                        alt={`${design.title} architecture diagram showing the flow from client to server components`}
                        className="w-full max-w-4xl mx-auto"
                        loading="lazy"
                      />
                    </div>
                  </section>
                )}

                {/* Key Decisions */}
                <section className="mb-6" aria-labelledby={`decisions-${index}`}>
                  <h3 id={`decisions-${index}`} className="text-xl font-semibold text-white mb-3">
                    Key Architectural Decisions
                  </h3>
                  <div className="space-y-4" role="list">
                    {design.decisions.map((decision, i) => (
                      <div key={i} className="glass-dark rounded-lg p-4 border border-neon-blue/30" role="listitem">
                        <h4 className="font-semibold text-white mb-2">
                          {decision.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-2">
                          {decision.rationale}
                        </p>
                        <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
                          {decision.techniques.map((tech) => (
                            <span
                              key={tech}
                              className="badge-neon text-xs"
                              role="listitem"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Performance Optimizations */}
                {design.optimizations && (
                  <section className="mb-6" aria-labelledby={`optimizations-${index}`}>
                    <h3 id={`optimizations-${index}`} className="text-xl font-semibold text-white mb-3">
                      Performance Optimizations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="list">
                      {design.optimizations.map((opt, i) => (
                        <div key={i} className="terminal-box border-neon-cyan/30" role="listitem">
                          <p className="text-sm text-gray-300">
                            <span className="font-semibold text-neon-cyan">
                              {opt.technique}:
                            </span>{' '}
                            {opt.benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Trade-offs */}
                {design.tradeoffs && (
                  <section className="glass-dark rounded-lg p-6 border border-yellow-500/30" aria-labelledby={`tradeoffs-${index}`}>
                    <h3 id={`tradeoffs-${index}`} className="text-xl font-semibold text-white mb-3">
                      Trade-offs & Considerations
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300" role="list">
                      {design.tradeoffs.map((tradeoff, i) => (
                        <li key={i} className="flex items-start" role="listitem">
                          <span className="text-yellow-400 mr-2" aria-hidden="true">⚠</span>
                          <span>{tradeoff}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </article>
            ))}
          </div>

          {/* Design Principles */}
          <section className="mt-16 card-clean" aria-labelledby="design-principles-heading">
            <h2 id="design-principles-heading" className="text-2xl font-bold text-white mb-6">
              Frontend System Design Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {designPrinciples.map((principle) => (
                <article key={principle.title} className="glass-dark rounded-lg p-4 border border-neon-purple/20" role="listitem">
                  <h3 className="font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

/**
 * System Design Examples Data
 */
const systemDesigns = [
  {
    icon: '🎬',
    title: 'Infinite Scroll Feed (Social Media)',
    description: 'Design a performant infinite scroll feed similar to Twitter/Instagram that handles thousands of posts while maintaining 60fps scroll performance.',
    problem: 'Need to display unlimited content without degrading performance. Must handle images, videos, and dynamic content while keeping memory usage low and scroll smooth.',
    diagram: '/svg/infinite-scroll-architecture.svg',
    requirements: {
      functional: [
        'Load more content as user scrolls',
        'Display images, videos, and text',
        'Support likes, comments, and shares',
        'Real-time updates for new posts',
      ],
      nonFunctional: [
        'Maintain 60fps scroll performance',
        'Keep memory usage under 200MB',
        'LCP < 2.5s for initial load',
        'Support 10,000+ posts in session',
      ],
    },
    architecture: [
      'Virtual scrolling container manages viewport window and renders only visible items',
      'Intersection Observer triggers lazy loading as user scrolls near bottom',
      'React Server Components fetch post data on the server side',
      'Suspense boundaries handle loading states for async content',
      'Edge API layer provides GraphQL for batching, REST API with cursor pagination, and WebSocket for real-time updates',
    ],
    decisions: [
      {
        title: 'Virtual Scrolling with React Window',
        rationale: 'Only render visible items in viewport. Dramatically reduces DOM nodes and memory usage. Maintains smooth 60fps scroll.',
        techniques: ['react-window', 'Intersection Observer', 'Dynamic Height'],
      },
      {
        title: 'Server Components for Data Fetching',
        rationale: 'Fetch posts on server, stream HTML to client. Reduces client JavaScript and enables parallel data fetching.',
        techniques: ['RSC', 'Streaming SSR', 'Suspense'],
      },
      {
        title: 'Cursor-based Pagination',
        rationale: 'More efficient than offset pagination for large datasets. Prevents issues with real-time inserts.',
        techniques: ['Cursor Pagination', 'GraphQL Connection', 'Opaque Cursors'],
      },
      {
        title: 'Optimistic Updates',
        rationale: 'Update UI immediately for likes/comments before server confirmation. Better perceived performance.',
        techniques: ['Optimistic UI', 'Local State', 'Rollback Strategy'],
      },
    ],
    optimizations: [
      { technique: 'Image Lazy Loading', benefit: 'Load images only when near viewport' },
      { technique: 'next/image Priority', benefit: 'Prioritize above-fold images for LCP' },
      { technique: 'React.memo', benefit: 'Prevent re-renders of unchanged posts' },
      { technique: 'RequestIdleCallback', benefit: 'Process non-critical updates during idle time' },
      { technique: 'IntersectionObserver', benefit: 'Trigger loading with zero performance cost' },
      { technique: 'WebP/AVIF Images', benefit: '50-70% smaller image sizes' },
    ],
    tradeoffs: [
      'Virtual scrolling adds complexity and debugging difficulty',
      'Cursor pagination requires backend support and migration',
      'Optimistic updates need careful error handling and rollback logic',
      'Server Components limit interactivity (need client boundaries)',
      'Memory still grows with very long sessions (need periodic cleanup)',
    ],
  },
  {
    icon: '🔍',
    title: 'Real-Time Search with Autocomplete',
    description: 'Design a performant search system with instant autocomplete, similar to Google Search, handling millions of queries per day.',
    problem: 'Provide instant search results as user types without overwhelming the server or degrading UX. Must handle typos, ranking, and highlighting.',
    diagram: '/svg/search-architecture.svg',
    requirements: {
      functional: [
        'Show suggestions as user types',
        'Highlight matching text',
        'Display recent searches',
        'Handle keyboard navigation',
      ],
      nonFunctional: [
        'Response time < 50ms (p95)',
        'No visual lag during typing',
        'Minimize server requests',
        'Work offline (cached results)',
      ],
    },
    architecture: [
      'User input triggers debounce (300ms) to reduce server requests',
      'Client-side cache checks for cached results before making API call',
      'Edge API layer handles rate limiting, validation, and query parsing',
      'Search engine uses Trie index for prefix matching and fuzzy matching for typos',
      'Redis cache stores hot queries for instant results',
    ],
    decisions: [
      {
        title: 'Debouncing with AbortController',
        rationale: 'Reduce server requests by waiting for user to pause typing. Cancel in-flight requests when new input arrives.',
        techniques: ['Debounce', 'AbortController', 'React useTransition'],
      },
      {
        title: 'Client-Side Trie Cache',
        rationale: 'Cache previous results in memory. For prefix queries, filter cached results before hitting server.',
        techniques: ['Trie Data Structure', 'IndexedDB', 'LRU Cache'],
      },
      {
        title: 'Edge Function for Low Latency',
        rationale: 'Deploy search API to edge locations worldwide. Reduces network latency from 200ms to 20ms.',
        techniques: ['Vercel Edge', 'CloudFlare Workers', 'Geographic Distribution'],
      },
      {
        title: 'Fuzzy Matching for Typos',
        rationale: 'Use Levenshtein distance to handle typos. Improves user experience for misspellings.',
        techniques: ['Levenshtein Distance', 'N-gram', 'Phonetic Matching'],
      },
    ],
    optimizations: [
      { technique: 'Debounce 300ms', benefit: 'Reduce API calls by 80%' },
      { technique: 'Request Deduplication', benefit: 'Prevent duplicate requests' },
      { technique: 'Preload Top Queries', benefit: 'Instant results for common searches' },
      { technique: 'Keyboard Virtualization', benefit: 'Only render visible suggestions' },
      { technique: 'React.memo on Results', benefit: 'Prevent re-renders during typing' },
      { technique: 'IndexedDB Caching', benefit: 'Persist across sessions' },
    ],
    tradeoffs: [
      'Debouncing adds perceived delay (tradeoff: reduce from 300ms to 150ms)',
      'Client cache increases memory usage (mitigate: LRU eviction)',
      'Fuzzy matching increases server CPU (cache aggressively)',
      'Edge functions are expensive (worth it for latency)',
      'Trie data structure is memory-intensive (limit cache size)',
    ],
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics Dashboard',
    description: 'Design a dashboard displaying real-time metrics with charts, similar to Datadog or Grafana, updating every second without performance degradation.',
    problem: 'Display continuously updating time-series data with multiple charts. Must handle high-frequency updates while maintaining 60fps and allowing user interactions.',
    diagram: '/svg/realtime-dashboard-architecture.svg',
    requirements: {
      functional: [
        'Display multiple charts (line, bar, pie)',
        'Update data every 1-5 seconds',
        'Support time range selection',
        'Allow drill-down into metrics',
      ],
      nonFunctional: [
        'Maintain 60fps with live updates',
        'Memory usage stable over hours',
        'INP < 100ms during updates',
        'Support 100+ data points per second',
      ],
    },
    architecture: [
      'Dashboard container uses React Server Components for initial data fetch',
      'Individual chart components (LineChart, BarChart, PieChart) are client components',
      'WebSocket Connection Manager maintains persistent connection for real-time data',
      'WebSocket server handles connection pooling and message aggregation',
      'Data flows from server through WebSocket to charts, triggering efficient canvas redraws',
    ],
    decisions: [
      {
        title: 'Canvas-based Charts (not SVG)',
        rationale: 'Canvas performs better for frequent redraws. SVG has too many DOM nodes for high-frequency updates.',
        techniques: ['HTML Canvas', 'OffscreenCanvas', 'WebGL'],
      },
      {
        title: 'WebSocket for Real-Time Data',
        rationale: 'Bi-directional communication with low latency. More efficient than polling for continuous updates.',
        techniques: ['WebSocket', 'Server-Sent Events', 'Long Polling fallback'],
      },
      {
        title: 'Data Downsampling',
        rationale: 'Reduce data points for older time ranges. Display 1000 points instead of 1M for 24-hour view.',
        techniques: ['LTTB Algorithm', 'Moving Average', 'Min-Max Decimation'],
      },
      {
        title: 'Virtualized Time Series',
        rationale: 'Only render visible time range. As user pans, load more data on demand.',
        techniques: ['Viewport Culling', 'Lazy Loading', 'Infinite Scroll'],
      },
    ],
    optimizations: [
      { technique: 'RequestAnimationFrame', benefit: 'Batch chart updates to vsync' },
      { technique: 'OffscreenCanvas', benefit: 'Render charts in Web Worker' },
      { technique: 'Object Pooling', benefit: 'Reuse data point objects' },
      { technique: 'Debounced Pan/Zoom', benefit: 'Reduce re-renders during interaction' },
      { technique: 'React.memo on Charts', benefit: 'Only re-render changed charts' },
      { technique: 'Binary Protocol', benefit: 'Reduce WebSocket message size by 70%' },
    ],
    tradeoffs: [
      'Canvas is harder to make accessible than SVG (use ARIA labels)',
      'WebSockets require persistent connections (higher server cost)',
      'Downsampling loses data granularity (acceptable for overview)',
      'OffscreenCanvas not supported in Safari (use feature detection)',
      'Binary protocols harder to debug (use JSON in development)',
    ],
  },
]

const designPrinciples = [
  {
    title: 'Performance Budget',
    description: 'Set hard limits on bundle size, LCP, CLS, and INP. Reject features that exceed budget.',
  },
  {
    title: 'Progressive Enhancement',
    description: 'Core functionality works without JavaScript. Enhanced experience with JS enabled.',
  },
  {
    title: 'Mobile First',
    description: 'Design for constrained devices first. Scale up to desktop, not down to mobile.',
  },
  {
    title: 'Server by Default',
    description: 'Use Server Components as default. Only use Client Components when necessary.',
  },
  {
    title: 'Measure Everything',
    description: 'Instrument performance metrics. Use RUM (Real User Monitoring) not just lab data.',
  },
  {
    title: 'Fail Gracefully',
    description: 'Handle network failures, slow connections, and JavaScript errors gracefully.',
  },
  {
    title: 'Accessibility First',
    description: 'Build with keyboard navigation, screen readers, and WCAG compliance from day one.',
  },
  {
    title: 'Cache Strategically',
    description: 'Use multi-layer caching: CDN, browser, service worker, memory, and server.',
  },
]
