# Sprint: Curatorial Enrichment

## Files to Create

- `app/exhibits/personal-computers/page.tsx`
- `app/exhibits/mobile-phones/page.tsx`
- `app/exhibits/music-players/page.tsx`
- `app/exhibits/early-internet/page.tsx`
- `components/content/artifact-card.tsx`
- `components/content/exhibit/exhibit-header.tsx`
- `components/content/exhibit/artifact-grid.tsx`
- `components/content/exhibit/cultural-impact.tsx`
- `components/content/exhibit/sources-panel.tsx`

## Files to Modify

- `lib/narrative-data.ts` — add full artifact data for all 4 exhibits

## Component Definitions

### ArtifactCard
```tsx
Props: {
  name: string
  year: number
  significance: string
  curatorialNote: string
  label: string  // e.g. "Artifact 01"
}
```

### ExhibitHeader
```tsx
Props: {
  label: string       // e.g. "Exhibit 01"
  title: string       // e.g. "Personal Computers"
  eraRange: string    // e.g. "1970s – 1990s"
  overview: string    // 2-paragraph era context
}
```

### ArtifactGrid
```tsx
Props: { artifacts: Artifact[] }
Renders: 3-col desktop / 1-col mobile grid of ArtifactCards
```

### CulturalImpact
```tsx
Props: { title: string; paragraphs: string[] }
```

### SourcesPanel
```tsx
Props: { sources: { title: string; url: string; institution: string }[] }
Renders: bordered box with "Sources & Further Reading" heading
```

## Artifact Data: lib/narrative-data.ts additions

### Personal Computers
1. Altair 8800 (1975) — The first commercially successful personal computer kit, sold by MITS to hobbyists who assembled it from parts.
2. Apple II (1977) — One of the first mass-produced microcomputers, credited with bringing personal computing to homes and schools.
3. IBM PC (1981) — Established the open-architecture standard that defined the PC industry for the following three decades.

### Mobile Phones
1. Motorola DynaTAC 8000X (1983) — The first commercially available handheld cellular phone, weighing 1.75 lbs and costing $3,995.
2. Nokia 3310 (2000) — Sold over 126 million units, becoming a cultural symbol of the pre-smartphone era.
3. Apple iPhone (2007) — Introduced the modern smartphone paradigm: capacitive touchscreen, mobile internet, and an app ecosystem.

### Music Players
1. Sony Walkman TPS-L2 (1979) — The first portable cassette player, creating the concept of personal mobile music listening.
2. Diamond Rio PMP300 (1998) — One of the first portable MP3 players, triggering a legal battle that shaped digital music distribution.
3. Apple iPod (2001) — Placed 1,000 songs in your pocket and established the template for the modern consumer electronics device.

### Early Internet
1. Mosaic Browser (1993) — The first web browser with inline images, making the World Wide Web accessible to general users.
2. AOL Dial-Up (1993–2000) — Introduced millions of Americans to email and online communities through its iconic CD distribution campaign.
3. Google Search (1998) — Replaced directory-based web navigation with algorithmic search, fundamentally changing how people find information.

## Sources Per Exhibit

### Personal Computers
- Computer History Museum — computerhistory.org/timelines
- Britannica — britannica.com/technology/computer/Home-use-microprocessors-software

### Mobile Phones
- Smithsonian Institution — smithsonianmag.com
- Computer History Museum — computerhistory.org

### Music Players
- Smithsonian Institution — smithsonianmag.com
- Britannica — britannica.com

### Early Internet
- Computer History Museum — computerhistory.org
- Britannica — britannica.com/technology/Internet

## Excluded
- No images
- No interactive features
- No timeline page
- No about page
