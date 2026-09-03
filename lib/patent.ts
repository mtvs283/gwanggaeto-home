/**
 * Public facts from the Korean patent application notice (INT26-164).
 * This is an application only — not a granted patent. Do not publish
 * DAS access codes, receipt numbers, or other notice-only identifiers.
 */
export const JAMO_PATENT = {
  country: "KR",
  applicationNumber: "10-2026-0160894",
  filedOn: "2026-08-26",
  titleEn:
    "SVG-based Hangul jamo stroke-order animation generation system with branch-stroke handling",
} as const;

export const JAMO_PATENT_PENDING_LABEL = `Patent pending · KR ${JAMO_PATENT.applicationNumber}`;
