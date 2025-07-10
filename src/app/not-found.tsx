import { MetaTag } from '@/components/MetaTag'

export default function NotFound() {
  return (
    <div className="article-container">
      <MetaTag
        title="404 – Not Found"
        description="This page is a quiet trace — a path not yet formed, but open to arrival."
        url="/404"
        image="/og.png"
        robots="noindex"
      />

      <h1 className="text-2xl font-bold mb-2">404 – Not Found</h1>
      <p className="text-neutral-400">
        This page is a quiet trace — a path not yet formed, but open to arrival.
      </p>
    </div>
  )
}