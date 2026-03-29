import { describe, it, expect } from 'vitest'
import { exhibits } from '@/lib/narrative-data'

describe('exhibit artifact data', () => {
  it('each exhibit has exactly 3 artifacts', () => {
    for (const exhibit of exhibits) {
      expect(exhibit.artifacts).toHaveLength(3)
    }
  })

  it('each artifact has required fields', () => {
    for (const exhibit of exhibits) {
      for (const artifact of exhibit.artifacts) {
        expect(artifact.label).toBeTruthy()
        expect(artifact.name).toBeTruthy()
        expect(artifact.year).toBeGreaterThan(0)
        expect(artifact.significance).toBeTruthy()
        expect(artifact.curatorialNote).toBeTruthy()
      }
    }
  })

  it('each exhibit has at least 2 sources', () => {
    for (const exhibit of exhibits) {
      expect(exhibit.sources.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('each exhibit has an overview with at least 2 paragraphs', () => {
    for (const exhibit of exhibits) {
      expect(exhibit.overview.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('each exhibit has cultural impact with at least 2 paragraphs', () => {
    for (const exhibit of exhibits) {
      expect(exhibit.culturalImpact.paragraphs.length).toBeGreaterThanOrEqual(2)
    }
  })
})
