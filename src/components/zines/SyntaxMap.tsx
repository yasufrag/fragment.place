'use client'

import React, { ReactNode } from 'react'

type SyntaxItem = {
  label: string
  content: string
}

type SyntaxMapProps = {
  title?: string
  items: SyntaxItem[]
  footer?: string[]
  children?: ReactNode
}

const SyntaxMap = ({ title = 'Poietic Map', items, footer = [], children }: SyntaxMapProps) => (
  <section className="my-12">
    <h3>{title}</h3>
    {children && <div className="mb-6">{children}</div>}

    <pre className="whitespace-pre-wrap bg-neutral-800 p-4 rounded text-sm leading-relaxed text-white">
{`┌────────────────────────────┐
${items.map(item => `│  ${item.label.padEnd(14)} → ${item.content}`).join('\n')}
└────────────────────────────┘

${footer.map(line => `→ ${line}`).join('\n')}`}
    </pre>
  </section>
)

export default SyntaxMap