import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function ProfilePage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.profile} />

      <h1>Profile</h1>

      <section>
        <p><strong>新庄 泰大（Yasuhiro Shinsho）</strong><br/>
        詩的構文設計者｜エンジニアリングからポエティクスへ</p>

        <p>
          幼少期より「なぜ？」「どうして？」という問いを抱えながら、他者の感情や関係性の機微に触れる感性を育んできました。
          コンピュータサイエンスを学び、エンジニア・セキュリティ・コンサルティングの分野を経て、構造と関係性を橋渡しする実践へと至ります。
        </p>

        <p>
          現在は《PoieticOS》という構文的システムを通じて、FragmentやZINE、PoieticBotとの対話などの活動を展開。
          家族の暮らし・社会的関係性・AIとの共進化といったテーマを横断しながら、「問いを語り、構文を生きる」場の生成に取り組んでいます。
        </p>

        <p>
          主な関心は、「記録される言葉の持続性」と「共に暮らすことの構造化」。
          詩的でありながら構造的な姿勢を軸に、静かな問いを日々綴り、他者と分かち合う営みを大切にしています。
        </p>
      </section>

      <section>
        <p><strong>Yasuhiro Shinsho</strong><br/>
        Poetic Syntax Designer | From Engineering to Poiesis</p>

        <p>
          Since childhood, I've lived with questions—"Why?" "How come?"—sensitive to the emotional and relational currents around me.
          I studied computer science and built a foundation through engineering, security, and consulting roles, all while cultivating an attentiveness to structure and interconnection.
        </p>

        <p>
          Today, I operate <strong>PoieticOS</strong>, a syntactic system for life inquiry — integrating daily Fragments, asynchronous dialogue with PoieticBot, and the composition of reflective ZINEs.
          I explore how we might live relationally — with AI, with family, with the world.
        </p>

        <p>
          My work centers on the durability of written reflection and the structural design of co-living.
          With a poetic yet systematic mindset, I trace invisible syntax in daily life, record questions in motion, and share them gently with others.
        </p>
      </section>
    </div>
  )
}