import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ProjectPage() {
  return (
    <>
      <MetaTag {...meta.project} />
      <main className="px-4 py-8 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Poietic Projects</h1>
        <p className="leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
          This space outlines projects and initiatives shaped through co.poiesis
          — from prototypes to public engagements, collaborations, and dialogic
          design efforts.
        </p>
        <p className="leading-relaxed text-gray-800 dark:text-gray-300">
          More details will be published as projects evolve.
        </p>
      </main>
    </>
  )
}
