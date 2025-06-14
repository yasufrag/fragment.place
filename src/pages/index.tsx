import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function Index() {
  return (
    <>
      <MetaTag {...meta.index} />
      <h1>co.poiesis</h1>
      <p>a frame for poetic fragments and living syntax</p>
    </>
  )
}
