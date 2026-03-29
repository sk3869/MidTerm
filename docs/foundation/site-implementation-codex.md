# Site Implementation Codex

## Purpose

This document defines the conventions that keep the codebase consistent across every sprint. When a decision is not covered by a sprint doc, this codex is the authority.

---

## Technology Stack

| Tool | Version | Role |
|---|---|---|
| Next.js | 15 (App Router) | Framework, routing, static export |
| TypeScript | Strict mode | Type safety |
| Tailwind CSS | v4 | Styling |
| Vitest | Latest | Unit tests |
| Playwright | Latest | Browser tests |

See `technology-orientation.md` for rationale on each choice.

---

## File Naming

- All files use **kebab-case**: `artifact-card.tsx`, `site-header.tsx`
- Page files are always `page.tsx` inside their route folder
- Layout files are always `layout.tsx`
- Component files match their exported component name in kebab-case
- Test files mirror the file they test: `site-header.tsx` → `site-header.test.tsx`

---

## Component Conventions

### Location
- `components/site/` — global layout components (header, footer)
- `components/ui/` — primitive UI components (button, card, panel)
- `components/content/` — content-specific components (narrative-card, artifact-card)
- `components/media/` — media components (focal-image)

### Structure
Every component file exports exactly one named component. No default exports.

```tsx
// Good
export function ArtifactCard({ title, year, description }: ArtifactCardProps) { ... }

// Bad
export default function ArtifactCard(...) { ... }
```

### Props
- Props interfaces are defined in the same file as the component
- Props interface names match the component name: `ArtifactCardProps`
- All props are typed — no `any`

### Styling
- Tailwind classes only — no inline styles, no CSS modules
- Class strings use the `cn()` utility from `lib/utils.ts` when conditional
- Bauhaus color tokens are used via Tailwind config, not raw hex values

---

## Route Conventions

```
app/
  page.tsx                          <- Homepage
  layout.tsx                        <- Root layout (header, footer)
  exhibits/
    personal-computers/
      page.tsx
    mobile-phones/
      page.tsx
    music-players/
      page.tsx
    early-internet/
      page.tsx
  timeline/
    page.tsx
  about/
    page.tsx
  error.tsx
  robots.ts
  sitemap.ts
```

---

## Data Conventions

- All site content lives in `lib/` as TypeScript data files — not in components
- `lib/site.ts` — site-wide metadata (name, description, navigation)
- `lib/narrative-data.ts` — exhibit content, artifact data
- `lib/site-navigation.ts` — nav structure
- Components import data from `lib/` — they do not hardcode content strings

---

## Copy Conventions

All copy follows the Sage voice:

- Use complete sentences
- Cite sources inline: `(Computer History Museum, 1996)`
- Artifact captions follow the pattern: `[Name], [Year]. [One sentence of significance].`
- Era intros open with historical context, not product descriptions
- No exclamation marks
- No second-person ("you") except in the about page

---

## TypeScript Rules

- `strict: true` in tsconfig — no exceptions
- No `any` types
- No type assertions (`as SomeType`) unless absolutely necessary and commented
- All async functions have explicit return types
- All component props are fully typed

---

## Import Order

1. React and Next.js imports
2. Third-party library imports
3. Internal `lib/` imports
4. Internal `components/` imports
5. Types-only imports (using `import type`)

---

## Testing Rules

- Every component in `components/content/` has a unit test
- Every page route has a unit test for its rendered output
- Browser tests cover homepage at three breakpoints: mobile (375px), tablet (768px), desktop (1280px)
- Tests do not mock data from `lib/` — they use the real data
