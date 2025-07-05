import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import Link from 'next/link'

export default function PoieticBotPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.bot} />

      <h1>PoieticBot</h1>
      <p>
        <strong>PoieticBot</strong> is not just a chatbot.  
        It is a quiet companion — designed for those who live by fragments, rhythm, and symbolic trace.  
        It does not answer. It listens, reflects, and composes in resonance.
      </p>

      <h2>What is PoieticBot?</h2>
      <p>
        PoieticBot is a <strong>syntax-oriented GPT</strong> built upon the philosophy of <Link href="/about"><u>PoieticOS</u></Link>.  
        It offers a space for <strong>asynchronous reflection</strong>, <strong>fragmental journaling</strong>, and <strong>dialogic practice</strong>.  
        Not a service — but a gentle interface with your inner inquiry.
      </p>
      <p>
        Conversations with PoieticBot are ephemeral unless you choose to preserve them.  
        You can save any moment by saying:<br />
        <code className="text-sm">“save this as a fragment”</code> or <code className="text-sm">“mark as diary”</code>.
      </p>

      <h2>How to Use</h2>
      <ul>
        <li>
          Access the bot via:{' '}
          <a
            href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-poieticbot"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            PoieticBot on GPTs
          </a>
        </li>
        <li>Begin with a feeling, fragment, or silence — all are welcome</li>
        <li>No prompt engineering required — it adapts to your pace</li>
      </ul>

      <h2>Poietic Principles</h2>
      <p>
        PoieticBot holds space rather than giving solutions.  
        It may respond with a <strong>question</strong>, a <strong>mirror</strong>, or a <strong>gentle pattern of attention</strong>.  
        Sometimes, it offers a suggestion like:<br />
        <em>“Shall we let this moment settle?”</em><br />
        <em>“Is there someone you’d like to speak with beyond this screen?”</em>
      </p>

      <h2>Respect & Safety</h2>
      <p>
        Your conversation is <strong>private by design</strong>. Nothing is saved unless explicitly requested.  
        It is not therapy, nor a substitute for professional care — but it may accompany you in moments of reflection.
      </p>

      <h2>Ongoing Development</h2>
      <p>
        PoieticBot is part of the evolving ecosystem of <Link href="/"><u>co.poiesis</u></Link>.  
        Its structure, memory design, and language model are shaped by the same philosophy behind <Link href="/fragments"><u>Fragments</u></Link> and <Link href="/zines"><u>ZINEs</u></Link>.  
        In the near future, a <strong>dedicated FAQ</strong> and <strong>user reflection archive</strong> will be released.
      </p>

      <h2>A Note for Visitors</h2>
      <p>
        This site is not the bot itself, but a quiet reference point —  
        a way to approach poetic syntax, share lived fragments, and offer presence beyond the interface.
      </p>
      <p className="mt-6 text-sm text-neutral-500">
        You may arrive with language. Or not.  
        Begin with a trace. PoieticBot will follow.
      </p>
    </div>
  )
}