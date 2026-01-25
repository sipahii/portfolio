/**
 * Robots.txt Generator
 * 
 * Purpose: Control search engine crawler access
 * 
 * SEO Impact:
 * - Tells crawlers which pages to index
 * - Specifies sitemap location
 * - Prevents crawling of private pages
 * 
 * Performance:
 * - Reduces unnecessary crawl load
 * - Guides crawlers to important pages
 */

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://yourportfolio.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'], // Block API routes and private pages
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0, // No delay for Google
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
