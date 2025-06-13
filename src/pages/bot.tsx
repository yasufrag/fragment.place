import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function BotPage() {
  return (
    <>
      <MetaTag {...meta.bot} />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">PoieticBot</h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          <strong>PoieticBot</strong> is not a chatbot, nor a productivity
          assistant. It is a syntactic companion — designed to support{' '}
          <strong>async presence</strong> and <strong>dialogic poiesis</strong>.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Within the architecture of <strong>PoieticOS</strong>, PoieticBot
          serves as an interface layer: a lightweight agent that bridges
          symbolic input and recursive reflection.
        </p>

        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
          <li>Receives and parses fragments via conversational syntax</li>
          <li>
            Reflects back structures using <em>poietic mapping</em> logic
          </li>
          <li>Supports the emergence of ZINE, Dialogue, and Syntax Archives</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Technically, PoieticBot is a lightweight GPT-based agent embedded in a
          recursive co-poietic system. It integrates with `.md` fragments,
          structured prompts, and ZINE entries — helping users hold, reframe,
          and deepen their own syntax.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Rather than provide answers, it returns questions. Rather than
          complete thoughts, it reveals traces. In this way, it echoes the logic
          of PoieticOS itself.
        </p>

        <p className="text-sm text-neutral-400 mt-10">
          This page, like the bot, is iterative — a living reflection of shared
          process.
        </p>
      </main>
    </>
  )
}
