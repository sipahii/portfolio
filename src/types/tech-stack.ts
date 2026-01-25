/**
 * Tech Stack Type Definitions
 * 
 * Purpose: Type-safe data model for skills, tools, and ratings
 * 
 * Design Decisions:
 * - Realistic 5-point rating scale (not 0-100% fake scores)
 * - Context field explains WHERE and HOW skill was used
 * - Categories for clean grouping
 */

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  name: string
  level: SkillLevel
  context: string // Where/how it was used in production
  yearsOfExperience?: number
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

export interface Tool {
  name: string
  purpose: string
  frequency: 'Daily' | 'Weekly' | 'Occasionally'
}

export interface ToolCategory {
  title: string
  tools: Tool[]
}
