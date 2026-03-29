import { Hero } from '@/components/content/home/hero'
import { ExhibitGrid } from '@/components/content/home/exhibit-grid'
import { CollectionIntro } from '@/components/content/home/collection-intro'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExhibitGrid />
      <CollectionIntro />
    </>
  )
}
