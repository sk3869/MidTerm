import type { Metadata } from 'next'
import { exhibits } from '@/lib/narrative-data'
import { NarrativeCard } from '@/components/content/narrative-card'

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'A chronological overview of personal technology from the 1970s to the 2010s.',
}

const timelineEntries = [
  { year: '1975', event: 'Altair 8800 kit released by MITS' },
  { year: '1977', event: 'Apple II launched — first mass-market personal computer' },
  { year: '1979', event: 'Sony Walkman TPS-L2 introduces portable music' },
  { year: '1981', event: 'IBM PC 5150 establishes open-architecture standard' },
  { year: '1983', event: 'Motorola DynaTAC 8000X — first commercial handheld cell phone' },
  { year: '1984', event: 'Sony Discman brings CD audio to portable listeners' },
  { year: '1991', event: 'World Wide Web becomes publicly available' },
  { year: '1993', event: 'Mosaic browser makes the web visual; AOL begins CD campaign' },
  { year: '1998', event: 'Diamond Rio PMP300 launches; Google Search founded' },
  { year: '2000', event: 'Nokia 3310 reaches 126 million users worldwide' },
  { year: '2001', event: 'Apple iPod introduces 1,000 songs in your pocket' },
  { year: '2004', event: 'Broadband internet surpasses dial-up in U.S. households' },
  { year: '2007', event: 'Apple iPhone redefines the mobile phone as a computer' },
]

export default function TimelinePage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-1 w-16 bg-[var(--color-red)] mb-6" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
          Overview
        </span>
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-[var(--color-black)]">
          Timeline
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-gray-600)]">
          A chronological record of key moments in personal technology from 1975 to 2007.
        </p>
        <div className="mt-16 relative">
          <div
            className="absolute left-24 top-0 bottom-0 w-px bg-[var(--color-gray-300)]"
            aria-hidden="true"
          />
          <ol className="flex flex-col">
            {timelineEntries.map((entry, i) => (
              <li key={i} className="relative flex items-start gap-8 pb-10">
                <span className="w-24 shrink-0 text-right text-sm font-bold text-[var(--color-black)] pt-1">
                  {entry.year}
                </span>
                <div className="relative flex items-start gap-6">
                  <div className="mt-2 h-3 w-3 shrink-0 bg-[var(--color-red)]" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-[var(--color-gray-600)]">
                    {entry.event}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-16 border-t border-[var(--color-gray-300)] pt-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
            Explore
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-black)] mb-10">
            Enter an Exhibit
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {exhibits.map((exhibit) => (
              <NarrativeCard
                key={exhibit.href}
                label={exhibit.label}
                title={exhibit.title}
                era={exhibit.era}
                description={exhibit.description}
                href={exhibit.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
