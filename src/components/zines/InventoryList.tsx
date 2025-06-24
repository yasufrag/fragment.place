'use client'

import React from 'react'

export const InventoryList = ({ frozen, refrigerated }: { frozen: string[]; refrigerated: string[] }) => (
  <section className="my-12 grid md:grid-cols-2 gap-8">
    {[{ title: 'Frozen', items: frozen }, { title: 'Refrigerated', items: refrigerated }].map(({ title, items }) => (
      <div key={title}>
        <h3>■ {title}</h3>
        <ul className="list-disc pl-4 space-y-1">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    ))}
  </section>
)

export default InventoryList