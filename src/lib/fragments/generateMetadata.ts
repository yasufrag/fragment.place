import type { Metadata } from 'next'
import { getFragmentBySlug } from '@/lib/fragments'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const fragment = await getFragmentBySlug(params.slug)
  if (!fragment || !fragment.meta) {
    return {
      title: 'Poietic Fragment',
      description: 'A poetic fragment from poietic.site',
    }
  }

  const { meta } = fragment

  return {
    title: meta.title,
    description: meta.excerpt || '',
    openGraph: {
      title: meta.title,
      description: meta.excerpt || '',
      images: meta.image?.src
        ? [{ url: `https://poietic.site${meta.image.src}`, alt: meta.image.alt || meta.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.excerpt || '',
      images: meta.image?.src ? [`https://poietic.site${meta.image.src}`] : [],
    },
  }
}