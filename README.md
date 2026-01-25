# Portfolio - Production-Grade Next.js Application

A high-performance personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Optimized for Core Web Vitals with a focus on LCP, CLS, and INP.

## 🚀 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **UI Library**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4
- **Fonts**: next/font (Inter, JetBrains Mono)
- **Animations**: CSS-only (no heavy libraries)

## 📊 Performance Targets

- **LCP**: < 2.5s (Largest Contentful Paint)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **INP**: < 200ms (Interaction to Next Paint)
- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)

## 🏗️ Architecture Decisions

### Why App Router?
- Server Components by default (smaller JS bundles)
- Built-in streaming with Suspense
- Better performance through server-side rendering
- Reduced client-side JavaScript by ~60%

### Why CSS Animations Only?
- No 45KB animation library overhead
- GPU-accelerated (transform/opacity)
- No CLS from animation libraries
- Better INP metrics

### Why next/font?
- Self-hosted fonts (no CDN roundtrip)
- Automatic subsetting and optimization
- Eliminates render-blocking font requests
- ~150ms faster TTFB

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout with fonts
│   │   ├── page.tsx             # Home page (LCP optimized)
│   │   ├── engineering-decisions/
│   │   ├── performance/         # Web Vitals dashboard
│   │   ├── seo-lab/             # SSR vs CSR comparison
│   │   ├── case-studies/        # Real-world problems
│   │   ├── frontend-system-design/
│   │   ├── sitemap.ts           # XML sitemap
│   │   ├── robots.ts            # robots.txt
│   │   └── manifest.ts          # PWA manifest
│   ├── components/              # React components
│   │   ├── Navigation.tsx       # Header navigation
│   │   ├── WebVitalsReporter.tsx
│   │   ├── Card.tsx             # Reusable card
│   │   ├── Section.tsx          # Section container
│   │   └── Skeleton.tsx         # Loading skeletons
│   └── lib/                     # Utilities
│       ├── utils.ts             # Helper functions
│       └── web-vitals.ts        # Web Vitals utilities
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config (strict)
├── next.config.ts               # Next.js configuration
└── package.json
```

## 🎯 Key Features

### Pages

1. **Home** - Fast-loading hero with Core Web Vitals showcase
2. **Engineering Decisions** - Architectural choices and tradeoffs
3. **Performance Dashboard** - Real-time Web Vitals metrics
4. **SEO Laboratory** - SSR vs CSR vs ISR comparison
5. **Case Studies** - Real-world frontend optimizations
6. **System Design** - Frontend architecture patterns

### Performance Optimizations

- ✅ Server Components by default
- ✅ Image optimization with next/image
- ✅ Font optimization with next/font
- ✅ CSS-only animations
- ✅ Zero layout shift (explicit dimensions)
- ✅ Minimal client-side JavaScript
- ✅ Responsive design (mobile-first)
- ✅ Semantic HTML + accessibility

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Type Check

```bash
npm run type-check
```

## 📝 Development Guidelines

### Adding New Pages

1. Create page in `src/app/[page-name]/page.tsx`
2. Use Server Component by default
3. Add metadata for SEO
4. Update `sitemap.ts`
5. Add navigation link in `Navigation.tsx`

### Performance Checklist

- [ ] Use Server Component unless interactivity required
- [ ] Add explicit width/height to images
- [ ] Use next/image with priority for above-fold images
- [ ] Test with Lighthouse (target 95+)
- [ ] Measure with Web Vitals API
- [ ] Check for layout shifts in Chrome DevTools
- [ ] Test on mobile devices

### Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation
- [ ] Focus-visible states
- [ ] Color contrast AA+
- [ ] Alt text for images

## 🎨 Styling Guidelines

### Tailwind Usage

- Mobile-first (start with base, add `sm:`, `md:`, `lg:`)
- Use design tokens (colors, spacing)
- Prefer utility classes over custom CSS
- Use `dark:` variants for dark mode

### Animation Rules

- Only use transform and opacity (GPU-accelerated)
- Respect `prefers-reduced-motion`
- No layout-triggering properties (width, height, top, left)
- Keep animations under 300ms
- Use Tailwind's built-in animations

## 📊 Monitoring

### Web Vitals

Web Vitals are automatically tracked with the `WebVitalsReporter` component. In production, send metrics to your analytics service:

```typescript
// src/components/WebVitalsReporter.tsx
window.gtag?.('event', metric.name, { value: metric.value })
```

### Recommended Tools

- **Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **Chrome User Experience Report**: Real user metrics

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# Replace with your domain
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Deployment

Optimized for **Vercel**, but works on any platform:

```bash
npm run build
npm start
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Server Components](https://react.dev/reference/rsc/server-components)

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as a template for your own projects!

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

---

**Built with performance in mind** ⚡

LCP < 2.5s • CLS < 0.1 • INP < 200ms • Lighthouse 95+
# portfolio
