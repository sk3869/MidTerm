import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NarrativeCard } from '@/components/content/narrative-card'

describe('NarrativeCard', () => {
  const props = {
    label: 'Exhibit 01',
    title: 'Personal Computers',
    era: '1970s – 1990s',
    description: 'A test description.',
    href: '/exhibits/personal-computers',
  }

  it('renders the label', () => {
    render(<NarrativeCard {...props} />)
    expect(screen.getByText('Exhibit 01')).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<NarrativeCard {...props} />)
    expect(screen.getByText('Personal Computers')).toBeInTheDocument()
  })

  it('renders the era', () => {
    render(<NarrativeCard {...props} />)
    expect(screen.getByText('1970s – 1990s')).toBeInTheDocument()
  })

  it('renders as a link to the correct href', () => {
    render(<NarrativeCard {...props} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/exhibits/personal-computers')
  })
})
