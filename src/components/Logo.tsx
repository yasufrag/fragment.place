import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/logo.svg"
        alt="co.poiesis logo"
        width={28}
        height={28}
        className="h-7 w-7"
      />
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
        co.poiesis
      </span>
    </div>
  );
}