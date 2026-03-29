import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SiteHeader } from '@/components/site/site-header'

describe('SiteHeader', () => {
  it('renders the site short name', () => {
    render(<SiteHeader />)
    expect(screen.getByText('Common Tech')).toBeInTheDocument()
  })

  it('renders primary navigation links', () => {
    render(<SiteHeader />)
    expect(screen.getByText('The Collection')).toBeInTheDocument()
    expect(screen.getByText('Timeline')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders Exhibits dropdown label', () => {
    render(<SiteHeader />)
    expect(screen.getByText('Exhibits')).toBeInTheDocument()
  })
})
