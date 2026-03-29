# Spec: Curatorial Enrichment

## Problem Statement
The four exhibit pages need full content: era context, artifact presentations, cultural impact analysis, source citations, and curatorial notes. Without these, the site is a shell, not a museum.

## Acceptance Criteria
1. Personal Computers exhibit page renders with era overview, 3 artifacts, cultural impact section, and sources
2. Mobile Phones exhibit page renders with era overview, 3 artifacts, cultural impact section, and sources
3. Music Players exhibit page renders with era overview, 3 artifacts, cultural impact section, and sources
4. Early Internet exhibit page renders with era overview, 3 artifacts, cultural impact section, and sources
5. Each artifact entry includes: name, year, one-sentence significance, curatorial note
6. Each exhibit cites at least 2 authoritative sources (Computer History Museum, Britannica, Smithsonian)
7. All copy is written in Sage voice
8. ArtifactCard component is reusable across all four exhibits
9. All pages pass typecheck, lint, test, build

## Scope
### In Scope
- `app/exhibits/personal-computers/page.tsx`
- `app/exhibits/mobile-phones/page.tsx`
- `app/exhibits/music-players/page.tsx`
- `app/exhibits/early-internet/page.tsx`
- `components/content/exhibit/` — exhibit-specific components
- `components/content/artifact-card.tsx` — single artifact display
- `lib/narrative-data.ts` — full artifact data for all 4 exhibits

### Out of Scope
- Timeline page
- About page
- Images (text-based exhibit only for now)
- Interactive features

## Design Constraints
- Each exhibit page opens with a red geometric accent + large era date range
- Artifacts displayed in a 3-column grid on desktop
- Sources listed in a bordered box at the bottom (Authority signal)
- Curatorial notes in italic, indented, labeled "Curatorial Note"

## Dependencies
- setup/ complete
- design-codex/ complete
- homepage-exhibition/ complete (NarrativeCard and lib/narrative-data.ts patterns established)
