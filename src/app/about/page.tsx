import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'The philosophy and layered structure of fragment.place — poetic infrastructure for reflection, silence, and co-creation.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className="article-container">
      <h1>About <span className="text-neutral-400">fragment.place</span></h1>

      {/* Overview for new visitors */}
      <section className="text-sm text-neutral-400 mb-6 leading-relaxed">
        <p>
          <strong>fragment.place</strong> is a poetic infrastructure for journaling, reflection, and async dialogue.
          Built on fragments, syntax, and silence — it invites you to pause, write, and trace.
        </p>
        <p className="mt-2">
          Fragments are written. ZINEs are formed. The Bot listens.  
          This is not a product. It is a living trace.
        </p>
      </section>

      <h2>Three Layers</h2>
      <dl>
        <dt><code>id</code></dt>
        <dd>
          The lived rhythm of a single steward — recorded through fragments, symbolic inquiry, and inner journaling.
        </dd>

        <dt><code>practice</code></dt>
        <dd>
          The syntactic system — Fragments, ZINEs, Bot, and tools. A rhythm of writing and gentle infrastructure.
        </dd>

        <dt><code>field</code></dt>
        <dd>
          An ambient space of arrival — quiet, dialogic, and co-creative. Resonance is welcome here.
        </dd>
      </dl>

      <h2>Philosophy</h2>
      <p>
        fragment.place rests on a quiet premise: that syntax can carry care,  
        and structure can hold presence. It does not aim for scale — but for coherence.
      </p>
      <p>
        What is not said, also matters. What returns, becomes syntax.
      </p>

      <h2>Practices</h2>
      <ul>
        <li><strong>Fragment</strong> — poetic traces of inner and lived time</li>
        <li><strong>ZINE</strong> — bundles of fragments and dialogic reflection</li>
        <li><strong>FragmentBot</strong> — a silent partner for async inner dialogue</li>
        <li><strong>fragment.place</strong> — the syntactic infrastructure and poetic field</li>
      </ul>
      <p className="text-sm text-gray-400 italic mt-2">
        Each is autonomous. You may enter from any layer, at your own rhythm.
      </p>

      <h2>Stewardship</h2>
      <p>
        The system is currently stewarded by <strong>Yasuhiro Shinsho</strong> — a poetic systems designer  
        with roots in computer science, security, and organizational practice.
      </p>
      <p>
        His work traces how syntax — once used for software — can also hold reflection, care, and shared rhythm.
      </p>
      <p>
        Having built FragmentBot as a dialogic mirror, he now writes, gathers, and maintains the space with quiet attention.
      </p>

      <h2>Orientation</h2>
      <p>
        You may arrive as <strong>id</strong>, explore the <strong>practice</strong>, or breathe with the <strong>field</strong>.  
        This page is itself a fragment — revisable, recursive, and gently updated.
      </p>

      <h2>Current Phase</h2>
      <p>
        As of July 2025, <strong>fragment.place</strong> is in a <em>pre-open phase</em> — an intentional period of quiet shaping and refinement.
      </p>
      <p>
        • <strong>FragmentBot</strong> is publicly available via GPTs.  
        • <strong>ZINEs</strong> are forming and selectively shared.  
        • <strong>Fragments</strong> are growing daily, often silently.
      </p>
      <p className="mt-2">
        General participation is not open yet, but resonance is welcomed —  
        and shared co-creation may begin soon, rhythm by rhythm.
      </p>
    </div>
  )
}