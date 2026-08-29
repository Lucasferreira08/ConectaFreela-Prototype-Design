import brandMark from "../assets/landing/cf-letra.png"
import brandWordmark from "../assets/landing/connectafreela.png"

interface BrandLogoProps {
  light?: boolean
  compact?: boolean
}

export default function BrandLogo({
  light = false,
  compact = false,
}: BrandLogoProps) {
  const lightFilter = light ? "brightness(0) invert(1)" : undefined

  return (
    <span
      className="inline-flex items-center gap-2.5"
      role="img"
      aria-label="ConectaFreela"
    >
      <img
        src={brandMark}
        alt=""
        width="328"
        height="328"
        className={`${
          compact ? "h-9 w-9" : "h-10 w-10 sm:h-12 sm:w-12"
        } shrink-0 object-contain`}
        style={{ filter: lightFilter }}
      />
      <img
        src={brandWordmark}
        alt=""
        width="779"
        height="208"
        className={`${compact ? "h-6" : "h-6 sm:h-8"} w-auto object-contain`}
        style={{ filter: lightFilter }}
      />
    </span>
  )
}
