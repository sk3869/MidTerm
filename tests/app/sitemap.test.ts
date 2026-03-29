import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'

describe('sitemap', () => {
  it('returns an array of URLs', () => {
    const result = sitemap()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('includes the homepage', () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)
    expect(urls.some((url) => url.includes('/MidTerm'))).toBe(true)
  })

  it('includes all 4 exhibit routes', () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)
    expect(urls.some((url) => url.includes('personal-computers'))).toBe(true)
    expect(urls.some((url) => url.includes('mobile-phones'))).toBe(true)
    expect(urls.some((url) => url.includes('music-players'))).toBe(true)
    expect(urls.some((url) => url.includes('early-internet'))).toBe(true)
  })
})
