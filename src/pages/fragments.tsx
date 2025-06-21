import { GetStaticProps } from 'next'
import { getAllFragments, FragmentMeta } from '@/lib/fragments'
import { FragmentCard } from '@/components/FragmentCard'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

type Props = {
  fragments: FragmentMeta[]
}

export default function FragmentsPage({ fragments }: Props) {
  return (
    <>
      <MetaTag {...meta.fragments} />
      <h1>Fragments</h1>
      <div className="poetic-flow">
        <p>
          Fragments are quiet signals — poetic traces, dialogic sketches, and evolving syntax in
          motion. Each fragment holds a thread toward co-poiesis.
        </p>
        <div className="grid gap-6 mt-10">
          {fragments.map((fragment) => (
            <FragmentCard
              key={fragment.slug}
              title={fragment.title}
              date={fragment.date}
              tags={fragment.tags}
              excerpt={fragment.excerpt}
              slug={fragment.slug}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fragments = getAllFragments()
  return {
    props: {
      fragments,
    },
  }
}