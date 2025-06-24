import { getAllFragments } from '@/lib/fragments'
import { FragmentCard } from '@/components/FragmentCard'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const fragments = getAllFragments()
  const tags = Array.from(
    new Set(fragments.flatMap((frag) => frag.tags || []))
  )
  return tags.map((tag) => ({ tag }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const all = getAllFragments()
  const tagged = all.filter((frag) => frag.tags?.includes(params.tag))

  if (tagged.length === 0) notFound()

  return (
    <>
      <h1>#{params.tag}</h1>

      <p>
        Showing all fragments tagged with <strong>#{params.tag}</strong>.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {tagged.map((fragment) => (
          <FragmentCard
            key={fragment.slug}
            title={fragment.title}
            date={fragment.date}
            tags={fragment.tags}
            excerpt={fragment.excerpt}
            slug={fragment.slug}
            image={fragment.image || undefined}
          />
        ))}
      </div>
    </>
  )
}