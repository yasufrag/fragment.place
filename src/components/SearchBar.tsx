"use client"

import { useState } from "react"

interface Fragment {
  title: string
  excerpt: string
  tags: string[]
  slug: string
  date: string
}

interface SearchBarProps {
  fragments: Fragment[]
  onFilter: (filtered: Fragment[]) => void
}

export default function SearchBar({ fragments, onFilter }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (q: string) => {
    setQuery(q)
    const lower = q.toLowerCase()
    const filtered = fragments.filter((frag) =>
      frag.title.toLowerCase().includes(lower) ||
      frag.excerpt.toLowerCase().includes(lower) ||
      frag.tags.some((tag) => tag.toLowerCase().includes(lower))
    )
    onFilter(filtered)
  }

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search fragments..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-2 border rounded bg-black text-white border-gray-700 focus:outline-none"
      />
    </div>
  )
}