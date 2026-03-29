interface ExhibitHeaderProps {
  label: string
  title: string
  eraRange: string
  overview: string[]
}

export function ExhibitHeader({ label, title, eraRange, overview }: ExhibitHeaderProps) {
  return (
    <section className="border-b border-[var(--color-gray-300)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-1 w-16 bg-[var(--color-red)] mb-6" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
          {label}
        </span>
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-[var(--color-black)] md:text-6xl">
          {title}
        </h1>
        <p className="mt-2 text-sm font-medium text-[var(--color-gray-600)]">{eraRange}</p>
        <div className="mt-8 max-w-3xl flex flex-col gap-4">
          {overview.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-[var(--color-gray-600)]">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
