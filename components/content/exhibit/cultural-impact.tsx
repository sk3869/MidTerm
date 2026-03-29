interface CulturalImpactProps {
  title: string
  paragraphs: string[]
}

export function CulturalImpact({ title, paragraphs }: CulturalImpactProps) {
  return (
    <section className="py-16 border-b border-[var(--color-gray-300)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
            Cultural Impact
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-black)]">
            {title}
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-[var(--color-gray-600)]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
