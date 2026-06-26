"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES } from "@/lib/i18n";
import { useLocaleContext } from "./LocaleProvider";

const SWIPE_CLOSE_THRESHOLD = 90;

export default function LocaleBottomSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale, setLocale } = useLocaleContext();
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startYRef = useRef<number | null>(null);

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
    setDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current === null) return;
    const delta = e.touches[0].clientY - startYRef.current;
    setDragY(delta > 0 ? delta : 0);
  };

  const handleTouchEnd = () => {
    setDragging(false);
    startYRef.current = null;
    // Reset the offset either way so the next open starts from rest.
    setDragY(0);
    if (dragY > SWIPE_CLOSE_THRESHOLD) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        open ? "" : "pointer-events-none invisible"
      }`}
      aria-hidden={!open}
    >
      {/* Scrim */}
      <button
        type="button"
        aria-label="Close language menu"
        onClick={onClose}
        className={`absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Select language"
        style={{
          transform: open
            ? `translateY(${dragY}px)`
            : "translateY(100%)",
          transition: dragging ? "none" : "transform 300ms ease-out",
        }}
        className="absolute inset-x-0 bottom-0 mx-auto max-h-[80vh] w-full max-w-md overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-950/95 text-white shadow-2xl backdrop-blur-xl"
      >
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="cursor-grab touch-none select-none pt-3 pb-2"
        >
          <div className="mx-auto h-1.5 w-12 rounded-full bg-white/25" />
        </div>

        <div className="px-5 pb-1 pt-1">
          <div className="text-xs uppercase tracking-[0.25em] text-yellow-200/80">
            Language
          </div>
        </div>

        <ul className="max-h-[64vh] overflow-y-auto overscroll-contain px-2 pb-[max(1rem,env(safe-area-inset-bottom))] pt-1">
          {LOCALES.map((item) => {
            const selected = item.code === locale;
            return (
              <li key={item.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(item.code);
                    onClose();
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    selected
                      ? "bg-yellow-300/15 text-yellow-200"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="text-2xl leading-none">{item.flag}</span>
                  <span className="flex-1 text-base font-medium">
                    {item.label}
                  </span>
                  {selected && (
                    <span aria-hidden className="text-lg text-yellow-300">
                      {"\u2713"}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
