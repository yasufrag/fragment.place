import Link from 'next/link'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import { getAllFragments } from '@/lib/fragments'

export default async function Home() {
  const fragments = getAllFragments()
  const randomFragment = fragments[Math.floor(Math.random() * fragments.length)]

  return (
    <>
      <MetaTag {...meta.home} />

      <h1>co.poiesis</h1>
      <p>
        a frame for poetic fragments and living syntax
      </p>

      <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
        A Present Fragment
      </p>

      <p className="mb-14 min-h-[5rem]">
        <Link
          href={`/fragments/${randomFragment.slug}`}
          className="no-underline hover:underline text-gray-300 hover:text-white"
        >
          <strong>→ {randomFragment.title}</strong>
        </Link>
        <br />
        <span className="text-sm text-gray-500">{randomFragment.excerpt}</span>
      </p>

      <p>
        <Link href="/fragments" className="text-gray-300 hover:text-white hover:underline">
          → Fragments：日々の構文
        </Link>
      </p>

      <p>
        <Link href="/zines" className="text-gray-300 hover:text-white hover:underline">
          → ZINE：全てのZINEをみる
        </Link>
      </p>

      <p>
        <Link href="/bot" className="text-gray-300 hover:text-white hover:underline">
          → PoieticBot：静かな対話のパートナー
        </Link>{' '}
        <a
          href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-poieticbot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-300 hover:underline"
        >
          (GPTで開く)
        </a>
      </p>

      <p className="mb-10 text-sm text-gray-400 italic">
        As of June 2025, PoieticBot is now public.  
        ZINEs are forming, and Fragments continue to arrive.
      </p>

      <p className="mt-20 text-sm text-gray-400 italic">
        This site is an ongoing trace of poetic life.
        <br />
        Syntax is not stored—just passed.
      </p>
    </>
  )
}