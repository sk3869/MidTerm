# Sprint: Design Codex

## Files to Create

- `components/site/site-header.tsx` — SiteHeader component
- `components/site/site-footer.tsx` — SiteFooter component
- `components/ui/button.tsx` — Button primitive
- `components/ui/card.tsx` — Card primitive
- `components/ui/panel.tsx` — Panel primitive
- `components/ui/section-heading.tsx` — SectionHeading primitive
- `components/ui/separator.tsx` — Separator (horizontal rule)
- `components/ui/accordion.tsx` — Accordion for exhibit FAQs
- `components/ui/dialog.tsx` — Dialog for artifact detail views
- `components/ui/tooltip.tsx` — Tooltip for artifact labels
- `components/ui/index.ts` — barrel export of all UI components
- `lib/utils.ts` — cn() utility using clsx + tailwind-merge

## Files to Modify

- `app/globals.css` — add full Tailwind theme, typography scale, grid utilities
- `app/layout.tsx` — wrap children with SiteHeader and SiteFooter

## Component Definitions

### SiteHeader
```tsx
Props: none
Renders: site name "Common Tech Through The Years", nav links to /timeline, /exhibits/*, /about
Bauhaus style: black background, white text, red underline on active link
```

### SiteFooter
```tsx
Props: none
Renders: copyright line, "Sources & Attribution" section with 3 authority links
Bauhaus style: near-black background, gray text, red accent on links
```

### Button
```tsx
Props: { children, variant: 'primary' | 'outline', href?: string, onClick?: () => void }
```

### Card
```tsx
Props: { title, description, href?, children? }
```

### SectionHeading
```tsx
Props: { label: string, title: string, subtitle?: string }
label = small uppercase category tag (Bauhaus red)
title = large h2
subtitle = body text below
```

## Typography Scale (globals.css additions)
- `.text-display` — 4rem, weight 700, tracking -0.02em
- `.text-heading` — 2rem, weight 700, tracking -0.01em
- `.text-subheading` — 1.25rem, weight 600
- `.text-body` — 1rem, weight 400, leading 1.75
- `.text-caption` — 0.875rem, weight 400, color gray-600
- `.text-label` — 0.75rem, weight 600, uppercase, tracking 0.08em, color red

## Excluded
- No page content
- No exhibit-specific components
- No image or media components (focal-image belongs in a separate sprint)
