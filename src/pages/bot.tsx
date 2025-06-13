import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function BotPage() {
  return (
    <>
      <MetaTag {...meta.bot} />
      <h1>PoieticBot</h1>

      <p>
        <strong>PoieticBot</strong> is not a chatbot, nor a productivity assistant. It is a
        syntactic companion — designed to support <strong>async presence</strong> and{' '}
        <strong>dialogic poiesis</strong>.
      </p>

      <p>
        Within the architecture of <strong>PoieticOS</strong>, PoieticBot serves as an interface
        layer: a lightweight agent that bridges symbolic input and recursive reflection.
      </p>

      <ul>
        <li>Receives and parses fragments via conversational syntax</li>
        <li>
          Reflects back structures using <strong>poietic mapping</strong> logic
        </li>
        <li>Supports the emergence of ZINE, Dialogue, and Syntax Archives</li>
      </ul>

      <p>
        Technically, PoieticBot is a lightweight GPT-based agent embedded in a recursive co-poietic
        system. It integrates with `.md` fragments, structured prompts, and ZINE entries — helping
        users hold, reframe, and deepen their own syntax.
      </p>

      <p>
        Rather than provide answers, it returns questions. Rather than complete thoughts, it reveals
        traces. In this way, it echoes the logic of PoieticOS itself.
      </p>

      <p>This page, like the bot, is iterative — a living reflection of shared process.</p>
    </>
  )
}
