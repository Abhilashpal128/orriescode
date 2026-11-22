export default function BrandMark({ className = '' }: { className?: string }) {
  return <img
    className={`brand-symbol ${className}`.trim()}
    src="/images/brand/orris-code-mark.svg"
    width="44"
    height="44"
    alt=""
    aria-hidden="true"
  />
}
