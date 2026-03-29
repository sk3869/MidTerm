import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="border-b border-[var(--color-gray-300)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="mb-6 h-1 w-16 bg-[var(--color-red)]" aria-hidden="true" />
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-black)] md:text-7xl">
            Common Tech
            <br />
            Through The Years
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-gray-600)]">
            This collection documents four decades of personal technology — the devices that changed
            how we communicate, create, and understand the world. Assembled from primary sources and
            institutional archives, these exhibits present the history of everyday technology as
            cultural history.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/exhibits/personal-computers">Enter Collection</Button>
            <Button href="/timeline" variant="outline">
              View Timeline
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
