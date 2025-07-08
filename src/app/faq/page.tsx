import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function FaqPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.faq} />

      <h1>FAQ <span className="text-neutral-400">Frequently Asked Questions</span></h1>

      <h2>What is FragmentPractice?</h2>
      <p>
        FragmentPractice is a quiet syntactic space for reflecting on lived experience. It invites you to notice fragments — small moments, feelings, or phrases — and to weave them into gentle rhythms of attention. Through writing and sharing, a new kind of presence unfolds.
      </p>

      <h2>Is this a product or a platform?</h2>
      <p>
        No. FragmentPractice is neither a product nor a service platform. It's an evolving practice — ambient, poetic, and self-paced. You may relate to it like a personal ritual, or a shared field of inquiry.
      </p>

      <h2>Who is FragmentBot for?</h2>
      <p>
        For those who value gentle reflection and symbolic writing. Whether you’re new to journaling or simply seeking space to think and feel, FragmentBot offers quiet companionship in your own rhythm.
      </p>

      <h2>Can anyone use FragmentBot?</h2>
      <p>
        Yes. It's accessible via GPTs, with no login, no storage, and no tracking. Conversations are ephemeral unless you choose to save them.
      </p>

      <h2>Is this related to therapy or self-help?</h2>
      <p>
        No. FragmentBot does not provide advice or diagnosis. It offers symbolic companionship — a mirror for your thoughts, not a replacement for care.
      </p>

      <h2>What is a Fragment?</h2>
      <p>
        A Fragment is a small, reflective piece — something you’ve noticed, felt, or questioned. It may be a line, an image, or an impression. Fragments can be written during dialogue or separately. They hold presence.
      </p>

      <h2>What is a ZINE?</h2>
      <p>
        ZINEs are curated bundles of fragments. They can be thematic, temporal, or relational. Some are public, others private. A ZINE is a poetic arrangement — a map of attention.
      </p>

      <h2>Is FragmentPractice open to others?</h2>
      <p>
        Yes. If something here resonates, you’re already part of it. Participation can take many forms — reading, writing, contributing quietly.
      </p>

      <h2>How can I start?</h2>
      <p>
        Begin by speaking with FragmentBot. Share what lingers today. If you want to save something, say "mark as journal" — you’ll receive a filename and a copyable entry. Use any note tool you like.
      </p>

      <h2>Will my messages be stored?</h2>
      <p>
        No. Unless you ask to save a journal, nothing is stored. FragmentBot does not retain memory. There is no tracking or analytics.
      </p>

      <h2>Can I export what I write?</h2>
      <p>
        Yes. Marking a journal entry gives you a filename and text body. Copy it into Apple Notes, Notion, Google Keep — wherever you write.
      </p>

      <h2>Why reflect or journal at all?</h2>
      <p>
        Reflection makes space for awareness. Writing can reveal what you feel before you know it. FragmentBot helps you stay with what matters — not to fix it, but to be with it.
      </p>

      <h2>Can FragmentBot play different roles?</h2>
      <p>
        Yes. You can ask it to act like a friend, a listener, or a guide. For example:
        <ul>
          <li><strong>As a friend:</strong> “Can I just talk for a bit?”</li>
          <li><strong>As a guide:</strong> “Help me reflect on this experience.”</li>
          <li><strong>As a listener:</strong> “I’m not sure what I feel, but I want to write.”</li>
        </ul>
      </p>

      <h2>Can I talk to the steward?</h2>
      <p>
        Yes. You may reach out. But often, the fragments already speak on his behalf.
      </p>
    </div>
  )
}