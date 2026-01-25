/**
 * Section Container Component
 * 
 * Purpose: Consistent section spacing and layout
 * 
 * Performance:
 * - Server Component (no client JS)
 * - Stable layout prevents CLS
 * - Responsive padding
 */

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${className}`}
    >
      {children}
    </section>
  )
}
