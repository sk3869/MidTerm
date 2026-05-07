import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ArtifactCardProps {
  label: string
  name: string
  year: number
  significance: string
  curatorialNote: string
  image?: string
  className?: string
}

export function ArtifactCard({
  label,
  name,
  year,
  significance,
  curatorialNote,
  image,
  className,
}: ArtifactCardProps) {
  return (
    <div className={cn('flex flex-col border border-[var(--color-gray-300)]', className)}>
      {image && (
        <div className="relative w-full h-48 bg-[var(--color-gray-100)]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-red)]">
            {label}
          </span>
          <span className="text-xs font-medium text-[var(--color-gray-600)]">{year}</span>
        </div>
        <h3 className="text-lg font-bold text-[var(--color-black)]">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray-600)]">{significance}</p>
        <div className="mt-4 border-t border-[var(--color-gray-300)] pt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gray-600)] mb-2">
            Curatorial Note
          </p>
          <p className="text-xs italic leading-relaxed text-[var(--color-gray-600)]">
            {curatorialNote}
          </p>
        </div>
      </div>
    </div>
  )
}
