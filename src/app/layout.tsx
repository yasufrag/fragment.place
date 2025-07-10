import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fragment.place'),
  title: {
    default: 'fragment.place',
    template: '%s | fragment.place',
  },
  description: 'A quiet system of fragments, poetic dialogue, and symbolic design.',
  openGraph: {
    siteName: 'fragment.place',
    type: 'website',
    images: [
      {
        url: 'https://fragment.place/og.png',
        width: 1200,
        height: 630,
        alt: 'fragment.place',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yasufrag',
    images: ['https://fragment.place/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} bg-black text-white`}>
      <body>
        <Header />
        <main className="content-container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}