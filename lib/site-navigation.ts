export type NavItem = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: 'The Collection', href: '/' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'About', href: '/about' },
]

export const exhibitNav: NavItem[] = [
  { label: 'Personal Computers', href: '/exhibits/personal-computers' },
  { label: 'Mobile Phones', href: '/exhibits/mobile-phones' },
  { label: 'Music Players', href: '/exhibits/music-players' },
  { label: 'The Early Internet', href: '/exhibits/early-internet' },
]
