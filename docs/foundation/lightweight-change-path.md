# Lightweight Change Path

## Purpose

Not every change needs a full spec-sprint cycle. For small, low-risk changes, the full six-step workflow is disproportionate. The Change Note process is the lighter alternative.

---

## When to Use a Change Note

Use a Change Note when all of the following are true:

- The change touches fewer than 3 files
- The change does not introduce new components, routes, or data structures
- The change does not affect the design system or site navigation
- The risk of unintended side effects is low

Examples of appropriate Change Note changes:
- Fixing a typo in exhibit copy
- Adjusting a Tailwind spacing value
- Updating a source citation
- Renaming a variable or prop within a single file

---

## When to Use the Full Workflow

Use the full Spec → QA → Sprint → QA → Implement → QA workflow when:

- A new route, page, or component is being created
- The design system or color palette is changing
- Navigation structure is changing
- Multiple files are affected
- The change introduces new data structures in `lib/`

---

## Change Note Template

```markdown
# Change Note: [Short Description]

## Change
One sentence describing what is being changed.

## File(s) Affected
- `path/to/file.tsx`

## Reason
Why this change is needed.

## Risk
Low / None — [brief explanation]

## Verification
- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run format:check
```

Change Notes live in `docs/_specs/<workstream>/` alongside any related spec, or in a dedicated `docs/_specs/changes/` folder for standalone small fixes.

---

## What a Change Note Is Not

A Change Note is not a way to avoid process. If a change feels small but touches the design system, a route, or navigation — use the full workflow. The lightweight path is for genuinely narrow changes, not for skipping accountability.
