import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ label, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-black)] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-[var(--color-gray-600)]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
