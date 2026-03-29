'use client'

import { cn } from '@/lib/utils'

interface DialogProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export function Dialog({ open, onClose, title, children, className }: DialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={cn(
          'relative max-h-[80vh] w-full max-w-2xl overflow-y-auto bg-[var(--color-white)] p-8',
          className,
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[var(--color-black)]">{title}</h2>
          <button
            onClick={onClose}
            className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gray-600)] hover:text-[var(--color-red)]"
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
