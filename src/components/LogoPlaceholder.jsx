export function LogoPlaceholder({ compact = false }) {
  return <div className={`flex items-center ${compact ? 'h-9 w-28' : 'h-10 w-40'} rounded-lg border border-dashed border-[#bfcdb9] bg-white/70 px-3`} aria-label="Reedshelf logo placeholder"><span className="text-xs font-semibold tracking-[0.18em] text-[#7c8e85]">LOGO PLACEHOLDER</span></div>;
}
