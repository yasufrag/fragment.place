import type { Metadata } from 'next'
import { getFragmentBySlug } from '@/lib/fragments'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const fragment = await getFragmentBySlug(params.slug)
  if (!fragment || !fragment.meta) {
    return {
      title: 'Fragment',
      description: 'A fragment from fragment.place',
    }
  }

  const { meta } = fragment

  const description = `${meta.tags?.join(', ') || 'fragment'}`

  const imageUrl = meta.image
    ? `https://fragment.place/images/fragments/${meta.slug}/001.jpg`
    : undefined

  return {
    title: meta.title,
    description,
    openGraph: {
      title: meta.title,
      description,
      images: imageUrl ? [{ url: imageUrl, alt: meta.image_alt || meta.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}