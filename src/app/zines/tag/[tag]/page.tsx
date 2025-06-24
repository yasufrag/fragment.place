import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllZines } from '@/lib/zines'
import { ZineCard } from '@/components/ZineCard'
import { MetaTag } from '@/components/MetaTag'

export async function generateStaticParams() {
  const zines = getAllZines()
  const tags = Array.from(new Set(zines.flatMap((zine) => zine.tags || [])))
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }))
}

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const decodedTag = decodeURIComponent(params.tag)
  const title = `Tag: #${decodedTag} | ZINE`
  const description = `ZINEs tagged with #${decodedTag} in Poietic Publishing.`

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: 'summary', title, description },
  }
}

export default function ZineTagPage({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag)
  const allZines = getAllZines()
  const tagged = allZines.filter((z) => z.tags?.includes(decodedTag))

  if (!tagged.length) notFound()

  return (
    <>
      <MetaTag
        title={`Tag: #${decodedTag} | ZINE`}
        description={`ZINEs tagged with #${decodedTag} in Poietic Publishing.`}
        url={`/zines/tag/${params.tag}`}
        image="/og.png"
        robots="index,follow"
      />

      <h1>Tag: #{decodedTag}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {tagged.map((zine) => (
          <ZineCard key={zine.slug} {...zine} />
        ))}
      </div>
    </>
  )
}