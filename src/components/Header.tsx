'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Logo from './Logo';
import useDarkMode from '@/hooks/useDarkMode';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/zine', label: 'ZINE' },
    { href: '/bot', label: 'Bot' },
  ];

  useEffect(() => {
    setMenuOpen(false); // ページ移動時にメニューを閉じる
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="w-6 h-6" />
          <span className="font-semibold text-lg">co.poiesis</span>
        </Link>

        {/* PC Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm ${
                pathname === href
                  ? 'text-black dark:text-white font-bold'
                  : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 px-4 py-2">
          <div className="flex flex-col space-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm ${
                  pathname === href
                    ? 'text-black dark:text-white font-bold'
                    : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 text-sm mt-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>Toggle Dark Mode</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}