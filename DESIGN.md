# Design Brief: ElevateX Media

## Tone & Purpose
Professional B2B digital marketing agency. Establishes trust, authority, and expertise for business owners and marketing directors evaluating agency capabilities.

## Visual Direction
Modern Professional + Editorial aesthetic. Inspired by WebFX's clean, authoritative design. Purpose-driven clarity with generous whitespace and strategic imagery. Professional blue as anchor; sophisticated grays for structure; warm accent for emphasis.

## Color Palette (Light Mode)
| Token | OKLCH | Hex Approx | Purpose |
|-------|-------|-----------|---------|
| Primary | 0.35 0.24 265 | #0D47A1 | Buttons, headers, links, primary CTA |
| Secondary | 0.92 0 0 | #EAEAEA | Muted backgrounds, subtle surfaces |
| Accent | 0.6 0.18 48 | #D4A574 | Highlights, success states, warm CTAs |
| Background | 0.98 0 0 | #FAFBFC | Page background, clean canvas |
| Card | 0.99 0 0 | #FFFFFF | Card containers, elevated surfaces |
| Foreground | 0.2 0 0 | #333333 | Body text, primary content |
| Border | 0.88 0 0 | #E0E0E0 | Dividers, edges, subtle separation |
| Muted | 0.92 0 0 | #F5F5F5 | Alternate section backgrounds |

## Dark Mode
Primary: 0.68 0.18 265 | Secondary: 0.2 0 0 | Background: 0.12 0 0 | Card: 0.16 0 0

## Typography
| Layer | Font | Use |
|-------|------|-----|
| Display | General Sans | Headlines, hero titles, section headers |
| Body | DM Sans | Paragraph text, body copy, UI labels |
| Mono | Geist Mono | Code snippets, data tables, technical content |

## Structural Zones
| Zone | Background | Treatment | Purpose |
|------|------------|-----------|---------|
| Header/Nav | `bg-primary` | Sticky, white text, bottom border | Navigation, always accessible |
| Hero | `bg-background` | Large typography, subtle gradient accent, image overlay | Establish visual hierarchy, immediate context |
| Content Sections | Alternating `bg-background` & `bg-muted` | 16px vertical rhythm | Visual breathing room, scannable structure |
| Cards | `bg-card` + `border-border` + `shadow-xs` | 6px radius, 1px border | Content containers, elevate information |
| Footer | `bg-secondary` or `bg-muted` | Dark text, top border | Secondary navigation, legal, contact |

## Spacing & Rhythm
- Base unit: 4px
- Section gutters: 2rem (32px)
- Card padding: 1.5rem (24px)
- Element gaps: 1rem (16px) vertical, 0.5rem (8px) inline
- Breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px

## Component Patterns
- **Buttons**: Semibold, 6px radius, 12px padding inline. Primary: blue bg + white text. Secondary: gray bg + dark text. Accent: warm bg + dark text.
- **Links**: Primary color, underline on hover, no color change.
- **Forms**: Light gray input backgrounds, 6px radius, 1px border, dark placeholder text.
- **Cards**: White container, subtle shadow, top border or accent bar for visual interest.
- **Service Grid**: 3-column on desktop, 2-column tablet, 1-column mobile. 1.5rem gap.

## Motion & Interactions
- **Default transition**: `transition-smooth` (all 0.3s cubic-bezier)
- **Hover effects**: Opacity (−10%), subtle shadow increase
- **Focus states**: Ring on interactive elements (2px, primary color)
- **Loading**: Pulse animation on card backgrounds
- **No entrance animations on load**: Respect prefers-reduced-motion

## Fonts & Assets
- General Sans: `/assets/fonts/GeneralSans.woff2`
- DM Sans: `/assets/fonts/DMSans.woff2`
- Geist Mono: `/assets/fonts/GeistMono.woff2`

## Signature Details
- Generous left/right padding on mobile (1rem), expanding to 2rem on desktop
- Subtle top/bottom borders on major sections for visual separation
- Professional photography and illustrations (agency work samples)
- Consistent icon set (hero icons, service icons)
- No generic AI gradients; palette is primary application

## Anti-Patterns (Do Not Use)
- Rainbow color palettes or multiple competing accent colors
- Neon glows or blur effects (use clean borders/shadows instead)
- Animated entrance effects that reduce performance
- Generic Tailwind colors outside theme variables
- Orphaned type without visual rhythm or grid
