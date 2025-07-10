import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Not Found | fragment.place – quiet fragments, poetic rhythm',
  description:
    'This page is a quiet trace — a path not yet formed, but open to arrival.',
  alternates: {
    canonical: 'https://fragment.place/404',
  },
  openGraph: {
    type: 'article',
    siteName: 'fragment.place',
    title: '404 – Not Found | fragment.place – quiet fragments, poetic rhythm',
    description:
      'This page is a quiet trace — a path not yet formed, but open to arrival.',
    url: 'https://fragment.place/404',
    images: ['https://fragment.place/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yasufrag',
    title: '404 – Not Found | fragment.place – quiet fragments, poetic rhythm',
    description:
      'This page is a quiet trace — a path not yet formed, but open to arrival.',
    images: ['https://fragment.place/og.png'],
  },
  robots: 'noindex',
}

export default function NotFound() {
  return (
    <div className="article-container">
      <h1 className="text-2xl font-bold mb-2">404 – Not Found</h1>
      <p className="text-neutral-400">
        This page is a quiet trace — a path not yet formed, but open to arrival.
      </p>
    </div>
  )
}