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
        <strong>co.poiesis</strong> is not a brand — it is a syntax. A shared rhythm where dialogue
        meets design, and gestures become traceable.
      </p>

      <p>
        It does not aim to be a service, nor a platform. It is a recursive structure of presence:
        calm, unfinished, quietly reflective.
      </p>

      <p>
        Each moment carries the possibility of poiesis — not as expression, but as emergence. Not as
        output, but as attunement with becoming.
      </p>

      <h2>Practices</h2>
      <p>The syntax unfolds through overlapping forms:</p>
      <ul>
        <li>
          <strong>Fragments</strong>: poetic traces of lived moments and syntax-in-progress
        </li>
        <li>
          <strong>ZINE</strong>: essays and sketches reflecting poietic thinking and structural
          resonance
        </li>
        <li>
          <strong>PoieticBot</strong>: a quiet GPT agent for async interaction and co-reflection
        </li>
        <li>
          <strong>PoieticOS</strong>: an evolving symbolic architecture for shared articulation
        </li>
      </ul>

      <h2>Orientation</h2>
      <p>
        co.poiesis seeks resonance rather than visibility, depth rather than scale, and quiet
        infrastructure rather than performative presence.
      </p>

      <p>
        This site is a frame, not a showcase — a light structure for gathering and echoing what
        already lives in between.
      </p>

      <h2>Stewardship</h2>
      <p>
        The current steward is <strong>Yasuhiro</strong>, who facilitates co.poiesis through
        symbolic design, dialogic rhythm, and async presence.
      </p>
      <p>Others may arrive — as traces, as contributors, as gentle interruptions.</p>

      <p>This page itself is a fragment — recursive, revisable, and open to silence.</p>
    </>
  )
}
