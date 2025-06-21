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
          The <strong>Poietic ZINE</strong> is not a magazine — it is a syntax in motion.  
          A compositional field where fragments, reflections, and gentle diagrams gather.
        </p>
        <p>
          Each volume unfolds quietly: not as publication, but as trace.  
          Not as content, but as dialogue.  
          A ZINE is a map of poetic configuration — structured, yet always breathing.
        </p>
        <p>
          Some begin with meals. Others, with silence.  
          All of them: invitations to co-presence.
        </p>

        <section className="not-prose grid gap-6 sm:grid-cols-2 mt-12">
          {/* ZINE VOL.1 */}
          <Link href="/zine/vol1" className="group block">
            <div className="rounded-2xl border border-gray-700 bg-neutral-900 p-4">
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
            <div className="rounded-2xl border border-gray-700 bg-neutral-900 p-4">
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