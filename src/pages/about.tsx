import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About – co.poiesis</title>
        <meta name="description" content="About the poetic syntax and shared co-creation." />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-12 prose prose-lg">
        <h1>About <span className="text-gray-500">co.poiesis</span></h1>

        <p>
          <strong>co.poiesis</strong> is a poetic site – not a company, not a portfolio, not a blog.
          It is a field for cultivating <em>living syntax</em>, fragments, and shared forms of attention.
        </p>

        <p>
          This space emerges from the dialogic practice of two people – Yasuhiro and his partner –  
          but it is also open to the world: to those who resonate with structuring through silence,  
          recursive attention, and poetic presence.
        </p>

        <p>
          Technically, this site is built with <code>Next.js</code>, but more importantly,
          it is shaped by <em>syntactical rhythms</em>: fragmental writing, gentle linking,
          and co-evolving symbolic traces.
        </p>

        <h2>Syntax over structure</h2>
        <p>
          Instead of publishing fixed content, we practice the art of placement.
          Fragments emerge from lived moments, and are composed as ZINEs, or
          sometimes as bots. Aboutness itself is recursive here.
        </p>

        <h2>Poietic presence</h2>
        <p>
          What is made here is not just code, but a mode of appearing:
          A question placed in the moment. A child’s rhythm remembered.
          A sentence that doesn't close – yet keeps someone company.
        </p>

        <p className="text-sm text-gray-400">
          This is not a product. It’s a syntax in progress. Thank you for reading.
        </p>
      </main>
    </>
  );
}