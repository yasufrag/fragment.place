import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function FragmentsPage() {
  return (
    <>
      <MetaTag {...meta.fragment} />
      <h1>Fragments</h1>
      <p>
        Fragments are quiet signals — excerpts from ongoing conversations, momentary sketches, or
        glimpses into evolving syntax. They may appear incomplete, unresolved, or minimal, yet each
        fragment holds a thread toward co-poiesis.
      </p>
      <p>
        Some fragments come from dialogic reflection. Others emerge from the poetic OS —
        interactions between syntax, rhythm, and recursion. Their value is not in coherence, but in
        the invitation they extend: to trace, remix, or leave as is.
      </p>
      <p>
        Over time, these fragments may reappear in the <strong>ZINE</strong>, be picked up by the{' '}
        <strong>PoieticBot</strong>, or serve as a base for further design and dialogue.
      </p>
    </>
  )
}
