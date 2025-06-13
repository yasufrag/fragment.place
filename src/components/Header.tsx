"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Fragment", href: "/fragment" },
  { label: "Zine", href: "/zine" },
  { label: "Bot", href: "/bot" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-700 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="w-6 h-6" />
          <span className="font-semibold text-lg">co.poiesis</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-3">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative px-3 py-1 text-sm font-medium rounded-md transition-all
                    ${isActive
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                      : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    }
                    hover:underline underline-offset-4
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <button
            className="md:hidden text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block text-sm font-medium transition-colors hover:underline underline-offset-4 ${
                pathname === href
                  ? "text-black dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}