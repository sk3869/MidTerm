# Sprint: Homepage Exhibition

## Files to Create

- `components/content/narrative-card.tsx` — exhibit preview card
- `components/content/home/hero.tsx` — homepage hero section
- `components/content/home/exhibit-grid.tsx` — grid of 4 exhibit cards
- `components/content/home/collection-intro.tsx` — "About This Collection" section
- `lib/narrative-data.ts` — exhibit metadata array
- `lib/site.ts` — site-wide metadata

## Files to Modify

- `app/page.tsx` — assemble hero + exhibit grid + collection intro

## Component Definitions

### NarrativeCard
```tsx
Props: {
  title: string
  era: string         // e.g. "1970s – 1990s"
  description: string
  href: string
  label: string       // e.g. "Exhibit 01"
}
```

### Hero
```tsx
Props: none
Renders: red geometric line, display title, curatorial statement, CTA button to /timeline
```

### ExhibitGrid
```tsx
Props: none
Renders: 2-col grid of 4 NarrativeCards sourced from lib/narrative-data.ts
```

### CollectionIntro
```tsx
Props: none
Renders: SectionHeading + 2-paragraph Sage statement about the collection
```

## Data: lib/narrative-data.ts

```ts
export const exhibits = [
  {
    label: 'Exhibit 01',
    title: 'Personal Computers',
    era: '1970s – 1990s',
    description: 'From hobbyist kits to the household staple...',
    href: '/exhibits/personal-computers',
  },
  {
    label: 'Exhibit 02',
    title: 'Mobile Phones',
    era: '1983 – 2007',
    description: 'From the DynaTAC brick to the first smartphone...',
    href: '/exhibits/mobile-phones',
  },
  {
    label: 'Exhibit 03',
    title: 'Music Players',
    era: '1979 – 2004',
    description: 'From the Sony Walkman to the iPod...',
    href: '/exhibits/music-players',
  },
  {
    label: 'Exhibit 04',
    title: 'The Early Internet',
    era: '1991 – 2004',
    description: 'From dial-up connections to broadband...',
    href: '/exhibits/early-internet',
  },
]
```

## Copy

### Curatorial Statement (Hero)
"This collection documents four decades of personal technology — the devices that changed how we communicate, create, and understand the world. Assembled from primary sources and institutional archives, these exhibits present the history of everyday technology as cultural history."

### About This Collection (CollectionIntro)
"Common Tech Through The Years is a digital museum organized around four transformative technologies: personal computers, mobile phones, music players, and the early internet. Each exhibit traces a device from its origins through its cultural peak, drawing on materials from the Computer History Museum, the Smithsonian Institution, and Britannica."

"The collection is designed for students, educators, and anyone curious about the objects that shaped modern life. Our curatorial approach emphasizes context over novelty — understanding why a technology mattered is more important than cataloguing what it did."

## Excluded
- No individual exhibit page content
- No timeline content
- No images (geometric shapes only on homepage)
