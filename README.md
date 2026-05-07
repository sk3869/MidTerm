# Common Tech Through The Years

A digital museum documenting how personal technology shaped everyday life from the 1970s to the 2010s. Built with Next.js 15, TypeScript, and Tailwind CSS v4 using a spec-driven development process.

**Live site:** https://sk3869.github.io/MidTerm/

---

## The Museum

Four exhibits. Four technologies. Four decades.

| Exhibit            | Era           | Focus                                      |
| ------------------ | ------------- | ------------------------------------------ |
| Personal Computers | 1970s – 1990s | From hobbyist kits to household appliances |
| Mobile Phones      | 1983 – 2007   | From the DynaTAC brick to the first iPhone |
| Music Players      | 1979 – 2004   | From the Walkman to the iPod               |
| The Early Internet | 1991 – 2004   | From Mosaic to broadband                   |

---

## Design Framework

### Visual Style: Bauhaus

Form follows function. Grid-based layouts, geometric dividers, black/white/red palette, no decorative elements. Every visual decision earns its place by serving a purpose.

### Brand Archetype: The Sage

The site seeks truth and shares it. Copy is calm, precise, and educational. Trust is built through knowledge and source attribution, not through promotional language.

### Persuasion Principle: Authority (Cialdini)

Every exhibit cites at least two authoritative institutions — Computer History Museum, Smithsonian Institution, Britannica. Source citations appear inline and in a dedicated Sources panel on every exhibit page. Credibility signals invite deeper engagement.

---

## Orchestration Process

This project was built using a spec-driven AI orchestration workflow. The process controls four recurring problems in AI-assisted development: **drift**, **context loss**, **ambiguous completion**, and **weak accountability**.

### The Six-Step Workflow

```
Spec → QA → Sprint → QA → Implement → QA
```

1. **Write a feature spec** — defines _what_ and _why_, not how
2. **QA the spec** — verify each criterion has a clear pass/fail state
3. **Write a sprint doc** — defines _how_, lists exact files and components
4. **QA the sprint doc** — verify it covers all spec criteria with no drift
5. **Implement** — follow the sprint doc exactly
6. **QA the implementation** — run all quality gates

### Why This Process

Without explicit artifacts, AI assistants:

- Change adjacent code that was never requested (drift)
- Lose context between sessions and re-derive decisions inconsistently
- Mark work done before it is verified
- Make undocumented decisions that cannot be reviewed

Specs and sprint docs are the project's memory. They live in `docs/_specs/` alongside the code.

### Workstreams

| Workstream                     | Purpose                                       |
| ------------------------------ | --------------------------------------------- |
| `setup/`                       | Repository initialization and configuration   |
| `design-codex/`                | Bauhaus design system and UI primitives       |
| `documentation-foundation/`    | Nine reference docs in `docs/foundation/`     |
| `homepage-exhibition/`         | Homepage hero, exhibit grid, collection intro |
| `curatorial-enrichment/`       | Four exhibit pages with artifacts and sources |
| `deployment-and-verification/` | CI pipeline and GitHub Pages deployment       |
| `documentation-cleanup/`       | Post-sprint doc cleanup                       |
| `refactor/`                    | Post-review improvements                      |

Full process artifacts live in `docs/_specs/`. Research memos live in `docs/_research/`. Foundation reference docs live in `docs/foundation/`.

---

## Smithsonian Curator Review

An AI curator review was conducted evaluating the site as a proposed Smithsonian exhibition. Key findings:

**Strengths:** Coherent four-exhibit narrative structure, correct Sage institutional voice, artifact selection showing genuine curatorial judgment (Altair over Apple I, Rio PMP300 over iPod as MP3 origin), source attribution establishing scholarly credibility.

**Improvements identified for final review:**

1. Add cross-exhibit narrative connections in Cultural Impact sections
2. Strengthen visitor orientation path on homepage
3. Add "Memory Hook" prompts per exhibit for emotional engagement
4. Replace vague impact statements with specific cited statistics
5. Source visual artifacts from Smithsonian Open Access or public domain

The full curator review is at `docs/_research/topics/curator-review.md`.

---

## Quality Gates

```bash
npm run typecheck     # TypeScript strict check
npm run lint          # ESLint
npm run test          # Vitest unit tests (25 tests)
npm run build         # Next.js static export
npm run format:check  # Prettier
```

All gates pass. CI runs the same sequence on every push to `main` before deploying to GitHub Pages.

---

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

---

## Tech Stack

| Technology     | Version    | Role                      |
| -------------- | ---------- | ------------------------- |
| Next.js        | 15         | App Router, static export |
| TypeScript     | 5 (strict) | Type safety               |
| Tailwind CSS   | v4         | Styling                   |
| Vitest         | 2          | Unit tests                |
| Playwright     | 1.49       | Browser tests             |
| GitHub Actions | —          | CI/CD pipeline            |

---

## Bibliography

Wikipedia contributors. (2026, March 30). Altair 8800. Wikipedia. https://en.wikipedia.org/wiki/Altair_8800

Wikipedia contributors. (2026a, March 21). Apple II. Wikipedia. https://en.wikipedia.org/wiki/Apple_II

Miller, M. J. (2021, August 12). Project Chess: The story behind the original IBM PC. PCMAG. https://www.pcmag.com/news/project-chess-the-story-behind-the-original-ibm-pc

Afifi-Sabet, K. (2024, March 13). Looking back at the Motorola DynaTAC 8000X - the first mobile phone that was ever sold 40 years ago today. TechRadar. https://www.techradar.com/pro/looking-back-at-the-motorola-dynatac-8000x-the-first-mobile-phone-that-was-ever-sold-40-years-ago-today

Wikipedia contributors. Nokia 3310. Wikipedia. https://en.wikipedia.org/wiki/Nokia_3310

Rilm. (2026, February 13). Smithsonian Collections Object: The Sony TPS-L2 "Walkman" Cassette Player, National Museum of American History. Bibliolore. https://bibliolore.org/2020/03/04/smithsonian-collections-object-the-sony-tps-l2-walkman-cassette-player-national-museum-of-american-history/

All-TIME 100 Gadgets. (2010, October 25). TIME.com. https://content.time.com/time/specials/packages/article/0,28804,2023689_2023681_2023678,00.html

The complete history of Apple's iPod. (n.d.). CNET. https://www.cnet.com/pictures/the-complete-history-of-apples-ipod/

Calore, M. (2010, April 22). April 22, 1993: Mosaic Browser lights up web with color, creativity. WIRED. https://www.wired.com/2010/04/0422mosaic-web-browser/

Why are 2 million people still signed up for AOL's dial-up internet? (n.d.). WNYC Studios. https://www.wnycstudios.org/podcasts/otm/articles/why-are-2-million-people-still-signed-aols-dial-internet

Shontell, A. (2017, May 10). Here's what Google looked like the first day it launched in 1998. Business Insider. https://www.businessinsider.com/heres-what-google-looked-like-the-first-day-it-launched-in-1998-2013-9
