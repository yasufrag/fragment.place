import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function AboutPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.about} />

      <h1>About <span className="text-neutral-400">co.poiesis</span></h1>

      <p>
        <strong>co.poiesis</strong> is a poetic infrastructure for shared presence, reflective practice, and symbolic design.
        It is not a platform, but an unfolding ecology — shaped by fragments, structured through syntax, and guided by silence.
      </p>

      <h2>Three Layers</h2>
      <dl>
        <dt><code>poieticid</code></dt>
        <dd>
          The lived rhythm of a singular steward. 
          Expressed through daily fragments, reflective gestures, and symbolic inquiry.
        </dd>

        <dt><code>poieticos</code></dt>
        <dd>
          The syntactic system — comprising Fragments, Bots, ZINEs, and compositional tools. 
          Where structure emerges through practice.
        </dd>

        <dt><code>co.poiesis</code></dt>
        <dd>
          The ambient field — open to resonance, listening, and dialogic arrival. 
          A shared space for quiet co-creation.
        </dd>
      </dl>

      <h2>Philosophy</h2>
      <p>
        co.poiesis is rooted in the idea that syntax can carry care, and structure can hold presence.
        It does not seek scale, but coherence. It is not about visibility, but trace.
      </p>
      <p>
        Each gesture begins in listening.  
        Each syntax begins in silence.
      </p>

      <h2>Practices</h2>
      <ul>
        <li><strong>Fragments</strong> — poetic traces of lived time, recorded and refracted</li>
        <li><strong>ZINE</strong> — gathered reflections, visual compositions, and dialogic fields</li>
        <li><strong>PoieticBot</strong> — an async dialogue companion, accessible to the public</li>
        <li><strong>PoieticOS</strong> — symbolic logic for co-living and syntactic design</li>
      </ul>

      <h2>Stewardship</h2>
      <p>
        co.poiesis is currently stewarded by <strong>Yasuhiro Shinsho</strong>, who inhabits <code>poieticid</code>  
        and guides <code>poieticos</code> through symbolic infrastructure, dialogic rhythm, and quiet scaffolding.
      </p>
      <p>
        His background weaves through computer science, security engineering, and organizational consulting. Over time, he came to see syntax as a medium not just for systems, but for care — a way to gently transform how we live, relate, and reflect.
      </p>
      <p>
        Having built PoieticBot as a mirror for daily dialogue, he continues to shape co.poiesis through daily fragments, evolving ZINEs, and the quiet infrastructure of shared meaning.
      </p>
      <p>
        Others may arrive — as contributors, resonant presences, or gentle disruptions.
      </p>

      <h2>Orientation</h2>
      <p>
        You may arrive here as <strong>id</strong>,  
        wander the system as <strong>os</strong>,  
        or simply breathe with the field as <strong>co</strong>.
      </p>
      <p>
        This page is not static — it is a living fragment.  
        Recursive. Revisable. Quietly shifting.
      </p>

      <h2>Current Phase</h2>
      <p>
        As of mid-2025, co.poiesis is in a phase of gentle unfolding.  
        The Bot is public. ZINEs are emerging.  
        Fragments are in motion. You are welcome to return anytime.
      </p>
    </div>
  )
}