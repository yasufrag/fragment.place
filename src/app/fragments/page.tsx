import { getAllFragments } from '@/lib/fragments'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import FragmentsListView from '@/components/FragmentsListView'

export default async function FragmentsPage() {
  const fragments = await getAllFragments()

  return (
    <div className="article-container">
      <MetaTag {...meta.fragments} />
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