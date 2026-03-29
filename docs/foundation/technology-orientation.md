# Technology Orientation

## Purpose

This document explains what each technology in the stack does and why it was chosen. Read this before writing any code.

---

## Next.js 15 (App Router)

### What it is
Next.js is a React framework. The App Router is its routing system, where routes are defined by the folder structure under `app/`. Each folder with a `page.tsx` becomes a URL route.

### Why it was chosen
- Static export support: `next build` produces a fully static site deployable to GitHub Pages with no server
- App Router enables layouts, nested routes, and server components without configuration
- Industry standard for modern React applications

### Key conventions for this project
- All routes are under `app/`
- The root layout (`app/layout.tsx`) wraps all pages with `SiteHeader` and `SiteFooter`
- `app/robots.ts` and `app/sitemap.ts` are auto-generated files for SEO

---

## TypeScript (Strict Mode)

### What it is
TypeScript is JavaScript with static types. Strict mode enables the most rigorous type checking.

### Why it was chosen
- Catches prop shape errors before runtime
- Makes component interfaces explicit and self-documenting
- Required for any serious Next.js project

### Key rules for this project
- `strict: true` in `tsconfig.json`
- No `any` types
- All component props typed via interfaces in the same file

---

## Tailwind CSS v4

### What it is
Tailwind is a utility-first CSS framework. Instead of writing CSS files, you apply pre-defined utility classes directly in JSX.

### Why it was chosen
- v4 uses a CSS-first config with `@theme` instead of `tailwind.config.js`
- Enforces visual consistency — all spacing, color, and typography decisions go through the design token system
- Works naturally with component-based architecture

### Key rules for this project
- Bauhaus color palette is defined as CSS variables in `app/globals.css`
- No inline styles — all styling through Tailwind classes
- Use `cn()` from `lib/utils.ts` for conditional class strings

---

## Vitest

### What it is
Vitest is a unit test runner compatible with the Vite ecosystem. Fast, modern, and Jest-compatible in API.

### Why it was chosen
- Faster than Jest for Next.js projects
- Native TypeScript support
- Compatible with React Testing Library

### Key rules for this project
- Tests live in `tests/app/`
- Every content component has a test
- Run with `npm run test`

---

## Playwright

### What it is
Playwright is a browser automation library for end-to-end testing. It controls a real browser (Chromium) and tests the site as a user would see it.

### Why it was chosen
- Tests real rendered output, not just component logic
- Catches layout and breakpoint issues that unit tests miss
- Required by the CI pipeline

### Key rules for this project
- Browser tests live in `tests/browser/`
- Homepage is tested at three breakpoints: 375px, 768px, 1280px
- Run with `npm run test:browser:homepage`

---

## GitHub Actions + GitHub Pages

### What it is
GitHub Actions is a CI/CD platform. The workflow in `.github/workflows/deploy.yml` runs on every push to `main` and deploys the site to GitHub Pages.

### Why it was chosen
- Free for public repositories
- Integrated with the repository — no external CI service needed
- GitHub Pages hosts static Next.js exports without a server

### Pipeline order
1. Format check (prettier)
2. Lint (eslint)
3. Type check (tsc)
4. Unit tests (vitest)
5. Build (next build)
6. Lighthouse audit
7. Deploy to GitHub Pages

If any step fails, deployment is blocked.

---

## Husky + lint-staged

### What it is
Husky runs git hooks. lint-staged runs linters only on staged files.

### Why it was chosen
- Prevents unformatted or broken code from entering the repository
- Catches issues locally before they reach CI

### Behavior
The pre-commit hook runs `prettier --write` and `eslint --fix` on every staged file before a commit is accepted.
