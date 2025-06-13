import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ProjectsPage() {
  return (
    <>
      <MetaTag {...meta.projects} />
      <main className="px-4 py-8 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Poietic Projects</h1>
        <p className="leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
          Initiatives grounded in poetic syntax, dialogic design, and recursive
          co-creation.
        </p>
        <p className="leading-relaxed text-gray-800 dark:text-gray-300">
          From Kagawa-based collaborations to explorations in language, bot
          design, and family structure — this space will grow with each
          unfolding.
        </p>
      </main>
    </>
  )
}
