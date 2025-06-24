'use client'

import React from 'react'

export const DayLayout = ({
  morning,
  afternoon,
  evening,
}: {
  morning: string[]
  afternoon: string[]
  evening: string[]
}) => (
  <section className="my-10">
    <h3>Day Layout</h3>
    <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
      <div>
        <h4>Morning</h4>
        <ul>{morning.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <div>
        <h4>Afternoon</h4>
        <ul>{afternoon.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <div>
        <h4>Evening</h4>
        <ul>{evening.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </div>
  </section>
)

export default DayLayout