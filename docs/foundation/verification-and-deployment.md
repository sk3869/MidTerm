# Verification and Deployment

## Purpose

This document explains every quality gate in the project and how the CI/CD pipeline enforces them.

---

## Quality Commands

Run these locally before committing:

```bash
npm run typecheck        # TypeScript strict check — no errors allowed
npm run lint             # ESLint — no warnings or errors allowed
npm run test             # Vitest unit tests — all must pass
npm run test:browser:homepage   # Playwright homepage test — must pass
npm run build            # Next.js static build — must succeed
npm run format:check     # Prettier format check — no diffs allowed
```

For active development:

```bash
npm run format           # Auto-format all files
npm run test:watch       # Vitest in watch mode
npm run test:browser:headed   # Playwright with visible browser
```

First-time Playwright setup:

```bash
npm run test:browser:install   # Install Chromium binary once
```

---

## Pre-Commit Hooks

Husky runs automatically after `npm install`. Every `git commit` triggers:

1. `prettier --write` on staged files
2. `eslint --fix` on staged files

If the hook rejects a commit:
1. Read the error output
2. Fix the reported issue
3. `git add` the fixed file
4. Commit again

Do not use `--no-verify` to bypass hooks.

---

## CI Pipeline (GitHub Actions)

The workflow lives at `.github/workflows/deploy.yml`. It runs on every push to `main`.

### Pipeline Steps

| Step | Command | Failure behavior |
|---|---|---|
| Format check | `prettier --check` | Blocks deployment |
| Lint | `eslint` | Blocks deployment |
| Type check | `tsc --noEmit` | Blocks deployment |
| Unit tests | `vitest run` | Blocks deployment |
| Build | `next build` | Blocks deployment |
| Lighthouse audit | `lhci autorun` | Blocks deployment |
| Deploy | GitHub Pages upload | Only runs if all above pass |

### Lighthouse Thresholds

Defined in `lighthouserc.json`:

- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

---

## Deployment Target

The site deploys to GitHub Pages as a static export.

- Live URL: `https://<username>.github.io/MidTerm/`
- Build output: `out/` directory
- No server required — pure static HTML, CSS, and JS

### Required next.config.ts settings for GitHub Pages

```ts
const nextConfig = {
  output: 'export',
  basePath: '/MidTerm',
  images: { unoptimized: true },
}
```

---

## Definition of Done

A workstream is done when:

1. All acceptance criteria in the spec are met
2. All quality commands pass locally
3. The CI pipeline passes on push to main
4. The live site reflects the expected changes
