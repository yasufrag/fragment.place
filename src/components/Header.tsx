'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Logo from './Logo';
import useDarkMode from '../lib/useDarkMode';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Fragment', href: '/fragment' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="w-6 h-6" />
          <span className="font-semibold text-lg">co.poiesis</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm hover:underline transition ${
                pathname === href ? 'underline font-medium' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-4 pb-4">
          <nav className="flex flex-col space-y-3 mt-3">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm hover:underline transition ${
                  pathname === href ? 'underline font-medium' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 w-fit"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}