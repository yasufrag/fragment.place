import * as React from 'react';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* あなたのSVGパス・形状はこちらに挿入 */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fill="currentColor"
      >
        c·p
      </text>
    </svg>
  );
}