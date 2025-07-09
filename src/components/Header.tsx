'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navItems } from '@/lib/nav'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen)
  }, [menuOpen])

  const linkClass = (href: string) =>
    pathname === href
      ? 'text-white underline underline-offset-4 decoration-2'
      : 'text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-2'

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 flex items-center justify-between py-5">
        <Link href="/" className="flex items-center space-x-3 no-underline hover:no-underline">
          <Logo className="h-9 w-9" role="presentation" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-gray-400 hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col px-4 pb-6 pt-2 space-y-3 md:hidden">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}