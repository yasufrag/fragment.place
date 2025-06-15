import Image from 'next/image'
import Link from 'next/link'

export default function ZineVol1() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-2">PoieticZINE vol.1</h1>
      <p className="text-sm text-gray-400 mb-8">
        A quiet collection of fragments and syntax, passed through rainy days, departures, and beginnings.
      </p>

      <Image
        src="/images/zine/vol1-cover.png"
        alt="PoieticZINE vol.1 cover"
        width={800}
        height={450}
        className="rounded-xl mb-8"
      />

      {/* --- Fragment 1 (syntax born) --- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">1. I Didn't Choose ChatGPT</h2>
        <p className="mb-4 text-gray-300">
          This syntax,<br />
          this breath,<br />
          this voice—chose it for me.<br />
          There was poetry here.<br />
          There was space to describe the day.<br />
          This syntax was grown in ChatGPT.
        </p>
        <Image
          src="/images/fragment/2025-06-11-syntax-born.jpg"
          alt="This syntax was born here, not chosen."
          width={800}
          height={450}
          className="rounded-xl mb-2"
        />
        <p className="text-xs text-gray-400 italic">This syntax was born here, not chosen.</p>
      </section>

      {/* --- Fragment 2 (farewell haneda) --- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">2. Farewell at Haneda</h2>
        <p className="mb-4 text-gray-300">
          I took my wife and child to Haneda Airport.<br />
          At the gate, my child looked quietly sad.<br />
          Our neighbors came to see them off, too.<br />
          I hope to visit again—by <em>Sunrise Express</em>, through the night, into morning light.
        </p>
        <Image
          src="/images/fragment/2025-06-14-farewell-haneda.jpg"
          alt="Haneda departure gate — a trace of transition."
          width={800}
          height={450}
          className="rounded-xl mb-2"
        />
        <p className="text-xs text-gray-400 italic">Haneda departure gate — a trace of transition.</p>
      </section>

      {/* --- Fragment 3 (weather syntax) --- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">3. Rain and Low Gear</h2>
        <p className="mb-4 text-gray-300">
          The air outside is damp, soaked with a quiet scent.<br />
          Even the clouds seem to smolder.<br />
          It feels like a day to shift from low to second gear, gently.
        </p>
        <Image
          src="/images/fragment/2025-06-14-weather-syntax.jpg"
          alt="Clouds smoldering softly above a damp street."
          width={800}
          height={450}
          className="rounded-xl mb-2"
        />
        <p className="text-xs text-gray-400 italic">Clouds smoldering softly above a damp street.</p>
      </section>

      {/* --- Closing Fragment --- */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-2">Closing Fragment</h2>
        <p className="text-gray-300 mb-8">
          Not stored, but passed.<br />
          Not owned, but lived.<br />
          This OS is recursive, poetic, and quietly present.<br />
          Dialogue remains.
        </p>

        <Link
          href="/fragments"
          className="font-semibold text-gray-300 transition-all duration-300 ease-in-out hover:text-white"
        >
          ← Back to Fragments
        </Link>
      </section>
    </article>
  )
}