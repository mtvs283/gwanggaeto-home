"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getLocaleMeta } from "@/lib/i18n";
import { useLocaleContext } from "./LocaleProvider";
import LocaleBottomSheet from "./LocaleBottomSheet";

export default function LocaleToggle() {
  const { locale } = useLocaleContext();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const current = getLocaleMeta(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed floating button at the bottom-center. Rendered through a portal so a
  // transformed/blurred ancestor (the hero box) can't trap its fixed position.
  const button = (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-label={`Change language (current: ${current.label})`}
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm text-white shadow-xl backdrop-blur-md transition hover:border-yellow-300/50 hover:bg-white/15"
    >
      <span className="text-lg leading-none">{current.flag}</span>
      <span className="font-semibold tracking-wide">{current.label}</span>
      <span aria-hidden className="text-xs opacity-70">
        {"\u2195"}
      </span>
    </button>
  );

  return (
    <>
      {mounted ? createPortal(button, document.body) : null}
      <LocaleBottomSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}
