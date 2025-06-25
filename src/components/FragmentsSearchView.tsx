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

export default function FragmentsSearchView({ fragments }: { fragments: Fragment[] }) {
  const [filtered, setFiltered] = useState(fragments)

  return (
    <>
      <SearchBar fragments={fragments} onFilter={setFiltered} />
      <div className="card-grid">
        {filtered.map((fragment) => (
          <FragmentCard key={fragment.slug} {...fragment} showImage />
        ))}
      </div>
    </>
  )
}