import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function Home() {
  return (
    <>
      <MetaTag {...meta.index} />
      <h1>co.poiesis</h1>
      <p>a place for living syntax and poetic fragments</p>
    </>
  )
}
