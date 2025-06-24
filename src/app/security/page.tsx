import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function SecurityPage() {
  return (
    <>
      <MetaTag {...meta.security} />

      <h1>Security &amp; Ethical Commitment</h1>

      <p>
        At <strong>co.poiesis</strong>, security is not merely the protection of data —  
        it is the quiet stewardship of space where dialogue, design, and co-creation unfold.
      </p>

      <p>
        We approach technology with ethical care, minimalism, and sensitivity to subtle boundaries.  
        This page outlines our stance on security, privacy, and mutual trust as foundational elements.
      </p>

      <h2>Data Minimalism</h2>
      <p>
        We collect only what is essential for functionality.  
        No invasive tracking. No analytics scripts. No advertising pixels.
      </p>
      <p>
        When user input is handled — such as through <strong>PoieticBot</strong> —  
        it is treated as <em>ephemeral</em>, <em>anonymous</em>, and never stored persistently.
      </p>

      <h2>Infrastructure &amp; Access</h2>
      <p>
        This site is deployed via <strong>Vercel</strong> with secure HTTPS.  
        Static hosting best practices are applied to minimize attack surfaces.
      </p>
      <p>
        Admin access is version-controlled through GitHub.  
        Secrets, if any, are excluded from repositories and never exposed.
      </p>

      <h2>Ethical Design</h2>
      <p>
        Our tools are built for <em>co-creative use</em> — not data extraction.  
        We resist surveillance logics, opaque flows, and coercive UI patterns.
      </p>
      <p>
        Design is treated as a form of care: presence over performance, dialogue over dominance.
      </p>

      <h2>Ongoing Reflection</h2>
      <p>
        As <strong>PoieticOS</strong> evolves, so does our model of trust and integrity.
      </p>
      <p>
        We welcome shared inquiry into what “security” might mean in a co-poietic context —  
        where technical, social, and symbolic boundaries align with gentle intention.
      </p>
    </>
  )
}