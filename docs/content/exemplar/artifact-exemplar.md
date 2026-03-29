# Artifact Exemplar

This document shows the complete, correct format for a single artifact entry. Use this as the reference when writing artifact data in `lib/narrative-data.ts`.

## Exemplar: Apple iPod (2001)

```ts
{
  label: 'Artifact 03',
  name: 'Apple iPod',
  year: 2001,
  significance: 'The first portable music player to combine a large hard drive, a simple scroll-wheel interface, and direct integration with a desktop music library, establishing the template for modern consumer electronics.',
  curatorialNote: 'We selected the iPod not only for its commercial success but for what it revealed about the shift from feature-driven to experience-driven product design. The iPod did not introduce MP3 playback — it made MP3 playback feel inevitable.',
}
```

## Rules

1. `significance` — one complete sentence. States what the artifact did, not just what it was.
2. `curatorialNote` — two sentences maximum. Explains the selection decision in first-person plural. Reveals something non-obvious.
3. `year` — the year of first commercial release, not announcement.
4. `label` — sequential within the exhibit: Artifact 01, Artifact 02, Artifact 03.
