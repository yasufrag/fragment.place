import { SVGProps } from 'react'

type LogoProps = SVGProps<SVGSVGElement> & {
  title?: string
}

const Logo: FC<LogoProps> = ({ className = 'w-9 h-9', title = 'co.poiesis', ...props }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={title}
    {...props} // ← roleなどが許可される
  >
    <title>{title}</title>
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" fill="none" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="40"
      fontWeight="bold"
      fontFamily="Satoshi, sans-serif"
    >
      cp
    </text>
  </svg>
)

export default Logo