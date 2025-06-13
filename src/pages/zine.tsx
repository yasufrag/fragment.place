import { MetaTag } from '@/components/MetaTag';
import { meta } from '@/meta/meta';

export default function ZinePage() {
  return (
    <>
      <MetaTag {...meta.zine} />
      <main className="px-4 py-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Poietic ZINE</h1>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          Poietic ZINE is a space where fragments of poetic syntax, dialogic notes, and structural mappings are gently gathered.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Each ZINE entry serves as a trace of lived poiesis — recursive, co-explorative, and open to re-description.
        </p>
      </main>
    </>
  );
}