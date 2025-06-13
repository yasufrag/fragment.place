import { MetaTag } from '@/components/MetaTag';
import { meta } from '@/meta/meta';

export default function FragmentPage() {
  return (
    <>
      <MetaTag {...meta.fragment} />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Fragments</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Fragments will appear here in the future.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This space is reserved for pieces of syntax, sketches of poiesis, and emergent thoughts — small signals from a co-poietic process.
        </p>
      </main>
    </>
  );
}