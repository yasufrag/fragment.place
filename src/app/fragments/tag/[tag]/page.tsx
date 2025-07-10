import { notFound } from 'next/navigation'
import { getAllFragments } from '@/lib/fragments'
import { FragmentCard } from '@/components/FragmentCard'
import { createPageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: { tag: string } }
): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag)
  const fragments = getAllFragments()
  const tagged = fragments.filter((f) => f.tags?.includes(tag))

  if (!tagged.length) {
    return {
      title: `Tag Not Found | Fragments`,
      description: `No fragments found with tag #${tag}.`,
      robots: 'noindex',
    }
  }

  return createPageMetadata({
    title: `Tag: #${tag}`,
    description: `Fragments tagged with #${tag} — reflective traces within fragment.place.`,
    path: `/fragments/tag/${encodeURIComponent(tag)}`,
  })
}

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