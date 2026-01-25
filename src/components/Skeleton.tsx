/**
 * Skeleton Loader Component
 * 
 * Purpose: Prevent CLS during loading states
 * 
 * Performance:
 * - CSS-only animation
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
  const baseStyles = 'animate-pulse bg-gray-200 dark:bg-gray-700'

  const variantStyles = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded',
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
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
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
