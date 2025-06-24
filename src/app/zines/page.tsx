import { getAllZines } from '@/lib/zines'
import { ZineCard } from '@/components/ZineCard'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ZinesPage() {
  const zines = getAllZines()

  return (
    <div className="article-container">
      <MetaTag {...meta.zines.index} />

      <h1 className="article-title">ZINEs</h1>
      <p className="mb-10">
        Poetic documentation of life in serialized form.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {zines.map((zine) => (
          <ZineCard key={zine.slug} {...zine} />
        ))}
      </div>
    </div>
  )
}