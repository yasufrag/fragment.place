'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Fragments', href: '/fragments' },
  { label: 'Zine', href: '/zine' },
  { label: 'Bot', href: '/bot' },
  { label: 'Security', href: '/security' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-700 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Logo className="w-9 h-9" />
          <span className="font-semibold text-3xl tracking-tight">
            co.poiesis
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-5">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    text-lg font-medium transition-colors duration-200 underline-offset-4
                    ${
                      isActive
                        ? 'text-white underline'
                        : 'text-gray-400 hover:text-white hover:underline'
                    }
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  block text-lg font-medium transition-colors duration-200 underline-offset-4
                  ${
                    isActive
                      ? 'text-white underline'
                      : 'text-gray-400 hover:text-white hover:underline'
                  }
                `}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
