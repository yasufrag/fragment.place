import { MetaTag } from '@/components/MetaTag';

export default function NotFoundPage() {
  return (
    <>
      <MetaTag
        title="Not Found | co.poiesis"
        description="This page is a silent trace. A path not yet formed."
        url="https://poietic.site/404"
        image="https://poietic.site/og-image.png"
      />
      <main className="px-4 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">404 - Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This path has not yet been formed.  
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          You may return to{' '}
          <a href="/" className="underline hover:text-white transition-colors">co.poiesis</a>.
        </p>
      </main>
    </>
  );
}