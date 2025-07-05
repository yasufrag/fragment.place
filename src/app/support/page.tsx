export default function SupportPage() {
  return (
    <div className="article-container">
      <h1>Support <span className="text-neutral-400">co.poiesis</span></h1>

      <p>
        <strong>co.poiesis</strong> is a quiet unfolding — a poetic system of fragments, bots, zines, and symbolic practices.  
        It is not a product to buy, but a space to be sustained together.
      </p>

      <p>
        ご支援は、詩的構文の探究と実践の継続を支える「静かな共創」として受け取られます。  
        購入ではなく、余白を支えるささやかな灯火として、心より感謝いたします。
      </p>

      <ul className="list-disc list-inside my-6 space-y-1">
        <li>Fragments：日々の問いや気づきを綴る詩的断章</li>
        <li>ZINE：構文的な生活や記録のかたちを紡ぐ小冊子</li>
        <li>PoieticBot：誰もが利用できる、非商業的な対話Bot</li>
        <li>共創の場：家族・生活・構造支援の設計・共有実験</li>
      </ul>

      <p>
        If you feel resonance with these gestures and wish to support their quiet continuation,  
        you may do so through the link below.
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
        Your support helps sustain a non-commercial ecosystem of reflection, care, and co-creation.  
        Thank you for being part of this quiet rhythm.
      </p>
    </div>
  );
}