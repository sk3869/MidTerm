# Sprint: Setup

## Files to Create

- `package.json` — all deps, all scripts
- `tsconfig.json` — strict mode, Next.js paths
- `next.config.ts` — static export, basePath `/MidTerm`, images unoptimized
- `eslint.config.mjs` — Next.js ESLint config
- `.prettierrc` — single quotes, semi false, trailing comma all
- `.prettierignore` — node_modules, .next, out
- `postcss.config.mjs` — Tailwind CSS v4 plugin
- `vitest.config.ts` — jsdom environment, React plugin
- `playwright.config.ts` — Chromium only, baseURL localhost:3000
- `lighthouserc.json` — thresholds 90/90/90/90
- `.husky/pre-commit` — prettier + eslint on staged files
- `components.json` — shadcn/ui base config
- `app/globals.css` — Bauhaus CSS vars + Tailwind base
- `app/layout.tsx` — html/body shell, Inter font, metadata
- `app/page.tsx` — placeholder redirect or empty shell

## Component Definitions
None in this sprint.

## Data Definitions
None in this sprint.

## Copy
- Page title: "Common Tech Through The Years"
- Meta description: "A digital museum exploring how personal technology shaped everyday life from the 1970s to the 2010s."

## CSS Variables to Define in globals.css
```css
--color-black: #1A1A1A;
--color-white: #FFFFFF;
--color-red: #D62828;
--color-yellow: #F7B731;
--color-gray-100: #F5F5F5;
--color-gray-300: #D4D4D4;
--color-gray-600: #525252;
```

## Excluded
- No page content beyond placeholder
- No components
- No CI workflow file
