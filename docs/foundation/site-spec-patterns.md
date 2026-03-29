# Site Spec Patterns

## Purpose

This document defines the template and structure for every spec and sprint doc in `docs/_specs/`. All workstreams follow this pattern.

---

## Spec Template

```markdown
# Spec: [Workstream Name]

## Problem Statement
One paragraph. What is missing or broken, and why does it matter?

## Acceptance Criteria
A numbered list. Each item must have a clear pass/fail state.

1. [criterion]
2. [criterion]

## Scope
### In Scope
- [explicit inclusions]

### Out of Scope
- [explicit exclusions]

## Design Constraints
- Bauhaus rules that apply
- Sage voice rules that apply
- Authority principle applications

## Dependencies
List any other workstreams or files this spec depends on.
```

---

## Spec QA Checklist

Before writing a sprint doc, confirm:

- [ ] Every acceptance criterion has a clear pass/fail state
- [ ] Nothing in scope requires more than one sprint
- [ ] Design constraints are stated explicitly
- [ ] Out-of-scope list prevents obvious drift
- [ ] Dependencies are identified

---

## Sprint Doc Template

```markdown
# Sprint: [Workstream Name]

## Files to Create
- `path/to/file.tsx` — description

## Files to Modify
- `path/to/file.ts` — what changes and why

## Component Definitions
For each new component:
- Name: `ComponentName`
- Props: `{ prop: type }`
- Behavior: description

## Data Definitions
For each new data structure:
- Type name and shape
- Where it lives in lib/

## Copy
Exact strings for any user-facing text created in this sprint.

## Excluded
An explicit list of what this sprint does NOT do.
```

---

## Sprint QA Checklist

Before implementing, confirm:

- [ ] Every spec acceptance criterion is covered by at least one file/component/copy item
- [ ] No files outside the declared scope are touched
- [ ] No design decisions contradict the implementation codex
- [ ] Component prop shapes are fully typed
- [ ] Copy matches Sage voice guidelines

---

## Implementation QA Checklist

After implementing, confirm:

- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run test` passes
- [ ] `npm run build` passes
- [ ] `npm run format:check` passes
- [ ] All spec acceptance criteria are met
- [ ] No unplanned files were created or modified

---

## Naming Workstream Folders

Workstream folder names use kebab-case and describe the deliverable, not the action:

- Good: `homepage-exhibition/`, `design-codex/`, `curatorial-enrichment/`
- Bad: `build-homepage/`, `fix-stuff/`, `sprint-1/`

---

## File Structure Per Workstream

```
docs/_specs/<workstream>/
  spec.md         <- what and why
  spec-qa.md      <- QA pass on the spec
  sprint.md       <- how (implementation contract)
  sprint-qa.md    <- QA pass on the sprint doc
```
