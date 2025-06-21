import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function Index() {
  return (
    <>
      <MetaTag {...meta.index} />
      <main className="max-w-3xl mx-auto px-6 py-12 prose dark:prose-invert">
        <h1>co.poiesis</h1>
        <p>a frame for poetic fragments and living syntax</p>
      </main>
    </>
  )
}