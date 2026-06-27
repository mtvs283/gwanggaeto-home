"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import LocaleToggle from "@/components/LocaleToggle"

const releaseWindows = [
  { date: "8.15", label: "첫 문이 열릴 수도" },
  { date: "9.01", label: "정식 행군 준비" },
  { date: "9.24", label: "추석 전후 최종 관문" },
]

export default function GwanggaetoTeaserPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-black text-white">
      <LocaleToggle />

      <div className="fixed inset-0 overflow-hidden">
        <img
          src="/images/gwanggaeto_hero.png"
          alt="Gwanggaeto and Sejong"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
      </div>

      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] left-[18%] text-yellow-200/30 text-5xl animate-pulse">ㄱ</div>
        <div className="absolute top-[22%] right-[20%] text-yellow-300/20 text-6xl animate-bounce">ㅇ</div>
        <div className="absolute top-[38%] left-[8%] text-white/15 text-4xl animate-pulse">ㅁ</div>
        <div className="absolute top-[48%] right-[12%] text-yellow-100/20 text-5xl animate-pulse">ㅅ</div>
        <div className="absolute bottom-[32%] left-[24%] text-yellow-300/20 text-7xl animate-bounce">ㅣ</div>
        <div className="absolute bottom-[20%] right-[28%] text-white/10 text-5xl animate-pulse">ㆍ</div>
      </div>

      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-yellow-400/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-amber-300/10 blur-[140px] rounded-full" />

      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-10">
        <div>
          <div className="text-stone-200 text-xs tracking-[0.4em] uppercase">
            Onmaeum Korean
          </div>
          <div className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white">
            GWANGGAETO
          </div>
        </div>
      </header>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-10 pt-28 text-center">
        <div className="max-w-5xl space-y-8 backdrop-blur-[1px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/25 bg-black/35 px-5 py-2 text-sm uppercase tracking-[0.25em] text-yellow-300 backdrop-blur-md">
            곧 문이 열릴 것이오
          </div>

          <h1
            className="-rotate-6 text-7xl leading-none text-yellow-300 drop-shadow-2xl md:text-9xl"
            style={{
              fontFamily: "\"ShillaCulture\", serif",
              textShadow: "0 4px 40px rgba(251, 191, 36, 0.45)",
            }}
          >
            광개토
          </h1>

          <p className="-rotate-2 font-serif text-4xl italic tracking-[0.08em] text-amber-400 md:text-6xl">
            GWANGGAETO
          </p>

          <p className="mx-auto max-w-2xl -rotate-1 text-lg leading-relaxed text-stone-300 md:text-xl">
            약방에서 모은 영수증과 뭉치의 성장.
            <br />
            그 모든 것이 광개토에서 펼쳐집니다.
            <br />
            지금은 문을 닫고, 게임인 척 준비 중이오.
          </p>

          <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-3">
            {releaseWindows.map((item) => (
              <div
                key={item.date}
                className="rounded-2xl border border-yellow-300/20 bg-black/35 p-4 backdrop-blur-md"
              >
                <div className="text-2xl font-black text-yellow-300">{item.date}</div>
                <div className="mt-1 text-xs leading-relaxed text-stone-300">{item.label}</div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-md -rotate-1 flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="flex-1 rounded-xl border border-yellow-300/30 bg-black/50 px-5 py-3 text-white placeholder-stone-500 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="rounded-xl bg-yellow-400 px-8 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              알림 받기
            </button>
          </form>

          {submitted && (
            <p className="text-sm text-yellow-300 animate-pulse">
              알림 등록이 완료되었소.
            </p>
          )}

          <p className="text-xs text-stone-400">
            광개토 오픈 시 가장 먼저 알려드리겠소.
          </p>
        </div>
      </main>

      <a
        href="https://yakbang-two.vercel.app/"
        className="fixed bottom-8 right-8 z-30 transition duration-500 hover:scale-110"
        aria-label="약방광개토로 돌아가기"
      >
        <img
          src="/images/stamp_gwanggaeto_yakbang.png"
          alt="광개토 약방 인장"
          className="w-24 rotate-6 opacity-80 md:w-28"
        />
      </a>

      <div className="fixed left-5 bottom-5 z-30 group cursor-pointer">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/20 bg-black/40 backdrop-blur-md hover:scale-105 transition duration-300">
          <img
            src="/images/moongchi_stickers.png"
            alt="Moongchi"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -top-12 left-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl text-sm whitespace-nowrap">
          문지기 뭉치가 준비 중
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/5 bg-black/80 px-6 py-8 text-center text-stone-500">
        <div className="mb-2 text-xl font-black tracking-[0.25em] text-white">GWANGGAETO</div>
        <div className="text-sm">Onmaeum Korean</div>
        <div className="mt-4 text-xs">
          <a href="https://yakbang-two.vercel.app/" className="text-yellow-300 hover:underline">
            약방광개토로 돌아가기
          </a>
        </div>
      </footer>
    </div>
  )
}
