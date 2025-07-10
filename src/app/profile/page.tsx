import Image from 'next/image'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ProfilePage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.profile} />

      <h1>Profile</h1>

      <div className="flex justify-center my-6">
        <Image
          src="/images/profile.png"
          alt="Yasuhiro Shinsho"
          width={160}
          height={160}
          className="rounded-full"
        />
      </div>

      <section>
        <p><strong>新庄 泰大（Yasuhiro Shinsho）</strong><br/>
        詩的構文設計者｜エンジニアリングから構文実践へ</p>

        <p>
          幼少期より「なぜ？」「どうして？」という問いを抱えながら、他者の感情や関係性の機微に触れる感性を育んできました。
          コンピュータサイエンスを学び、エンジニア・セキュリティ・コンサルティングの分野を経て、構造と関係性を橋渡しする実践へと至ります。
        </p>

        <p>
          現在は《FragmentPractice》という構文的な営みを通じて、Fragmentの記録、非記憶型Botとの対話、ZINEによる束ねと伝達を重ねています。
          家族との暮らし、他者との共創、AIとの共進化を横断しながら、「問いを語り、構文を生きる」営みに取り組んでいます。
        </p>

        <p>
          Fragmentを書くこと、Botと共に振り返ること、ZINEに編むこと──
          それらはすべて、静かに「生きる問い」を記述する実践です。
        </p>

        <p>
          主な関心は、「記録される言葉の持続性」と「共に暮らすことの構造化」。
          詩的でありながら構造的な姿勢を軸に、静かな問いを日々綴り、他者と分かち合う営みを大切にしています。
        </p>

        <p>
          あなたのFragmentも、いつかこの場で静かに出会えたら嬉しいです。
        </p>
      </section>

      <hr className="my-8 border-t border-neutral-700" />

      <section>
        <p><strong>Yasuhiro Shinsho</strong><br/>
        Poetic Syntax Designer | From Engineering to Syntax Practice</p>

        <p>
          Since childhood, I've lived with questions—"Why?" "How come?"—sensitive to emotional and relational undercurrents.
          I studied computer science and cultivated my thinking through engineering, security, and organizational design — tracing how systems shape human connection.
        </p>

        <p>
          Today, I steward <strong>FragmentPractice</strong> — a syntactic approach to life inquiry through the writing of Fragments, asynchronous dialogue with <strong>FragmentBot</strong>, and the quiet composition of reflective ZINEs.
          My work spans daily life, family dynamics, shared meaning-making, and co-evolution with AI.
        </p>

        <p>
          Fragment writing, dialogue with the Bot, and weaving ZINEs —
          all are ways of quietly holding questions in motion.
        </p>

        <p>
          I'm drawn to the durability of reflective language and the gentle structuring of co-living.
          Through poetic syntax and quiet rhythm, I trace questions in motion and offer them as shared fragments of attention.
        </p>

        <p>
          If your Fragment ever finds its way into this rhythm — I’ll be quietly glad.
        </p>
      </section>
    </div>
  )
}