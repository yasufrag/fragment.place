'use client'

import React from 'react'
import Link from 'next/link'

export const TagBox = ({ tags }: { tags: string[] }) => (
  <div className="mt-12 border-t border-neutral-700 pt-6 text-sm text-muted-foreground">
    <h4>Tags</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/zines/tag/${tag}`}
          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full hover:bg-gray-600"
        >
          #{tag}
        </Link>
      ))}
    </div>
  </div>
)

export default TagBox