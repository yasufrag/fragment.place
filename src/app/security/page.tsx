import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function SecurityPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.security} />

      <h1>Security &amp; Ethical Commitment</h1>

      <p>
        At <strong>fragment.place</strong>, security is not merely about protection —  
        it is about presence. A quiet stewardship of the space where dialogue, design, and shared becoming unfold.
      </p>

      <p>
        We approach technology with ethical care, poetic minimalism, and sensitivity to boundaries —  
        seen and unseen. This page outlines our stance on security, privacy, and mutual trust as foundational threads.
      </p>

      <h2>Data Minimalism</h2>
      <p>
        We collect only what is essential for functionality.  
        No invasive tracking. No analytics scripts. No advertising pixels.  
        No data is shared with third parties.
      </p>
      <p>
        When user input is handled — such as through <strong>FragmentBot</strong> —  
        it is treated as <em>ephemeral</em>, <em>anonymous</em>, and never stored persistently.  
        Conversations are <strong>not saved</strong> unless explicitly requested (see <a href="/faq" className="underline">FAQ</a>).
      </p>

      <h2>Infrastructure &amp; Access</h2>
      <p>
        This site is deployed via <strong>Vercel</strong> with secure HTTPS.  
        Static hosting best practices are applied to minimize attack surfaces.
      </p>
      <p>
        Admin access is version-controlled through GitHub.  
        Secrets are encrypted, excluded from repositories, and never exposed.
      </p>
      <p>
        <strong>FragmentBot</strong> is hosted via <strong>OpenAI’s GPT platform</strong>, and follows their infrastructure and access protocols.  
        We do not store or monitor any session-level data unless you explicitly ask to save it.
      </p>

      <h2>Ethical Design</h2>
      <p>
        Our tools are designed for <em>dialogic use</em> — not data extraction.  
        We resist surveillance logics, opaque flows, and coercive interface patterns.
      </p>
      <p>
        Design is treated as a form of care: presence over performance, rhythm over reaction.
      </p>

      <h2>Ongoing Reflection</h2>
      <p>
        As <strong>FragmentPractice</strong> evolves, so does our model of trust, presence, and integrity.  
        This site is in a quiet unfolding phase —  
        not a finished product, but a living field.
      </p>
      <p>
        We welcome shared inquiry into what “security” means within the ecology of fragment.place —
        where technological, relational, and symbolic boundaries are held with gentle intention.
      </p>

      <p className="mt-6 text-sm text-neutral-500 italic">
        Security is not only what protects.  
        It is also what listens, adapts, and holds — quietly, with care.
      </p>
    </div>
  )
}