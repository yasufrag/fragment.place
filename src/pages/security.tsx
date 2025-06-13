import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function SecurityPage() {
  return (
    <>
      <MetaTag {...meta.security} />
      <h1>Security and Ethical Commitment</h1>

      <p>
        At <strong>co.poiesis</strong>, security is not only about protecting data— it is about
        honoring the space where dialogue, design, and co-creation unfold.
      </p>
      <p>
        We approach technology with quiet care, ethical reflection, and attention to subtle
        boundaries. This page outlines how we treat security, privacy, and mutual trust as
        foundational elements.
      </p>

      <h2>Data Collection and Privacy</h2>
      <p>
        We collect only the minimum information necessary for functionality. We do not use invasive
        tracking, analytics, or advertising tools. When user data is handled (e.g. via PoieticBot),
        it is treated as ephemeral and anonymous.
      </p>

      <h2>Infrastructure and Access</h2>
      <p>
        This site is deployed via Vercel with secure HTTPS, using best practices in static hosting.
        Admin access is limited and version-controlled through GitHub with audit logs. Secrets (if
        any) are never committed to repositories.
      </p>

      <h2>Ethical Practices</h2>
      <p>
        Our tools are designed for co-creative use, not extraction. We resist surveillance, opacity,
        and coercive design. We aim to cultivate spaces where presence, not performance, matters.
      </p>

      <h2>Continuous Reassessment</h2>
      <p>
        As PoieticOS evolves, so will our security model. We welcome shared inquiry into what
        “security” could mean in a co-poietic system—where technical, social, and symbolic integrity
        meet.
      </p>
    </>
  )
}
