'use client'

import { useState } from 'react'
import { ZineCard } from '@/components/ZineCard'
import type { ZineMeta } from '@/lib/zines/types'

interface Props {
  zines: ZineMeta[]
  perPage?: number
}

export default function ZinesListView({ zines, perPage = 6 }: Props) {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = zines.filter((zine) => {
    const q = query.toLowerCase()
    return (
      zine.title.toLowerCase().includes(q) ||
      zine.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      zine.excerpt.toLowerCase().includes(q)
    )
  })

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage)

  const handleSearch = (q: string) => {
    setQuery(q)
    setCurrentPage(1)
  }

  const goToPage = (page: number) => setCurrentPage(page)

  return (
    <div>
      <input
        type="text"
        placeholder="Search zines..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded bg-black text-white border-gray-700 focus:outline-none"
      />

      <div className="card-grid">
        {paginated.map((zine) => (
          <ZineCard
            key={zine.slug}
            title={zine.title}
            date={zine.date}
            slug={zine.slug}
            excerpt={zine.excerpt}
            tags={zine.tags}
            image={zine.image}
            image_alt={zine.image_alt}
            image_caption={zine.image_caption}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? 'bg-white text-black' : 'bg-black text-white border-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}