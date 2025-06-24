import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const PoeticBlock = ({ title, children }: Props) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
        {children}
      </div>
    </section>
  )
}

export default PoeticBlock