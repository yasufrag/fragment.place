import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import Link from 'next/link'
import Image from 'next/image'

export default function ZinePage() {
  return (
    <>
      <MetaTag {...meta.zine} />

      <main className="max-w-3xl mx-auto px-6 py-12 text-white">
        <h1 className="text-3xl font-bold mb-4">Poietic ZINE</h1>
        <p className="mb-4">
          The <strong>Poietic ZINE</strong> is a compositional space — a place where fragments
          converge, diverge, and quietly form new layers of meaning. It is not a magazine in the
          traditional sense, but a field of ongoing resonance.
        </p>
        <p className="mb-4">
          Each entry traces moments of poetic structuring: co-designed syntaxes, unfinished thoughts,
          recursive mappings, or quiet moments from lived practice. Some are reflective, others
          propositional — all are invitations.
        </p>
        <p className="mb-10">
          This ZINE is shaped slowly. It is part journal, part topology, part time capsule. As the{' '}
          <strong>PoieticBot</strong> and <strong>Fragments</strong> evolve, so too will the ZINE —
          folding past signals into future textures.
        </p>

        <section className="grid gap-6 sm:grid-cols-2">
          {/* ZINE VOL.1 */}
          <Link href="/zine/vol1" className="group block">
            <div className="rounded-2xl border border-gray-700 bg-neutral-900 p-4 hover:bg-neutral-800 transition">
              <Image
                src="/images/zine/vol1-cover.png"
                alt="PoieticZINE vol.1 cover"
                width={600}
                height={340}
                className="rounded-xl mb-4 object-cover w-full h-auto"
              />
              <h2 className="text-lg font-semibold group-hover:underline mb-1">PoieticZINE vol.1</h2>
              <p className="text-sm text-gray-400">
                Fragments on departure, syntax, and seasonal transition.  
                A quiet volume of lived language.
              </p>
            </div>
          </Link>

          {/* 未来のZINEカードもこの形式で追加可能 */}
          {/* <Link href="/zine/vol2">...</Link> */}
        </section>
      </main>
    </>
  )
}