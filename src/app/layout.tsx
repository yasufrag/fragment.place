import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://poietic.site'),
  title: 'Poietic Site',
  description: 'PoieticOS: syntax as living infrastructure',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} bg-black text-white`}>
      <body>
        <Header />
        <main className="content-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}