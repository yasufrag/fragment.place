'use client'

import React from 'react'

const ZineCover = ({ title, subtitle, image, alt }: { title: string; subtitle?: string; image?: string; alt?: string }) => (
  <section className="text-center my-16">
    <h1>{title}</h1>
    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    {image && <img src={image} alt={alt ?? `${title} cover image`} className="mx-auto mt-6 rounded shadow" />}
  </section>
)

export default ZineCover