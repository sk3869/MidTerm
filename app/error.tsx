'use client'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6">
      <div className="h-1 w-16 bg-[var(--color-red)]" aria-hidden="true" />
      <h2 className="text-2xl font-bold text-[var(--color-black)]">Something went wrong</h2>
      <p className="text-sm text-[var(--color-gray-600)]">{error.message}</p>
      <button
        onClick={reset}
        className="border border-[var(--color-black)] px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[var(--color-black)] hover:text-[var(--color-white)] transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
