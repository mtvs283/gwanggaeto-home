import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JamoAppFrame from "@/components/JamoAppFrame";
import { JAMO_HANGEUL_MODULES, isJamoHangeulModule } from "@/lib/jamoApp";

export const metadata: Metadata = {
  title: "GWANGGAETO Jamo | Hangeul",
  description: "Learn Hangul letters through the GWANGGAETO jamo app.",
};

export function generateStaticParams() {
  return JAMO_HANGEUL_MODULES.map((module) => ({ module }));
}

export default async function HangeulJamoModulePage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module } = await params;
  if (!isJamoHangeulModule(module)) notFound();
  return <JamoAppFrame module={module} />;
}
