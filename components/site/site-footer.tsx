import Link from 'next/link'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-gray-300)] bg-[var(--color-black)] mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-white)]">
              {site.name}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[var(--color-gray-600)]">
              A digital museum documenting the personal technologies that shaped everyday life from
              the 1970s to the 2010s.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
              Exhibits
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {[
                { label: 'Personal Computers', href: '/exhibits/personal-computers' },
                { label: 'Mobile Phones', href: '/exhibits/mobile-phones' },
                { label: 'Music Players', href: '/exhibits/music-players' },
                { label: 'The Early Internet', href: '/exhibits/early-internet' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-[var(--color-gray-600)] hover:text-[var(--color-white)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
              Sources &amp; Attribution
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {[
                { label: 'Computer History Museum', href: 'https://computerhistory.org' },
                { label: 'Smithsonian Institution', href: 'https://smithsonianmag.com' },
                {
                  label: 'Britannica',
                  href: 'https://www.britannica.com/technology/computer',
                },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--color-gray-600)] hover:text-[var(--color-red)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--color-gray-600)] pt-6">
          <p className="text-xs text-[var(--color-gray-600)]">
            &copy; {new Date().getFullYear()} {site.name}. Educational use only.
          </p>
        </div>
      </div>
    </footer>
  )
}
