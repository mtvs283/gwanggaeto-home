import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import PatentPendingNotice from "@/components/PatentPendingNotice";
import {
  JAMO_HANGEUL_APPS,
  type JamoHangeulModule,
} from "@/lib/jamoApp";

export default function JamoAppFrame({
  module = "vowels",
}: {
  module?: JamoHangeulModule;
}) {
  const app = JAMO_HANGEUL_APPS[module];

  return (
    <div className="flex h-dvh flex-col bg-black text-white">
      <header className="shrink-0 border-b border-white/10 bg-black">
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link
            href="/#hangeul"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-200 transition hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black"
          >
            Home
          </Link>
          <div className="text-center">
            <BrandMark className="text-sm font-black tracking-[0.22em] md:text-base" />
            <div className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-yellow-200">
              Jamo
            </div>
          </div>
          <a
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-yellow-300/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-200 transition hover:bg-yellow-300 hover:text-black"
          >
            Open
          </a>
        </div>
        <PatentPendingNotice className="border-t border-white/10 px-4 py-1.5 text-center text-[10px] tracking-normal text-stone-500" />
      </header>
      <iframe
        src={app.url}
        title={app.title}
        className="min-h-0 w-full flex-1 border-0 bg-white"
        allow="microphone; autoplay; clipboard-read; clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
