import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import Link from 'next/link'
import Image from 'next/image'

export default function ZinePage() {
  return (
    <>
      <MetaTag {...meta.zine} />

      <main className="container prose dark:prose-invert">
        <h1>Poietic ZINE</h1>
        <p>
          The <strong>Poietic ZINE</strong> is a compositional space — a place where fragments
          converge, diverge, and quietly form new layers of meaning. It is not a magazine in the
          traditional sense, but a field of ongoing resonance.
        </p>
        <p>
          Each entry traces moments of poetic structuring: co-designed syntaxes, unfinished thoughts,
          recursive mappings, or quiet moments from lived practice. Some are reflective, others
          propositional — all are invitations.
        </p>
        <p>
          This ZINE is shaped slowly. It is part journal, part topology, part time capsule. As the{' '}
          <strong>PoieticBot</strong> and <strong>Fragments</strong> evolve, so too will the ZINE —
          folding past signals into future textures.
        </p>

        <section className="not-prose grid gap-6 sm:grid-cols-2 mt-12">
          {/* ZINE VOL.1 */}
          <Link href="/zine/vol1" className="group block">
            <div className="rounded-2xl border border-gray-700 bg-neutral-900 p-4 hover:bg-neutral-800 transition">
              <Image
                src="/images/zine/vol1-cover.jpg"
                alt="PoieticZINE vol.1 cover"
                width={600}
                height={340}
                className="rounded-xl mb-4 object-cover w-full h-[280px]"
              />
              <h2 className="text-lg font-semibold text-white group-hover:underline mb-1">PoieticZINE vol.1</h2>
              <p className="text-sm text-gray-400">
                Fragments on departure, syntax, and seasonal transition.  
                A quiet volume of lived language.
              </p>
            </div>
          </Link>

          {/* Refrigerator Syntax ZINE */}
          <Link href="/zine/refrigerator-syntax" className="group block">
            <div className="rounded-2xl border border-gray-700 bg-neutral-900 p-4 hover:bg-neutral-800 transition">
              <Image
                src="/images/zine/refrigerator-syntax-cover.jpg"
                alt="Refrigerator Syntax ZINE cover"
                width={600}
                height={340}
                className="rounded-xl mb-4 object-cover w-full h-[280px]"
              />
              <h2 className="text-lg font-semibold text-white group-hover:underline mb-1">Refrigerator Syntax ZINE</h2>
              <p className="text-sm text-gray-400">
                A quiet exploration of food, memory, and poietic living — written from the threshold of solo life.
              </p>
            </div>
          </Link>
        </section>
      </main>
    </>
  )
}