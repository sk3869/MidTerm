# Spec: Design Codex

## Problem Statement
The site needs a documented, implemented design system before any pages are built. Without a codex, each sprint will make inconsistent visual decisions that are expensive to fix later.

## Acceptance Criteria
1. Bauhaus color palette is implemented as Tailwind CSS tokens
2. Typography scale is defined (h1–h4, body, caption, label)
3. Grid system is documented and implemented (12-column, defined breakpoints)
4. SiteHeader component renders site name and navigation links
5. SiteFooter component renders attribution and source citations
6. All UI primitives exist: Button, Card, Panel, SectionHeading, Separator
7. `cn()` utility exists in `lib/utils.ts`
8. Design decisions are documented in this workstream

## Scope
### In Scope
- Tailwind CSS v4 theme configuration in globals.css
- Typography classes and scale
- SiteHeader and SiteFooter components
- UI primitive components (button, card, panel, section-heading, separator, accordion, dialog, tooltip)
- `lib/utils.ts` with `cn()` helper
- `components/ui/index.ts` barrel export

### Out of Scope
- Page content
- Exhibit-specific components (those belong in curatorial-enrichment)
- Images or media

## Design Constraints
- Bauhaus: black/white/red palette, geometric dividers, no decorative elements
- Sage: header uses institutional language, not product language
- Authority: footer includes source attribution section

## Dependencies
- setup/ workstream must be complete
