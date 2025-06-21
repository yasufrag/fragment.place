'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white transition-colors duration-300">
      <Header />
      <main className="min-h-screen w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-16 prose dark:prose-invert">
        {children}
      </main>
      <Footer />
    </div>
  )
}
