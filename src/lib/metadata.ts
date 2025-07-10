import { Metadata } from 'next'

type MetadataParams = {
  title: string
  description?: string
  path?: string
  image?: string
  robots?: string
}

const BASE_URL = 'https://fragment.place'
const DEFAULT_IMAGE = `${BASE_URL}/og.png`
const DEFAULT_DESCRIPTION =
  'A quiet system of fragments, poetic dialogue, and symbolic design.'

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  robots = 'index,follow',
}: MetadataParams): Metadata {
  const fullUrl = `${BASE_URL}${path}`
  const fullTitle = `${title} | fragment.place`

  return {
    title: fullTitle,
    description,
    robots,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      siteName: 'fragment.place',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: '@yasufrag',
      images: [image],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}