/**
 * Card Component
 * 
 * Purpose: Reusable card container with consistent styling
 * 
 * Performance:
 * - Server Component by default
 * - CSS-only hover effects
 * - Stable dimensions
 */

import { ReactNode } from 'react'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
  hoverable?: boolean
}

export function Card({ children, className = '', href, hoverable = false }: CardProps) {
  const baseStyles = `bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 ${className}`
  const hoverStyles = hoverable
    ? 'hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all'
    : ''

  const cardStyles = `${baseStyles} ${hoverStyles}`

  if (href) {
    return (
      <Link href={href} className={`block ${cardStyles}`}>
        {children}
      </Link>
    )
  }

  return <div className={cardStyles}>{children}</div>
}
