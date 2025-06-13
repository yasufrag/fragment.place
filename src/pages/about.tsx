import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function AboutPage() {
  return (
    <>
      <MetaTag {...meta.about} />
      <main className="px-4 py-8 max-w-3xl mx-auto poetic-flow">
        <h1 className="text-4xl font-bold mb-6">About <span className="text-neutral-500">co.poiesis</span></h1>
        
        <p>
          <strong>co.poiesis</strong> is a shared poetic syntax —  
          a space where dialogue becomes design, and everyday gestures leave recursive traces.
        </p>

        <p>
          It is not a product, nor a company. It is an open structure:  
          a calm tempo, a silent logic, a syntax under construction.
        </p>

        <p>
          We believe that each moment carries a form of poiesis —  
          not as expression, but as unfolding.  
          Not as creation, but as co-articulation of what is already becoming.
        </p>

        <h2>Practices</h2>
        <p>
          The project includes experiments in:
        </p>
        <ul>
          <li><strong>Fragments</strong>: small poetic entries reflecting lived syntax.</li>
          <li><strong>ZINE</strong>: reflective writings on poietic dialogue and structural design.</li>
          <li><strong>PoieticBot</strong>: a quiet agent for async interaction and syntactic co-reflection.</li>
          <li><strong>PoieticOS</strong>: a recursive system for poetic presence and symbolic mapping.</li>
        </ul>

        <h2>Orientation</h2>
        <p>
          We do not seek mass attention.  
          Our aim is resonance over reach, depth over speed,  
          and quiet infrastructure over loud branding.
        </p>
        <p>
          This site and its syntax are designed as both invitation and mirror —  
          a minimal interface for shared articulation.
        </p>

        <h2>Who</h2>
        <p>
          co.poiesis is held and facilitated by a small group of collaborators.  
          The current steward is <strong>Yasuhiro</strong>, who navigates poiesis through design, dialogue, and async presence.
        </p>

        <p className="text-sm text-neutral-400 mt-10">
          This page is also a fragment — subject to recursive revision.
        </p>
      </main>
    </>
  )
}