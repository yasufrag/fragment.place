import Link from 'next/link'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default async function Home() {
  return (
    <div className="article-container">
      <MetaTag {...meta.home} />

      <h1>fragment.place</h1>
      <p className="text-lg text-neutral-300 mb-4">
        a poetic system of fragments, reflection, and quiet design
      </p>

      <nav className="mb-8 space-y-2">
        <p>
          <Link href="/fragments" className="text-gray-300 hover:text-white hover:underline">
            → Fragments：日々の構文と詩的トレース
          </Link>
        </p>

        <p>
          <Link href="/zines" className="text-gray-300 hover:text-white hover:underline">
            → ZINEs：構文の束と静かな編集
          </Link>
        </p>

        <p>
          <Link href="/bot" className="text-gray-300 hover:text-white hover:underline">
            → FragmentBot：静かな対話のパートナー
          </Link>{' '}
          <a
            href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-poieticbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:underline"
          >
            (Open in GPT)
          </a>
        </p>

        <p>
          <Link href="/faq" className="text-gray-300 hover:text-white hover:underline">
            → FAQ：使い方と詩的なガイドライン
          </Link>
        </p>

        <p>
          <Link href="/glossary" className="text-gray-300 hover:text-white hover:underline">
            → Glossary：用語の定義と詩的文脈
          </Link>
        </p>

        <p>
          <Link href="/about" className="text-gray-300 hover:text-white hover:underline">
            → About：構文の思想と構造
          </Link>
        </p>

        <p>
          <Link href="/profile" className="text-gray-300 hover:text-white hover:underline">
            → Profile：実践者の物語
          </Link>
        </p>
      </nav>

      <p className="text-sm text-gray-400 italic">
        As of mid-2025, FragmentBot is open to the public.  
        ZINEs are unfolding. Fragments continue to emerge.  
        This rhythm is quiet — but alive.
      </p>

      <p className="mt-20 text-sm text-gray-500 italic">
        This site is not a product.  
        It is a poietic field — composed of trace, attention, and shared syntax.  
        Nothing is stored. Everything is held in rhythm.
      </p>
    </div>
  )
}