'use client'

import { useState } from 'react'

const YourSyntaxShare = () => {
  const [text, setText] = useState('')

  const hashtags = '#poieticos #refrigeratorsyntax #fragment'
  const shareText = encodeURIComponent(`${text}\n\n${hashtags}`)
  const tweetUrl = `https://twitter.com/intent/tweet?text=${shareText}`

  return (
      <section className="my-16">
        <h3 className="text-lg font-semibold mb-2">Your Refrigerator Syntax</h3>
        <p className="text-sm text-gray-400 mb-4">
          Write your own fragment: what’s sleeping in your fridge?  
          What memories or rhythms do your ingredients hold?
          This is not a form. It’s a space to listen, and respond.
        </p>

        <textarea
          placeholder="e.g. 'There was one last eggplant, waiting like a quiet punctuation mark...'"
          className="w-full min-h-[180px] bg-neutral-900 text-white placeholder-gray-500 border border-gray-700 rounded-md p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition mb-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <a
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block font-medium px-5 py-2 rounded-md transition no-underline ${
            text.trim()
              ? 'bg-pink-600 hover:bg-pink-700 text-white cursor-pointer'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed pointer-events-none'
          }`}
        >
          Share this fragment on X
        </a>
      </section>
  )
}

export default YourSyntaxShare