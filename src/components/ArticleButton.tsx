'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function FragmentFooter() {
  const pathname = usePathname()
  const fullUrl = `https://poietic.site${pathname}`
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pt-6 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500">
      <div className="flex gap-6 items-center">
        <button onClick={handleCopy} className="hover:underline">
          {copied ? 'Link copied!' : 'Copy link'}
        </button>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Share on X
        </a>
      </div>

      <div>
        <a
          href="https://www.buymeacoffee.com/poieticid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-stone-800 px-5 py-2 rounded duration-200 hover:bg-yellow-600 hover:text-stone-800"
        >
          Support poetic writing
        </a>
      </div>
    </div>
  )
}