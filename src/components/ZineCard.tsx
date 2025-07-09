import type { ZineMeta } from '@/lib/zines/types'
import Link from 'next/link'

export function ZineCard({ title, date, slug, excerpt, tags = [], image, image_alt, image_caption }: ZineMeta) {
  return (
    <div className="article-card">
      {image && (
        <Link href={`/zines/${slug}`} className="block mb-4">
          <img
            src={`/images/zines/${slug}/cover.jpg`}
            alt={image_alt || ''}
            className="article-card-image"
            loading="lazy"
          />
        </Link>
      )}

      <Link href={`/zines/${slug}`} className="no-underline hover:underline text-gray-300 hover:text-white">
        <h2 className="article-card-title">{title}</h2>
      </Link>

      {date && (
        <p className="article-card-date">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      )}

      {excerpt && <p className="article-card-excerpt">{excerpt}</p>}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/zines/tag/${tag}`}
              className="article-card-tag"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}