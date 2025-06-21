import type { FragmentMeta } from '@/lib/fragments'
import Link from 'next/link'

type FragmentCardProps = FragmentMeta & {
  showImage?: boolean
}

export function FragmentCard({
  title,
  date,
  slug,
  excerpt,
  tags,
  image,
  showImage = true,
}: FragmentCardProps) {
  return (
    <article className="rounded-2xl border border-gray-700 bg-neutral-900 p-4 transition">
      {showImage && image?.src && (
        <Link href={`/fragments/${slug}`} className="block mb-4">
          <img
            src={image.src}
            alt={image.alt || ''}
            className="rounded-xl object-cover w-full h-[280px]"
            loading="lazy"
          />
        </Link>
      )}

      <Link href={`/fragments/${slug}`}>
        <h2 className="text-lg font-semibold text-white mb-1">{title}</h2>
      </Link>

      <p className="text-sm text-gray-400 mb-1">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>

      {excerpt && <p className="text-sm text-gray-300">{excerpt}</p>}

      {tags && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/fragments/tag/${tag}`}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full hover:bg-gray-600  no-underline"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}