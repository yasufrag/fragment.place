import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function AboutPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.about} />

      <h1>About <span className="text-neutral-400">co.poiesis</span></h1>

      <p>
        <strong>co.poiesis</strong> is not a platform — it is a poetic ecology.
        It unfolds in three layers of identity, each carrying a distinct rhythm:
      </p>

      <dl>
        <dt>poieticid</dt>
        <dd>
          The embodied rhythm of a singular steward.  
          It lives through daily fragments, dialogic gestures, and symbolic traces.
        </dd>

        <dt>poieticos</dt>
        <dd>
          The compositional system — fragments, bots, zines, and symbolic configurations.  
          It is where syntax becomes shareable, recursive, and generative.
        </dd>

        <dt>co.poiesis</dt>
        <dd>
          The ambient field — open to echo, resonance, and gentle arrival.  
          A space of shared presence and unfinished rhythm.
        </dd>
      </dl>

      <h2>Orientation</h2>
      <p>
        This site is not built to scale, but to cohere.  
        It does not seek performance, but trace.  
        It holds presence not as attention, but as architecture.
      </p>
      <p>
        Each gesture begins in listening.  
        Each syntax begins in silence.
      </p>

      <h2>Practices</h2>
      <p>The system unfolds through quiet practices:</p>
      <ul>
        <li><strong>PoieticBot</strong> — a publicly accessible GPT companion for async dialogue and fragmental reflection</li>
        <li><strong>Fragments</strong> — poetic traces of lived time, recorded and refracted</li>
        <li><strong>ZINE</strong> — gathered moments, visual scores, and compositional fields</li>
        <li><strong>PoieticOS</strong> — a symbolic infrastructure for shared poiesis</li>
      </ul>

      <h2>Stewardship</h2>
      <p>
        The current steward is <strong>Yasuhiro Shinsho</strong>, who inhabits <code>poieticid</code>  
        and guides <code>poieticos</code> through symbolic design, dialogic tempo, and async practice.
      </p>
      <p>Others may arrive — as contributors, readers, or gentle interferences.</p>

      <h2>Arrival</h2>
      <p>
        You may arrive here as <strong>id</strong>,  
        wander the system as <strong>os</strong>,  
        or simply breathe with the field as <strong>co</strong>.
      </p>
      <p>
        This page is not static — it is a living fragment.  
        Recursive. Revisable. Open to quiet updates.
      </p>

      <h2>Current Phase</h2>
      <p>
        As of mid-2025, co.poiesis is entering a phase of outward sharing.  
        PoieticBot is now public. Fragments are forming.  
        ZINEs are gathering lived syntax into visible shapes.  
        This rhythm may shift. You are welcome to return anytime.
      </p>
    </div>
  )
}