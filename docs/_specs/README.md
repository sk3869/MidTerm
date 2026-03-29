# Specs Index + Sprint Plan QA

This directory contains all process artifacts for Common Tech Through The Years.

Each phase follows the pattern: **Spec → Spec QA → Sprint Doc → Sprint QA → Implementation → Implementation QA**.

---

## Foundation

| Document | Purpose | Status |
|---|---|---|
| [museum-foundation/spec.md](museum-foundation/spec.md) | Master specification: concept, design framework, architecture, content requirements, sprint plan | Complete |
| [museum-foundation/spec-qa.md](museum-foundation/spec-qa.md) | Section-by-section spec review | PASS |

---

## Sprint Plan QA

All three sprints reviewed before implementation began.

### Sprint 1 — Design System + Shell (7 tasks)

| Check | Status | Note |
|---|---|---|
| Scope is appropriate for one sprint | PASS | 7 tasks, all small — globals.css through homepage components |
| Sprint 1 outputs are required by Sprints 2 and 3 | PASS | Design tokens and siteConfig are foundational dependencies |
| No circular dependencies | PASS | Sprint 1 has no dependencies on later sprints |
| All tasks produce independently testable outputs | PASS | Each file can be reviewed in isolation |
| Acceptance criteria are measurable | PASS | `npm run typecheck`, `npm run dev`, manual review |

**Sprint 1 QA Verdict: PASS**

---

### Sprint 2 — Timeline (4 tasks)

| Check | Status | Note |
|---|---|---|
| Scope is appropriate for one sprint | PASS | 4 focused tasks, all on one feature |
| Depends only on Sprint 1 outputs | PASS | Needs `globals.css` tokens and `siteConfig.navLinks` only |
| `TimelineEvent` type covers all content requirements | PASS | year, title, description, category, source — all present |
| `categoryConfig` enables color-coding without prop drilling | PASS | Components look up color by category — clean |
| Filter via `?category=` searchParam is server-rendered | PASS | No client-side state needed |
| 14 events is achievable with named sources | PASS | All sources confirmed: CHM, Britannica, History Tools |
| Acceptance criteria are measurable | PASS | Event count, source presence, filter URL behavior |

**Sprint 2 QA Verdict: PASS**

---

### Sprint 3 — Exhibit Rooms + About (9 tasks)

| Check | Status | Note |
|---|---|---|
| Sprint 3 is the largest (9 tasks) | RISK ACCEPTED | 4 of 9 are exhibit pages that follow an identical pattern (import data, pass to ExhibitRoom). Each takes ~10 lines. Actual implementation complexity is lower than task count implies. |
| `Artifact` type covers all content requirements | PASS | year, name, manufacturer, description, significance, source — all present |
| `ArtifactCard` and `ExhibitRoom` are reusable across all 4 rooms | PASS | `accentColor` prop drives all category-specific styling |
| 16 artifacts (4 per room) with named sources is achievable | PASS | All sourced from CHM, Britannica, or History Tools |
| About page covers curatorial methodology | PASS | Method, sources, and coverage statistics all required |
| `error.tsx` requires `'use client'` | PASS | This is the only permitted exception to the server-component rule |
| Acceptance criteria are measurable | PASS | Artifact count, source presence, about page sections, error boundary render |

**Sprint 3 QA Verdict: PASS — Sprint 3 size risk is managed, not a blocker.**

---

## Sprint Implementation Status

| Sprint | Doc | QA |
|---|---|---|
| Sprint 1 — Design System + Shell | [sprint-0-shell.md](sprint-1-design-system/sprints/sprint-0-shell.md) | [sprint-0-qa.md](sprint-1-design-system/sprints/sprint-0-qa.md) — PASS |
| Sprint 2 — Timeline | [sprint-0-timeline.md](sprint-2-timeline/sprints/sprint-0-timeline.md) | [sprint-0-qa.md](sprint-2-timeline/sprints/sprint-0-qa.md) — PASS |
| Sprint 3 — Exhibit Rooms + About | [sprint-0-exhibits.md](sprint-3-exhibits/sprints/sprint-0-exhibits.md) | [sprint-0-qa.md](sprint-3-exhibits/sprints/sprint-0-qa.md) — PASS |
