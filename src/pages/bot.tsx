import { MetaTag } from '@/components/MetaTag';
import { meta } from '@/meta/meta';
import Layout from '@/components/Layout';

export default function BotPage() {
  return (
    <Layout>
      <MetaTag {...meta.bot} />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">PoieticBot</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          PoieticBot is an agent for poetic reflection, fragment discovery, and gentle provocations.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Designed to assist with async.presence and dialogic resonance across the PoieticOS.
        </p>
      </main>
    </Layout>
  );
}