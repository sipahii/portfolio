/**
 * Card Component - Clean Dark Theme (No Shadows/Hovers)
 * 
 * Purpose: Clean cards with borders only
 * 
 * Performance:
 * - Server Component by default
 * - No hover effects
 * - No shadows
 * - Stable, flat design
 */

import { ReactNode } from 'react'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
  hoverable?: boolean
  variant?: 'default' | 'neon' | 'holographic' | 'glass'
}

export function Card({ 
  children, 
  className = '', 
  href, 
  hoverable = false,
  variant = 'default'
}: CardProps) {
  const variantStyles = {
    default: 'card-clean',
    neon: 'card-neon',
    holographic: 'card-holographic',
    glass: 'glass-dark rounded-xl p-8',
  }

  const hoverClass = (href || hoverable) ? 'card-hover cursor-pointer' : ''
  const cardStyles = `${variantStyles[variant]} ${hoverClass} ${className}`

  if (href) {
    return (
      <Link href={href} className={`block ${cardStyles}`}>
        {children}
      </Link>
    )
  }

  return <div className={cardStyles}>{children}</div>
}
