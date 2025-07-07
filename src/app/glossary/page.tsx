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
        A brief, often poetic trace of lived experience.  
        It may capture a moment, gesture, or recognition — recorded via conversation, journaling, or silent noticing.  
        Fragments can be ephemeral, saved, or gathered into ZINEs.
      </p>

      <h2>ZINE</h2>
      <p>
        A curated field of fragments.  
        ZINEs are compositional — used for reflection, resonance, or quiet transmission.  
        Some are shared publicly; others remain in-process.
      </p>

      <h2>PoieticBot</h2>
      <p>
        A GPT-based companion for reflective conversation.  
        It supports journaling, noticing, and symbolic mirroring —  
        with no answers, only attention.  
        Conversations are ephemeral unless saved by the user.
      </p>

      <h2>PoieticOS</h2>
      <p>
        A symbolic and syntactic infrastructure for co-living.  
        It includes fragments, bots, ZINEs, and metadata logic.  
        A recursive system for reflection, design, and poetic recordkeeping.
      </p>

      <h2>Journal</h2>
      <p>
        A preserved reflection from a conversation.  
        When a user says “save this as a journal entry” or “mark as journal”,  
        the bot returns a file name and content body — ready to copy or store.
      </p>
      <p className="text-sm italic text-neutral-400">
        Also responds to: “mark as a diary”, “save as a diary entry”.  
        Saved as <code>journal</code> type by default.
      </p>

      <h2>Config</h2>
      <p>
        Invisible structural logic used to organize fragments —  
        including file names, timestamps, metadata, and system behavior.
      </p>

      <h2>Gesture</h2>
      <p>
        Any quiet act of participation — whether reflecting, saving, supporting, or simply arriving.  
        A gesture is not a transaction, but a resonance.
      </p>

      <h2>Support</h2>
      <p>
        A voluntary offering to sustain this practice —  
        often through platforms like Buy Me a Coffee.  
        Support is treated as resonance, not obligation.
      </p>

      <h2>Field</h2>
      <p>
        The shared, ambient space of co.poiesis.  
        It includes fragments, readers, bot interactions, and symbolic presence —  
        even if not formally defined.
      </p>

      <h2>Resonance</h2>
      <p>
        A quiet sense of alignment or recognition.  
        To resonate with co.poiesis is to feel attuned — not enrolled.
      </p>

      <h2>Ephemeral</h2>
      <p>
        Conversations are not stored by default.  
        Unless explicitly saved, all dialogue disappears after the session.  
        This fosters privacy, softness, and light presence.
      </p>

      <h2>Symbolic</h2>
      <p>
        Not abstract, but meaningful.  
        A syntax, phrase, or pattern becomes symbolic when it holds affective or relational weight.
      </p>

      <h2>Steward</h2>
      <p>
        The quiet maintainer of the poietic field.  
        Guides, listens, designs — but does not own.  
        A relational role shaped by rhythm, not hierarchy.
      </p>

      <h2>Syntax</h2>
      <p>
        A connective and compositional structure.  
        In co.poiesis, syntax is how fragments, attention, and meaning link together —  
        forming poetic logic through time.
      </p>
    </div>
  )
}