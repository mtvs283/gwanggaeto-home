"use client"

import type { FormEvent } from "react"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import LocaleToggle from "@/components/LocaleToggle"
import { useLocaleContext } from "@/components/LocaleProvider"
import { LOCALE_STORAGE_KEY } from "@/lib/i18n"

// 한글 도메인(약방.kr)은 href에서 punycode로 넣어야 안전하게 열린다
const YAKBANG_URL = "https://xn--vh3bp4o.kr/"

export default function GwanggaetoTeaserPage() {
  const th = useTranslations("home")
  const { locale, setLocale } = useLocaleContext()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(LOCALE_STORAGE_KEY)) setLocale("en")
    } catch {
      setLocale("en")
    }
  }, [setLocale])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Monoton&family=Nanum+Myeongjo:wght@700;800&family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Arabic:wght@400;700&family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Devanagari:wght@400;700&family=Noto+Sans+Khmer:wght@400;700&family=Noto+Sans+Myanmar:wght@400;700&family=Noto+Sans+Thai:wght@400;700&display=swap');

        @font-face {
          font-family: 'ShillaCulture';
          src: url('/fonts/Shilla_Culture-Bold.ttf') format('truetype');
          font-weight: 700;
          font-display: swap;
        }

        @keyframes neonPulse {
          0%, 100% {
            text-shadow:
              0 0 6px rgba(255,255,255,0.85),
              0 0 16px rgba(253,224,71,0.9),
              0 0 36px rgba(245,158,11,0.85),
              0 0 70px rgba(245,158,11,0.7);
          }
          45% {
            text-shadow:
              0 0 5px rgba(255,255,255,0.7),
              0 0 12px rgba(253,224,71,0.75),
              0 0 26px rgba(245,158,11,0.7),
              0 0 52px rgba(245,158,11,0.55);
          }
          47% { opacity: 0.82; }
          48% { opacity: 1; }
        }

        @keyframes sealFloat {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
        }

        .neon-ko {
          font-family: 'ShillaCulture', 'Black Han Sans', sans-serif;
          font-weight: 700;
          color: #fffbe8;
          letter-spacing: 0.04em;
          animation: neonPulse 3.6s ease-in-out infinite;
        }
        .neon-en {
          font-family: 'Monoton', cursive;
          color: #fde68a;
          letter-spacing: 0.12em;
          text-shadow:
            0 0 6px rgba(253,224,71,0.8),
            0 0 18px rgba(245,158,11,0.7),
            0 0 40px rgba(245,158,11,0.5);
        }
        .teaser-tagline-ko {
          font-family: 'ShillaCulture', 'Nanum Myeongjo', serif;
        }
        .teaser-i18n {
          font-family: 'Noto Sans', 'Noto Sans Arabic', 'Noto Sans Devanagari', 'Noto Sans Thai', 'Noto Sans Myanmar', 'Noto Sans Khmer', 'Noto Sans Bengali', system-ui, sans-serif;
        }
      `}</style>

      <LocaleToggle />

      {/* 까만 화면에 티저만 혼자 — 홈 히어로는 비치지 않음 */}
      <div className="fixed inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0a07] to-black" />
      </div>

      {/* 은은한 금색 글로우 */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-yellow-300/10 blur-[130px]" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-28 pt-24 text-center">
        <div className="max-w-4xl space-y-6">
          <h1 className="neon-ko text-7xl leading-none md:text-9xl">광개토</h1>

          <p className="neon-en text-3xl md:text-5xl">GWANGGAETO</p>

          <p
            className={`mx-auto max-w-2xl text-lg tracking-[0.12em] text-amber-100/95 md:text-2xl ${locale === "ko" ? "teaser-tagline-ko" : "teaser-i18n"}`}
          >
            {th("teaserWindow")}
          </p>

          <form
            onSubmit={handleSubmit}
            className="teaser-i18n mx-auto mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="flex-1 rounded-full border border-yellow-300/30 bg-black/50 px-5 py-3 text-white placeholder-stone-500 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              {th("teaserNotify")}
            </button>
          </form>

          {submitted ? (
            <p className="teaser-i18n text-sm text-yellow-300">{th("teaserSubmitted")}</p>
          ) : (
            <p className="teaser-i18n text-xs text-stone-300">{th("teaserFirstNotice")}</p>
          )}
        </div>
      </main>

      {/* 곧 문이 열릴 것이오 — 작은 뱃지 */}
      <div className="teaser-i18n fixed left-1/2 top-20 z-30 -translate-x-1/2 rounded-full border border-yellow-400/30 bg-black/45 px-4 py-1.5 text-xs tracking-[0.15em] text-yellow-300 backdrop-blur-md">
        {th("teaserComingSoon")}
      </div>

      {/* 도장 — 앞으로, 누르면 약방으로 */}
      <a
        href={YAKBANG_URL}
        aria-label="Return"
        title="Return"
        className="group fixed bottom-8 right-8 z-50 block"
        style={{ animation: "sealFloat 4s ease-in-out infinite" }}
      >
        <img
          src="/images/stamp_gwanggaeto_yakbang.png"
          alt="광개토 약방 인장"
          className="w-28 drop-shadow-[0_0_18px_rgba(245,158,11,0.45)] transition duration-500 group-hover:scale-110 md:w-32"
        />
      </a>
    </div>
  )
}
