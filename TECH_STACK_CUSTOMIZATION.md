# Tech Stack Data Customization Guide

## 🎯 Quick Start - How to Update Your Skills

### Step 1: Open the Data File

Navigate to: `/src/data/tech-stack.ts`

This file contains all your skills and tools data.

### Step 2: Understand the Rating Scale

```typescript
1 = Beginner       // Learning, limited production experience
2 = Competent      // Can complete tasks with some guidance
3 = Proficient     // Independent production experience
4 = Advanced       // Deep knowledge, can teach and mentor others
5 = Expert         // Industry-level expertise, thought leader
```

**IMPORTANT**: Be honest! Recruiters value authenticity over inflated ratings.

### Step 3: Update a Skill

Find the skill you want to update and modify these fields:

```typescript
{
  name: 'React',                  // Technology name
  level: 5,                       // Your honest rating (1-5)
  context: 'Built 20+ production apps. Expert in hooks, performance optimization, Server Components, and advanced patterns. Mentored teams on React best practices.',
  yearsOfExperience: 5,           // Optional: years using this tech
}
```

### Step 4: Add a New Skill

Copy this template and fill in your details:

```typescript
{
  name: 'Your Technology',
  level: 3,  // Be honest!
  context: 'WHERE you used it, WHAT you built, HOW complex it was, WHAT impact it had',
  yearsOfExperience: 2,  // Optional
}
```

**Context Writing Tips**:
- ✅ "Built authentication system for 100K+ users using JWT"
- ✅ "Reduced API response time by 60% through Redis caching"
- ✅ "Architected microservices handling 10M requests/day"
- ❌ "Very experienced with this technology"
- ❌ "Used in many projects"
- ❌ "Expert level knowledge"

### Step 5: Add a New Category

```typescript
{
  title: 'Your Category Name',
  description: 'Brief description of what this category covers',
  skills: [
    {
      name: 'Technology 1',
      level: 4,
      context: '...',
    },
    {
      name: 'Technology 2',
      level: 3,
      context: '...',
    },
  ],
}
```

## 📝 Real Examples (Use as Templates)

### Example 1: Frontend Framework
```typescript
{
  name: 'React',
  level: 5,
  context: 'Built 20+ production apps serving 1M+ users. Expert in hooks, Server Components, performance optimization. Reduced bundle size by 40% through code splitting and lazy loading.',
  yearsOfExperience: 5,
}
```

### Example 2: Performance Tool
```typescript
{
  name: 'Lighthouse',
  level: 5,
  context: 'Conducted 100+ performance audits. Improved average Lighthouse score from 68 to 95 across company portfolio. Automated CI/CD checks saving 10 hours/week.',
  yearsOfExperience: 4,
}
```

### Example 3: State Management
```typescript
{
  name: 'Redux Toolkit',
  level: 4,
  context: 'Architected state management for e-commerce app with 50+ slices. Implemented RTK Query reducing API code by 60%. Mentored 3 junior devs on best practices.',
  yearsOfExperience: 3,
}
```

### Example 4: Testing
```typescript
{
  name: 'Jest',
  level: 4,
  context: 'Wrote 500+ unit tests achieving 85% coverage. Set up CI/CD pipeline running tests on every PR. Caught 20+ critical bugs before production.',
  yearsOfExperience: 4,
}
```

### Example 5: DevOps
```typescript
{
  name: 'Vercel',
  level: 5,
  context: 'Deployed 30+ Next.js apps. Optimized Edge Functions reducing response time from 800ms to 200ms. Implemented preview deployments for all PRs.',
  yearsOfExperience: 4,
}
```

## 🛠️ Tools Customization

### Update Tools

Open: `/src/data/tech-stack.ts` and find `toolCategories`

```typescript
{
  name: 'VS Code',
  purpose: 'Primary code editor with custom extensions',
  frequency: 'Daily',  // Daily | Weekly | Occasionally
}
```

### Add a Tool

```typescript
{
  name: 'Your Tool',
  purpose: 'What you use it for (be specific)',
  frequency: 'Daily',  // or 'Weekly' or 'Occasionally'
}
```

### Tool Examples

```typescript
// Daily Use
{
  name: 'Chrome DevTools',
  purpose: 'Performance profiling, debugging, network analysis',
  frequency: 'Daily',
}

// Weekly Use
{
  name: 'Postman',
  purpose: 'API testing and documentation',
  frequency: 'Weekly',
}

// Occasional Use
{
  name: 'Docker',
  purpose: 'Container management for local development',
  frequency: 'Occasionally',
}
```

## 🎨 Customization Options

### Change Color Scheme

Edit: `/src/components/SkillRating.tsx`

```typescript
const levelColors = {
  1: 'from-gray-600 to-gray-500',      // Beginner
  2: 'from-blue-600 to-blue-500',      // Competent
  3: 'from-cyan-600 to-cyan-500',      // Proficient
  4: 'from-purple-600 to-purple-500',  // Advanced
  5: 'from-pink-600 to-pink-500',      // Expert
}
```

**Alternative Color Schemes**:

```typescript
// Warm Colors
const levelColors = {
  1: 'from-gray-600 to-gray-500',
  2: 'from-yellow-600 to-yellow-500',
  3: 'from-orange-600 to-orange-500',
  4: 'from-red-600 to-red-500',
  5: 'from-pink-600 to-pink-500',
}

// Cool Colors
const levelColors = {
  1: 'from-gray-600 to-gray-500',
  2: 'from-blue-600 to-blue-500',
  3: 'from-cyan-600 to-cyan-500',
  4: 'from-teal-600 to-teal-500',
  5: 'from-green-600 to-green-500',
}

// Monochrome
const levelColors = {
  1: 'from-gray-700 to-gray-600',
  2: 'from-gray-600 to-gray-500',
  3: 'from-gray-500 to-gray-400',
  4: 'from-gray-400 to-gray-300',
  5: 'from-white to-gray-100',
}
```

### Change Rating Labels

Edit: `/src/components/SkillRating.tsx`

```typescript
const levelLabels = {
  1: 'Beginner',
  2: 'Competent',
  3: 'Proficient',
  4: 'Advanced',
  5: 'Expert',
}
```

**Alternative Labels**:

```typescript
// Corporate Style
const levelLabels = {
  1: 'Familiar',
  2: 'Working Knowledge',
  3: 'Proficient',
  4: 'Expert',
  5: 'Master',
}

// Casual Style
const levelLabels = {
  1: 'Learning',
  2: 'Comfortable',
  3: 'Confident',
  4: 'Strong',
  5: 'Exceptional',
}

// Academic Style
const levelLabels = {
  1: 'Novice',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Expert',
  5: 'Authority',
}
```

## 📊 Common Customization Scenarios

### Scenario 1: Add a New Programming Language

```typescript
// In the appropriate category (e.g., Frontend Frameworks)
{
  name: 'Vue.js',
  level: 3,
  context: 'Built 5 production SPAs for clients. Implemented Vuex for state management and Vue Router for navigation. Average Lighthouse score: 92.',
  yearsOfExperience: 2,
}
```

### Scenario 2: Add Backend Skills

Create a new category or add to existing:

```typescript
{
  title: 'Backend & Databases',
  description: 'Server-side technologies and database management',
  skills: [
    {
      name: 'PostgreSQL',
      level: 4,
      context: 'Designed schemas for apps with 500K+ users. Optimized complex queries reducing response time by 80%. Implemented connection pooling.',
      yearsOfExperience: 3,
    },
    {
      name: 'Express.js',
      level: 4,
      context: 'Built REST APIs serving 1M+ requests/day. Implemented authentication, rate limiting, and caching strategies.',
      yearsOfExperience: 3,
    },
  ],
}
```

### Scenario 3: Add Cloud/Infrastructure Skills

```typescript
{
  title: 'Cloud & Infrastructure',
  description: 'Cloud platforms and infrastructure management',
  skills: [
    {
      name: 'AWS',
      level: 3,
      context: 'Deployed applications using EC2, S3, CloudFront, and Lambda. Set up CI/CD pipelines with AWS CodePipeline.',
      yearsOfExperience: 2,
    },
    {
      name: 'Terraform',
      level: 3,
      context: 'Infrastructure as code for multi-environment deployments. Managed resources across dev, staging, and production.',
      yearsOfExperience: 1,
    },
  ],
}
```

### Scenario 4: Add Design Skills

```typescript
{
  title: 'Design & UX',
  description: 'User interface design and user experience',
  skills: [
    {
      name: 'Figma',
      level: 4,
      context: 'Designed 30+ user interfaces. Created component libraries and design systems. Collaborated with designers on handoff.',
      yearsOfExperience: 3,
    },
    {
      name: 'UI/UX Principles',
      level: 4,
      context: 'Applied accessibility guidelines, conducted user testing, and implemented responsive designs increasing conversion by 25%.',
      yearsOfExperience: 4,
    },
  ],
}
```

## 🎯 Context Writing Formula

Use this formula for compelling context:

```
[Action] + [Scale/Complexity] + [Technology Used] + [Impact/Result]
```

**Examples**:

1. **"Built" + "20+ production apps" + "React & Next.js" + "serving 1M+ users"**
   → "Built 20+ production apps using React and Next.js serving 1M+ users"

2. **"Optimized" + "database queries" + "PostgreSQL" + "80% faster response"**
   → "Optimized database queries with PostgreSQL reducing response time by 80%"

3. **"Implemented" + "CI/CD pipeline" + "GitHub Actions" + "saved 10 hours/week"**
   → "Implemented CI/CD pipeline with GitHub Actions saving team 10 hours/week"

## ❌ Common Mistakes to Avoid

### 1. Vague Context
❌ "Very experienced with React"
✅ "Built 20+ production React apps with 85% test coverage"

### 2. Inflated Ratings
❌ Rating yourself 5/5 on everything
✅ Honest mix of 3s, 4s, and a few 5s

### 3. No Specifics
❌ "Used in many projects"
✅ "Used in 15 client projects ranging from MVPs to enterprise apps"

### 4. Missing Impact
❌ "Worked with TypeScript"
✅ "TypeScript adoption reduced runtime errors by 70%"

### 5. Buzzword Soup
❌ "Leveraged cutting-edge solutions to synergize"
✅ "Reduced load time from 5s to 1.2s using code splitting"

## 🚀 Quick Updates Checklist

- [ ] Update skill levels honestly
- [ ] Write specific context for each skill
- [ ] Add years of experience where applicable
- [ ] Include tools you actually use daily
- [ ] Add new categories if needed
- [ ] Remove skills you don't want to showcase
- [ ] Test the page after changes
- [ ] Run build to catch errors

## 📝 Maintenance Tips

### Keep It Updated
- Review every 3-6 months
- Update levels as you grow
- Add new technologies you learn
- Remove outdated technologies

### Be Strategic
- Highlight skills relevant to target jobs
- Show breadth AND depth
- Balance frontend/backend if full-stack
- Include soft skills in context (mentoring, etc.)

### Quantify Everything
- Number of projects
- Number of users
- Performance improvements
- Time saved
- Bugs prevented
- Team members mentored

## 🎓 Example: Junior Developer Profile

```typescript
{
  name: 'React',
  level: 3,  // Honest for junior level
  context: 'Built 3 production SPAs during internship and freelance work. Comfortable with hooks, component patterns, and basic state management.',
  yearsOfExperience: 1,
}
```

## 🎓 Example: Senior Developer Profile

```typescript
{
  name: 'React',
  level: 5,  // Appropriate for senior
  context: 'Architected 20+ production apps for Fortune 500 clients. Expert in performance optimization, Server Components, advanced patterns. Mentored 15+ developers. Published 3 technical articles reaching 50K+ readers.',
  yearsOfExperience: 6,
}
```

## 🔄 After Making Changes

1. **Save the file**: `/src/data/tech-stack.ts`
2. **Check for errors**: TypeScript will warn you
3. **View in browser**: http://localhost:3001/tech-stack
4. **Test on mobile**: Use responsive mode
5. **Build for production**: `npm run build`

## 📞 Need Help?

If you get stuck:
1. Check TypeScript errors in the editor
2. Read the type definitions in `/src/types/tech-stack.ts`
3. Look at existing examples in the data file
4. Refer to the main README files

---

**Pro Tip**: Use your actual resume/LinkedIn as a starting point, but make it MORE specific with numbers and context.

**Remember**: Authenticity > Perfection. Recruiters value honesty and self-awareness!
