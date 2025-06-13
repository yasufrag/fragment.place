import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function SecurityPage() {
  return (
    <>
      <MetaTag {...meta.security} />
      <main className="px-4 py-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Security and Ethical Commitment
        </h1>

        <p className="mb-4">
          At <strong>co.poiesis</strong>, security is not only about protecting
          data— it is about honoring the space where dialogue, design, and
          co-creation unfold.
        </p>
        <p className="mb-8">
          We approach technology with quiet care, ethical reflection, and
          attention to subtle boundaries. This page outlines how we treat
          security, privacy, and mutual trust as foundational elements.
        </p>

        <section className="poetic-flow">
          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-3">
              Data Collection and Privacy
            </h2>
            <p>
              We collect only the minimum information necessary for
              functionality. We do not use invasive tracking, analytics, or
              advertising tools. When user data is handled (e.g. via
              PoieticBot), it is treated as ephemeral and anonymous.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-3">
              Infrastructure and Access
            </h2>
            <p>
              This site is deployed via Vercel with secure HTTPS, using best
              practices in static hosting. Admin access is limited and
              version-controlled through GitHub with audit logs. Secrets (if
              any) are never committed to repositories.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-3">
              Ethical Practices
            </h2>
            <p>
              Our tools are designed for co-creative use, not extraction. We
              resist surveillance, opacity, and coercive design. We aim to
              cultivate spaces where presence, not performance, matters.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-3">
              Vulnerability Disclosure
            </h2>
            <p>
              If you notice a security issue or wish to suggest an improvement,
              please contact us respectfully at{' '}
              <a
                href="mailto:contact@poietic.site"
                className="underline hover:text-white"
              >
                contact@poietic.site
              </a>
              . We welcome constructive dialogue and treat reports with
              gratitude.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-3">
              Continuous Reassessment
            </h2>
            <p>
              As PoieticOS evolves, so will our security model. We welcome
              shared inquiry into what “security” could mean in a co-poietic
              system—where technical, social, and symbolic integrity meet.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
