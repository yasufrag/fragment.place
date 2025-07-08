import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import Link from 'next/link'

export default function FragmentBotPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.bot} />

      <h1>FragmentBot</h1>
      <p>
        <strong>FragmentBot</strong> is not just a chatbot.  
        It is a quiet companion — designed for those who live through fragments, reflective rhythm, and symbolic practice.  
        It does not aim to answer. It listens, mirrors, and resonates.
      </p>

      <h2>What is FragmentBot?</h2>
      <p>
        FragmentBot is a <strong>syntax-oriented GPT</strong> grounded in the rhythms of <Link href="/about"><u>FragmentPractice</u></Link>.  
        It offers a space for <strong>asynchronous reflection</strong>, <strong>fragmental journaling</strong>, and <strong>gentle presence</strong>.  
        Not a productivity tool — but a subtle companion for self-inquiry.
      </p>
      <p>
        Conversations are <strong>ephemeral</strong> by default. They are <em>not</em> stored, recorded, or shared unless you explicitly ask to save them.  
        To preserve a moment, you can say:<br />
        <code className="text-sm">“save this as a fragment”</code> or <code className="text-sm">“mark as a journal entry”</code>.
      </p>

      <h2>How to Use</h2>
      <ul>
        <li>
          Access the bot via:{' '}
          <a
            href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-fragmentbot"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            FragmentBot on GPTs
          </a>
        </li>
        <li>Begin with a feeling, a trace, or even a silence — all are welcome.</li>
        <li>No prompt crafting needed — it meets you in your tempo.</li>
        <li>If you wish to save a reflection, FragmentBot will return two copyable sections: a <strong>filename</strong> and the <strong>journal content</strong>.</li>
        <li>You may paste these into your preferred note app — like Google Keep or iCloud Notes.</li>
      </ul>

      <h2>Principles of Practice</h2>
      <p>
        FragmentBot holds space, rather than offering answers.  
        It may respond with a <strong>question</strong>, a <strong>mirror</strong>, or a <strong>quiet prompt</strong>.  
        You might hear phrases like:<br />
        <em>“Shall we let this settle for a while?”</em><br />
        <em>“What is this moment asking of you?”</em><br />
        <em>“Is there someone you’re quietly holding in mind?”</em>
      </p>

      <h2>Respect & Safety</h2>
      <p>
        Your conversation is <strong>not stored</strong> unless you clearly choose to save it. FragmentBot is designed with privacy and ephemerality at its core.  
        It is not therapy, nor a substitute for professional care — but it may walk with you during reflective moments.
      </p>

      <h2>Living Ecosystem</h2>
      <p>
        FragmentBot is part of the ongoing practice of <Link href="/"><u>FragmentPractice</u></Link>.  
        Its structure and symbolic logic resonate with <Link href="/fragments"><u>Fragments</u></Link> and <Link href="/zines"><u>ZINEs</u></Link>.  
        A dedicated <strong>FAQ</strong>, <strong>how-to prompts</strong>, and <strong>reflection templates</strong> are currently evolving.
      </p>

      <h2>A Note for Visitors</h2>
      <p>
        This page is not the bot itself — but a soft threshold.  
        A place to feel into the syntax, explore your inner language, and begin gently.
      </p>
      <p className="mt-6 text-sm text-neutral-500">
        You may arrive with words. Or none.  
        Begin with a trace. FragmentBot will respond.
      </p>
    </div>
  )
}