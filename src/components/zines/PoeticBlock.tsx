'use client'

import React from 'react'

type Props = { title: string; children: React.ReactNode }
const PoeticBlock = ({ title, children }: Props) => (
  <section className="my-12">
    <h2>{title}</h2>
    <div className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
      {children}
    </div>
  </section>
)

export default PoeticBlock