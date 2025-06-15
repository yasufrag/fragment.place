import Link from 'next/link'
import Image from 'next/image'

type FragmentProps = {
  title: string
  date?: string
  tags?: string[]
  excerpt?: string
  slug: string
  image?: {
    src: string
    alt?: string
    caption?: string
  }
}

export const FragmentCard: React.FC<FragmentProps> = ({
  title,
  date,
  tags,
  excerpt,
  slug,
  image,
}) => {
  return (
    <Link href={`/fragments/${slug}`} className="group block">
      <div className="rounded-2xl border border-gray-700 bg-neutral-900 p-6 transition-colors duration-300 hover:bg-neutral-800">
        
        {image?.src && (
          <div className="mb-4">
            <Image
              src={image.src}
              alt={image.alt || ''}
              width={800}
              height={450}
              className="rounded-xl object-cover w-full h-auto"
            />
            {image.caption && (
              <p className="text-xs text-gray-400 mt-2 italic">
                {image.caption}
              </p>
            )}
          </div>
        )}

        <h2 className="text-xl font-semibold text-white mb-2 underline-offset-[6px] decoration-[1.5px] group-hover:underline">
          {title}
        </h2>

        {date && (
          <p className="text-sm text-gray-400 mb-1">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        )}

        {excerpt && (
          <p className="text-base text-gray-300 mb-3">{excerpt}</p>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}