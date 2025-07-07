import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function GlossaryPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.glossary} />

      <h1>Glossary <span className="text-neutral-400">of poietic terms</span></h1>
      <p>
        This glossary gathers key terms used across <strong>co.poiesis</strong>, <strong>PoieticBot</strong>, and related practices.
        It is designed for clarity across contexts — poetic, technical, and dialogic.
      </p>

      <h2>Fragment</h2>
      <p>
        A brief, often poetic trace of lived experience. It may capture a moment, gesture, or recognition — and is usually recorded via dialogue, journaling, or silent noticing. 
        Fragments can be ephemeral, privately saved, or gathered into ZINEs.
      </p>

      <h2>ZINE</h2>
      <p>
        A curated collection of fragments. ZINEs serve as compositional fields — for reflection, resonance, or shared inquiry. Some are published; others remain quietly in development.
      </p>

      <h2>PoieticBot</h2>
      <p>
        A GPT-based companion designed for reflective dialogue. PoieticBot supports journaling, questioning, and symbolic mirroring — with no answers, only attention. Conversations are ephemeral by default; saving is user-initiated.
      </p>

      <h2>PoieticOS</h2>
      <p>
        A symbolic system and living syntax. It includes Fragments, ZINEs, PoieticBot, and infrastructural logic for co-living and recursive design.
      </p>

      <h2>Config</h2>
      <p>
        The structural settings and invisible logic that determine how fragments are saved, shared, or processed. Used in automation, metadata, and symbolic flows.
      </p>

      <h2>Resonance</h2>
      <p>
        A felt sense of alignment. Rather than "joining" co.poiesis, one resonates with it. Participation is based on rhythm, not role.
      </p>

      <h2>Journal</h2>
      <p>
        A preserved reflection from conversation. When users say “save this as a journal entry” or “mark as diary”, the bot returns a file name and text body — ready to be copied or stored in your preferred tool.
      </p>
      <p className="text-sm italic text-neutral-400">
        Also responds to: “mark as a diary”, “save as a diary entry”.  
        Saved as <code>journal</code> type by default.
      </p>

      <h2>Ephemeral</h2>
      <p>
        Conversations are not stored by default. Unless explicitly saved by the user, all exchanges vanish after the session ends. This fosters a safe, transient, and low-pressure space for expression.
      </p>

      <h2>Symbolic</h2>
      <p>
        Not abstract — but meaningful. In co.poiesis, symbolic refers to patterns, forms, and gestures that carry relational or affective weight. Syntax becomes symbolic through resonance.
      </p>

      <h2>Steward</h2>
      <p>
        The current guide and maintainer of co.poiesis. The steward initiates, listens, and invites — but does not own or control. The role is relational, not hierarchical.
      </p>

      <h2>Syntax</h2>
      <p>
        A compositional and connective structure. Syntax in this context refers not just to grammar, but to the way moments, fragments, and attention link together to form reflective logic.
      </p>
    </div>
  )
}