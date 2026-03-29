# Spec: Setup

## Problem Statement
The repository needs a working Next.js 15 project with strict TypeScript, Tailwind CSS v4, Vitest, Playwright, Husky, and Prettier configured before any product work can begin.

## Acceptance Criteria
1. `npm install` completes without errors
2. `npm run dev` starts a local server at localhost:3000
3. `npm run typecheck` passes with zero errors
4. `npm run lint` passes with zero errors
5. `npm run test` runs and exits cleanly (zero test failures)
6. `npm run build` produces a static export in `out/`
7. `npm run format:check` passes
8. Pre-commit hooks are active after `npm install`

## Scope
### In Scope
- package.json with all required dependencies and scripts
- tsconfig.json with strict mode
- next.config.ts with static export and basePath for GitHub Pages
- eslint.config.mjs
- .prettierrc and .prettierignore
- postcss.config.mjs
- vitest.config.ts
- playwright.config.ts
- lighthouserc.json
- .husky/pre-commit hook
- components.json (shadcn/ui config)
- app/globals.css with Bauhaus CSS variables
- app/layout.tsx (minimal shell)
- app/page.tsx (placeholder)

### Out of Scope
- Any page content
- Any components beyond the root layout shell
- CI pipeline (covered in deployment-and-verification workstream)

## Design Constraints
- Bauhaus color palette must be defined as CSS custom properties in globals.css
- Inter font loaded via next/font/google

## Dependencies
- None — this is the first workstream
