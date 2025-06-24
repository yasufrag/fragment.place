import { FragmentCard } from '@/components/FragmentCard'
import { getAllFragments } from '@/lib/fragments'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function FragmentsPage() {
  const fragments = getAllFragments()

  return (
    <div className="article-container">
      <MetaTag {...meta.fragments} />

      <h1 className="article-title">Fragments</h1>
      <p>
        Fragments are quiet signals — poetic traces, dialogic sketches, and evolving syntax in
        motion. Each fragment holds a thread toward co-poiesis.
      </p>

      <div className="card-grid">
        {fragments.map((fragment) => (
            <FragmentCard key={fragment.slug} {...fragment} showImage />
        ))}
      </div>
    </div>
  )
}