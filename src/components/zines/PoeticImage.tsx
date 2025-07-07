'use client'

import React from 'react'

type PoeticImageProps = {
  src: string
  alt: string
  caption?: string
  className?: string
}

const PoeticImage = ({ src, alt, caption, className }: PoeticImageProps) => (
  <figure className="my-6">
    <img
      src={src}
      alt={alt}
      className={className || 'rounded w-full object-cover'}
    />
    {caption && (
      <figcaption className="mt-2 text-sm text-neutral-500 text-center">
        {caption}
      </figcaption>
    )}
  </figure>
)

export default PoeticImage