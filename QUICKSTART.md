# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn

---

## Step 1: Install Dependencies

```bash
cd portfolio
npm install
```

This installs:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- All dependencies

---

## Step 2: Customize Your Information

### Update Metadata (IMPORTANT)

**File: `src/app/layout.tsx`**

```typescript
// Line 44-47: Update with your info
export const metadata: Metadata = {
  metadataBase: new URL('https://YOUR-DOMAIN.com'), // ← Your domain
  title: {
    default: 'YOUR NAME | Senior Staff Frontend Engineer',
    template: '%s | YOUR NAME',
  },
  description: 'YOUR DESCRIPTION HERE',
  // ... update other fields
```

**File: `src/app/sitemap.ts`**

```typescript
// Line 23: Update base URL
const baseUrl = 'https://YOUR-DOMAIN.com'
```

**File: `src/app/robots.ts`**

```typescript
// Line 20: Update base URL
const baseUrl = 'https://YOUR-DOMAIN.com'
```

### Update Navigation Name

**File: `src/components/Navigation.tsx`**

```typescript
// Line 48: Update your name
<Link href="/" className="...">
  YOUR NAME  // ← Change this
</Link>
```

### Update Footer

**File: `src/app/layout.tsx`**

```typescript
// Line 99-100: Customize footer
<p>Built with Next.js App Router, React, and TypeScript</p>
<p className="mt-2">YOUR NAME © 2026</p>
```

---

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

You should see your portfolio running! 🎉

---

## Step 4: Customize Content

### Home Page

**File: `src/app/page.tsx`**

- Update hero text (lines 55-60)
- Customize expertise areas (lines 168-197)
- Update featured pages (lines 199-217)

### About Your Experience

**File: `src/app/engineering-decisions/page.tsx`**

- Already has example content
- Customize to your experience

**File: `src/app/case-studies/page.tsx`**

- Replace with your real case studies
- Or keep examples as portfolio showcase

---

## Step 5: Add Your Assets

### Required Images

Create these files in `public/`:

```
public/
├── favicon.ico          # Browser favicon (32x32)
├── icon-192.png         # PWA icon (192x192)
├── icon-512.png         # PWA icon (512x512)
└── og-image.png         # Social sharing (1200x630)
```

**Quick way to generate**:
1. Go to [favicon.io](https://favicon.io/)
2. Upload your image or use text generator
3. Download and extract to `public/`

---

## Step 6: Build for Production

```bash
npm run build
```

This will:
- Type-check TypeScript
- Build optimized production bundle
- Generate static pages
- Optimize images and fonts

**Expected build time**: 30-60 seconds

---

## Step 7: Test Production Build Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

Test:
- All pages load
- Navigation works
- No console errors
- Images display correctly

---

## Step 8: Test Performance

### Using Lighthouse

1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select "Desktop" and "Performance"
4. Click "Analyze page load"

**Target scores**:
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

### Using PageSpeed Insights

1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your deployed URL
3. Check both Mobile and Desktop

---

## Step 9: Deploy to Vercel (Recommended)

### Option 1: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** Your site will be live in ~2 minutes.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts.

---

## Step 10: Set Up Analytics (Optional)

### Add Web Vitals Tracking

**File: `src/components/WebVitalsReporter.tsx`**

```typescript
useReportWebVitals((metric) => {
  // Send to Google Analytics
  window.gtag?.('event', metric.name, {
    value: Math.round(metric.value),
    metric_id: metric.id,
    metric_rating: metric.rating,
  })
  
  // Or send to Vercel Analytics
  // Or any other analytics service
})
```

### Google Analytics

1. Create GA4 property
2. Get tracking ID
3. Add to `src/app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

---

## Common Customizations

### Change Color Scheme

**File: `tailwind.config.ts`**

```typescript
extend: {
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
  }
}
```

### Add New Page

1. Create `src/app/[page-name]/page.tsx`
2. Add to navigation in `src/components/Navigation.tsx`
3. Update `src/app/sitemap.ts`

### Change Fonts

**File: `src/app/layout.tsx`**

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
  display: 'swap',
})
```

---

## Troubleshooting

### Build Errors

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run type-check
```

### Runtime Errors

**Check browser console** (F12)
- Look for red errors
- Fix imports/exports
- Check component names

### Performance Issues

**LCP too high?**
- Add `priority` to hero image
- Check server response time
- Reduce JavaScript above fold

**CLS issues?**
- Add explicit dimensions to images
- Use skeleton loaders
- Check font loading

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ Running locally
- ✅ Optimized for Core Web Vitals
- ✅ SEO-ready
- ✅ Accessible
- ✅ Production-ready

### Next Steps

1. Customize content with your experience
2. Add your case studies
3. Replace example data with real projects
4. Add your social links
5. Deploy to production
6. Share with the world! 🚀

---

## Need Help?

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Web Vitals Guide](https://web.dev/vitals/)

### Performance Checklist
See `PERFORMANCE.md` for detailed optimization guide

### Project Structure
See `README.md` for complete documentation

---

**Happy coding!** 💻⚡
