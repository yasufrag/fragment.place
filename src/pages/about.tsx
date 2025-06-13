import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function AboutPage() {
  return (
    <>
      <MetaTag {...meta.about} />
      <main>
        <h1>About co.poiesis</h1>
        <p>co.poiesis is a shared poetic syntax...</p>
      </main>
    </>
  )
}