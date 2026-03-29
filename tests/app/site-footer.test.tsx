import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SiteFooter } from '@/components/site/site-footer'

describe('SiteFooter', () => {
  it('renders the site name', () => {
    render(<SiteFooter />)
    expect(screen.getByText('Common Tech Through The Years')).toBeInTheDocument()
  })

  it('renders Sources and Attribution section', () => {
    render(<SiteFooter />)
    expect(screen.getByText('Sources & Attribution')).toBeInTheDocument()
  })

  it('renders authority source links', () => {
    render(<SiteFooter />)
    expect(screen.getByText('Computer History Museum')).toBeInTheDocument()
    expect(screen.getByText('Smithsonian Institution')).toBeInTheDocument()
    expect(screen.getByText('Britannica')).toBeInTheDocument()
  })
})
