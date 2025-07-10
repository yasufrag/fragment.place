import Link from 'next/link'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'fragment.place – fragments, rhythm, and reflective syntax',
  description:
    '言葉にならない問いを Fragment として綴る、静かな構文の場。Fragments, ZINEs, and FragmentBot — poetic infrastructure for reflective presence.',
  path: '/',
})

export default async function Home() {
  return (
    <div className="article-container">
      <h1>fragment.place</h1>

      {/* 英語による静かな概要セクション（DevDay等 外部向け） */}
      <section className="text-sm text-neutral-400 mb-8 leading-relaxed">
        <p>
          <strong>FragmentPractice</strong> is a quiet system for writing fragments,  
          bundling them into poetic ZINEs, and reflecting through asynchronous dialogue.  
          Built on MDX, symbolic rhythm, and gentle infrastructure.
        </p>
        <p className="mt-2">
          Not a platform — a trace.  
          Not stored — just passed.
        </p>
        <p className="mt-2 text-xs">
          → <Link href="/about" className="underline hover:text-white">Learn more</Link>
        </p>
      </section>

      <p className="text-lg text-neutral-300 mb-4">
        言葉にならない問いを Fragment として綴る、静かな構文の場。
      </p>

      <nav className="mb-8 space-y-2">
        <p>
          <Link href="/fragments"><u>Fragments：日々の構文と詩的トレース</u></Link>
        </p>

        <p>
          <Link href="/zines"><u>ZINEs：構文の束と静かな編集</u></Link>
        </p>

        <p>
          <Link href="/bot"><u>FragmentBot：静かな対話のパートナー</u></Link>
          {' '}
          <Link
            href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-fragmentbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:underline"
          >
            (Open in GPT)
          </Link>
        </p>

        <p>
          <Link href="/faq"><u>FAQ：Fragmentの使い方とBotとの対話について</u></Link>
        </p>

        <p>
          <Link href="/glossary"><u>Glossary：用語と詩的文脈の定義</u></Link>
        </p>

        <p>
          <Link href="/about"><u>About：この構文実践の背景と思想/</u></Link>
        </p>

        <p>
          <Link href="/profile"><u>Profile：実践者の物語と軌跡</u></Link>
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