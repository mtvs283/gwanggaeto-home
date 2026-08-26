import type { Metadata } from "next";
import JamoAppFrame from "@/components/JamoAppFrame";

export const metadata: Metadata = {
  title: "GWANGGAETO Jamo | Hangeul",
  description: "Learn Hangul letters through the GWANGGAETO jamo app.",
};

export default function HangeulJamoPage() {
  return <JamoAppFrame />;
}
