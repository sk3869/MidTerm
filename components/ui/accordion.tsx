'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('flex flex-col', className)}>
      {items.map((item, i) => (
        <div key={i} className="border-b border-[var(--color-gray-300)]">
          <button
            className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-[var(--color-black)]"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.question}
            <span className="ml-4 text-[var(--color-red)]">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && (
            <p className="pb-4 text-sm leading-relaxed text-[var(--color-gray-600)]">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
