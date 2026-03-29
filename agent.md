# Agent Instructions

## Project

Common Tech Through The Years — a digital museum built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Before Writing Any Code

1. Read `docs/foundation/orchestration-method.md` — understand the six-step workflow
2. Read `docs/foundation/site-implementation-codex.md` — understand all conventions
3. Read `docs/foundation/site-design-philosophy.md` — understand Bauhaus, Sage, Authority

## Active Workstreams

All workstream specs and sprint docs are in `docs/_specs/`. Read the relevant spec and sprint doc before touching any file.

## Key Rules

- No default exports — named exports only
- No `any` types
- Tailwind classes only — no inline styles
- All content data lives in `lib/` — not hardcoded in components
- Sage voice in all copy — no promotional language
- Run `npm run typecheck && npm run lint && npm run test && npm run build` before declaring work done
