interface BrandLogoProps {
  light?: boolean;
  compact?: boolean;
}

export default function BrandLogo({ light = false, compact = false }: BrandLogoProps) {
  const wordmarkColor = light ? "text-white" : "text-slate-900";
  const iconSize = compact ? "h-7 w-7" : "h-8 w-8";
  const wordmarkSize = compact ? "text-xs" : "text-sm";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`${iconSize} relative inline-flex items-center justify-center overflow-hidden rounded-[10px] bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-700 shadow-[0_4px_12px_rgba(5,150,105,0.28)]`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" fill="none" className="h-[21px] w-[21px]">
          <path d="M13.1 9.1a7.2 7.2 0 0 0-4.9 12.3 7.2 7.2 0 0 0 10.8-.6" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M18.9 22.9a7.2 7.2 0 0 0 4.9-12.3 7.2 7.2 0 0 0-10.8.6" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="12.1" cy="16" r="1.65" fill="white" />
          <circle cx="19.9" cy="16" r="1.65" fill="white" />
        </svg>
      </span>
      <span className={`${wordmarkSize} ${wordmarkColor} font-semibold tracking-[-0.04em]`}>
        Conecta<span className="font-normal">Freela</span>
      </span>
    </span>
  );
}
