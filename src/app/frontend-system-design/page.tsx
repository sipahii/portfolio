/**
 * Frontend System Design Page
 * 
 * Purpose: Demonstrate frontend architecture and system design thinking
 * 
 * Architecture:
 * - Server Component
 * - Educational content with ASCII diagrams
 * - Interactive examples planned for future
 * 
 * Performance:
 * - Text-based content loads fast
 * - No external dependencies
 * - Minimal JavaScript
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend System Design',
  description: 'Frontend architecture patterns, system design examples, and scalable solutions for complex web applications.',
}

export default function FrontendSystemDesignPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Frontend System Design
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Scalable frontend architectures, design patterns, and system design approaches
          for building production-grade web applications.
        </p>

        <div className="space-y-16">
          {systemDesigns.map((design) => (
            <article key={design.title} className="border-t border-gray-200 dark:border-gray-700 pt-8 first:border-t-0 first:pt-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{design.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {design.title}
                </h2>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {design.description}
              </p>

              {/* Problem Statement */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Problem Statement
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {design.problem}
                </p>
              </section>

              {/* Requirements */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">
                      Functional
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {design.requirements.functional.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                      Non-Functional
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {design.requirements.nonFunctional.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Architecture Diagram */}
              {design.diagram && (
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Architecture
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-950 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-xs font-mono text-gray-800 dark:text-gray-200 whitespace-pre">
                      {design.diagram}
                    </pre>
                  </div>
                </section>
              )}

              {/* Key Decisions */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Key Architectural Decisions
                </h3>
                <div className="space-y-4">
                  {design.decisions.map((decision, i) => (
                    <div key={i} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {decision.title}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        {decision.rationale}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {decision.techniques.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs rounded"
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
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Performance Optimizations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {design.optimizations.map((opt, i) => (
                      <div key={i} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <span className="font-semibold text-green-600 dark:text-green-400">
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
                <section className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Trade-offs & Considerations
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {design.tradeoffs.map((tradeoff, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-500 mr-2">⚠</span>
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
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frontend System Design Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPrinciples.map((principle) => (
              <div key={principle.title} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
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
    diagram: `
┌─────────────────────────────────────────────────────────┐
│                     Client (Browser)                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────────┐         ┌──────────────────────┐  │
│  │  Virtual Scroll  │────────▶│   Viewport Window    │  │
│  │   Container      │         │   (Visible Items)    │  │
│  └─────────────────┘         └──────────────────────┘  │
│           │                            │                 │
│           │                            │                 │
│           ▼                            ▼                 │
│  ┌─────────────────┐         ┌──────────────────────┐  │
│  │ Intersection     │         │   Suspense           │  │
│  │ Observer         │────────▶│   Boundaries         │  │
│  └─────────────────┘         └──────────────────────┘  │
│           │                            │                 │
│           │                            │                 │
│           ▼                            ▼                 │
│  ┌──────────────────────────────────────────────────┐  │
│  │         React Server Components (RSC)             │  │
│  │  - Fetch posts from API in batches                │  │
│  │  - Stream HTML to client                          │  │
│  └──────────────────────────────────────────────────┘  │
│           │                            │                 │
└───────────┼────────────────────────────┼─────────────────┘
            │                            │
            ▼                            ▼
┌─────────────────────────────────────────────────────────┐
│                    API Layer (Edge)                      │
│  ┌────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  GraphQL   │  │   REST API   │  │  WebSocket    │  │
│  │  (Batch)   │  │   (Cursor)   │  │  (Real-time)  │  │
│  └────────────┘  └──────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────┘
            │                            │
            ▼                            ▼
┌─────────────────────────────────────────────────────────┐
│                    Data Layer                            │
│  ┌────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  Database  │  │   CDN Cache  │  │   Redis       │  │
│  │  (Posts)   │  │   (Images)   │  │   (Session)   │  │
│  └────────────┘  └──────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────┘`,
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
    diagram: `
┌─────────────────────────────────────────────────────────┐
│                     Client Layer                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  User Input ──▶ Debounce (300ms) ──▶ Client Cache       │
│                        │                    │             │
│                        │                    │             │
│                        │              Cache Hit?          │
│                        │                    │             │
│                        │                    ├─Yes──▶ Show │
│                        │                    │             │
│                        │                    └─No          │
│                        │                         │        │
│                        ▼                         ▼        │
│                 ┌──────────────────────────────────────┐ │
│                 │    Search Request (Fetch API)        │ │
│                 └──────────────────────────────────────┘ │
│                                  │                        │
└──────────────────────────────────┼────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────┐
│                    Edge API Layer                        │
│                                                           │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────┐ │
│  │  Rate Limit  │───▶│  Validation  │───▶│  Query    │ │
│  │  (Per User)  │    │  (Sanitize)  │    │  Parse    │ │
│  └──────────────┘    └──────────────┘    └───────────┘ │
│                                  │                        │
└──────────────────────────────────┼────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────┐
│                    Search Engine                         │
│                                                           │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────┐ │
│  │  Trie Index  │    │   Fuzzy      │    │  Ranking  │ │
│  │  (Prefix)    │───▶│   Matching   │───▶│  (Score)  │ │
│  └──────────────┘    └──────────────┘    └───────────┘ │
│                                  │                        │
│                                  ▼                        │
│  ┌────────────────────────────────────────────────────┐ │
│  │           Redis Cache (Hot Queries)                 │ │
│  │  - Top 1000 queries cached                          │ │
│  │  - TTL: 5 minutes                                   │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘`,
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
    diagram: `
┌─────────────────────────────────────────────────────────┐
│                     React Client                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │         Dashboard Container (Server Component)    │  │
│  │  - Layout definition                              │  │
│  │  - Initial data fetch                             │  │
│  └───────────────────────────────────────────────────┘  │
│                         │                                │
│                         ▼                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │      Chart Components (Client Components)         │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │  │
│  │  │ LineChart│  │ BarChart │  │ PieChart │       │  │
│  │  │ (Canvas) │  │ (Canvas) │  │ (SVG)    │       │  │
│  │  └──────────┘  └──────────┘  └──────────┘       │  │
│  └───────────────────────────────────────────────────┘  │
│                         │                                │
│                         ▼                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │         WebSocket Connection Manager              │  │
│  │  - Reconnection logic                             │  │
│  │  - Message queue                                  │  │
│  │  - Backpressure handling                          │  │
│  └───────────────────────────────────────────────────┘  │
│                         │                                │
└─────────────────────────┼────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   WebSocket Server                       │
│                                                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │         Connection Pool Manager                   │  │
│  │  - Manage 10k+ concurrent connections             │  │
│  │  - Broadcast to subscribed clients                │  │
│  └───────────────────────────────────────────────────┘  │
│                         │                                │
│                         ▼                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │         Message Aggregator                        │  │
│  │  - Batch updates every 1s                         │  │
│  │  - Downsample high-frequency data                 │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Pipeline                          │
│                                                           │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────┐  │
│  │ Metrics  │───▶│  Redis   │───▶│  Time-Series DB  │  │
│  │ Collector│    │  Stream  │    │  (InfluxDB)      │  │
│  └──────────┘    └──────────┘    └──────────────────┘  │
└─────────────────────────────────────────────────────────┘`,
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
