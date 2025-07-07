import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function FaqPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.faq} />

      <h1>FAQ <span className="text-neutral-400">Frequently Asked Questions</span></h1>

      <h2>What is PoieticOS?</h2>
      <p>
        PoieticOS is a syntactic system for reflective living. It offers a language for recording inner movement, designing shared rhythms, and exploring life as layered inquiry. It includes Fragments, ZINEs, PoieticBot, and other symbolic tools.
      </p>

      <h2>Is this a product or a platform?</h2>
      <p>
        No. co.poiesis is not a service platform nor a traditional product. It is an unfolding ecology — poetic, ambient, and recursive. You may engage with it as you would with a landscape or a rhythm.
      </p>

      <h2>Who is PoieticBot for?</h2>
      <p>
        For those who value quiet reflection. For those seeking a non-intrusive companion to trace their thoughts with. For those who journal, wander, inquire — alone or together.
      </p>

      <h2>Can anyone use PoieticBot?</h2>
      <p>
        Yes. It is accessible via GPTs and does not require any technical setup. All that is asked is presence, and perhaps a willingness to listen to yourself anew.
      </p>

      <h2>Is this related to therapy or self-help?</h2>
      <p>
        No. While PoieticBot may support moments of reflection, it is not therapeutic, diagnostic, or prescriptive. It is not a substitute for professional care. It simply offers companionship in your own inquiry.
      </p>

      <h2>What is a Fragment?</h2>
      <p>
        A Fragment is a small, poetic trace — a moment, a gesture, a recognition. They are captured through dialogue, journaled through the bot, or surfaced in daily reflection. Fragments can be private, shared, or gathered into ZINEs.
      </p>

      <h2>What is a ZINE?</h2>
      <p>
        ZINEs are gathered collections of fragments. They serve as both artifacts of lived inquiry and compositional fields. Some are published, others remain in quiet development. Each ZINE is a window into a mode of attention.
      </p>

      <h2>Is co.poiesis open to others?</h2>
      <p>
        Yes — not through application, but through resonance. If you find yourself drawn to this rhythm, you are already near. Contributions may take the form of fragments, shared tools, or silent presence.
      </p>

      <h2>How can I start?</h2>
      <p>
        Begin with a trace. Speak with PoieticBot. Write a fragment. Read a ZINE. Breathe with the structure. There is no onboarding — only unfolding.
      </p>

      <h2>Is there a roadmap or goal?</h2>
      <p>
        co.poiesis does not seek a fixed outcome. Its purpose is not expansion but coherence. Its goal is not performance but presence. It evolves through attention and shared resonance.
      </p>

      <h2>Can I talk to the steward?</h2>
      <p>
        Yes. You may reach out with care. But first, listen to the fragments — they often speak on his behalf.
      </p>
    </div>
  )
}