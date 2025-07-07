'use client'

import React from 'react'

type SyntaxBoxProps = {
  title: string
  children: React.ReactNode
}

const SyntaxBox = ({ title, children }: SyntaxBoxProps) => (
  <section className="my-12">
    <h3>■ {title}</h3>
    <div className="bg-neutral-800 px-4 py-1 rounded text-sm leading-relaxed text-white prose prose-invert max-w-none">
      <p>{children}</p>
    </div>
  </section>
)

export default SyntaxBox