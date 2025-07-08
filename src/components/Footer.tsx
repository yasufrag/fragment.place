export default function Footer() {
  return (
    <footer className="border-t border-neutral-700 bg-black/60 backdrop-blur-md py-6 text-sm text-white/60 text-center">
        <p>© {new Date().getFullYear()} fragment.place</p>
    </footer>
  )
}