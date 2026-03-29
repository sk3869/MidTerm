import { SectionHeading } from '@/components/ui/section-heading'

export function CollectionIntro() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeading label="About This Collection" title="Technology as Cultural History" />
          <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-[var(--color-gray-600)]">
            <p>
              Common Tech Through The Years is a digital museum organized around four transformative
              technologies: personal computers, mobile phones, music players, and the early
              internet. Each exhibit traces a device from its origins through its cultural peak,
              drawing on materials from the Computer History Museum, the Smithsonian Institution,
              and Britannica.
            </p>
            <p>
              The collection is designed for students, educators, and anyone curious about the
              objects that shaped modern life. Our curatorial approach emphasizes context over
              novelty — understanding why a technology mattered is more important than cataloguing
              what it did.
            </p>
            <p className="text-sm">
              <strong className="font-semibold text-[var(--color-black)]">
                Suggested path for first-time visitors:
              </strong>{' '}
              Begin with Personal Computers to understand the foundation. Mobile Phones shows how
              that foundation was miniaturized and mobilized. Music Players illustrates how digital
              distribution disrupted physical media. The Early Internet connects all three by
              providing the infrastructure they eventually converged upon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
