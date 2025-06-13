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
    <header className="sticky top-0 z-50 border-b-[0.5px] border-neutral-700 bg-black/70 backdrop-blur-md">
      {' '}
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center space-x-3">
          <Logo className="h-9 w-9" />
          <span className="text-3xl font-semibold tracking-tight">co.poiesis</span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden space-x-5 md:flex">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-lg font-medium underline-offset-4 transition-colors duration-200 ${
                    isActive
                      ? 'text-white underline'
                      : 'text-gray-400 hover:text-white hover:underline'
                  } `}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
          <button
            className="text-gray-400 hover:text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="space-y-2 px-4 pb-4 md:hidden">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`block text-lg font-medium underline-offset-4 transition-colors duration-200 ${
                  isActive
                    ? 'text-white underline'
                    : 'text-gray-400 hover:text-white hover:underline'
                } `}
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
