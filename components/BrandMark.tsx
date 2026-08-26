/** Wordmark with application-only trademark (™), not registered (®). */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <span className={className}>
      GWANGGAETO
      <sup className="ml-[0.06em] text-[0.38em] font-semibold tracking-normal">™</sup>
    </span>
  );
}
