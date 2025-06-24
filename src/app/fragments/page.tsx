import { FragmentCard } from '@/components/FragmentCard'
import { getAllFragments } from '@/lib/fragments'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default async function FragmentsPage() {
  const fragments = getAllFragments()

  return (
    <>
      <MetaTag {...meta.fragments} />

      <h1>Fragments</h1>

      <p>
        Fragments are quiet signals — poetic traces, dialogic sketches, and evolving syntax in
        motion. Each fragment holds a thread toward co-poiesis.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {fragments.map((fragment) => (
          <FragmentCard key={fragment.slug} {...fragment} showImage={true} />
        ))}
      </div>
    </>
  )
}