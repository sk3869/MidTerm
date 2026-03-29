# Power Words

## Purpose

This document defines the named frameworks and terms used throughout this repository. These words carry specific meaning. Using them consistently prevents drift in both documentation and code.

---

## Framework Terms

### Spec
A document that defines *what* will be built and *why*. A spec does not describe how. Lives in `docs/_specs/<workstream>/spec.md`.

### Sprint Doc
A document that defines *how* a spec will be implemented. A bounded contract listing exact files, components, and copy. Lives in `docs/_specs/<workstream>/sprint.md`.

### QA Pass
A structured review of a document or implementation against a checklist. Not a vague read-through — a checklist with explicit pass/fail items.

### Workstream
A named unit of work that has its own folder in `docs/_specs/`. A workstream has a spec, a sprint doc, and QA artifacts.

### Acceptance Criterion
A single, verifiable statement of what done looks like. Must have a clear pass/fail state.

### Drift
When an AI assistant changes things that were never requested. Controlled by scope boundaries in specs and sprint docs.

### Change Note
A lightweight artifact for small, low-risk changes. Replaces the full spec-sprint cycle when the change is narrow and the risk is low. See `lightweight-change-path.md`.

---

## Design Terms

### Bauhaus
The visual design tradition applied to this site. Form follows function. No decoration without purpose. Grid-based, typographic, geometric.

### The Sage
The brand archetype guiding this site's voice and psychological identity. Calm, knowledgeable, educational. Earns trust through expertise.

### Authority
The Cialdini persuasion principle applied to this site. Visitors trust and engage with credible, expert sources. Applied through source citations, curatorial language, and institutional framing.

### Curatorial Note
A short paragraph written in first-person plural that explains why an artifact was selected for an exhibit. Appears at the bottom of each artifact entry.

### Artifact
A specific technology product presented in an exhibit. Examples: Altair 8800, Sony Walkman, Motorola DynaTAC.

### Era
A defined time period in the history of personal technology. The site covers four eras, one per exhibit.

---

## Technical Terms

### App Router
The Next.js 15 routing system used in this project. Routes are defined by folder structure under `app/`.

### Static Export
The build mode used for GitHub Pages deployment. `next build` produces a static HTML/CSS/JS site with no server required.

### Quality Gate
A command in the CI pipeline that must pass before deployment proceeds. The gates are: typecheck, lint, test, browser test, build, format check.
