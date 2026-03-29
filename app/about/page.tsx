import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Common Tech Through The Years — curatorial statement and methodology.',
}

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="h-1 w-16 bg-[var(--color-red)] mb-6" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
            Curatorial Statement
          </span>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-[var(--color-black)]">
            About This Collection
          </h1>
          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-[var(--color-gray-600)]">
            <p>
              Common Tech Through The Years is a digital museum built to document the personal
              technologies that shaped everyday life between the 1970s and the 2010s. The collection
              focuses on four categories — personal computers, mobile phones, music players, and the
              early internet — because together they represent the infrastructure of modern daily
              life.
            </p>
            <p>
              Our curatorial approach is guided by a single question: not what did this technology
              do, but what did it change? We are less interested in technical specifications than in
              cultural consequences — how a device altered behavior, restructured industries, or
              shifted the social meaning of communication, work, or leisure.
            </p>
            <p>
              Each exhibit draws on primary sources from the Computer History Museum, the
              Smithsonian Institution, and Britannica. We cite our sources because the authority of
              a museum exhibit rests on the credibility of its evidence. Uncited claims are
              opinions; cited claims are the beginning of scholarship.
            </p>
            <p>
              This collection was built using a spec-driven development process in which every
              feature was defined, reviewed, and verified before implementation. The process
              documentation lives alongside the code in the repository. We believe that how
              something is made is part of what it means.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-gray-300)] pt-10">
            <h2 className="text-xl font-bold text-[var(--color-black)]">Design Philosophy</h2>
            <dl className="mt-6 flex flex-col gap-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
                  Visual Style
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--color-gray-600)]">
                  Bauhaus — form follows function. Every visual element earns its place by serving a
                  purpose. Grid-based layout, geometric dividers, no decoration.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
                  Brand Archetype
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--color-gray-600)]">
                  The Sage — seeks truth, shares it. The site earns trust through knowledge,
                  precision, and source attribution rather than through claims of authority.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
                  Persuasion Principle
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--color-gray-600)]">
                  Authority (Cialdini) — credible, institutional sourcing signals expertise.
                  Visitors engage more deeply with content they trust. Trust is built through
                  evidence.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
