import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function FragmentsPage() {
  return (
    <>
      <MetaTag {...meta.fragment} />
      <h1>Fragments</h1>
      <p>
        Fragments are quiet signals — brief traces from ongoing dialogues, momentary sketches, or
        glimpses into a living syntax. Often incomplete or minimal, each fragment holds a latent
        thread toward co-poiesis.
      </p>
      <p>
        Some arise from dialogic reflection. Others emerge from the poetic OS — interactions between
        syntax, rhythm, and recursion. Their significance lies not in resolution, but in the
        invitation they offer: to witness, to remix, or to leave untouched.
      </p>
      <p>
        Over time, fragments may reappear within the <strong>ZINE</strong>, be echoed by the{' '}
        <strong>PoieticBot</strong>, or seed future gestures in design and dialogue.
      </p>
    </>
  )
}
