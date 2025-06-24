import { notFound } from 'next/navigation'
import { getAllFragments } from '@/lib/fragments'
import { FragmentCard } from '@/components/FragmentCard'
import { MetaTag } from '@/components/MetaTag'

export async function generateStaticParams() {
  const fragments = getAllFragments()
  const tags = Array.from(new Set(fragments.flatMap((f) => f.tags || [])))
  return tags.map((tag) => ({ tag }))
}

export default function FragmentTagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag)
  const fragments = getAllFragments()
  const tagged = fragments.filter((f) => f.tags?.includes(tag))

  if (!tagged.length) notFound()

  return (
    <div className="article-container">
      <MetaTag
        title={`Tag: #${tag} | Fragments`}
        description={`Fragments tagged with #${tag} in Poietic Publishing.`}
        url={`/fragments/tag/${params.tag}`}
        image="/og.png"
        robots="index,follow"
      />

      <h1 className="article-title">Tag: #{tag}</h1>
      <p>
        Showing all fragments tagged with <strong>#{tag}</strong>.
      </p>

      <div className="card-grid">
        {tagged.map((fragment) => (
          <FragmentCard key={fragment.slug} {...fragment} />
        ))}
      </div>
    </div>
  )
}