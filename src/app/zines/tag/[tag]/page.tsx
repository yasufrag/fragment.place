import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllZines } from '@/lib/zines'
import { ZineCard } from '@/components/ZineCard'
import { createPageMetadata } from '@/lib/metadata'

export async function generateStaticParams() {
  const zines = getAllZines()
  const tags = Array.from(new Set(zines.flatMap((zine) => zine.tags || [])))
  return tags.map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const decodedTag = decodeURIComponent(params.tag)
  return createPageMetadata({
    title: `Tag: #${decodedTag}`,
    description: `ZINEs tagged with #${decodedTag} — reflective traces within fragment.place.`,
    path: `/zines/tag/${params.tag}`,
    image: '/og.png',
  })
}

export default function ZineTagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag)
  const zines = getAllZines()
  const tagged = zines.filter((z) => z.tags?.includes(tag))

  if (!tagged.length) notFound()

  return (
    <div className="article-container">
      <h1 className="article-title">Tag: #{tag}</h1>
      <p className="mb-10">
        Showing all ZINEs tagged with <strong>#{tag}</strong>.
      </p>

      <div className="card-grid">
        {tagged.map((zine) => (
          <ZineCard key={zine.slug} {...zine} />
        ))}
      </div>
    </div>
  )
}