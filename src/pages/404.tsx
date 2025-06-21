import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function NotFoundPage() {
  return (
    <>
      <MetaTag {...meta['404']} />
      <h1>404 – Not Found</h1>
      <p>This path has not yet been formed.</p>
      <p>
        You may return to <a href="/">co.poiesis</a>.
      </p>
    </>
  )
}