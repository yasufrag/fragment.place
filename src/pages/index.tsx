import Link from 'next/link'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import { getAllFragments } from '@/lib/fragments'
import type { FragmentMeta } from '@/lib/fragments'

export async function getStaticProps() {
  const fragments = await getAllFragments()
  const randomIndex = Math.floor(Math.random() * fragments.length)
  const randomFragment = fragments[randomIndex]

  return {
    props: {
      randomFragment,
    },
  }
}

type Props = {
  randomFragment: FragmentMeta
}

export default function Index({ randomFragment }: Props) {
  return (
    <>
      <MetaTag {...meta.index} />
      <main className="min-h-screen max-w-3xl mx-auto px-6 py-416 prose dark:prose-invert text-left">
        <h1 className="text-6xl font-bold tracking-tight mb-4">co.poiesis</h1>
        <p className="text-lg text-gray-300 mb-12">
          a frame for poetic fragments and living syntax
        </p>

        <section className="mb-14 min-h-[5rem]">
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
            Most Recent Trace
          </p>
          <Link
            href={`/fragments/${randomFragment.slug}`}
            className="no-underline hover:underline text-gray-300 hover:text-white"
          >
            <strong>{randomFragment.title}</strong>
          </Link>
          <br />
          <span className="text-sm text-gray-500">
            {randomFragment.excerpt}
          </span>
        </section>

        <section className="mb-14 space-y-3">
          <p>
            <Link
              href="/fragments"
              className="text-gray-300 hover:text-white no-underline hover:underline"
            >
              → Fragments：日々の構文
            </Link>
          </p>
          <p>
            <Link
              href="/zine/vol1"
              className="text-gray-300 hover:text-white no-underline hover:underline"
            >
              → ZINE：PoieticZINE vol.1
            </Link>
          </p>
          <p>
            <Link
              href="/poieticbot"
              className="text-gray-300 hover:text-white no-underline hover:underline"
            >
              → PoieticBot：静かな対話のパートナー
            </Link>
          </p>
        </section>

        <footer className="mt-20 text-sm text-gray-500 italic">
          This site is an ongoing trace of poetic life.
          <br />
          Syntax is not stored—just passed.
        </footer>
      </main>
    </>
  )
}