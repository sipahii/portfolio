import type { NextConfig } from 'next'

/**
 * Next.js Configuration
 * 
 * Performance Optimizations:
 * - Optimized image handling with next/image
 * - Strict mode enabled for better error detection
 * - Production optimizations enabled
 */
const nextConfig: NextConfig = {
  /* Enable React strict mode for better development experience */
  reactStrictMode: true,
  
  /* Image optimization configuration */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  /* Compiler optimizations */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
