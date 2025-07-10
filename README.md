# fragment.place

A quiet surface for fragments, async dialogue, and symbolic publishing.  
This is the frontend site of [FragmentPractice](https://fragment.place) — an evolving poetic system.

## ✴️ Concept

> Not a platform, but a trace.  
> Not stored, but passed.

This site hosts fragments (short records of reflection) and ZINEs (bundled writings) written in `.mdx`.  
Built for stillness, rhythm, and minimal presence.

## 📁 Structure

- `app/`: App Router-based route definitions (Next.js 13+)
- `components/`: Poetic and structural building blocks (ZineCard, MetaTag, etc.)
- `data/`:  
  - `fragments/`: Individual fragments written in `.mdx`  
  - `zines/`: Bundled ZINEs with layered meaning
- `lib/`: Content loader, metadata generator, RSS/sitemap helpers
- `public/`: Static assets (images, OG tags)
- `styles/`: Tailwind and global styles

## 🔧 Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- Deployed from GitHub via [GitHub CLI + NAS automation](https://github.com/yasufrag)

## 🌀 Practices

This site is used in tandem with:
- A custom journaling Bot ([FragmentBot](https://fragment.place/bot))  
- Auto-generated `.mdx` from daily dialogue
- Async publishing via Make / GitHub CLI / Vercel

Everything is designed to stay ephemeral —  
the site is a mirror, not a storage.

## 📜 License

- Code: [MIT](./LICENSE)
- Content: © 2025 [Yasuhiro Shinsho](https://fragment.place/about)