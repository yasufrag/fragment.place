import Link from 'next/link'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default async function Home() {
  return (
    <div className="article-container">
      <MetaTag {...meta.home} />

      <h1>co.poiesis</h1>
      <p className="text-lg text-neutral-300 mb-4">
        a quiet system of fragments, dialogue, and symbolic design
      </p>

      <nav className="mb-8 space-y-2">
        <p>
          <Link href="/fragments" className="text-gray-300 hover:text-white hover:underline">
            → Fragments：日々の構文と詩的トレース
          </Link>
        </p>

        <p>
          <Link href="/zines" className="text-gray-300 hover:text-white hover:underline">
            → ZINEs：詩的設計の記録と反射
          </Link>
        </p>

        <p>
          <Link href="/bot" className="text-gray-300 hover:text-white hover:underline">
            → PoieticBot：静かな対話のパートナー
          </Link>{' '}
          <a
            href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-poieticbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:underline"
          >
            (GPTで開く)
          </a>
        </p>
      </nav>

      <p className="text-sm text-gray-400 italic">
        As of mid-2025, PoieticBot is public.  
        ZINEs are gathering. Fragments continue to arrive.  
        This rhythm is quiet—but ongoing.
      </p>

      <p className="mt-20 text-sm text-gray-500 italic">
        This site is not a product.  
        It is a field of poiesis — unfolding in fragments and presence.  
        Syntax is not stored. It is passed, shared, and refracted.
      </p>
    </div>
  )
}