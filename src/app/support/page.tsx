import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function SupportPage() {
  return (
    <div className="article-container">
      <MetaTag {...meta.support} />

      <h1>Support <span className="text-neutral-400">co.poiesis</span></h1>

      <p>
        <strong>co.poiesis</strong> is a quiet unfolding —  
        a poetic system of fragments, bots, zines, and symbolic practices.  
        It is not a product to consume, but a rhythm to walk with.
      </p>

      <p>
        ご支援は、構文的な暮らしと詩的探究の継続をそっと支えるもの。  
        消費ではなく、響きの贈与として — 感謝と共に、静かな前進を。
      </p>

      <ul className="list-disc list-inside my-6 space-y-1">
        <li><strong>Fragments：</strong>日々の感覚と問いを綴る詩的トレース</li>
        <li><strong>ZINE：</strong>構文と思索を束ねた、詩的ドキュメント</li>
        <li><strong>PoieticBot：</strong>誰にとっても開かれた、非商業的対話Bot</li>
        <li><strong>Shared Field：</strong>家族・関係性・リズムをめぐる構文実験場</li>
      </ul>

      <h2>Ways to Support</h2>
      <p>
        Support can take many forms.  
        Quiet dialogue with the Bot. Sharing fragments.  
        Simply reading a ZINE, or arriving here with curiosity.  
        These are all gestures that sustain this field.
      </p>

      <p>
        If you feel moved to support poetically and materially —  
        you may offer a gesture below.
      </p>

      <div className="my-6 flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.buymeacoffee.com/poieticid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-stone-800 px-5 py-2 rounded duration-200 hover:bg-yellow-600 hover:text-stone-800"
        >
          Support poetic practices
        </a>
        <a
          href="https://ofuse.me/poieticid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-5 py-2 rounded duration-200 hover:bg-blue-600"
        >
          OFUSEで応援する
        </a>
      </div>

      <h2>After You Support</h2>
      <p>
        At this time, we do not offer individual returns or exclusive content.  
        However, we may quietly reflect support through fragments, writings,  
        or other shared rhythms — as the field evolves.
      </p>

      <h2>For Japanese Supporters</h2>
      <p>
        日本語での支援には、クリエイター支援プラットフォーム「OFUSE」もご利用いただけます。  
        感想や応援メッセージと共に、詩的構文の継続をそっと支えていただけたら嬉しいです。
      </p>

      <p className="text-sm text-neutral-500 mt-8">
        Your gesture nourishes a non-commercial ecosystem of syntax, reflection,  
        and shared symbolic practice.  
        Thank you for walking — gently, poetically — alongside.
      </p>
    </div>
  )
}