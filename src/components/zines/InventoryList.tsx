'use client'

import React from 'react'

type Section = {
  title: string
  description?: string
  items: string[]
}

export const InventoryList = ({ sections }: { sections: Section[] }) => (
  <section className="my-12 grid md:grid-cols-2 gap-8">
    {sections.map(({ title, description, items }) => (
      <div key={title}>
        <h3 className="font-semibold">■ {title}</h3>
        {description && <p className="text-sm text-neutral-400 mb-2">{description}</p>}
        <ul className="list-disc pl-4 space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
)

export default InventoryList