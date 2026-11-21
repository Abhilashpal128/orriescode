export default function BrandMark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <ellipse cx="24" cy="24" rx="8" ry="20" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="24" cy="24" rx="8" ry="20" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="8" ry="20" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 24 24)" />
  </svg>
}
