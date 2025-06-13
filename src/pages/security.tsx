import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function SecurityPage() {
  return (
    <>
      <MetaTag {...meta.security} />
      <main className="px-4 py-8 max-w-3xl mx-auto poetic-flow">
        <h1>Security & Trust</h1>

        <p>
          We believe security is not only a matter of technology, but also of
          poetic clarity and mutual understanding.
        </p>

        <p>
          PoieticOS operates with minimal data retention and maximal
          transparency. We aim for an architecture that is lightweight,
          inspectable, and friendly to co-exploration.
        </p>

        <h2>Technical Stack</h2>
        <ul>
          <li>Hosting: Vercel (edge deployment)</li>
          <li>
            Source code:{' '}
            <a
              href="https://github.com/poieticid/poietic.site"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>Deployment: GitHub Actions + Vercel CI/CD</li>
          <li>TLS/SSL: enforced sitewide</li>
        </ul>

        <h2>Data Handling</h2>
        <p>
          We do not collect personal data. We do not use cookies, trackers, or
          external analytics by default.
        </p>
        <p>
          Future components such as PoieticBot may offer optional, encrypted
          input mechanisms. These will always be opt-in.
        </p>

        <h2>Potential Risks</h2>
        <ul>
          <li>Third-party dependency injection</li>
          <li>Misconfigured metadata exposure</li>
          <li>Static asset compromise</li>
        </ul>
        <p>
          To mitigate, we use automated builds, dependency updates, and minimal
          runtime surfaces.
        </p>

        <h2>Looking Forward</h2>
        <p>
          We welcome external audits, constructive critique, and poetic
          diagnostics. Security for us is a recursive principle: traceable,
          describable, revisable.
        </p>

        <blockquote>
          "Syntax is secure when its edges are transparent."
        </blockquote>
      </main>
    </>
  )
}
