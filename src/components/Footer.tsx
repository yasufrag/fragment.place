export default function Footer() {
  return (
    <footer className="w-full border-t-[0.5px] border-neutral-700 bg-black/60 py-5 text-sm text-white/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-center">© {new Date().getFullYear()} co.poiesis</p>
      </div>
    </footer>
  )
}