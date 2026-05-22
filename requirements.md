# IEEE SB NSSCE — Website Requirements Document

**Project:** IEEE Student Branch NSSCE — Official Website  
**Version:** 1.0  
**Document Type:** Product Requirements Document (PRD)  
**Status:** Draft

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Animation System](#4-animation-system)
5. [Global Components](#5-global-components)
6. [Page Requirements](#6-page-requirements)
   - 6.1 [Home Page](#61-home-page)
   - 6.2 [Achievements / Timeline Page](#62-achievements--timeline-page)
   - 6.3 [Team Page](#63-team-page)
   - 6.4 [Society Pages (×13)](#64-society-pages-13)
   - 6.5 [Events System](#65-events-system)
7. [Data Architecture](#7-data-architecture)
8. [Responsiveness Requirements](#8-responsiveness-requirements)
9. [Performance Requirements](#9-performance-requirements)
10. [SEO Requirements](#10-seo-requirements)
11. [CMS Readiness](#11-cms-readiness)
12. [Extra Premium Features](#12-extra-premium-features)
13. [Acceptance Criteria](#13-acceptance-criteria)

---

## 1. Project Overview

### 1.1 Summary

Build a modern, premium, highly animated, fully responsive website for **IEEE Student Branch NSSCE**. The product must feel world-class, futuristic, and deeply professional — comparable to modern startup and top-tier international university organization websites.

### 1.2 Brand Identity

| Attribute     | Direction                                              |
|---------------|--------------------------------------------------------|
| Aesthetic     | Professional innovation + modern student tech community |
| Tone          | Premium, futuristic, energetic, clean                  |
| Reference     | Apple + Stripe + modern university innovation lab      |
| Theme         | Light — no heavy-dark or hacker-style visuals          |

### 1.3 Target Audience

- Current and prospective IEEE members (students)
- Faculty and academic staff
- Recruiters and industry professionals
- IEEE officials and reviewers
- Sponsors and external stakeholders
- General visitors

### 1.4 Goals

- Establish a globally competitive digital identity for IEEE SB NSSCE.
- Clearly communicate the organization's 13 societies, events, team, and achievements.
- Drive membership registrations and event participation.
- Create a scalable, CMS-ready codebase for long-term maintenance.

---

## 2. Tech Stack

### 2.1 Core Framework

| Layer           | Technology                                  |
|-----------------|---------------------------------------------|
| Framework       | Next.js (App Router, v14+)                  |
| Language        | TypeScript (strict mode)                    |
| Styling         | Tailwind CSS                                |
| Component Library | ShadCN UI                                 |
| Icons           | Lucide Icons                                |

### 2.2 Animation & Motion

| Purpose               | Library                                     |
|-----------------------|---------------------------------------------|
| Primary animation     | Framer Motion                               |
| Advanced scroll FX    | GSAP + ScrollTrigger                        |
| Smooth scrolling      | Lenis                                       |
| 3D / WebGL effects    | React Three Fiber (or lightweight Three.js) |

### 2.3 Code Quality Standards

- ESLint + Prettier enforced.
- Strict TypeScript — no `any` types.
- Modular, component-based architecture.
- All components must be independently testable.
- Production-level code — no placeholder comments left in deliverables.

---

## 3. Design System

### 3.1 Color Palette

#### Primary

| Token            | Hex       | Usage                             |
|------------------|-----------|-----------------------------------|
| `ieee-blue`      | `#00629B` | Primary brand, CTA, headings      |
| `accent-cyan`    | `#00C2FF` | Accent highlights, glows, badges  |
| `sky-gradient`   | Sky blue gradient range | Hero backgrounds, cards |
| `white`          | `#FFFFFF` | Base background                   |

#### Secondary

| Token           | Description              |
|-----------------|--------------------------|
| `lavender-soft` | Light lavender tones     |
| `ice-blue`      | Cool near-white blue     |
| `soft-teal`     | Muted teal               |
| `pale-silver`   | Card borders, dividers   |

#### Background Rules

- Primary backgrounds: white or ultra-light gradients only.
- No heavy dark backgrounds as primary surfaces.
- Glassmorphism overlays permitted on top of light gradient backgrounds.

#### Forbidden

- Oversaturated neon colors.
- Purple gradient clichés.
- Cartoon-style flat fills.

---

### 3.2 Typography

| Role       | Font Family                 | Fallback Stack                    |
|------------|-----------------------------|-----------------------------------|
| Headings   | Space Grotesk **or** Sora   | `system-ui, sans-serif`           |
| Body Text  | Inter                       | `system-ui, sans-serif`           |

#### Type Scale (minimum)

| Level    | Size (desktop) | Weight   |
|----------|----------------|----------|
| Display  | 64–96px        | 700–800  |
| H1       | 48–64px        | 700      |
| H2       | 32–40px        | 600–700  |
| H3       | 24–28px        | 600      |
| Body     | 16–18px        | 400–500  |
| Caption  | 12–14px        | 400      |

Typography must feel: **clean, premium, technical, elegant**.

---

### 3.3 Glassmorphism Spec

```
background: rgba(255, 255, 255, 0.6–0.85)
backdrop-filter: blur(12–20px)
border: 1px solid rgba(255, 255, 255, 0.3–0.5)
border-radius: 16–24px
box-shadow: 0 8px 32px rgba(0, 98, 155, 0.08–0.15)
```

Use glassmorphism for: cards, modals, nav on scroll, floating elements.

---

## 4. Animation System

All animations must feel **Apple-level or Stripe-level** in quality.

### 4.1 Required Animation Types

| Animation Type             | Implementation                     |
|----------------------------|------------------------------------|
| Scroll-triggered reveals   | GSAP ScrollTrigger or Framer Motion `whileInView` |
| Parallax sections          | GSAP or CSS `transform` on scroll  |
| Floating particles         | Three.js / custom canvas           |
| Hover micro-interactions   | Framer Motion `whileHover`         |
| Magnetic buttons           | Mouse-tracking JS + transform      |
| Staggered card animations  | Framer Motion `staggerChildren`    |
| Interactive tilt effects   | CSS perspective + mouse tracking   |
| Animated gradients         | CSS `@keyframes` or canvas         |
| Mouse-follow glow effects  | CSS `radial-gradient` + mouse position |
| Timeline animations        | GSAP ScrollTrigger pinned sections |
| Logo morphing              | SVG path animation / Framer Motion |
| Section transitions        | Framer Motion `AnimatePresence`    |
| Page entrance animations   | Framer Motion `motion.div` initial/animate |

### 4.2 Performance Rules

- No animation may drop the page below **60fps** on mid-range devices.
- All heavy WebGL/canvas effects must use `will-change: transform` appropriately.
- GSAP animations must be killed on component unmount.
- Prefer CSS transforms over layout-triggering properties.
- Respect `prefers-reduced-motion` media query — provide a no-motion fallback for all animations.

---

## 5. Global Components

### 5.1 Navigation Bar

| Feature                    | Specification                                   |
|----------------------------|-------------------------------------------------|
| Initial state              | Transparent                                     |
| Scrolled state             | Frosted glass (blur + white/80 background)      |
| Active link indicator      | Smooth animated underline / highlight           |
| Mobile menu                | Full-screen animated overlay or slide-in drawer |
| Mega menu                  | Societies quick links with hover previews       |
| Branding                   | IEEE logo + "NSSCE" wordmark                    |
| Height                     | 64–72px desktop, 56px mobile                   |
| Scroll behavior            | `position: fixed`, smooth hide/show on scroll   |

### 5.2 Footer

Must include:

- Contact information
- IEEE official links
- Social media links (LinkedIn, Instagram, Twitter/X, GitHub)
- Quick navigation links
- Society shortcuts (all 13)
- Newsletter subscription input
- Copyright notice
- Animated subtle gradient background

### 5.3 Loading Screen

- Displayed on initial page load only.
- IEEE / NSSCE branded animation.
- Maximum 2.5 seconds duration.
- Smooth fade-out transition into page.

### 5.4 Custom Cursor

- Subtle custom cursor with trailing glow on desktop.
- Cursor enlarges / morphs on hoverable elements.
- Disabled on touch devices.

### 5.5 Scroll Progress Indicator

- Thin `ieee-blue` or `accent-cyan` line at the top of viewport.
- Tracks scroll progress per page (0%–100%).

### 5.6 Page Transition System

- Shared `AnimatePresence` wrapper at root layout level.
- Consistent fade + slight vertical shift on every route change.
- Duration: 300–400ms.

---

## 6. Page Requirements

---

### 6.1 Home Page

The homepage is the flagship experience. Every section must be visually extraordinary.

---

#### 6.1.1 Hero Section

**Layout:** Full-viewport height (100vh), centered or split.

| Element              | Specification                                                        |
|----------------------|----------------------------------------------------------------------|
| Main Heading         | "IEEE Student Branch NSSCE" — animated word-by-word or character reveal |
| Subheading           | Tagline: innovation, technology, leadership, community               |
| CTA Buttons          | "Explore Societies" (primary) + "Upcoming Events" (secondary)       |
| Background           | Dynamic gradient lighting with animated depth                        |
| Optional 3D element  | Animated sphere, neural network mesh, or particle grid (Three.js)    |
| Floating elements    | IEEE-themed SVG/icon elements with parallax drift                   |

**Animation spec:**
- Heading: staggered character entrance, 0.03s delay per character.
- CTA buttons: magnetic hover effect (follows cursor slightly).
- Background gradient: animated slow-panning mesh gradient.

---

#### 6.1.2 IEEE Societies Showcase

**Priority:** Highest-importance interactive section on the homepage.

| Feature                  | Specification                                         |
|--------------------------|-------------------------------------------------------|
| Societies displayed      | All 13 IEEE societies                                 |
| Layout options           | Floating galaxy grid / circular orbit / interactive masonry |
| Default state            | Logo grid with subtle floating animation              |
| Hover state              | Logo enlarges, background glows, society name + description appear |
| Active state             | Glowing ring/highlight                                |
| Click action             | Routes to dedicated society page                     |
| Motion                   | Mouse-reactive card positions (subtle)                |

**Each society card (hover expanded) contains:**
- Society logo
- Society full name
- One-line description
- "Explore →" link

---

#### 6.1.3 Upcoming Events Section

| Feature            | Specification                                          |
|--------------------|--------------------------------------------------------|
| Layout             | Horizontal scroll carousel or 3-column grid            |
| Card contents      | Event banner, title, date badge, society badge, short description |
| Interactions       | Hover reveal (more details slide up), "Register Now" button |
| Countdown timer    | Animated digital countdown to event date               |
| Empty state        | "No upcoming events — check back soon" with illustration |

**Event card animation:** 3D tilt on hover, gradient border glow.

---

#### 6.1.4 About IEEE SB NSSCE

| Feature            | Specification                                          |
|--------------------|--------------------------------------------------------|
| Layout             | Split layout (text left, illustration/stats right)     |
| Animated counters  | Members, Events Conducted, Awards, Societies           |
| Counter animation  | Count-up on scroll-into-view using `CountUp.js` or custom hook |
| Supporting text    | Mission statement, 2–3 sentences                       |
| Illustration       | Floating abstract IEEE-themed SVG graphic              |

---

#### 6.1.5 Highlights / Achievements Preview

| Feature             | Specification                                         |
|---------------------|-------------------------------------------------------|
| Display             | 3–4 featured achievement cards                        |
| Card content        | Title, year, brief description, society tag           |
| Statistics          | 2–3 key animated numbers (awards won, national rankings, etc.) |
| Mini timeline       | Abbreviated horizontal timeline teaser                |
| CTA                 | "View Full Timeline →" button linking to Achievements page |
| Animation           | Scroll-triggered staggered entrance                   |

---

#### 6.1.6 CTA Section

| Feature             | Specification                                         |
|---------------------|-------------------------------------------------------|
| Cards               | "Join IEEE", "Become a Volunteer", "Explore Events"   |
| Card style          | Glassmorphism, gradient border                        |
| Background          | Animated flowing gradient (ieee-blue to accent-cyan)  |
| Button style        | Magnetic, animated hover state                        |

---

### 6.2 Achievements / Timeline Page

#### 6.2.1 Page Hero

- Large title: "Our Journey"
- Subheading: founding year to present
- Animated decorative background

#### 6.2.2 Timeline Component

| Feature                 | Specification                                          |
|-------------------------|--------------------------------------------------------|
| Orientation             | Vertical (mobile) / optionally horizontal (desktop)    |
| Activation              | Scroll-based — each milestone activates as it enters viewport |
| Connector animation     | SVG line draws progressively on scroll                 |
| Card entrance           | Alternating left/right slide-in                        |
| Glow effects            | Active node glows with `accent-cyan`                   |

**Each milestone card contains:**
- Title
- Year (large, styled)
- Description (2–4 sentences)
- Image(s) (optional, with lightbox)
- Tags (e.g., "National Level", "Award")
- Society involved (badge)

#### 6.2.3 Year Selector

- Fixed sidebar or top filter strip.
- Click jumps to that year's section.
- Active year highlighted.

---

### 6.3 Team Page

#### 6.3.1 Overview

| Scope           | Detail                                         |
|-----------------|------------------------------------------------|
| SB ExeCom       | 24 members                                     |
| Societies       | 13 societies × 15 core members = 195 members   |
| Total members   | ~219 (structured, not listed on one page simultaneously) |

#### 6.3.2 Page Structure

1. **Hero** — "Meet the Team" heading with animated particles.
2. **Search bar** — real-time name/position search.
3. **Category navigation** — "SB ExeCom" tab + one tab per society (13).
4. **Member grid** — responsive card grid for selected category.

#### 6.3.3 Member Cards

Each card includes:
- Professional photo (aspect-ratio: 3/4 or 1/1)
- Full name
- Position/role
- Society badge
- LinkedIn icon link
- GitHub icon link (optional)

**Hover effect:**
- Card lifts (translateY -8px)
- Gradient glow border activates
- Social icon buttons animate in from bottom

#### 6.3.4 Society Navigation

- Horizontal scrollable tab bar.
- Smooth crossfade between society teams on tab switch.
- Active tab: underline indicator + society color accent.

#### 6.3.5 Search Functionality

- Debounced input (300ms).
- Filters across all members by name or role.
- No-results state with message.

---

### 6.4 Society Pages (×13)

Each of the 13 IEEE societies gets a **dedicated page** following a shared layout template with unique accent color per society.

#### 6.4.1 Page Sections

| Section          | Contents                                                      |
|------------------|---------------------------------------------------------------|
| Hero             | Society logo, full name, tagline, animated background         |
| About            | What the society does, focus areas                            |
| Vision & Mission | Two-column or card layout                                     |
| Team Preview     | 4–6 featured members with "View Full Team" link               |
| Events Conducted | Filtered event cards from this society                        |
| Gallery          | Animated image grid with lightbox                             |
| Achievements     | Society-specific highlight cards                              |
| Join Section     | CTA to join / get involved                                    |

#### 6.4.2 Per-Society Customization

Each society page may have:
- A unique accent color (within brand range).
- Unique hero illustration or background pattern.
- All other design tokens remain consistent.

#### 6.4.3 13 Societies (Placeholder routes)

Routes must be pre-defined for all 13. Society names/logos to be provided by client.

| Route Pattern        |
|----------------------|
| `/societies/[slug]`  |

---

### 6.5 Events System

#### 6.5.1 Events Main Page (`/events`)

| Feature               | Specification                                          |
|-----------------------|--------------------------------------------------------|
| Sections              | Featured Events, Upcoming Events, Past Events          |
| Filters               | Year, Society, Event type (workshop/talk/competition)  |
| Search                | Real-time event title search                           |
| Default view          | Current year, upcoming first                           |

**Featured Events:** Full-width banner cards at top.  
**Upcoming Events:** 3-column card grid.  
**Past Events:** Collapsed year accordion (expand to see events).

#### 6.5.2 Year-Wise Organization

```
Events/
├── 2026/
├── 2025/
├── 2024/
└── ...
```

Each year section:
- Year label as large heading.
- Expand/collapse animation (chevron toggle).
- Timeline-flow layout within expanded year.

#### 6.5.3 Event Cards

Each card contains:
- Event banner image
- Title
- Date + time
- Society badge
- Short description
- Status badge (Upcoming / Past / Featured)
- "Register Now" or "View Recap" button

**Hover:** 3D tilt, gradient glow, description slides up.

#### 6.5.4 Individual Event Page (`/events/[slug]`)

| Section         | Contents                                                     |
|-----------------|--------------------------------------------------------------|
| Hero Banner     | Full-width event image, title overlay                        |
| Event Details   | Date, time, venue, society, registration deadline            |
| About           | Event description (rich text)                                |
| Speakers        | Speaker cards (photo, name, bio, designation)                |
| Agenda          | Timeline-style schedule                                      |
| Gallery         | Animated image grid with lightbox (post-event)               |
| Related Events  | 3 suggested events from same society                         |
| Registration CTA | Floating sticky "Register Now" button (upcoming events)     |

---

## 7. Data Architecture

### 7.1 Core Data Models (TypeScript Interfaces)

```typescript
interface Society {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  vision: string;
  mission: string;
  accentColor: string;
  logo: string; // image path or URL
  heroImage?: string;
  members: Member[];
  events: Event[];
  achievements: Achievement[];
}

interface Member {
  id: string;
  name: string;
  position: string;
  societyId: string | 'execom';
  photo: string;
  linkedin?: string;
  github?: string;
}

interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601
  endDate?: string;
  venue: string;
  societyId: string;
  status: 'upcoming' | 'past' | 'featured';
  banner: string;
  tags: string[];
  speakers?: Speaker[];
  agenda?: AgendaItem[];
  gallery?: string[];
  registrationUrl?: string;
}

interface Achievement {
  id: string;
  title: string;
  year: number;
  description: string;
  societyId?: string;
  tags: string[];
  images?: string[];
}

interface Speaker {
  name: string;
  designation: string;
  bio: string;
  photo: string;
}

interface AgendaItem {
  time: string;
  title: string;
  description?: string;
}
```

### 7.2 Data Storage (Initial)

All data as **static TypeScript files** in `/data/` directory:

```
/data/
  societies.ts
  members.ts
  events.ts
  achievements.ts
```

This makes future CMS migration straightforward — replace imports with API calls.

---

## 8. Responsiveness Requirements

| Breakpoint     | Width          | Requirement                              |
|----------------|----------------|------------------------------------------|
| Mobile         | 320–767px      | Full functionality, single-column layouts |
| Tablet         | 768–1023px     | 2-column grids, adapted navigation       |
| Desktop        | 1024–1439px    | Full layout, all features active         |
| Wide Desktop   | 1440px+        | Max-width container (1400px), no stretching |
| Ultra-wide     | 2560px+        | Centered layout, decorative side fills   |

**Animation rules for mobile:**
- Reduce particle counts by 70%.
- Disable 3D tilt effects on touch devices.
- Magnetic buttons fall back to standard hover.
- Maintain all scroll-triggered entrance animations.

---

## 9. Performance Requirements

| Metric                  | Target                        |
|-------------------------|-------------------------------|
| Lighthouse Performance  | ≥ 90 (desktop), ≥ 80 (mobile) |
| First Contentful Paint  | < 1.5s                        |
| Largest Contentful Paint| < 2.5s                        |
| Cumulative Layout Shift | < 0.1                         |
| Time to Interactive     | < 3.5s                        |
| Animation FPS           | Sustained 60fps                |

**Implementation requirements:**

- `next/image` for all images (auto-optimization, lazy loading).
- Dynamic imports for heavy components (Three.js, GSAP).
- Route-based code splitting (automatic with App Router).
- Font preloading via `next/font`.
- SVG sprites where multiple icons repeat.
- Lenis scroll driver with GSAP ticker — not rAF stacking.

---

## 10. SEO Requirements

| Requirement          | Implementation                                     |
|----------------------|----------------------------------------------------|
| Page titles          | Dynamic `generateMetadata()` per route             |
| Meta descriptions    | Unique per page                                    |
| Open Graph tags      | Title, description, image per route                |
| Twitter Card         | Summary large image                                |
| Structured data      | `Organization` and `Event` JSON-LD schemas         |
| Sitemap              | `/sitemap.xml` auto-generated                      |
| Robots               | `/robots.txt` — all pages indexable                |
| Canonical URLs       | Set per page                                       |
| Heading hierarchy    | Strict H1 > H2 > H3 per page                      |
| Image alt text       | Required on all `<Image>` components               |

---

## 11. CMS Readiness

The codebase must be structured so that any future CMS (Sanity, Contentful, Firebase, Supabase) can be integrated by replacing data-fetching logic only — no component changes required.

### 11.1 Architecture Pattern

```
/data/          ← Static data (Phase 1)
/lib/api.ts     ← Data-fetching abstraction layer
/components/    ← Pure presentational components (no data fetching inline)
/app/           ← Route pages (fetch via lib/api.ts)
```

### 11.2 Reusable Component Checklist

- `<EventCard />` — reusable across events page, home, society pages.
- `<MemberCard />` — reusable across team page and society pages.
- `<TimelineItem />` — reusable in achievements and event agendas.
- `<SocietyCard />` — reusable in home showcase and navigation.
- `<AchievementCard />` — reusable in home and achievements page.
- `<ImageGallery />` — reusable in event and society pages.

---

## 12. Extra Premium Features

| Feature                    | Priority | Notes                                     |
|----------------------------|----------|-------------------------------------------|
| Page transition animations | Required | Every route change                        |
| Scroll progress indicator  | Required | Top of viewport                           |
| Custom animated cursor     | Required | Desktop only                              |
| Floating background gradients | Required | Multiple pages                          |
| Interactive hover lighting | Required | Cards, buttons                            |
| Dynamic loading screen     | Required | First load only                           |
| Animated section dividers  | Required | SVG wave or gradient lines between sections |
| Particle systems           | Required | Hero + select background sections        |
| AI-inspired mesh gradients | Optional | Hero, CTA sections                        |
| WebGL light effects        | Optional | Hero 3D sphere / network                  |
| Interactive background physics | Optional | Particle attraction on cursor           |

---

## 13. Acceptance Criteria

A deliverable is considered complete when **all** of the following pass:

### 13.1 Functionality

- [ ] All 5 primary page types render without error.
- [ ] All 13 society pages are accessible via `/societies/[slug]`.
- [ ] Navigation correctly links all sections and pages.
- [ ] Events filter by year and society.
- [ ] Team search returns correct results.
- [ ] All external links (IEEE, social media) open in new tab.
- [ ] Countdown timers display correct values.
- [ ] Mobile menu opens and closes correctly.

### 13.2 Design

- [ ] Color palette matches specification — no off-brand colors.
- [ ] All glassmorphism specs applied consistently.
- [ ] Typography scale applied consistently across all pages.
- [ ] No layout breaks at 320px, 768px, 1024px, 1440px, 2560px.
- [ ] Light theme throughout — no unintended dark-mode elements.

### 13.3 Animation

- [ ] Hero entrance animation plays on first load.
- [ ] Scroll-triggered animations activate at correct scroll positions.
- [ ] No animation causes layout shift (CLS < 0.1).
- [ ] `prefers-reduced-motion` disables all motion animations.
- [ ] 60fps maintained during scroll on a mid-range device.

### 13.4 Performance

- [ ] Lighthouse Performance ≥ 90 on desktop.
- [ ] Lighthouse Performance ≥ 80 on mobile.
- [ ] All images use `next/image` with explicit `width`/`height`.
- [ ] No render-blocking scripts in `<head>`.
- [ ] Three.js / GSAP loaded dynamically, not in critical bundle.

### 13.5 SEO

- [ ] Every page has a unique `<title>` and `<meta description>`.
- [ ] Open Graph tags present on all pages.
- [ ] `/sitemap.xml` accessible and valid.
- [ ] All images have non-empty `alt` attributes.

### 13.6 Code Quality

- [ ] Zero TypeScript errors (`tsc --noEmit` passes).
- [ ] Zero ESLint errors.
- [ ] All components are typed — no `any`.
- [ ] Data files use defined TypeScript interfaces.
- [ ] No hardcoded pixel values in Tailwind (use design tokens).

---

## Appendix A — File Structure Reference

```
ieee-sb-nssce/
├── app/
│   ├── layout.tsx               # Root layout with Lenis + page transitions
│   ├── page.tsx                 # Home page
│   ├── achievements/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── societies/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── events/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── ui/                      # ShadCN components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── CustomCursor.tsx
│   │   └── ScrollProgress.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── SocietiesShowcase.tsx
│   │   ├── UpcomingEvents.tsx
│   │   ├── AboutSection.tsx
│   │   ├── HighlightsSection.tsx
│   │   └── CTASection.tsx
│   ├── shared/
│   │   ├── EventCard.tsx
│   │   ├── MemberCard.tsx
│   │   ├── SocietyCard.tsx
│   │   ├── AchievementCard.tsx
│   │   ├── TimelineItem.tsx
│   │   └── ImageGallery.tsx
│   └── three/
│       └── HeroSphere.tsx
├── data/
│   ├── societies.ts
│   ├── members.ts
│   ├── events.ts
│   └── achievements.ts
├── lib/
│   ├── api.ts                   # Data abstraction layer
│   └── utils.ts
├── hooks/
│   ├── useCountUp.ts
│   ├── useMagneticEffect.ts
│   └── useLenis.ts
├── styles/
│   └── globals.css
├── public/
│   ├── logos/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Appendix B — Animation Timing Reference

| Animation Type      | Duration  | Easing                        |
|---------------------|-----------|-------------------------------|
| Page transition     | 300–400ms | `easeInOut`                   |
| Card entrance       | 500–700ms | `easeOut` with spring         |
| Hero heading        | 800–1200ms| Staggered, `easeOut`          |
| Counter count-up    | 1500–2000ms | `easeOut`                   |
| Timeline connector  | Scroll-linked | Linear                    |
| Hover micro         | 150–250ms | `easeOut`                     |
| Loading screen exit | 600ms     | `easeInOut`                   |
| Gradient animation  | 8–12s     | `ease-in-out` infinite loop   |

---

*Document prepared for IEEE SB NSSCE website development team.*  
*All requirements subject to revision based on client feedback and technical feasibility review.*
