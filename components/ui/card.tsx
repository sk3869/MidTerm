import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  description?: string
  href?: string
  children?: React.ReactNode
  className?: string
}

export function Card({ title, description, href, children, className }: CardProps) {
  const content = (
    <div className={cn('border border-[var(--color-gray-300)] p-6', className)}>
      <h3 className="text-lg font-bold text-[var(--color-black)]">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-600)]">{description}</p>
      )}
      {children}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block hover:border-[var(--color-black)] transition-colors">
        {content}
      </Link>
    )
  }

  return content
}
