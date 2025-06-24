'use client'

import React from 'react'

export const DayLayout = ({ morning, afternoon, evening }: { morning: string[]; afternoon: string[]; evening: string[] }) => (
  <section className="my-12">
    <h2>Day Layout</h2>
    <div className="grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
      {[{ label: 'Morning', items: morning }, { label: 'Afternoon', items: afternoon }, { label: 'Evening', items: evening }].map(({ label, items }) => (
        <div key={label}>
          <h3>{label}</h3>
          <ul className="list-disc pl-4 space-y-1">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default DayLayout