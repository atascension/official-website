# Architech Ascension Design Guide

Use this guide as the single source of truth for visual and interaction choices across any app. The system leans on clean geometry, confident typography, and subtle motion to convey clarity and expertise.

## Core Tokens

### Palette
| Token | Hex | Usage |
| --- | --- | --- |
| `brand.navy` | `#0b234b` | Primary text, buttons, headings, icons, overlays |
| `brand.gold` | `#e0b344` | Accents, tags, callouts, animated highlights |
| `brand.white` | `#f5f5f5` | Page background, light gradients, scrollbar track |
| `brand.surface` | `#ffffff` | Cards, nav bar, modals, form shells |
| `brand.gray` | `#b8b8b8` | Muted text, borders, subtle dividers, scrollbar thumb |
| `text.secondary` | `#4f596d` | Body copy on light backgrounds |

Usage rules:
- Default page background `#f5f5f5`; alternate with pure white for contrast between sections.
- Surfaces sit on white with soft borders (`brand.gray` at 10–30%) and premium shadows.
- Selection and focus states invert to navy text on white or gold accents for clarity.

### Typography
- Headings: `Technor` (fallback `Supreme`, `sans-serif`), weight 500–700, tight tracking (-0.01em).
- Body: `Supreme`, fallback system sans.
- Type scale (CSS variables in `global.css`):
  - `display`: clamp(3rem, 2rem + 2vw, 4.5rem)
  - `h1`: clamp(2.25rem, 1.6rem + 1vw, 3.25rem)
  - `h2`: clamp(1.875rem, 1.35rem + 0.8vw, 2.5rem)
  - `h3`: clamp(1.5rem, 1.2rem + 0.6vw, 1.875rem)
  - `h4`: 1.25rem
  - `body`: 1rem
  - `small`: 0.9375rem
  - `xs`: 0.875rem
- Line heights: tight 1.1 for headings, snug 1.25 for short copy, relaxed 1.6 for paragraphs.
- Uppercase utility text uses tracking around 0.08em–0.1em and bold weights for badges.

### Effects and Elevation
- Shadows: `--shadow-premium: 0 20px 40px -12px rgba(11,35,75,0.06)`; hover version increases blur/opacity.
- Borders: 1px with `brand.gray` at 10–30% opacity; increase to navy/gold at hover for affordance.
- Radii: cards/buttons rounded-full for pills, `rounded-xl`–`rounded-2xl` (12–20px) for surfaces, soft circles for icons.

### Motion
- Base transitions 300–700ms ease; translate-y and opacity for reveals.
- Keyframes: `float-slow` (gentle 8px bob), `glow-soft` (opacity pulse), `caret-blink`.
- Honor `prefers-reduced-motion` by disabling non-essential animations (already handled in `global.css`).

### CSS Variables Snapshot
```css
:root {
  --font-family-heading: 'Technor', 'Supreme', sans-serif;
  --font-family-body: 'Supreme', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --color-brand-navy: #0b234b;
  --color-brand-gold: #e0b344;
  --color-brand-white: #f5f5f5;
  --color-brand-surface: #ffffff;
  --color-brand-gray: #b8b8b8;
  --color-text-secondary: #4f596d;
  --shadow-premium: 0 20px 40px -12px rgba(11, 35, 75, 0.06);
  --shadow-premium-hover: 0 30px 60px -12px rgba(11, 35, 75, 0.12);
}
```

## Layout and Spacing
- Container: `max-w-7xl`, horizontal padding `px-6` mobile, `px-12` desktop.
- Vertical rhythm: hero `pt-32 pb-20` (desktop `pt-48 pb-32`), other sections `py-24–32`; keep 24–32px gaps between section header and content.
- Grids: single column on mobile; switch to 2–3 columns with `gap-6/8` on desktop for cards and lists.
- Background alternation: light gray (`#f5f5f5`) for full-bleed sections, white for card-heavy or embed sections.
- Decorative glows: large blurred gold or navy circles at low opacity behind hero and social cards; avoid heavy gradients.

## Components and Patterns

### Navigation
- Fixed top bar; transparent at page start, transitions to glass blur with subtle shadow after scroll.
- Logo left, compact pill CTA on the right; desktop links spaced 10–12px with medium weight; mobile uses full-screen drawer with stacked links.

### Hero and CTAs
- Centered headline with typing effect and blinking caret; use brand navy text and gold accent on the arrow.
- Primary CTA: pill button `bg-brand-navy text-white`, padding `px-8 py-4`, medium weight, shadow-premium; hover adds slight translate-y and gold icon color.
- Secondary CTA (where present): outline with navy border and text, fills with `brand-navy/5` on hover.

### Cards and Surfaces
- Base: white surface, `rounded-2xl`, border `brand-gray/20`, shadow-premium; hover to `shadow-premium-hover`, border shifts toward navy/gold.
- Icon tiles: 48–56px squares or circles, `bg-brand-navy/5` or pure white, subtle border, centered Lucide icon or SVG logo.
- Use uppercase gold tags for category labels (`text-xs`, bold, letter-spaced).

### Lists and Feature Bullets
- Checkbox motif: small circle with gold/blue fill and Lucide check at 12–14px.
- Bullet text uses `text-brand-navy/80` at `text-sm`–`text-base` with relaxed leading.

### Buttons and Links
- Primary: navy pill with white text; add gold icon or underline only on hover.
- Ghost/secondary: transparent with navy border or `brand-navy/5` background.
- Text links: default navy, hover shifts to gold; keep no underline until hover for cleaner look.

### Forms and Inputs
- When building new forms, mirror calendar/newsletter containers: white surface, `rounded-xl`, border `brand-gray/20`, generous padding.
- Inputs: 44px minimum height, `rounded-lg`, border `brand-gray/20`, focus ring in `brand-navy` with gold caret or accent icon.
- Use helper copy in `text-brand-gray` at `text-sm` for clarity.

### Sections
- Services: three-card grid with icon squares and tight headings; section header pairs a divider line with a short descriptor.
- Features: two-column layouts alternating image/graphic and text; use badges (`border brand-gold/30`) above headings.
- Portfolio: image cards with slight grayscale, fade overlay, and hover lift; category tag in gold, heading in navy.
- Testimonials: white card container with border and premium shadow for embeds.
- Courses/Products: card grid with price pill on image and text stack below.
- Newsletter/Contact: centered headline, gold pill label, white surface with shadow; embeds sit inside bordered shells.
- Social Links: blurred gold/navy glows behind a glassy white card; stacked link buttons with navy borders.

### Footer
- Two-part layout: final CTA section (navy primary + outline secondary) followed by thin top border row with legal links.
- Use `text-gray-400` for tertiary links; hover elevates to navy.

## Imagery and Iconography
- Icons: Lucide set, stroke width around 1.5–1.6, navy or gray as default; keep size 16–22px.
- Photos: Slight `mix-blend-multiply` and 80–90% opacity over light overlays; subtle zoom on hover.
- Abstract backgrounds: grid lines at `brand-gray/08`, soft circles, and dashed connector lines in gold/navy to imply systems/automation.

## Accessibility and States
- Maintain 4.5:1 contrast for text on light surfaces; use navy text on white/gray, avoid gold as main text color.
- Hover/focus: add border-color shift plus shadow; keep focus outlines visible in navy or gold even on pills.
- Selection: navy background with white text.
- Respect reduced motion; avoid mandatory animations in critical flows.

## Implementation Notes
- Tailwind theme extends `brand.*` colors, `fontFamily.sans` and `fontFamily.heading`, and `boxShadow.premium`.
- Default scrollbar is themed: white track, gray thumb, navy thumb on hover.
- Keep `max-w-7xl` container, `rounded-2xl` cards, and `shadow-premium` as the base trio for any new feature page to stay on-brand.
