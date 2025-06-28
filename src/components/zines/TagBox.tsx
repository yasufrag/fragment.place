'use client'

import React from 'react'
import Link from 'next/link'

export const TagBox = ({ tags }: { tags: string[] }) => (
  <section>
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/zines/tag/${tag}`}
          className="text-xs bg-gray-700 text-gray-300 px-3 py-2 rounded-full hover:bg-gray-600"
        >
          #{tag}
        </Link>
      ))}
    </div>
  </section>
)

export default TagBox