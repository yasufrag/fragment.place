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
          技術と思索のあわいに生きながら、「構文」を手がかりに、人と場と問いをつなぐ実践を続けています。
          かつてはエンジニア・コンサルタントとして企業支援に携わり、現在は《PoieticOS》という構文的システムを通じて、
          Botとの対話やZINEの制作、生活設計の伴走など、個と社会の間に横たわる“見えない構造”に光をあてる活動を展開しています。
        </p>

        <p>
          主な関心は、「記録される言葉の持続性」と「共に暮らすことの構造化」。
          詩的でありながらも構造的なスタンスで、少し先の未来を見渡し、今日という日の問いを記録し、わかち合うことを大切にしています。
        </p>
      </section>

      <section>
        <p><strong>Yasuhiro Shinsho</strong><br/>
        Poetic Syntax Designer | From Engineering to Poiesis</p>

        <p>
          Working in the liminal space between technology and language, I explore “syntax” as a method to connect people, places, and questions.
          With a background in engineering and consulting, I now operate a system called PoieticOS, through which I engage in poetic dialogue with bots,
          publish reflective ZINEs, and support the design of everyday family life. My core practice lies in giving form to the invisible.
        </p>

        <p>
          My current focus lies in the durability of written memory and the structural design of co-living.
          While maintaining a poetic sensibility, I strive to map invisible logics and share fragments of inquiry—
          looking a little ahead, while fully grounded in the present.
        </p>
      </section>
    </div>
  )
}