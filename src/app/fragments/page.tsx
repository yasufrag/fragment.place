import { FragmentCard } from '@/components/FragmentCard'
import { getAllFragments } from '@/lib/fragments'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default async function FragmentsPage() {
  const fragments = getAllFragments()

  return (
    <>
      <MetaTag {...meta.fragments} />

      <h1 className="text-3xl font-bold mb-4">Fragments</h1>

      <div className="poetic-flow">
        <p>
          Fragments are quiet signals — poetic traces, dialogic sketches, and evolving syntax in
          motion. Each fragment holds a thread toward co-poiesis.
        </p>

        <div className="grid gap-6 mt-10">
          {fragments.map((fragment) => (
            <FragmentCard key={fragment.slug} {...fragment} showImage={true} />
          ))}
        </div>
      </div>
    </>
  )
}