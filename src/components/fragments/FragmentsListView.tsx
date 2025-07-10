'use client'

import { useState } from 'react'
import { FragmentCard } from '@/components/fragments/FragmentCard'

interface Fragment {
  title: string
  date: string
  slug: string
  tags: string[]
  excerpt: string
  image: boolean
  image_alt?: string
  image_caption?: string
}

interface Props {
  fragments: Fragment[]
  perPage?: number
}

export default function FragmentsListView({ fragments, perPage = 6 }: Props) {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = fragments.filter((frag) => {
    const q = query.toLowerCase()
    return (
      frag.title.toLowerCase().includes(q) ||
      frag.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      frag.excerpt.toLowerCase().includes(q)
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
        placeholder="Search fragments..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded bg-black text-white border-gray-700 focus:outline-none"
      />

      <div className="card-grid">
        {paginated.map((frag) => (
          <FragmentCard
            key={frag.slug}
            title={frag.title}
            date={frag.date}
            slug={frag.slug}
            tags={frag.tags}
            excerpt={frag.excerpt}
            image={frag.image}
            image_alt={frag.image_alt}
            image_caption={frag.image_caption}
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