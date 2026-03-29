# Sprint: Deployment and Verification

## Files to Create

- `.github/workflows/deploy.yml` — full CI/CD pipeline

## Files to Modify

- `lighthouserc.json` — confirm thresholds are set to 90/90/90/90

## deploy.yml Structure

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout
      - Setup Node LTS
      - npm install
      - npm run format:check
      - npm run lint
      - npm run typecheck
      - npm run test
      - npm run build
      - Lighthouse CI audit
      - Deploy to GitHub Pages (actions/deploy-pages)
```

## Excluded
- No application code changes
- No test changes
