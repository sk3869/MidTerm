import { ArtifactCard } from '@/components/content/artifact-card'
import type { Artifact } from '@/lib/narrative-data'

interface ArtifactGridProps {
  artifacts: Artifact[]
}

export function ArtifactGrid({ artifacts }: ArtifactGridProps) {
  return (
    <section className="py-16 border-b border-[var(--color-gray-300)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
            Artifacts
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-black)]">
            Key Objects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard
              key={artifact.name}
              label={artifact.label}
              name={artifact.name}
              year={artifact.year}
              significance={artifact.significance}
              curatorialNote={artifact.curatorialNote}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
