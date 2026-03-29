# Student Reading Guide

## Start Here

This document tells you where to look and in what order.

This repository is a museum website called **Common Tech Through The Years**. The site documents how everyday personal technology — computers, mobile phones, music players, and the early internet — changed between the 1970s and the 2010s.

The repository also teaches a method. The method is the primary subject. The site exists so the method has something real to build.

---

## Reading Order

### 1. Understand the method first

Read `orchestration-method.md` before anything else. It explains the six-step workflow every sprint follows and why each step exists.

### 2. Understand the design decisions

Read `site-design-philosophy.md`. It explains the three design frameworks applied to this site: Bauhaus visual style, the Sage brand archetype, and Authority as a Cialdini persuasion principle. Every layout, color, typography, and copy decision traces back to these three frameworks.

### 3. Understand the technology

Read `technology-orientation.md`. It explains Next.js 15 (App Router), strict TypeScript, and Tailwind CSS v4, and why each was chosen.

### 4. Understand the conventions

Read `site-implementation-codex.md`. It defines naming conventions, component patterns, file organization, and the rules that keep the codebase consistent across sprints.

### 5. Understand how specs are written

Read `site-spec-patterns.md`. It shows the template and structure used for every spec and sprint doc in `docs/_specs/`.

### 6. Understand the quality stack

Read `verification-and-deployment.md`. It explains every quality gate — typecheck, lint, test, browser test, build, Lighthouse — and how the CI pipeline enforces them on every push to main.

### 7. For narrow changes

Read `lightweight-change-path.md`. Small, low-risk changes use a shorter Change Note process instead of the full spec-sprint cycle.

---

## Where Things Live

| Location | Purpose |
|---|---|
| `docs/foundation/` | Reference docs you are reading now |
| `docs/_specs/` | Spec and sprint artifacts for every workstream |
| `docs/_research/` | Research memos on each exhibit topic |
| `docs/content/` | Content architecture: exhibit structure, artifact lists |
| `docs/_archive/` | Closed workstreams and completed research |
| `app/` | Next.js App Router pages and routes |
| `components/` | Shared React components |
| `lib/` | Site config, navigation data, content utilities |
| `tests/` | Vitest unit tests and Playwright browser tests |

---

## The Four Exhibits

The site is organized around four technology exhibits:

1. **Personal Computers** — 1970s–1990s, from the Altair 8800 to the household PC
2. **Mobile Phones** — 1983–2007, from the DynaTAC brick to the first iPhone
3. **Music Players** — 1979–2004, from the Walkman to the iPod
4. **The Early Internet** — 1991–2004, from dial-up to broadband

Each exhibit follows the same content structure: Era Overview, Key Artifacts, Cultural Impact, and a Curatorial Note.

---

## What The Professor Is Grading

The grade is based on process, not just output. The artifacts in `docs/_specs/` are evidence that the correct workflow was followed. An empty or thin `docs/` folder signals that specs were skipped and AI was used without discipline. A filled `docs/` folder with real QA passes signals that the student understood and applied the method.
