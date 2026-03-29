import { cn } from '@/lib/utils'

interface PanelProps {
  children: React.ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={cn(
        'border border-[var(--color-gray-300)] bg-[var(--color-gray-100)] p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
