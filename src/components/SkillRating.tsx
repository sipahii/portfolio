/**
 * SkillRating Component - Server-Side, CSS-Only
 * 
 * Purpose: Visual skill level indicator without JavaScript
 * 
 * Design Decisions:
 * - Server Component (no hydration cost)
 * - CSS-only progress bar (no JS animations)
 * - Accessible ARIA attributes
 * - Respects prefers-reduced-motion
 * - Stable layout (no CLS)
 * 
 * Performance:
 * - Zero JavaScript
 * - GPU-accelerated transitions
 * - Static HTML with inline styles for instant paint
 */

import { SkillLevel } from '@/types/tech-stack'

interface SkillRatingProps {
  name: string
  level: SkillLevel
  context: string
  yearsOfExperience?: number
  className?: string
}

export function SkillRating({
  name,
  level,
  context,
  yearsOfExperience,
  className = '',
}: SkillRatingProps) {
  // Convert level (1-5) to percentage for visual representation
  const percentage = (level / 5) * 100
  
  // Level labels for accessibility
  const levelLabels = {
    1: 'Beginner',
    2: 'Competent',
    3: 'Proficient',
    4: 'Advanced',
    5: 'Expert',
  }
  
  // Color scheme based on level
  const levelColors = {
    1: 'from-gray-600 to-gray-500',
    2: 'from-blue-600 to-blue-500',
    3: 'from-cyan-600 to-cyan-500',
    4: 'from-purple-600 to-purple-500',
    5: 'from-pink-600 to-pink-500',
  }

  // Generate unique ID for ARIA labeling
  const skillId = `skill-${name.replace(/\s+/g, '-').toLowerCase()}`
  
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Skill name and level */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <h3 id={skillId} className="text-lg font-bold text-white truncate">{name}</h3>
          {yearsOfExperience && (
            <span className="text-xs text-gray-400 whitespace-nowrap" aria-label={`${yearsOfExperience} years of experience`}>
              {yearsOfExperience}y
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {/* Visual label visible to all users, announced by screen readers via meter */}
          <span
            className="text-sm font-semibold text-neon-purple"
            aria-hidden="true"
          >
            {levelLabels[level]}
          </span>
        </div>
      </div>

      {/* 
        Accessibility: Using meter element for semantic skill level representation
        WCAG 1.3.1 Info and Relationships (Level A)
        Screen readers will announce: "React proficiency: 5 out of 5, Expert level"
      */}
      <meter
        id={`${skillId}-meter`}
        className="sr-only"
        min={1}
        max={5}
        value={level}
        aria-label={`${name} proficiency: ${level} out of 5, ${levelLabels[level]} level`}
      >
        {level} out of 5
      </meter>

      {/* Visual progress bar - decorative representation of the meter */}
      <div
        className="relative h-2 bg-dark-700 rounded-full overflow-hidden"
        aria-hidden="true"
        role="presentation"
      >
        {/* Filled portion with gradient */}
        <div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${levelColors[level]} rounded-full transition-all duration-500 ease-out skill-rating-fill`}
          style={{ width: `${percentage}%` }}
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skill-rating-shine"></div>
        </div>
      </div>

      {/* Context description */}
      <p className="text-sm text-gray-400 leading-relaxed">{context}</p>
    </div>
  )
}

/**
 * Compact version for tools section
 */
interface ToolItemProps {
  name: string
  purpose: string
  frequency: 'Daily' | 'Weekly' | 'Occasionally'
}

export function ToolItem({ name, purpose, frequency }: ToolItemProps) {
  const frequencyColors = {
    Daily: 'bg-green-500/20 text-green-400 border-green-500/30',
    Weekly: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Occasionally: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  }

  return (
    <div className="flex items-start gap-4 p-4 bg-dark-800 rounded-lg border border-neon-purple/20 transition-all duration-300 hover:border-neon-purple/40">
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-bold text-white mb-1">{name}</h4>
        <p className="text-sm text-gray-400">{purpose}</p>
      </div>
      <span
        className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${frequencyColors[frequency]}`}
      >
        {frequency}
      </span>
    </div>
  )
}
