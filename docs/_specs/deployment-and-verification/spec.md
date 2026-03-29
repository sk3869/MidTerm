# Spec: Deployment and Verification

## Problem Statement
The site needs an automated CI pipeline that enforces quality gates and deploys to GitHub Pages on every push to main. Without this, quality is manual and deployment is error-prone.

## Acceptance Criteria
1. `.github/workflows/deploy.yml` exists and is valid GitHub Actions syntax
2. Pipeline runs format check, lint, typecheck, unit tests, build, and Lighthouse audit in order
3. Any failing gate blocks deployment
4. Successful pipeline deploys the static export to GitHub Pages
5. Live site is accessible at `https://<username>.github.io/MidTerm/`
6. `lighthouserc.json` enforces scores of 90+ on performance, accessibility, best practices, SEO
7. Pre-commit hooks are documented in `verification-and-deployment.md`

## Scope
### In Scope
- `.github/workflows/deploy.yml`
- `lighthouserc.json` (update if thresholds need adjustment)
- GitHub Pages configuration (repository settings)

### Out of Scope
- Any application code changes
- Test file changes

## Design Constraints
- Pipeline must use Node.js LTS
- Lighthouse audit runs against the built static export

## Dependencies
- All other workstreams should be functionally complete before this workstream is finalized
