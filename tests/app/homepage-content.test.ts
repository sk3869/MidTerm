import { describe, it, expect } from 'vitest'
import { exhibits } from '@/lib/narrative-data'

describe('homepage exhibit data', () => {
  it('has exactly 4 exhibits', () => {
    expect(exhibits).toHaveLength(4)
  })

  it('each exhibit has required fields', () => {
    for (const exhibit of exhibits) {
      expect(exhibit.label).toBeTruthy()
      expect(exhibit.title).toBeTruthy()
      expect(exhibit.era).toBeTruthy()
      expect(exhibit.description).toBeTruthy()
      expect(exhibit.href).toBeTruthy()
    }
  })

  it('exhibit hrefs match expected routes', () => {
    const hrefs = exhibits.map((e) => e.href)
    expect(hrefs).toContain('/exhibits/personal-computers')
    expect(hrefs).toContain('/exhibits/mobile-phones')
    expect(hrefs).toContain('/exhibits/music-players')
    expect(hrefs).toContain('/exhibits/early-internet')
  })
})
