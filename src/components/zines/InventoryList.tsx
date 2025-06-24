'use client'

import React from 'react'

export const InventoryList = ({
  frozen,
  refrigerated,
}: {
  frozen: string[]
  refrigerated: string[]
}) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
    <div>
      <h3>■ Frozen</h3>
      <ul>
        {frozen.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
    <div>
      <h3>■ Refrigerated</h3>
      <ul>
        {refrigerated.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  </section>
)

export default InventoryList