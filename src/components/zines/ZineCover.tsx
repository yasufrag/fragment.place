'use client'

import React from 'react'

const ZineCover = ({
  title,
  subtitle,
  image,
  alt,
  date,
}: {
  title: string
  subtitle?: string
  image?: string
  alt?: string
  date?: string
}) => (
  <section className="my-16">
    <h1 className="article-title">{title}</h1>

    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}

    {date && (
      <p className="article-date">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>
    )}

    {image && (
      <img
        src={image}
        alt={alt ?? `${title} cover image`}
        className="mx-auto mt-6 rounded shadow"
      />
    )}
  </section>
)

export default ZineCover