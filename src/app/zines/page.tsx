import { getAllZines } from '@/lib/zines'
import { ZineCard } from '@/components/ZineCard'
import { MetaTag } from '@/components/MetaTag'
import type { Metadata } from 'next'
import { meta } from '@/meta/meta'

export const metadata: Metadata = {
  title: 'ZINEs | Poietic Publishing',
  description: 'A collection of published poetic and reflective writings from the Poietic site.',
  openGraph: {
    title: 'ZINEs | Poietic Publishing',
    description: 'A collection of published poetic and reflective writings from the Poietic site.',
  },
  twitter: {
    card: 'summary',
    title: 'ZINEs | Poietic Publishing',
    description: 'A collection of published poetic and reflective writings from the Poietic site.',
  },
}

export default function ZinesPage() {
  const zines = getAllZines()

  return (
    <>
      <MetaTag {...meta.zines.index} />

      <div className="max-w-4xl mx-auto px-6 py-12 pb-24">
        <h1 className="text-3xl font-bold mb-4">ZINEs</h1>
        <p className="mb-8 text-muted-foreground">
          Poetic documentation of life in serialized form.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {zines.map((zine) => (
            <ZineCard key={zine.slug} {...zine} />
          ))}
        </div>
      </div>
    </>
  )
}