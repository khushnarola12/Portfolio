# Design Guidelines for Khushal Narola's AI/ML Developer Portfolio

## Design Approach

**Reference-Based Modern Developer Portfolio**
Drawing inspiration from contemporary developer portfolios (Linear, Vercel, GitHub profiles) with emphasis on showcasing technical projects and AI/ML expertise. The design balances professional credibility with creative technical expression.

## Core Design Principles

1. **Tech-Forward Aesthetics**: Embrace gradients, glassmorphism, and subtle animations that reflect AI/ML sophistication
2. **Project-First Hierarchy**: Projects are the hero content - give them premium visual treatment
3. **Dual-Mode Excellence**: Both dark and light themes must be equally polished (dark as default)
4. **Performance Showcase**: Smooth animations and interactions demonstrate technical competency

## Typography

**Font Families**:
- Primary: Inter (Google Fonts) - Clean, modern sans-serif for body and UI
- Accent: JetBrains Mono (Google Fonts) - Monospace for technical elements, code snippets, skill tags

**Type Scale**:
- Hero Headline: text-6xl (mobile: text-4xl) - 900 weight
- Section Titles: text-4xl (mobile: text-3xl) - 700 weight  
- Subsection Titles: text-2xl - 600 weight
- Body Text: text-base (16px) - 400 weight
- Technical Labels: text-sm in JetBrains Mono - 500 weight

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 (mobile), py-24 (desktop)
- Card gaps: gap-6 to gap-8
- Element margins: m-4, m-6, m-8

**Container Strategy**:
- Main container: max-w-7xl mx-auto px-6
- Content sections: max-w-6xl
- Text content: max-w-4xl

## Visual Treatment

**Glassmorphism Cards**:
- Background: backdrop-blur-xl with semi-transparent bg
- Border: 1px subtle border with gradient shimmer
- Shadow: Layered shadows for depth
- Padding: p-6 to p-8

**Gradient Accents**:
- Hero gradient: Purple-blue diagonal gradient background
- Card borders: Subtle gradient borders on hover
- Skill bars: Gradient fills showing proficiency
- Button backgrounds: Gradient CTAs

**Dark Mode Palette** (Default):
- Background: Near-black (#0a0a0a to #121212)
- Cards: #1a1a1a with transparency
- Text Primary: #ffffff
- Text Secondary: #a3a3a3
- Accent: Purple (#8b5cf6) to Blue (#3b82f6) gradient

**Light Mode Palette**:
- Background: Off-white (#fafafa)
- Cards: White with subtle shadow
- Text Primary: #0a0a0a
- Text Secondary: #525252
- Accent: Same gradient as dark mode

## Component Library

### Hero Section
- Full viewport height (min-h-screen)
- Animated gradient background with subtle movement
- Large name display (text-6xl)
- Subtitle: "AI/ML-focused Full-Stack Engineer"
- Two CTAs: Primary gradient button "View Projects" + Secondary outline button "Download Resume"
- Floating/animated abstract shapes or particles
- Scroll indicator at bottom

### About Section
- Two-column layout (text + profile highlights)
- Glassmorphism card containing bio
- Key metrics in pill badges (e.g., "30% efficiency increase")
- Professional headshot placeholder or AI-themed illustration

### Skills Section
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Animated progress bars with gradient fills
- Skill categories: Python/ML, Frontend, Backend, Tools
- Bars animate on scroll into view (Framer Motion)
- Percentage labels in monospace font

### Projects Showcase
- Featured project cards in 2-column grid (3 projects)
- Each card: Large preview image, title, description, tech stack tags
- Glassmorphism card with hover lift effect
- Tech tags in pills with monospace font
- Action buttons: "Live Demo" + "GitHub"
- Modal overlay for expanded project view with screenshots

### Experience Timeline
- Vertical timeline with connector line
- Single card for Freelancing role
- Bullet achievements with metrics highlighted
- Date range prominently displayed

### Tools & Technologies
- Icon grid: 4-6 columns
- Animated icons (scale on hover)
- Use Lucide Icons for tech stack
- Monospace labels under each icon
- Categories: Languages, Frameworks, ML/AI, Cloud

### Contact Section
- Two-column layout: Form + Contact info
- Form fields: Name, Email, Message
- Validation states with error messages
- Primary gradient submit button
- Contact info: Email, LinkedIn, GitHub with icons

### Navigation
- Fixed header with glassmorphism background (blur on scroll)
- Logo/Name on left
- Nav links: About, Skills, Projects, Experience, Contact
- Dark/Light mode toggle (sun/moon icon)
- Mobile: Hamburger menu with slide-in drawer

### Footer
- Centered layout
- Social icons (LinkedIn, GitHub)
- Copyright text
- "Available for AI/ML roles" tagline

## Animations (Framer Motion)

**Scroll Animations**:
- Fade in + slide up for sections
- Stagger children in grids (0.1s delay between items)
- Progress bar fills on scroll into view

**Micro-interactions**:
- Card hover: Lift (translateY -4px) + enhanced glow
- Button hover: Subtle scale (1.02)
- Skill bar: Smooth width animation
- Theme toggle: Rotate icon

**Page Load**:
- Hero text: Fade + slide from bottom
- Hero gradient: Animated gradient shift
- Navigation: Fade in from top

## Images

**Hero Section**: 
No large image - use animated gradient background with geometric shapes/particles

**Projects Section**:
Each project card needs a preview image:
- Claude Clone: Screenshot of AI chat interface with code execution panel
- Spotify Clone: Music player interface with playlist view
- DALL·E Clone: Image generation interface with prompt input

**About Section**:
Professional headshot or abstract AI/ML themed illustration (neural network visualization, data flow diagram)

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility

- Semantic HTML5 structure (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states with visible outlines
- Alt text for all images
- Form field labels and error states

## SEO Optimization

- Meta title: "Khushal Narola | AI/ML Full-Stack Developer Portfolio"
- Meta description: "AI/ML-focused Full-Stack Engineer specializing in Python, machine learning, LLM integrations, and Next.js. View projects, experience, and contact information."
- Structured data for portfolio schema
- Semantic heading hierarchy (H1 for name, H2 for sections)