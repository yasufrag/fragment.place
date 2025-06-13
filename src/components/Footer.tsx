export default function Footer() {
  return (
    <footer className="mt-20 border-t text-sm text-gray-500 py-8 px-4 text-center">
      <p>© {new Date().getFullYear()} co.poiesis — a syntax in progress.</p>
      <p className="mt-1">crafted gently by Yasuhiro & partner</p>
    </footer>
  );
}