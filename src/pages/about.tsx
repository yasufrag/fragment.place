import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <MetaTag {...meta.about} />
      <main className="px-4 py-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">About co.poiesis</h1>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          co.poiesis is a shared poetic syntax...
        </p>
      </main>
    </Layout>
  )
}