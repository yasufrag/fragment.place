import { MetaTag } from '@/components/MetaTag'

export default function NotFoundPage() {
  return (
    <>
      <MetaTag
        title="Not Found | co.poiesis"
        description="This page is a silent trace. A path not yet formed."
        url="https://poietic.site/404"
        image="https://poietic.site/og-image.png"
      />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-6 text-3xl font-bold">404 - Not Found</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">This path has not yet been formed.</p>
        <p className="text-gray-600 dark:text-gray-400">
          You may return to{' '}
          <a href="/" className="underline transition-colors hover:text-white">
            co.poiesis
          </a>
          .
        </p>
      </main>
    </>
  )
}
