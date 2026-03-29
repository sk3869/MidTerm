import Link from 'next/link'
import { primaryNav, exhibitNav } from '@/lib/site-navigation'
import { site } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--color-gray-300)] bg-[var(--color-black)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-widest text-[var(--color-white)]"
          >
            {site.shortName}
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gray-300)] hover:text-[var(--color-white)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="group relative">
              <button className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gray-300)] hover:text-[var(--color-white)] transition-colors">
                Exhibits
              </button>
              <div className="absolute right-0 top-full z-10 hidden w-56 border border-[var(--color-gray-600)] bg-[var(--color-black)] py-2 group-hover:block">
                {exhibitNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-xs text-[var(--color-gray-300)] hover:bg-[var(--color-red)] hover:text-[var(--color-white)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
