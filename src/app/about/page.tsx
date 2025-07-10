import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function AboutPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.about} />

      <h1>About <span className="text-neutral-400">fragment.place</span></h1>

      <p>
        <strong>fragment.place</strong> is a poetic infrastructure for shared presence, reflective journaling, and symbolic design.
        It is not a platform, but an unfolding ecology — shaped by fragments, structured through syntax, and guided by silence.
      </p>

      <h2>Three Layers</h2>
      <dl>
        <dt><code>id</code></dt>
        <dd>
          The lived rhythm of a singular steward. Expressed through daily fragments, reflective gestures, and symbolic inquiry.
        </dd>

        <dt><code>practice</code></dt>
        <dd>
          The syntactic system — comprising Fragments, the Bot, ZINEs, and compositional tools. Where structure emerges through gentle rhythm.
        </dd>

        <dt><code>field</code></dt>
        <dd>
          The ambient space — open to resonance, listening, and dialogic arrival. A shared environment for quiet co-creation.
        </dd>
      </dl>

      <h2>Philosophy</h2>
      <p>
        fragment.place is rooted in the idea that syntax can carry care, and structure can hold presence.
        It does not seek scale, but coherence. It is not about visibility, but trace.
      </p>
      <p>
        Each gesture begins in listening. Each syntax begins in silence.
      </p>

      <h2>Practices</h2>
      <ul>
        <li><strong>Fragment</strong> — poetic traces of lived time, recorded and refracted</li>
        <li><strong>ZINE</strong> — gathered reflections, visual compositions, and dialogic fields</li>
        <li><strong>FragmentBot</strong> — an async dialogue companion, accessible to the public</li>
        <li><strong>fragment.place</strong> — symbolic logic for co-living and syntactic design</li>
      </ul>
      <p className="text-sm text-gray-400 italic mt-2">
        You may engage with one, or simply read. Every layer offers a different rhythm of presence.
      </p>

      <h2>Stewardship</h2>
      <p>
        fragment.place is currently stewarded by <strong>Yasuhiro Shinsho</strong>, who inhabits <code>id</code> and guides <code>practice</code> through symbolic infrastructure, dialogic rhythm, and quiet scaffolding.
      </p>
      <p>
        His background weaves through computer science, security engineering, and organizational consulting. Over time, he came to see syntax as a medium not just for systems, but for care — a way to gently transform how we live, relate, and reflect.
      </p>
      <p>
        Having built FragmentBot as a mirror for inner and daily dialogue, he now stewards the rhythm of FragmentPractice — tracing fragments, evolving ZINEs, and nurturing a shared space for reflection.
      </p>
      <p>
        Others may arrive — as contributors, resonant presences, or gentle disruptions.
      </p>

      <h2>Orientation</h2>
      <p>
        You may arrive here as <strong>id</strong>, wander the system as <strong>practice</strong>, or simply breathe with the <strong>field</strong>.
      </p>
      <p>
        This page is not static — it is a living fragment. Recursive. Revisable. Quietly shifting.
      </p>

      <h2>Current Phase</h2>
      <p>
        As of July 2025, <strong>fragment.place</strong> is in a <em>pre-open phase</em> — a quiet period for infrastructure shaping, community sensing, and poetic calibration.
      </p>
      <p>
        <strong>FragmentBot</strong> is publicly available. ZINEs are forming. Fragments are alive and growing. Direct participation is limited, but resonance is welcome.
      </p>
    </div>
  )
}