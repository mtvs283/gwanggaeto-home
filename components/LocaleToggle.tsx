"use client";

import { useState } from "react";
import { getLocaleMeta } from "@/lib/i18n";
import { useLocaleContext } from "./LocaleProvider";
import LocaleBottomSheet from "./LocaleBottomSheet";

export default function LocaleToggle() {
  const { locale } = useLocaleContext();
  const [open, setOpen] = useState(false);
  const current = getLocaleMeta(locale);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Change language (current: ${current.label})`}
        className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm transition hover:bg-white/20"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <span className="font-semibold uppercase tracking-wide">
          {current.code}
        </span>
        <span aria-hidden className="text-xs opacity-70">
          {"\u2195"}
        </span>
      </button>

      <LocaleBottomSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}
