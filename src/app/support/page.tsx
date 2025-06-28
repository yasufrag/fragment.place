export default function SupportPage() {
  return (
    <div className="article-container">
      <h1>Support</h1>
      <p>
        This is not a service. There is no product to unlock.
        Only fragments — written, passed, and sometimes held.
      </p>

      <p>
        ご支援は任意であり、これは「購入」ではなく「営みへの灯火」として受け取られます。  
        静かな営みの継続を支えていただける方へ、感謝をこめて。
      </p>

      <a
        href="https://www.buymeacoffee.com/poieticid"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 text-stone-800 px-5 py-2 rounded duration-200 hover:bg-yellow-600 hover:text-stone-800"
      >
        Buy me a fragment
      </a>
    </div>
  );
}