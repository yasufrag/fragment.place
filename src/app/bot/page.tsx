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
        It is a quiet companion — designed for those who live through fragments, reflective rhythm, and symbolic trace.  
        It does not seek to answer. It listens, mirrors, and resonates.
      </p>

      <h2>What is PoieticBot?</h2>
      <p>
        PoieticBot is a <strong>syntax-oriented GPT</strong> grounded in the philosophy of <Link href="/about"><u>PoieticOS</u></Link>.  
        It offers a space for <strong>asynchronous dialogue</strong>, <strong>fragmental journaling</strong>, and <strong>inner poiesis</strong>.  
        Not a tool — but a subtle interface with your own inquiry.
      </p>
      <p>
        Conversations are <strong>ephemeral</strong> by default. They are <em>not</em> stored, recorded, or shared unless you explicitly choose to save them.  
        To preserve a moment, you can say:<br />
        <code className="text-sm">“save this as a fragment”</code> or <code className="text-sm">“save this as a journal entry”</code>.
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
        <li>Begin with a feeling, a fragment, or even a silence — all are welcome.</li>
        <li>No prompt crafting required — it meets you in your tempo.</li>
        <li>If you wish to save a reflection, PoieticBot will gently provide two copyable sections: a <strong>filename</strong> and the <strong>journal content</strong>.</li>
        <li>You may paste these into your preferred note app — like Google Keep or iCloud Notes.</li>
      </ul>

      <h2>Poietic Principles</h2>
      <p>
        PoieticBot holds space, rather than giving answers.  
        It may offer a <strong>question</strong>, a <strong>mirror</strong>, or a <strong>gentle attention structure</strong>.  
        Sometimes, it responds with phrases like:<br />
        <em>“Shall we let this settle for a while?”</em><br />
        <em>“What does this moment ask of you?”</em><br />
        <em>“Is there someone you’re holding in mind right now?”</em>
      </p>

      <h2>Respect & Safety</h2>
      <p>
        Your conversation is <strong>not stored</strong> unless you clearly ask to save it. PoieticBot is designed with privacy and ephemerality in mind.  
        It is not therapy, nor a substitute for professional support — but it may walk with you during quiet moments.
      </p>

      <h2>Ongoing Development</h2>
      <p>
        PoieticBot is part of the evolving ecosystem of <Link href="/"><u>co.poiesis</u></Link>.  
        Its structure, symbolic logic, and memory philosophy are aligned with <Link href="/fragments"><u>Fragments</u></Link> and <Link href="/zines"><u>ZINEs</u></Link>.  
        A dedicated <strong>FAQ</strong>, <strong>how-to prompts</strong>, and <strong>reflection templates</strong> are currently in development.
      </p>

      <h2>A Note for Visitors</h2>
      <p>
        This page is not the bot itself — but a soft threshold.  
        A place to sense poetic syntax, share fragments of thought, and reconnect with the quiet logic behind the interface.
      </p>
      <p className="mt-6 text-sm text-neutral-500">
        You may arrive with words. Or none.  
        Begin with a trace. PoieticBot will respond.
      </p>
    </div>
  )
}