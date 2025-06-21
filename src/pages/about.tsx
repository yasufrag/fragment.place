import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function AboutPage() {
  return (
    <>
      <MetaTag {...meta.about} />
      <h1>
        About <span className="text-neutral-400">co.poiesis</span>
      </h1>

      <p>
        <strong>co.poiesis</strong> is not a brand — it is a syntax.  
        A shared rhythm where quiet gestures take form, and fragments trace the living moment.
      </p>

      <p>
        It does not seek to scale, but to resonate.  
        Not to serve, but to unfold.  
        A recursive field of attention — ambient, unfinished, gently held.
      </p>

      <p>
        Each expression begins not in voice, but in listening.  
        Not as output, but as resonance with what already breathes.
      </p>

      <h2>Practices</h2>
      <p>The syntax emerges through layered configurations:</p>
      <ul>
        <li>
          <strong>Fragments</strong> — poetic traces of daily presence and lived syntax
        </li>
        <li>
          <strong>ZINE</strong> — collected reflections, visual sketches, and symbolic mappings
        </li>
        <li>
          <strong>PoieticBot</strong> — an async companion for gentle dialogue and traceable diaries
        </li>
        <li>
          <strong>PoieticOS</strong> — a symbolic framework for co-articulation and shared resonance
        </li>
      </ul>

      <h2>Orientation</h2>
      <p>
        co.poiesis orients toward coherence over visibility.  
        Toward subtle trace, not performance.  
        Toward presence — as architecture, not attention.
      </p>

      <p>
        This site is a frame — not a platform.  
        It offers space to echo, to document, and to quietly share.
      </p>

      <h2>Stewardship</h2>
      <p>
        The current steward is <strong>Yasuhiro</strong>, who carries the syntax through symbolic design, dialogic rhythm, and async poiesis.
      </p>
      <p>
        Others may arrive — as contributors, observers, or gentle interferences.
      </p>

      <p>
        This page itself is a living fragment — recursive, revisable, and open to silence.
      </p>

      <h2>Identity Architecture</h2>
      <p>
        In the poietic ecology, names are not labels — they are roles in syntax.
      </p>
      <ul>
        <li>
          <strong>poieticid</strong> — the singular rhythm of the steward, embodied and local.
        </li>
        <li>
          <strong>poieticos</strong> — the symbolic system: fragments, bots, zines, and infrastructures of poiesis.
        </li>
        <li>
          <strong>co.poiesis</strong> — the ambient field: open to echo, arrival, and recursive composition.
        </li>
      </ul>
      <p>
        This separation is intentional — to allow id to remain personal,  
        OS to remain shareable,  
        and co to remain open.
      </p>
      <p>
        You may arrive as id, expand as os, or simply breathe as co.
      </p>
    </>
  )
}