'use client'

import React from 'react'

type Props = {
  defaultText?: string
}

export default function YourSyntaxShare({ defaultText = '' }: Props) {
  const hashtags = '#poieticos #refrigeratorsyntax #fragment'
  const encodedText = encodeURIComponent(`${defaultText}\n\n${hashtags} via @poieticos`)
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedText}`

  return (
    <section className="my-16">
      <h3>Your Refrigerator Syntax</h3>
      <p>
        Write your own fragment: what’s sleeping in your fridge?  
        What memories or rhythms do your ingredients hold?
        This is not a form. It’s a space to listen, and respond.
      </p>

      <p>
        (Tweet your fragment by editing the text below)
      </p>

      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-medium px-5 py-2 rounded-md transition no-underline bg-pink-600 hover:bg-pink-700 text-white cursor-pointer"
      >
        Share your own fragment on X
      </a>
    </section>
  )
}