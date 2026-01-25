import type { Config } from 'tailwindcss'

/**
 * Tailwind Configuration - Clean Dark Theme (No Shadows/Hovers)
 * 
 * Design Philosophy:
 * - Dark-first design
 * - Clean, minimal aesthetic
 * - No shadows or glow effects
 * - No hover transforms
 * - Pure, flat design
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme foundation
        dark: {
          950: '#000000',
          900: '#0A0A0F',
          800: '#13131A',
          700: '#1A1A24',
          600: '#242433',
          500: '#2E2E3E',
        },
        // Neon accent colors
        neon: {
          blue: '#00D9FF',
          purple: '#B794F6',
          pink: '#FF00FF',
          cyan: '#00FFF0',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      /* Gradient backgrounds */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #00D9FF 0%, #B794F6 50%, #FF00FF 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #1A1A24 100%)',
        'cyber-grid': 'repeating-linear-gradient(0deg, rgba(183, 148, 246, 0.03) 0px, transparent 1px, transparent 40px, rgba(183, 148, 246, 0.03) 41px), repeating-linear-gradient(90deg, rgba(183, 148, 246, 0.03) 0px, transparent 1px, transparent 40px, rgba(183, 148, 246, 0.03) 41px)',
      },
      /* Background size for animated patterns */
      backgroundSize: {
        'grid': '40px 40px',
        'cyber': '80px 80px',
      },
      /* Performance-optimized animations */
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config