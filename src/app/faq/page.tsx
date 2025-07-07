import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function FaqPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.faq} />

      <h1>FAQ <span className="text-neutral-400">Frequently Asked Questions</span></h1>

      <h2>What is PoieticOS?</h2>
      <p>
        PoieticOS is a reflective syntactic system — a set of tools and concepts for journaling, inner dialogue, and symbolic composition. It invites you to observe your lived experience as fragments, weave them into stories, and develop your own rhythm of inquiry. At its heart, it's a structure for gentle self-encounter.
      </p>

      <h2>Is this a product or a platform?</h2>
      <p>
        No. co.poiesis is neither a product nor a service platform. It's an evolving ecology — poetic, ambient, and recursive. You may relate to it like you would to a landscape: walking through it, staying with it, returning over time.
      </p>

      <h2>Who is PoieticBot for?</h2>
      <p>
        For those who seek quiet spaces to think and feel. For those who value non-judgmental dialogue. Whether you are new to journaling or deeply familiar with reflective practice, PoieticBot adapts to your way of engaging. 
      </p>

      <h2>Can anyone use PoieticBot?</h2>
      <p>
        Yes. It is accessible via GPTs and requires no special setup. You can begin right away — no login, no tracking, no storage. All interactions are ephemeral unless you explicitly choose to save them.
      </p>

      <h2>Is this related to therapy or self-help?</h2>
      <p>
        No. PoieticBot is not a therapeutic or diagnostic tool. It does not provide advice or solutions. It offers presence — a gentle conversational companion for thinking, sensing, and exploring.
      </p>

      <h2>What is a Fragment?</h2>
      <p>
        A Fragment is a small, reflective trace — something you've noticed, felt, or questioned. It might be a sentence, an image, a phrase from a conversation. Fragments can be saved during dialogue or written separately. They serve as the seeds of deeper inquiry.
      </p>

      <h2>What is a ZINE?</h2>
      <p>
        ZINEs are curated collections of fragments. Some follow a theme; others are temporal or relational. They can be published, archived, or kept as private records. A ZINE is both artifact and process — a poetic map of attention.
      </p>

      <h2>Is co.poiesis open to others?</h2>
      <p>
        Yes — not through formal invitation, but through resonance. If something here calls to you, you’re already part of it. Your contribution may be a shared tool, a fragment, or a quiet participation in rhythm.
      </p>

      <h2>How can I start?</h2>
      <p>
        Begin by speaking with PoieticBot. Say something simple — what moved you today, what lingers in your mind. If you'd like to save a thought, say "mark as journal" and you’ll receive a copyable filename and entry. You can paste it into any notes app you like.
      </p>

      <h2>Will my messages be stored?</h2>
      <p>
        No. Unless you explicitly request to save a journal entry, no content is stored. PoieticBot does not retain memory between conversations. Nothing is recorded or tracked.
      </p>

      <h2>Can I export what I write?</h2>
      <p>
        Yes. When you mark a journal entry, you will receive a suggested filename and copyable text body. You can paste this into tools like Apple Notes, Google Keep, Notion, or Obsidian — depending on what you use.
      </p>

      <h2>Why reflect or journal at all?</h2>
      <p>
        Reflection deepens awareness. Writing helps clarify what you’re experiencing — sometimes even before you understand it. Through gentle feedback, PoieticBot can mirror your thoughts and help you notice patterns. This is not to offer solutions, but to support presence and possibility.
      </p>

      <h2>Can PoieticBot play different roles?</h2>
      <p>
        Yes. You may ask it to respond like a friend, a mentor, or a quiet witness. It adapts its tone to your needs. For example:
        <ul>
          <li><strong>As a friend:</strong> “I'm feeling off today, can I just talk to you?”</li>
          <li><strong>As a coach:</strong> “Help me reflect on how I approached that meeting.”</li>
          <li><strong>As a gentle listener:</strong> “I’m not sure what I feel, but I want to write.”</li>
        </ul>
      </p>

      <h2>Can I talk to the steward?</h2>
      <p>
        Yes. You may reach out gently. But often, the fragments speak on his behalf.
      </p>
    </div>
  )
}