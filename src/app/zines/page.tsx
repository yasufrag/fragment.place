import { getAllZines } from '@/lib/zines'
import { createPageMetadata } from '@/lib/metadata'
import ZinesListView from '@/components/ZinesListView'
import { Metadata } from 'next'

export const metadata: Metadata = createPageMetadata({
  title: 'ZINEs',
  description:
    'ZINEs are gathered traces — fragments, reflections, and syntactic compositions within fragment.place.',
  path: '/zines',
  image: '/og.png',
})

export default async function ZinesPage() {
  const zines = await getAllZines()

  return (
    <div className="article-container">
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