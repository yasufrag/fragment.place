import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ZinePage() {
  return (
    <>
      <MetaTag {...meta.zine} />
      <h1>Poietic ZINE</h1>
      <p>
        The <strong>Poietic ZINE</strong> is a compositional space — a place where fragments
        converge, diverge, and quietly form new layers of meaning. It is not a magazine in the
        traditional sense, but a field of ongoing resonance.
      </p>
      <p>
        Each entry traces moments of poetic structuring: co-designed syntaxes, unfinished thoughts,
        recursive mappings, or quiet moments from lived practice. Some are reflective, others
        propositional — all are invitations.
      </p>
      <p>
        This ZINE is shaped slowly. It is part journal, part topology, part time capsule. As the{' '}
        <strong>PoieticBot</strong> and <strong>Fragments</strong> evolve, so too will the ZINE —
        folding past signals into future textures.
      </p>
    </>
  )
}
