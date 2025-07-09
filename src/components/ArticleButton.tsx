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
    <div className="pt-10 mt-16 flex flex-col gap-4">
      <div className="flex gap-6 text-neutral-500">
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

      <div className="flex flex-wrap items-center gap-5">
        <a
          href="https://www.buymeacoffee.com/yasufrag"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[10rem] bg-yellow-500 text-stone-800 px-4 py-2 rounded duration-200 hover:bg-yellow-600 hover:text-stone-800"
        >
          Support practices
        </a>
        <a
          href="https://ofuse.me/yasufrag"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[10rem] bg-blue-500 text-white px-4 py-2 rounded duration-200 hover:bg-blue-600"
        >
          OFUSEで支援する
        </a>
        <a
          href="https://kampa.me/t/vxk"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[10rem] bg-orange-500 text-white px-4 py-2 rounded duration-200 hover:bg-orange-600"
        >
          Kampa!で支援する
        </a>
      </div>
    </div>
  )
}