import { NarrativeCard } from '@/components/content/narrative-card'
import { exhibits } from '@/lib/narrative-data'

export function ExhibitGrid() {
  return (
    <section className="py-16 border-b border-[var(--color-gray-300)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
            The Collection
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-black)]">
            Four Exhibits
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {exhibits.map((exhibit) => (
            <NarrativeCard
              key={exhibit.href}
              label={exhibit.label}
              title={exhibit.title}
              era={exhibit.era}
              description={exhibit.description}
              href={exhibit.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
