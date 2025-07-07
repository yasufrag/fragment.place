import { getAllZines } from '@/lib/zines'
import { ZineCard } from '@/components/ZineCard'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ZinesPage() {
  const zines = getAllZines()

  return (
    <div className="article-container">
      <MetaTag {...meta.zines.index} />

      <h1>ZINEs</h1>
      <p>
        ZINEs are gathered traces —  
        bundles of fragments, quiet reflections, and syntactic compositions.  
        Each one marks a threshold in lived rhythm: a pause, a gesture, a shared unfolding.
      </p>
      <p>
        More than documentation, ZINEs are invitations —  
        to read a life in syntax, to wander through layered thought,  
        and to meet presence in poetic form.
      </p>

      <div className="card-grid">
        {zines.map((zine) => (
          <ZineCard key={zine.slug} {...zine} />
        ))}
      </div>
    </div>
  )
}