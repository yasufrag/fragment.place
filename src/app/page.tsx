import Link from 'next/link'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default async function Home() {
  return (
    <div className="article-container">
      <MetaTag {...meta.home} />

      <h1>fragment.place</h1>
      <p className="text-lg text-neutral-300 mb-4">
        言葉にならない問いを Fragment として綴る、静かな構文の場。
      </p>

      <nav className="mb-8 space-y-2">
        <p>
          <Link href="/fragments" className="text-gray-300 hover:text-white hover:underline">
            Fragments：日々の構文と詩的トレース
          </Link>
        </p>

        <p>
          <Link href="/zines" className="text-gray-300 hover:text-white hover:underline">
            ZINEs：構文の束と静かな編集
          </Link>
        </p>

        <p>
          <Link href="/bot" className="text-gray-300 hover:text-white hover:underline">
            FragmentBot：静かな対話のパートナー
          </Link>{' '}
          <a
            href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-fragmentbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:underline"
          >
            (Open in GPT)
          </a>
        </p>

        <p>
          <Link href="/faq" className="text-gray-300 hover:text-white hover:underline">
            FAQ：Fragmentの使い方とBotとの対話について
          </Link>
        </p>

        <p>
          <Link href="/glossary" className="text-gray-300 hover:text-white hover:underline">
            Glossary：用語と詩的文脈の定義
          </Link>
        </p>

        <p>
          <Link href="/about" className="text-gray-300 hover:text-white hover:underline">
            About：この構文実践の背景と思想
          </Link>
        </p>

        <p>
          <Link href="/profile" className="text-gray-300 hover:text-white hover:underline">
            Profile：実践者の物語と軌跡
          </Link>
        </p>
      </nav>

      <p className="text-sm text-gray-400 italic">
        FragmentPractice は静かに公開されました。<br />
        FragmentBot は自由に使えます。ZINE は編まれはじめています。<br />
        このリズムは小さく、しかし確かに動いています。
      </p>

      <p className="mt-20 text-sm text-gray-500 italic">
        このサイトはプロダクトではありません。<br />
        トレース、注意、共に編む構文によって成る詩的なフィールドです。<br />
        何も保存されず、すべてがリズムに委ねられています。
      </p>
    </div>
  )
}