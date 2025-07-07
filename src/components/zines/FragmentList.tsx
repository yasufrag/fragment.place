'use client'

import React from 'react'

type FragmentListProps = {
  title?: string
  items: string[]
  className?: string
}

const FragmentList = ({ title, items, className }: FragmentListProps) => (
  <section className={`my-8 ${className || ''}`}>
    {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </section>
)

export default FragmentList