import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = 'primary', href, onClick, className }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors'
  const variants = {
    primary: 'bg-[var(--color-black)] text-[var(--color-white)] hover:bg-[var(--color-red)]',
    outline:
      'border border-[var(--color-black)] text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)]',
  }

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  )
}
