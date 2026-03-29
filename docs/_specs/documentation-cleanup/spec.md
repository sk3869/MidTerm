# Spec: Documentation Cleanup

## Problem Statement
After initial sprints, documentation may have inconsistencies, stale references, or gaps. This cleanup workstream ensures the docs reflect the actual implemented state.

## Acceptance Criteria
1. All foundation docs accurately describe the implemented codebase
2. Workstream statuses in `docs/_specs/README.md` are up to date
3. Completed workstreams are moved to `docs/_archive/specs/`
4. No broken file path references in any doc
5. All copy in docs follows Sage voice

## Scope
### In Scope
- Updates to `docs/foundation/` files if implementation diverged from plan
- `docs/_specs/README.md` status updates
- Moving closed workstreams to `docs/_archive/`

### Out of Scope
- Any application code changes
- New feature specs

## Dependencies
- All other workstreams must be complete before cleanup begins
