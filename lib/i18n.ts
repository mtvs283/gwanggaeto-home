import ar from "@/locales/ar.json";
import bn from "@/locales/bn.json";
import de from "@/locales/de.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import fil from "@/locales/fil.json";
import fr from "@/locales/fr.json";
import ha from "@/locales/ha.json";
import hi from "@/locales/hi.json";
import id from "@/locales/id.json";
import ja from "@/locales/ja.json";
import kk from "@/locales/kk.json";
import km from "@/locales/km.json";
import ko from "@/locales/ko.json";
import ky from "@/locales/ky.json";
import mn from "@/locales/mn.json";
import my from "@/locales/my.json";
import ne from "@/locales/ne.json";
import ru from "@/locales/ru.json";
import sw from "@/locales/sw.json";
import th from "@/locales/th.json";
import uz from "@/locales/uz.json";
import vi from "@/locales/vi.json";
import zhCN from "@/locales/zh-CN.json";
import zhTW from "@/locales/zh-TW.json";
import { homeI18n, type HomeI18nLocale, type HomeMessages } from "./homeI18n";
import { headerI18n, type HeaderMessages } from "./headerI18n";

export type Messages = typeof en;

/** Combined message shape passed to next-intl (hero JSON + home + header). */
export type AppMessages = Messages & {
  home: HomeMessages;
  header: HeaderMessages;
};

export type LocaleCode =
  | "ko"
  | "en"
  | "ja"
  | "zh-CN"
  | "zh-TW"
  | "vi"
  | "th"
  | "id"
  | "mn"
  | "ru"
  | "uz"
  | "kk"
  | "ky"
  | "ne"
  | "my"
  | "km"
  | "fil"
  | "hi"
  | "bn"
  | "ar"
  | "es"
  | "fr"
  | "de"
  | "sw"
  | "ha";

export interface LocaleMeta {
  /** BCP-47-ish code used as the storage value and `<html lang>`. */
  code: LocaleCode;
  /** Endonym: the language name written in its own language. */
  label: string;
  /** Representative flag emoji shown in the toggle and list. */
  flag: string;
  /** Right-to-left script. */
  rtl?: boolean;
}

/** The 25 supported locales, in display order. `en` is the fallback. */
export const LOCALES: LocaleMeta[] = [
  { code: "en", label: "English", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "ko", label: "\uD55C\uAD6D\uC5B4", flag: "\u{1F1F0}\u{1F1F7}" },
  { code: "ja", label: "\u65E5\u672C\u8A9E", flag: "\u{1F1EF}\u{1F1F5}" },
  { code: "zh-CN", label: "\u7B80\u4F53\u4E2D\u6587", flag: "\u{1F1E8}\u{1F1F3}" },
  { code: "zh-TW", label: "\u7E41\u9AD4\u4E2D\u6587", flag: "\u{1F1F9}\u{1F1FC}" },
  { code: "vi", label: "Ti\u1EBFng Vi\u1EC7t", flag: "\u{1F1FB}\u{1F1F3}" },
  { code: "th", label: "\u0E44\u0E17\u0E22", flag: "\u{1F1F9}\u{1F1ED}" },
  { code: "id", label: "Bahasa Indonesia", flag: "\u{1F1EE}\u{1F1E9}" },
  { code: "mn", label: "\u041C\u043E\u043D\u0433\u043E\u043B", flag: "\u{1F1F2}\u{1F1F3}" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", flag: "\u{1F1F7}\u{1F1FA}" },
  { code: "uz", label: "O\u02BBzbekcha", flag: "\u{1F1FA}\u{1F1FF}" },
  { code: "kk", label: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430", flag: "\u{1F1F0}\u{1F1FF}" },
  { code: "ky", label: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430", flag: "\u{1F1F0}\u{1F1EC}" },
  { code: "ne", label: "\u0928\u0947\u092A\u093E\u0932\u0940", flag: "\u{1F1F3}\u{1F1F5}" },
  { code: "my", label: "\u1019\u103C\u1014\u103A\u1019\u102C", flag: "\u{1F1F2}\u{1F1F2}" },
  { code: "km", label: "\u1781\u17D2\u1798\u17C2\u179A", flag: "\u{1F1F0}\u{1F1ED}" },
  { code: "fil", label: "Filipino", flag: "\u{1F1F5}\u{1F1ED}" },
  { code: "hi", label: "\u0939\u093F\u0928\u094D\u0926\u0940", flag: "\u{1F1EE}\u{1F1F3}" },
  { code: "bn", label: "\u09AC\u09BE\u0982\u09B2\u09BE", flag: "\u{1F1E7}\u{1F1E9}" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "\u{1F1F8}\u{1F1E6}", rtl: true },
  { code: "es", label: "Espa\u00F1ol", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "fr", label: "Fran\u00E7ais", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "de", label: "Deutsch", flag: "\u{1F1E9}\u{1F1EA}" },
  { code: "sw", label: "Kiswahili", flag: "\u{1F1F0}\u{1F1EA}" },
  { code: "ha", label: "Hausa", flag: "\u{1F1F3}\u{1F1EC}" },
];

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALE_STORAGE_KEY = "gwanggaeto_locale";

const RAW_MESSAGES: Record<LocaleCode, Messages> = {
  ko,
  en,
  ja,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  vi,
  th,
  id,
  mn,
  ru,
  uz,
  kk,
  ky,
  ne,
  my,
  km,
  fil,
  hi,
  bn,
  ar,
  es,
  fr,
  de,
  sw,
  ha,
};

const LOCALE_CODES = LOCALES.map((l) => l.code);

export function isLocaleCode(value: string | null | undefined): value is LocaleCode {
  return !!value && (LOCALE_CODES as string[]).includes(value);
}

export function getLocaleMeta(code: LocaleCode): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

export function isRtl(code: LocaleCode): boolean {
  return getLocaleMeta(code).rtl === true;
}

/**
 * Map a raw `navigator.language` value to one of the supported locales.
 * Tries an exact (case-insensitive) match first, then the primary subtag
 * (e.g. "en-US" -> "en", "ne-NP" -> "ne"). Returns null if unsupported.
 */
export function matchNavigatorLocale(raw: string | null | undefined): LocaleCode | null {
  if (!raw) return null;
  const lower = raw.toLowerCase();

  const exact = LOCALE_CODES.find((c) => c.toLowerCase() === lower);
  if (exact) return exact;

  const primary = lower.split("-")[0];
  const byPrimary = LOCALE_CODES.find((c) => c.toLowerCase().split("-")[0] === primary);
  return byPrimary ?? null;
}

/**
 * Resolve the initial locale on the client following the required priority:
 * 1) saved value in localStorage
 * 2) navigator.language match
 * 3) en fallback
 */
export function detectLocale(): LocaleCode {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocaleCode(stored)) return stored;
  } catch {
    // localStorage may be unavailable (private mode, blocked cookies, etc.)
  }

  const languages =
    typeof navigator !== "undefined"
      ? [navigator.language, ...(navigator.languages ?? [])]
      : [];
  for (const lang of languages) {
    const matched = matchNavigatorLocale(lang);
    if (matched) return matched;
  }

  return DEFAULT_LOCALE;
}

export function persistLocale(code: LocaleCode): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, code);
  } catch {
    // Ignore write failures (e.g. storage disabled).
  }
}

type JsonObject = { [key: string]: unknown };

/**
 * Deep-merge `override` onto `base`, treating empty strings and missing keys
 * in `override` as "untranslated" so they fall back to the base (en) value.
 */
function mergeWithFallback<T>(base: T, override: unknown): T {
  if (
    base !== null &&
    typeof base === "object" &&
    !Array.isArray(base)
  ) {
    const result: JsonObject = {};
    const baseObj = base as JsonObject;
    const overrideObj =
      override && typeof override === "object" && !Array.isArray(override)
        ? (override as JsonObject)
        : {};
    for (const key of Object.keys(baseObj)) {
      result[key] = mergeWithFallback(baseObj[key], overrideObj[key]);
    }
    return result as T;
  }

  if (typeof override === "string") {
    return (override.trim() === "" ? base : override) as T;
  }

  return (override === undefined || override === null ? base : override) as T;
}

// Maps our locale codes to the homeI18n table keys. homeI18n only ships 9
// languages; any locale not listed here uses the en home content.
const HOME_I18N_BY_LOCALE: Partial<Record<LocaleCode, HomeI18nLocale>> = {
  ko: "ko",
  en: "en",
  ja: "ja",
  "zh-CN": "zhCN",
  "zh-TW": "zhTW",
  vi: "vi",
  th: "th",
  id: "id",
  mn: "mn",
  ru: "ru",
  uz: "uz",
  ne: "ne",
  my: "my",
  km: "km",
  hi: "hi",
  bn: "bn",
  kk: "kk",
  ky: "ky",
  fil: "fil",
  ar: "ar",
  es: "es",
  fr: "fr",
  de: "de",
  sw: "sw",
  ha: "ha",
};

function getHomeMessages(code: LocaleCode): HomeMessages {
  const key = HOME_I18N_BY_LOCALE[code];
  if (!key || key === "en") return homeI18n.en;
  // Per-key fallback to en in case a value is ever left blank.
  return mergeWithFallback(homeI18n.en, homeI18n[key]);
}

function getHeaderMessages(code: LocaleCode): HeaderMessages {
  if (code === DEFAULT_LOCALE) return headerI18n.en;
  // headerI18n is keyed by the exact locale code; fall back to en per key.
  return mergeWithFallback(headerI18n.en, headerI18n[code]);
}

/** Build the messages for a locale, falling back to en for empty/missing keys. */
export function getMessages(code: LocaleCode): AppMessages {
  const hero =
    code === DEFAULT_LOCALE
      ? RAW_MESSAGES[DEFAULT_LOCALE]
      : mergeWithFallback(RAW_MESSAGES[DEFAULT_LOCALE], RAW_MESSAGES[code]);
  return {
    ...hero,
    home: getHomeMessages(code),
    header: getHeaderMessages(code),
  };
}
