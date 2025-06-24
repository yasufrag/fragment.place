import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'co.poiesis',
  description: 'A poetic framework of fragments, zines, and dialogic presence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
          <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-16 mb-24 min-h-screen pb-24">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}