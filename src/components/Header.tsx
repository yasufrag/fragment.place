"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Logo from "./Logo";
import useDarkMode from "../lib/useDarkMode";

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
  const [darkMode, toggleDarkMode] = useDarkMode();

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
          <nav className="hidden md:flex space-x-4">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:underline underline-offset-4 ${
                  pathname === href
                    ? "text-black dark:text-white"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          {isMounted && (
            <button
              onClick={() => toggleDarkMode()}
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
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