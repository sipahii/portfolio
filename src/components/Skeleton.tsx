/**
 * Skeleton Loader Component - Enhanced with Shimmer
 * 
 * Purpose: Prevent CLS during loading states
 * 
 * Performance:
 * - CSS-only animation with shimmer effect
 * - Explicit dimensions
 * - No JavaScript required
 * 
 * Usage: Replace content with skeleton of same dimensions
 */

interface SkeletonProps {
  className?: string
  width?: string
  height?: string
  variant?: 'text' | 'circular' | 'rectangular'
}

export function Skeleton({
  className = '',
  width,
  height,
  variant = 'rectangular',
}: SkeletonProps) {
  const baseStyles = 'shimmer bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800'

  const variantStyles = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  const style = {
    width: width || undefined,
    height: height || undefined,
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      aria-label="Loading..."
      role="status"
    />
  )
}

/**
 * Pre-built skeleton patterns for common use cases
 */
export function SkeletonCard() {
  return (
    <div className="card-elevated">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-10 w-24 rounded-lg" />
        <Skeleton className="h-10 w-24 rounded-lg" />
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          width={i === lines - 1 ? '70%' : '100%'}
        />
      ))}
    </div>
  )
}
