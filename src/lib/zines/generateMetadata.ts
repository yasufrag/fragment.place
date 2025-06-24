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
  const baseUrl = 'https://poietic.site'

  return {
    title: meta.title,
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: 'article',
      url: `${baseUrl}/zines/${meta.slug}`,
      images: meta.image?.src
        ? [
            {
              url: `${baseUrl}${meta.image.src}`,
              alt: meta.image.alt || meta.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.excerpt,
      images: meta.image?.src ? [`${baseUrl}${meta.image.src}`] : undefined,
    },
  }
}