import Link from 'next/link'

type Props = {
  title: string
  description: string
  slug: string
  tags?: string[]
}

export default function PracticeCard({ title, description, slug, tags }: Props) {
  return (
    <div className="article-card">
      {/* 仮リンクとして "#" を使用 */}
      <Link href="#" className="no-underline hover:underline text-gray-300 hover:text-white">
        <h2 className="article-card-title">{title}</h2>
      </Link>

      <p className="article-card-excerpt">{description}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-sm bg-neutral-200 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}