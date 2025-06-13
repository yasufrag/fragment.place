'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo' // ← この中で size 調整可能にしておく
// useDarkMode は削除

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Fragment', href: '/fragment' },
  { label: 'Zine', href: '/zine' },
  { label: 'Bot', href: '/bot' },
  { label: 'Projects', href: '/projects' },
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
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Logo className="w-9 h-9" /> {/* サイズアップ */}
          <span className="font-semibold text-2xl tracking-tight">
            co.poiesis
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    text-base font-medium transition-all duration-200 underline-offset-4
                    ${
                      isActive
                        ? 'text-white underline'
                        : 'text-gray-400 hover:text-white'
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
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block text-base font-medium transition-colors duration-200 underline-offset-4 ${
                pathname === href
                  ? 'text-white underline'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
