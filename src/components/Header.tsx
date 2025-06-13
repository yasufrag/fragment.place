import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 border-b flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">co.poiesis</h1>
      <nav className="space-x-4 text-sm text-gray-600">
        <Link href="/">Home</Link>
        <Link href="/fragment">Fragments</Link>
        <Link href="/zine">ZINE</Link>
        <Link href="/bot">Bot</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}