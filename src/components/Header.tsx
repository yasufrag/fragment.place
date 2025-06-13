import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/fragment', label: 'fragments' },
  { href: '/zine', label: 'zine' },
  { href: '/bot', label: 'bot' },
  { href: '/about', label: 'about' },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-semibold tracking-wide">co.poiesis</span>
        </Link>
        <ul className="flex space-x-4 text-sm text-gray-700">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <span
                  className={`hover:underline ${
                    router.pathname === href ? 'text-black font-semibold underline' : ''
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}