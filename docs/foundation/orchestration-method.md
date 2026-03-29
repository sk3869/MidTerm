# Orchestration Method

## The Core Problem

AI assistants are stateless between sessions. They drift from original intent when context grows too large. They produce work that feels complete before it is actually verified. They make changes to adjacent concerns that were never requested.

The orchestration method in this repository is the answer to those four problems: **drift**, **context loss**, **ambiguous completion**, and **weak accountability**.

---

## The Six-Step Workflow

Every non-trivial feature in this repository follows this sequence:

```
Spec → QA → Sprint → QA → Implement → QA
```

### Step 1: Write a Feature Spec

A spec defines *what* will be built and *why*. It does not describe implementation steps. It describes:

- The problem being solved
- The acceptance criteria (what done looks like)
- The scope boundary (what is explicitly out of scope)
- The design constraints (Bauhaus, Sage archetype, Authority principle)

Specs live in `docs/_specs/<workstream>/spec.md`.

### Step 2: QA the Spec

Before writing any sprint doc, review the spec for:

- Ambiguity: does every acceptance criterion have a clear pass/fail state?
- Scope creep: does the spec ask for more than one coherent unit of work?
- Missing constraints: are design rules and technical constraints stated explicitly?
- Feasibility: can this be implemented in one focused sprint?

QA notes are added inline to the spec or in a separate `spec-qa.md` in the same folder.

### Step 3: Write a Sprint Doc

A sprint doc defines *how* the spec will be implemented. It is a bounded contract:

- Exact files to be created or modified
- Component names and prop shapes
- Data structures
- Copy and content decisions
- Nothing outside this list is in scope

Sprint docs live in `docs/_specs/<workstream>/sprint.md`.

### Step 4: QA the Sprint Doc

Before implementation begins, review the sprint doc for:

- Completeness: does it cover every acceptance criterion in the spec?
- Contradictions: do any implementation decisions conflict with the design codex?
- Isolation: does it touch files outside the declared scope?

QA notes live in `docs/_specs/<workstream>/sprint-qa.md`.

### Step 5: Implement the Sprint

Implementation follows the sprint doc exactly. If a decision arises that is not covered by the sprint doc, stop and update the sprint doc before continuing. Do not make undocumented decisions during implementation.

### Step 6: QA the Implementation

After implementation, verify against the spec's acceptance criteria:

```bash
npm run typecheck
npm run lint
npm run test
npm run test:browser:homepage
npm run build
npm run format:check
```

All gates must pass before the workstream is closed.

---

## The Lightweight Change Path

For small, low-risk changes — a copy edit, a color tweak, a single prop change — the full six-step cycle is disproportionate. Use a Change Note instead.

See `lightweight-change-path.md` for the template and rules.

---

## Why Artifacts Matter

Chat history is not durable. A spec document in `docs/_specs/` is durable. When a new session begins, the spec tells the assistant exactly what was decided and why. This eliminates drift without requiring the assistant to re-derive context from code.

The artifacts are not bureaucracy. They are the memory system for the project.

---

## Workstream Index

Active workstreams:

| Workstream | Purpose |
|---|---|
| `setup/` | Repository initialization, dependency installation |
| `design-codex/` | Bauhaus design system, typography, color palette |
| `documentation-foundation/` | Foundation docs in docs/foundation/ |
| `homepage-exhibition/` | Home page: hero, curatorial statement, exhibit grid |
| `curatorial-enrichment/` | Exhibit pages: computers, phones, music, internet |
| `deployment-and-verification/` | CI pipeline, GitHub Pages, quality gates |
| `documentation-cleanup/` | Cleanup pass after initial sprints |
| `refactor/` | Post-review improvements |

Closed workstreams live in `docs/_archive/`.
