export default function Footer() {
  return (
    <footer className="w-full border-t-[0.5px] border-neutral-700 bg-black/60 py-5 text-center text-sm text-white/80 backdrop-blur-md">
      <p>© {new Date().getFullYear()} co.poiesis</p>
    </footer>
  )
}
