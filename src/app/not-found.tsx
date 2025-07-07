import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function NotFound() {
  return (
    <div className="article-container">
      <MetaTag {...meta['404']} />

      <h1 className="text-2xl font-bold mb-2">404 – Not Found</h1>
      <p className="text-neutral-400">
        This page is a quiet trace — a path not yet formed, but open to arrival.
      </p>
    </div>
  )
}