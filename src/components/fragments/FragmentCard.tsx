import type { FragmentMeta } from '@/lib/fragments'
import Link from 'next/link'

type FragmentCardProps = FragmentMeta & {
  showImage?: boolean
}

export function FragmentCard({
  title,
  date,
  slug,
  tags = [],
  excerpt,
  image,
  showImage = true,
}: FragmentCardProps) {
  return (
    <div className="article-card">
      {showImage && image && (
        <Link href={`/fragments/${slug}`} className="block mb-4">
          <img
            src={`/images/fragments/${slug}/001.jpg`}
            alt="Fragment image"
            className="article-card-image"
            loading="lazy"
          />
        </Link>
      )}

      <Link
        href={`/fragments/${slug}`}
        className="no-underline hover:underline text-gray-300 hover:text-white"
      >
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
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/fragments/tag/${tag}`}
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