import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ArtifactCard } from '@/components/content/artifact-card'

describe('ArtifactCard', () => {
  const props = {
    label: 'Artifact 01',
    name: 'Altair 8800',
    year: 1975,
    significance: 'The first commercially successful personal computer kit.',
    curatorialNote: 'We selected the Altair for what it started.',
  }

  it('renders the artifact name', () => {
    render(<ArtifactCard {...props} />)
    expect(screen.getByText('Altair 8800')).toBeInTheDocument()
  })

  it('renders the year', () => {
    render(<ArtifactCard {...props} />)
    expect(screen.getByText('1975')).toBeInTheDocument()
  })

  it('renders the significance', () => {
    render(<ArtifactCard {...props} />)
    expect(screen.getByText(props.significance)).toBeInTheDocument()
  })

  it('renders the curatorial note label', () => {
    render(<ArtifactCard {...props} />)
    expect(screen.getByText('Curatorial Note')).toBeInTheDocument()
  })
})
