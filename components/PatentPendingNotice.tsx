import { JAMO_PATENT_PENDING_LABEL } from "@/lib/patent";

export default function PatentPendingNotice({ className }: { className?: string }) {
  return <p className={className}>{JAMO_PATENT_PENDING_LABEL}</p>;
}
