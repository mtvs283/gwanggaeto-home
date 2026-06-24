"use client";

import { useState } from "react";
import { getLocaleMeta } from "@/lib/i18n";
import { useLocaleContext } from "./LocaleProvider";
import LocaleBottomSheet from "./LocaleBottomSheet";

export default function LocaleToggle() {
  const { locale, preferredLocale, setLocale } = useLocaleContext();
  const [open, setOpen] = useState(false);

  const ko = getLocaleMeta("ko");
  const native = getLocaleMeta(preferredLocale);
  const isKo = locale === "ko";

  return (
    <>
      <div className="flex items-center gap-2">
        {/* 한국어 ⇄ 모국어 토글: 끄면(한국어) / 켜면(정한 언어) */}
        <div
          role="group"
          aria-label="Korean / your language"
          className="flex items-center rounded-full bg-white/10 p-0.5 text-sm"
        >
          <button
            type="button"
            onClick={() => setLocale("ko")}
            aria-pressed={isKo}
            className={`rounded-full px-3 py-1 transition ${
              isKo
                ? "bg-yellow-300 font-semibold text-black"
                : "text-stone-200 hover:bg-white/10"
            }`}
          >
            {ko.label}
          </button>
          <button
            type="button"
            onClick={() => setLocale(preferredLocale)}
            aria-pressed={!isKo}
            className={`flex items-center gap-1 rounded-full px-3 py-1 transition ${
              !isKo
                ? "bg-yellow-300 font-semibold text-black"
                : "text-stone-200 hover:bg-white/10"
            }`}
          >
            <span className="text-base leading-none">{native.flag}</span>
            {native.label}
          </button>
        </div>

        {/* 모국어 선택(25개 언어) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label="Choose your language"
          className="rounded-full bg-white/10 px-2.5 py-1.5 text-base leading-none transition hover:bg-white/20"
        >
          {"\u{1F310}"}
        </button>
      </div>

      <LocaleBottomSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}
