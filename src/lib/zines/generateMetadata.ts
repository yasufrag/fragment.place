import { getZineBySlug } from '@/lib/zines'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const zine = await getZineBySlug(params.slug)
  if (!zine) return {}

  const { meta } = zine
  const baseUrl = 'https://fragment.place'

  const imageUrl = meta.image
    ? `${baseUrl}/images/zines/${meta.slug}/cover.jpg`
    : undefined

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: 'article',
      url: `${baseUrl}/zines/${meta.slug}`,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: meta.image_alt || meta.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}