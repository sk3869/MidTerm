import { cn } from '@/lib/utils'

interface FocalImageProps {
  alt: string
  aspectRatio?: '16/9' | '4/3' | '1/1'
  className?: string
}

export function FocalImage({ alt, aspectRatio = '16/9', className }: FocalImageProps) {
  const ratioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-4/3',
    '1/1': 'aspect-square',
  }[aspectRatio]

  return (
    <div
      className={cn(
        ratioClass,
        'flex items-center justify-center bg-[var(--color-gray-100)] border border-[var(--color-gray-300)]',
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <span className="text-xs uppercase tracking-widest text-[var(--color-gray-600)]">{alt}</span>
    </div>
  )
}
