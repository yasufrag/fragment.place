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
      {' '}
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  )
}
