import { getAllZines } from '@/lib/zines'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import ZinesListView from '@/components/ZinesListView'

export default async function ZinesPage() {
  const zines = await getAllZines()

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

      <ZinesListView zines={zines} />
    </div>
  )
}