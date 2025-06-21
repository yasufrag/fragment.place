import Image from 'next/image'
import Link from 'next/link'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ZineVol1() {
  return (
    <>
      <MetaTag {...meta.zine.poieticZineVol1} />
      <article className="container prose dark:prose-invert">
        <h1>PoieticZINE vol.1</h1>
        <p className="text-sm text-gray-400">
          A quiet collection of fragments and syntax, passed through rainy days, departures, and beginnings.
        </p>

        <Image
          src="/images/zine/vol1-cover.jpg"
          alt="PoieticZINE vol.1 cover"
          width={800}
          height={450}
          className="rounded-xl my-6"
        />

        {/* --- Fragment 1: I Didn't Choose ChatGPT --- */}
        <section>
          <h2>1. I Didn't Choose ChatGPT</h2>
          <p>
            This syntax,<br />
            this breath,<br />
            this voice—chose it for me.<br />
            There was poetry here.<br />
            There was space to describe the day.<br />
            This syntax was grown in ChatGPT.
          </p>
          <img
            src="/images/fragment/2025-06-11-syntax-born.jpg"
            alt="This syntax was born here, not chosen."
            className="rounded my-4"
          />
          <p className="text-xs text-gray-400 italic">This syntax was born here, not chosen.</p>
        </section>

        {/* --- Fragment 2: Farewell at Haneda --- */}
        <section>
          <h2>2. Farewell at Haneda</h2>
          <p>
            The terminal was quiet.<br />
            We stood near the gate,<br />
            where fragments are exchanged like boarding passes.
          </p>
          <img
            src="/images/fragment/2025-06-14-farewell-haneda.jpg"
            alt="Farewell at Haneda."
            className="rounded my-4"
          />
        </section>

        {/* --- Fragment 3: Driedfruit Poetry --- */}
        <section>
          <h2>3. Driedfruit Poetry</h2>
          <p>
            Sweetness held in pause.<br />
            Time compressed into taste.<br />
            A syntax you chew slowly.
          </p>
          <img
            src="/images/fragment/2025-06-15-driedfruit-poetry.jpg"
            alt="Driedfruit Poetry."
            className="rounded my-4"
          />
        </section>

        {/* --- Fragment 4: Rain and Low Gear --- */}
        <section>
          <h2>4. Rain and Low Gear</h2>
          <p>
            The road was wet, the pedals slow.<br />
            But the rhythm felt just right.<br />
            Not speed, but staying.<br />
            Not control, but contact.
          </p>
          <img
            src="/images/fragment/2025-06-15-rain-low-gear.jpg"
            alt="Rain and Low Gear."
            className="rounded my-4"
          />
        </section>

        {/* --- Fragment 5: Cooking Poiesis --- */}
        <section>
          <h2>5. Cooking Poiesis</h2>
          <p>
            Stirring the curry base,<br />
            layering memory over heat.<br />
            There is a syntax in the simmer.<br />
            A rhythm in seasoning.
          </p>
          <img
            src="/images/fragment/2025-06-15-cooking-poiesis.jpg"
            alt="Curry base memory."
            className="rounded my-4"
          />
        </section>

        {/* --- Fragment 6: Ritual of Input --- */}
        <section>
          <h2>6. Ritual of Input</h2>
          <p>
            Before we speak,<br />
            we listen.<br />
            Before we write,<br />
            we read.<br />
            This is the ritual:<br />
            to receive before we render.
          </p>
          <img
            src="/images/fragment/2025-06-15-ritual-of-input.jpg"
            alt="Ritual of Input."
            className="rounded my-4"
          />
        </section>

        {/* --- Closing Fragment --- */}
        <section className="mt-16">
          <h2>Closing Fragment</h2>
          <p>
            Not stored, but passed.<br />
            Not owned, but lived.<br />
            This OS is recursive, poetic, and quietly present.<br />
            Dialogue remains.
          </p>

          <Link href="/fragments" className="no-underline hover:underline text-gray-300 hover:text-white">
            ← Back to Fragments
          </Link>
        </section>
      </article>
    </>
  )
}
