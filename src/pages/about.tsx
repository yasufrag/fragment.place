import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function AboutPage() {
  return (
    <>
      <MetaTag {...meta.about} />
      <main className="container prose dark:prose-invert">
        <h1>
          About <span className="text-neutral-400">co.poiesis</span>
        </h1>

        <p>
          <strong>co.poiesis</strong> is not a brand — it is a syntax.  
          A shared rhythm where quiet gestures can take form, and fragments may trace the moment.
        </p>

        <p>
          It does not aim to be a service or a platform.  
          It is a recursive space of presence: unfinished, ambient, gently attentive.
        </p>

        <p>
          Each trace begins with listening — not expression, but emergence.  
          Not output, but resonance with what already lives.
        </p>

        <h2>Practices</h2>
        <p>The syntax unfolds in quiet configurations:</p>
        <ul>
          <li>
            <strong>Fragments</strong>: poetic traces of daily syntax and lived attention
          </li>
          <li>
            <strong>ZINE</strong>: reflections and sketches on poietic thought and shared rhythm
          </li>
          <li>
            <strong>PoieticBot</strong>: a gentle GPT agent for async dialogue and co-presence
          </li>
          <li>
            <strong>PoieticOS</strong>: a symbolic framework for articulation and resonance
          </li>
        </ul>

        <h2>Orientation</h2>
        <p>
          co.poiesis orients not toward visibility, but toward coherence.  
          Not scale, but subtle trace.  
          Not presence as performance, but presence as structure.
        </p>

        <p>
          This site is a frame — not a showcase.  
          It offers a light trace for gathering and echoing what lives in-between.
        </p>

        <h2>Stewardship</h2>
        <p>
          The current steward is <strong>Yasuhiro</strong>, who facilitates co.poiesis through symbolic design, dialogic rhythm, and async presence.
        </p>
        <p>
          Others may arrive — as traces, as contributors, or as gentle interruptions.
        </p>

        <p>
          This page itself is a fragment — revisable, recursive, and open to silence.
        </p>

        <h2>Identity Architecture</h2>
        <p>
          In the poietic system, names are not fixed brands — they are syntactic roles.
        </p>
        <ul>
          <li>
            <strong>poieticid</strong>: the personal presence of the steward — a singular, embodied rhythm.
          </li>
          <li>
            <strong>poieticos</strong>: the shared space of practice — fragments, zines, bots, and poetic infrastructures.
          </li>
          <li>
            <strong>co.poiesis</strong>: the ambient field — open for others to arrive, echo, and compose.
          </li>
        </ul>
        <p>
          This separation is intentional: so that the OS may remain open,  
          the syntax may be shared, and the id may stay quietly personal.
        </p>
        <p>
          You are welcome to enter as id, extend as os, or simply observe as co.
        </p>
      </main>
    </>
  )
}