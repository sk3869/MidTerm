import type { Source } from '@/lib/narrative-data'

interface SourcesPanelProps {
  sources: Source[]
}

export function SourcesPanel({ sources }: SourcesPanelProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl border border-[var(--color-gray-300)] p-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
            Authority
          </span>
          <h2 className="mt-2 text-xl font-bold text-[var(--color-black)]">
            Sources &amp; Further Reading
          </h2>
          <p className="mt-3 text-sm text-[var(--color-gray-600)]">
            The following institutional sources were used in the preparation of this exhibit.
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {sources.map((source) => (
              <li key={source.url} className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gray-600)]">
                  {source.institution}
                </span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-black)] underline hover:text-[var(--color-red)] transition-colors"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
