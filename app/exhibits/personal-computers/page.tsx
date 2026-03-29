import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { exhibits } from '@/lib/narrative-data'
import { ExhibitHeader } from '@/components/content/exhibit/exhibit-header'
import { ArtifactGrid } from '@/components/content/exhibit/artifact-grid'
import { CulturalImpact } from '@/components/content/exhibit/cultural-impact'
import { SourcesPanel } from '@/components/content/exhibit/sources-panel'

const exhibit = exhibits.find((e) => e.href === '/exhibits/personal-computers')

export const metadata: Metadata = {
  title: exhibit?.title ?? 'Exhibit',
  description: exhibit?.description,
}

export default function ExhibitPage() {
  if (!exhibit) notFound()

  return (
    <>
      <ExhibitHeader
        label={exhibit.label}
        title={exhibit.title}
        eraRange={exhibit.era}
        overview={exhibit.overview}
      />
      <ArtifactGrid artifacts={exhibit.artifacts} />
      <CulturalImpact
        title={exhibit.culturalImpact.title}
        paragraphs={exhibit.culturalImpact.paragraphs}
      />
      <SourcesPanel sources={exhibit.sources} />
    </>
  )
}
