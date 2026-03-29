# Spec: Homepage Exhibition

## Problem Statement
The homepage is the museum's entrance hall. It must orient visitors, establish the Sage/Bauhaus/Authority identity immediately, and guide them toward the four exhibits. Currently no homepage content exists.

## Acceptance Criteria
1. Hero section renders with site title, curatorial statement, and a call-to-action to explore the timeline
2. Four exhibit cards render, one per exhibit, linking to their respective routes
3. A brief "About This Collection" section renders below the exhibit grid
4. Page meets Bauhaus visual rules: grid layout, no decorative elements, correct color palette
5. Copy is written in Sage voice throughout
6. Authority signals are visible: source count or institutional framing in the curatorial statement
7. Page is fully responsive at 375px, 768px, and 1280px
8. `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build` all pass

## Scope
### In Scope
- `app/page.tsx` — homepage content
- `components/content/home/` — homepage-specific components
- `components/content/narrative-card.tsx` — reusable exhibit card
- `lib/narrative-data.ts` — exhibit metadata (title, description, era, route)
- `lib/site.ts` — site metadata

### Out of Scope
- Individual exhibit pages (covered in curatorial-enrichment)
- Timeline page
- About page
- Navigation changes (covered in design-codex)

## Design Constraints
- Hero: display-size type, red geometric accent line above the title
- Exhibit grid: 2-column on desktop, 1-column on mobile
- No images on homepage — Bauhaus geometric shapes only
- Curatorial statement: 2–3 sentences, first-person plural, Sage voice

## Dependencies
- setup/ complete
- design-codex/ complete (SiteHeader, SiteFooter, SectionHeading, Card components must exist)
