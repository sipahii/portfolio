/**
 * Tech Stack Data Model
 * 
 * Purpose: Production-ready tech skills with realistic ratings
 * 
 * Rating Scale Philosophy:
 * 1 = Beginner (Learning, limited experience)
 * 2 = Competent (Can complete tasks with guidance)
 * 3 = Proficient (Independent, production experience)
 * 4 = Advanced (Deep knowledge, can mentor others)
 * 5 = Expert (Industry-level expertise, thought leader)
 * 
 * IMPORTANT: Ratings reflect REAL production experience, not aspirational levels
 */

import { SkillCategory, ToolCategory } from '@/types/tech-stack'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Frameworks & Libraries',
    description: 'Core technologies for building modern web applications',
    skills: [
      {
        name: 'React',
        level: 5,
        context: 'Built 20+ production apps. Expert in hooks, performance optimization, Server Components, and advanced patterns. Mentored teams on React best practices.',
        yearsOfExperience: 5,
      },
      {
        name: 'Next.js',
        level: 5,
        context: 'Deep expertise in App Router, Server Components, ISR, and streaming SSR. Optimized Core Web Vitals for high-traffic applications.',
        yearsOfExperience: 4,
      },
      {
        name: 'TypeScript',
        level: 4,
        context: 'Built type-safe applications with advanced generics, utility types, and strict mode. Reduced runtime errors by 70% across projects.',
        yearsOfExperience: 4,
      },
      {
        name: 'JavaScript (ES6+)',
        level: 5,
        context: 'Deep understanding of closures, async patterns, event loop, and modern APIs. Wrote custom polyfills and performance-critical code.',
        yearsOfExperience: 6,
      },
      {
        name: 'HTML5',
        level: 5,
        context: 'Semantic markup, accessibility, SEO optimization. Built WCAG 2.1 AA compliant interfaces for government and healthcare applications.',
        yearsOfExperience: 6,
      },
    ],
  },
  {
    title: 'Styling & UI',
    description: 'Modern CSS approaches and design systems',
    skills: [
      {
        name: 'Tailwind CSS',
        level: 4,
        context: 'Built design systems with custom configs. Optimized bundle sizes and created reusable utility patterns for scalable UIs.',
        yearsOfExperience: 3,
      },
      {
        name: 'CSS3 & Modern CSS',
        level: 5,
        context: 'Expert in Grid, Flexbox, animations, custom properties. Built GPU-accelerated animations respecting prefers-reduced-motion.',
        yearsOfExperience: 6,
      },
      {
        name: 'CSS Modules',
        level: 4,
        context: 'Scoped styling for component libraries. Prevented style collisions in large codebases with multiple teams.',
        yearsOfExperience: 3,
      },
      {
        name: 'Responsive Design',
        level: 5,
        context: 'Mobile-first approach for applications serving 1M+ users. Optimized for all viewport sizes and touch interfaces.',
        yearsOfExperience: 6,
      },
    ],
  },
  {
    title: 'State Management',
    description: 'Managing application state at scale',
    skills: [
      {
        name: 'Redux Toolkit',
        level: 4,
        context: 'Architected state management for complex applications with 50+ slices. Implemented RTK Query for efficient data fetching.',
        yearsOfExperience: 3,
      },
      {
        name: 'Zustand',
        level: 4,
        context: 'Lightweight state management for React apps. Used for client-side state in Next.js applications with server components.',
        yearsOfExperience: 2,
      },
      {
        name: 'React Context',
        level: 5,
        context: 'Built theme systems, auth contexts, and optimized re-render patterns. Expert in avoiding performance pitfalls.',
        yearsOfExperience: 5,
      },
      {
        name: 'React Server Components',
        level: 4,
        context: 'Migrated applications to RSC architecture. Reduced client-side JS by 40% while maintaining interactivity.',
        yearsOfExperience: 2,
      },
    ],
  },
  {
    title: 'Performance & Web Vitals',
    description: 'Optimization and real-world performance engineering',
    skills: [
      {
        name: 'Core Web Vitals',
        level: 5,
        context: 'Optimized LCP, CLS, INP for production apps. Achieved 95+ Lighthouse scores on high-traffic sites. Implemented RUM monitoring.',
        yearsOfExperience: 3,
      },
      {
        name: 'Lighthouse',
        level: 5,
        context: 'Performance auditing and optimization. Automated CI/CD checks and tracked metrics over time.',
        yearsOfExperience: 4,
      },
      {
        name: 'SSR & ISR',
        level: 5,
        context: 'Built server-rendered applications with Next.js. Implemented ISR strategies for dynamic content with fast TTI.',
        yearsOfExperience: 4,
      },
      {
        name: 'Code Splitting',
        level: 4,
        context: 'Reduced bundle sizes by 60% using dynamic imports and route-based splitting. Optimized loading strategies.',
        yearsOfExperience: 3,
      },
      {
        name: 'Image Optimization',
        level: 4,
        context: 'Implemented next/image with custom loaders. Reduced image weight by 80% while maintaining visual quality.',
        yearsOfExperience: 3,
      },
    ],
  },
  {
    title: 'Developer Tooling',
    description: 'Build tools, linters, and development experience',
    skills: [
      {
        name: 'Webpack',
        level: 3,
        context: 'Configured custom builds for complex applications. Optimized chunk strategies and implemented tree shaking.',
        yearsOfExperience: 3,
      },
      {
        name: 'Vite',
        level: 4,
        context: 'Migrated projects from Webpack to Vite. Reduced dev server start time from 45s to 2s.',
        yearsOfExperience: 2,
      },
      {
        name: 'ESLint',
        level: 4,
        context: 'Created custom rules and shareable configs. Enforced code quality standards across teams.',
        yearsOfExperience: 4,
      },
      {
        name: 'Prettier',
        level: 5,
        context: 'Standardized code formatting across organizations. Automated with pre-commit hooks and CI/CD.',
        yearsOfExperience: 5,
      },
    ],
  },
  {
    title: 'Testing',
    description: 'Ensuring quality through comprehensive testing',
    skills: [
      {
        name: 'Jest',
        level: 4,
        context: 'Unit and integration testing with 85%+ coverage. Mocked complex dependencies and async behavior.',
        yearsOfExperience: 4,
      },
      {
        name: 'React Testing Library',
        level: 4,
        context: 'User-centric testing approach. Caught accessibility issues early and improved component reliability.',
        yearsOfExperience: 3,
      },
      {
        name: 'Playwright',
        level: 3,
        context: 'E2E testing for critical user flows. Automated cross-browser testing in CI/CD pipelines.',
        yearsOfExperience: 2,
      },
      {
        name: 'Vitest',
        level: 3,
        context: 'Fast unit testing for Vite projects. 10x faster test execution compared to Jest.',
        yearsOfExperience: 1,
      },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server-side development and API integration',
    skills: [
      {
        name: 'Node.js',
        level: 4,
        context: 'Built REST APIs, serverless functions, and Next.js API routes. Handled authentication and database integration.',
        yearsOfExperience: 4,
      },
      {
        name: 'REST APIs',
        level: 5,
        context: 'Designed and consumed RESTful APIs. Implemented caching strategies and error handling patterns.',
        yearsOfExperience: 5,
      },
      {
        name: 'GraphQL',
        level: 3,
        context: 'Integrated Apollo Client for data fetching. Built type-safe queries with code generation.',
        yearsOfExperience: 2,
      },
      {
        name: 'Next.js API Routes',
        level: 4,
        context: 'Built serverless API endpoints. Implemented middleware for auth, rate limiting, and logging.',
        yearsOfExperience: 3,
      },
    ],
  },
  {
    title: 'DevOps & Deployment',
    description: 'CI/CD, hosting, and deployment strategies',
    skills: [
      {
        name: 'Vercel',
        level: 5,
        context: 'Deployed 30+ Next.js applications. Optimized Edge Functions, analytics, and preview deployments.',
        yearsOfExperience: 4,
      },
      {
        name: 'GitHub Actions',
        level: 4,
        context: 'Automated testing, linting, and deployments. Built custom workflows for monorepo CI/CD.',
        yearsOfExperience: 3,
      },
      {
        name: 'Docker',
        level: 3,
        context: 'Containerized applications for consistent environments. Optimized image sizes and build times.',
        yearsOfExperience: 2,
      },
      {
        name: 'Git',
        level: 5,
        context: 'Advanced Git workflows including rebasing, cherry-picking, and conflict resolution. Mentored teams on branching strategies.',
        yearsOfExperience: 6,
      },
    ],
  },
  {
    title: 'Monitoring & Analytics',
    description: 'Observability, error tracking, and user analytics',
    skills: [
      {
        name: 'Sentry',
        level: 4,
        context: 'Error tracking and performance monitoring. Reduced production errors by 80% through proactive alerts.',
        yearsOfExperience: 3,
      },
      {
        name: 'Web Vitals API',
        level: 5,
        context: 'Implemented custom RUM tracking. Built dashboards to monitor LCP, CLS, INP in production.',
        yearsOfExperience: 3,
      },
      {
        name: 'Google Analytics',
        level: 4,
        context: 'Event tracking and user behavior analysis. Implemented GA4 with custom dimensions.',
        yearsOfExperience: 4,
      },
      {
        name: 'Vercel Analytics',
        level: 4,
        context: 'Real-time Web Vitals monitoring. Used data to drive performance improvements.',
        yearsOfExperience: 3,
      },
    ],
  },
  {
    title: 'SEO & Accessibility',
    description: 'Building discoverable and inclusive web experiences',
    skills: [
      {
        name: 'Technical SEO',
        level: 5,
        context: 'Structured data, meta tags, sitemaps. Improved organic traffic by 150% through technical optimizations.',
        yearsOfExperience: 4,
      },
      {
        name: 'WCAG 2.1',
        level: 4,
        context: 'Built AA-compliant interfaces. Implemented keyboard navigation, ARIA, and screen reader support.',
        yearsOfExperience: 3,
      },
      {
        name: 'Semantic HTML',
        level: 5,
        context: 'Proper heading hierarchy, landmarks, and document structure. Improved SEO and accessibility scores.',
        yearsOfExperience: 6,
      },
    ],
  },
]

export const toolCategories: ToolCategory[] = [
  {
    title: 'Code Editors & IDEs',
    tools: [
      { name: 'VS Code', purpose: 'Primary code editor with custom extensions', frequency: 'Daily' },
      { name: 'Cursor', purpose: 'AI-powered development and rapid prototyping', frequency: 'Daily' },
    ],
  },
  {
    title: 'Version Control',
    tools: [
      { name: 'Git', purpose: 'Source control and collaboration', frequency: 'Daily' },
      { name: 'GitHub', purpose: 'Code hosting, CI/CD, and project management', frequency: 'Daily' },
    ],
  },
  {
    title: 'Browser DevTools',
    tools: [
      { name: 'Chrome DevTools', purpose: 'Performance profiling, debugging, and network analysis', frequency: 'Daily' },
      { name: 'React DevTools', purpose: 'Component inspection and profiling', frequency: 'Daily' },
      { name: 'Lighthouse', purpose: 'Performance audits and Web Vitals tracking', frequency: 'Daily' },
    ],
  },
  {
    title: 'API Development',
    tools: [
      { name: 'Postman', purpose: 'API testing and documentation', frequency: 'Weekly' },
      { name: 'Insomnia', purpose: 'REST and GraphQL API client', frequency: 'Weekly' },
    ],
  },
  {
    title: 'Design & Collaboration',
    tools: [
      { name: 'Figma', purpose: 'Design handoff and prototyping', frequency: 'Weekly' },
      { name: 'Notion', purpose: 'Documentation and project planning', frequency: 'Daily' },
      { name: 'Linear', purpose: 'Issue tracking and sprint planning', frequency: 'Daily' },
    ],
  },
  {
    title: 'Terminal & Shell',
    tools: [
      { name: 'iTerm2', purpose: 'Enhanced terminal with tmux integration', frequency: 'Daily' },
      { name: 'Oh My Zsh', purpose: 'Shell customization and plugins', frequency: 'Daily' },
    ],
  },
]
