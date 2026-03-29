import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.github.io/MidTerm'
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/exhibits/personal-computers`, lastModified: new Date() },
    { url: `${base}/exhibits/mobile-phones`, lastModified: new Date() },
    { url: `${base}/exhibits/music-players`, lastModified: new Date() },
    { url: `${base}/exhibits/early-internet`, lastModified: new Date() },
    { url: `${base}/timeline`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
  ]
}
