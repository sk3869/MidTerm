# Spec QA: Setup

## Checklist

- [x] Every acceptance criterion has a clear pass/fail state — all are verifiable via CLI commands
- [x] Nothing in scope requires more than one sprint — setup is a single bounded unit
- [x] Design constraints are stated explicitly — Bauhaus CSS vars and Inter font specified
- [x] Out-of-scope list prevents drift — content and CI explicitly excluded
- [x] Dependencies identified — none, this is first

## Notes
Criterion 5 (tests pass) will trivially pass at setup with no test files. This is acceptable — the criterion validates the test runner is wired correctly, not that tests exist.

## Decision
Spec approved. Proceed to sprint doc.
