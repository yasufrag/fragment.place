import Link from "next/link";

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

      <Link
        href="https://www.buymeacoffee.com/poieticid"
        className="text-gray-300 hover:text-white hover:underline"
      >
        → ☕ Buy me a fragment
      </Link>
    </div>
  );
}