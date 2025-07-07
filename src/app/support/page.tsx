export default function SupportPage() {
  return (
    <div className="article-container">
      <h1>Support <span className="text-neutral-400">co.poiesis</span></h1>

      <p>
        <strong>co.poiesis</strong> is a quiet unfolding —  
        a poetic system of fragments, bots, zines, and symbolic practices.  
        It is not a product to buy, but a shared rhythm to sustain.
      </p>

      <p>
        ご支援は、詩的構文の探究と実践の継続を支える「静かな共創」として受け取られます。  
        消費ではなく、響き合いの灯火として — 感謝とともに、次の一歩へ。
      </p>

      <ul className="list-disc list-inside my-6 space-y-1">
        <li><strong>Fragments：</strong>日々の構文と問いを綴る詩的断章</li>
        <li><strong>ZINE：</strong>構造と感性を束ねる、小さな詩的アーカイブ</li>
        <li><strong>PoieticBot：</strong>誰もがアクセス可能な非商業的対話Bot</li>
        <li><strong>Shared Field：</strong>家族・生活・関係性をめぐる静かな実験場</li>
      </ul>

      <p>
        If these gestures resonate with you —  
        and if you feel moved to sustain their unfolding —  
        you may offer support through the link below.
      </p>

      <div className="my-6">
        <a
          href="https://www.buymeacoffee.com/poieticid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-stone-800 px-5 py-2 rounded duration-200 hover:bg-yellow-600 hover:text-stone-800"
        >
          Support poetic practices
        </a>
      </div>

      <p className="text-sm text-neutral-500 mt-4">
        Your support nourishes a non-commercial ecosystem of reflection,  
        care, and poetic co-creation.  
        Thank you for walking quietly alongside.
      </p>
    </div>
  );
}