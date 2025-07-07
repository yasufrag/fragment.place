'use client'

import React from 'react'

type QuoteBlockProps = {
  children: React.ReactNode
  className?: string
}

const QuoteBlock = ({ children, className }: QuoteBlockProps) => (
  <blockquote
    className={`border-l-4 border-neutral-600 pl-4 italic text-neutral-300 my-6 ${className || ''}`}
  >
    {children}
  </blockquote>
)

export default QuoteBlock