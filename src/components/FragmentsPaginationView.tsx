"use client"

import { useState } from "react"
import { FragmentCard } from "@/components/FragmentCard"
import SearchBar from "@/components/SearchBar"

interface Fragment {
  title: string
  excerpt: string
  tags: string[]
  slug: string
  date: string
}

const ITEMS_PER_PAGE = 12

export default function FragmentsPaginationView({ fragments }: { fragments: Fragment[] }) {
  const [filtered, setFiltered] = useState(fragments)
  const [page, setPage] = useState(1)

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pageCount) return
    setPage(newPage)
  }

  return (
    <>
      <SearchBar
        fragments={fragments}
        onFilter={(results) => {
          setFiltered(results)
          setPage(1)
        }}
      />
      <div className="card-grid">
        {paginated.map((fragment) => (
          <FragmentCard key={fragment.slug} {...fragment} showImage />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 border rounded disabled:opacity-30"
          >
            ← Prev
          </button>
          <span className="text-sm pt-1">
            Page {page} / {pageCount}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === pageCount}
            className="px-3 py-1 border rounded disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      )}
    </>
  )
}
