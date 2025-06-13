// Logo.tsx（例）
import { FC } from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="none" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      alignmentBaseline="middle"
      fontSize="38"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      cp
    </text>
  </svg>
);

export default Logo;