import { getAllFragments } from '@/lib/fragments'
import FragmentsListView from '@/components/fragments/FragmentsListView'
import { createPageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createPageMetadata({
  title: 'Fragments',
  description:
    'Fragments are poetic gestures — moments traced in language, held in rhythm, and offered without conclusion.',
  path: '/fragments',
})

export default async function FragmentsPage() {
  const fragments = await getAllFragments()

  return (
    <div className="article-container">
      <h1>Fragments</h1>
      <p>
        Fragments are quiet gestures —  
        moments traced in language, held in rhythm, and offered without conclusion.  
        Each one is a signal: of presence, of inquiry, of something just beginning.
      </p>
      <p>
        They are not posts.  
        They are bookmarks in lived time —  
        refracted thoughts, poetic sketches, and syntactic markers of becoming.
      </p>

      <FragmentsListView fragments={fragments} />
    </div>
  )
}