"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import {
  DEFAULT_LOCALE,
  detectLocale,
  getMessages,
  isRtl,
  persistLocale,
  type LocaleCode,
} from "@/lib/i18n";

interface LocaleContextValue {
  locale: LocaleCode;
  setLocale: (code: LocaleCode) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleContext must be used within a LocaleProvider");
  }
  return ctx;
}

// External store so the client-only locale (localStorage / navigator.language)
// can be read with useSyncExternalStore. This keeps SSR + the first hydration
// render on the deterministic default and swaps to the detected locale after
// hydration, without a hydration mismatch or a setState-in-effect.
let storeLocale: LocaleCode | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): LocaleCode {
  if (storeLocale === null) storeLocale = detectLocale();
  return storeLocale;
}

function getServerSnapshot(): LocaleCode {
  return DEFAULT_LOCALE;
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function setStoreLocale(code: LocaleCode): void {
  storeLocale = code;
  persistLocale(code);
  for (const listener of listeners) listener();
}

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setLocale = useCallback((code: LocaleCode) => {
    setStoreLocale(code);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
  }, [locale]);

  const messages = useMemo(() => getMessages(locale), [locale]);
  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
