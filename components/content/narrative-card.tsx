import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NarrativeCardProps {
  label: string
  title: string
  era: string
  description: string
  href: string
  className?: string
}

export function NarrativeCard({
  label,
  title,
  era,
  description,
  href,
  className,
}: NarrativeCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col border border-[var(--color-gray-300)] p-6 transition-colors hover:border-[var(--color-black)]',
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
        {label}
      </span>
      <h3 className="mt-2 text-xl font-bold text-[var(--color-black)] group-hover:text-[var(--color-red)] transition-colors">
        {title}
      </h3>
      <span className="mt-1 text-xs font-medium text-[var(--color-gray-600)]">{era}</span>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-gray-600)]">{description}</p>
      <span className="mt-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-black)] group-hover:text-[var(--color-red)] transition-colors">
        Enter Exhibit →
      </span>
    </Link>
  )
}
