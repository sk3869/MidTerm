import { cn } from '@/lib/utils'

interface SeparatorProps {
  className?: string
}

export function Separator({ className }: SeparatorProps) {
  return <hr className={cn('border-t border-[var(--color-gray-300)]', className)} />
}
