import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllZines } from '@/lib/zines'
import { ZineCard } from '@/components/ZineCard'
import { MetaTag } from '@/components/MetaTag'

export async function generateStaticParams() {
  const zines = getAllZines()
  const tags = Array.from(new Set(zines.flatMap((zine) => zine.tags || [])))
  return tags.map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const decodedTag = decodeURIComponent(params.tag)
  const title = `Tag: #${decodedTag} | ZINE`
  const description = `ZINEs tagged with #${decodedTag} — reflective traces within fragment.place.`

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: 'summary', title, description },
  }
}

export default function ZineTagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag)
  const zines = getAllZines()
  const tagged = zines.filter((z) => z.tags?.includes(tag))

  if (!tagged.length) notFound()

  return (
    <div className="article-container">
      <MetaTag
        title={`Tag: #${tag} | ZINE`}
        description={`ZINEs tagged with #${tag} — reflective traces within fragment.place.`}
        url={`/zines/tag/${params.tag}`}
        image="/og.png"
        robots="index,follow"
      />

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