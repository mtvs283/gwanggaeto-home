"use client"
import { useState } from "react"

const worlds = [
  {
    id: "hangeul",
    label: "Hangeul",
    ko: "한글",
    color: "#d4a843",
    materials: [
      { type: "Worksheet", title: "Vowel writing practice", titleKo: "모음 쓰기 연습", meta: "PDF · 4p", locked: false },
      { type: "Word Card", title: "Consonant flashcards", titleKo: "자음 플래시카드", meta: "PNG · 14장", locked: false },
      { type: "Picture Card", title: "Syllable picture cards", titleKo: "음절 그림카드", meta: "PNG · 20장", locked: true },
      { type: "Worksheet", title: "Batchim writing practice", titleKo: "받침 쓰기 연습", meta: "PDF · 3p", locked: true },
    ],
  },
  {
    id: "study",
    label: "Study in Korea",
    ko: "유학",
    color: "#378ADD",
    materials: [
      { type: "Worksheet", title: "Campus life expressions", titleKo: "캠퍼스 생활 표현", meta: "PDF · 3p", locked: false },
      { type: "Word Card", title: "University vocabulary cards", titleKo: "대학 생활 단어카드", meta: "PNG · 18장", locked: true },
      { type: "Picture Card", title: "School notice reading", titleKo: "학교 공지 읽기", meta: "PDF · 2p", locked: true },
      { type: "Worksheet", title: "Dormitory Korean", titleKo: "기숙사 한국어", meta: "PDF · 2p", locked: true },
    ],
  },
  {
    id: "work",
    label: "Work Korean",
    ko: "직장",
    color: "#E24B4A",
    materials: [
      { type: "Worksheet", title: "Factory safety Korean", titleKo: "공장 안전 한국어", meta: "PDF · 5p", locked: false },
      { type: "Word Card", title: "Workplace expressions", titleKo: "직장 표현 카드", meta: "PNG · 16장", locked: true },
      { type: "Worksheet", title: "EPS Korean practice", titleKo: "EPS 한국어 연습", meta: "PDF · 6p", locked: true },
      { type: "Picture Card", title: "Work safety picture cards", titleKo: "안전 그림카드", meta: "PNG · 12장", locked: true },
    ],
  },
  {
    id: "daily",
    label: "Daily Korean",
    ko: "일상",
    color: "#888780",
    materials: [
      { type: "Worksheet", title: "Shopping expressions", titleKo: "쇼핑 표현", meta: "PDF · 3p", locked: false },
      { type: "Word Card", title: "Hospital & pharmacy Korean", titleKo: "병원·약국 한국어", meta: "PNG · 12장", locked: true },
      { type: "Worksheet", title: "Bank & post office Korean", titleKo: "은행·우체국 한국어", meta: "PDF · 2p", locked: true },
      { type: "Picture Card", title: "Daily life picture cards", titleKo: "일상 그림카드", meta: "PNG · 16장", locked: true },
    ],
  },
  {
    id: "travel",
    label: "Travel Korean",
    ko: "여행",
    color: "#1D9E75",
    materials: [
      { type: "Worksheet", title: "Taxi & transport phrases", titleKo: "택시·교통 표현", meta: "PDF · 2p", locked: false },
      { type: "Word Card", title: "Restaurant ordering cards", titleKo: "식당 주문 카드", meta: "PNG · 10장", locked: true },
      { type: "Worksheet", title: "Shopping & directions", titleKo: "쇼핑·길 찾기", meta: "PDF · 3p", locked: true },
      { type: "Picture Card", title: "Travel situation cards", titleKo: "여행 상황 카드", meta: "PNG · 14장", locked: true },
    ],
  },
]

const typeIcon: Record<string, string> = {
  "Worksheet": "🗂",
  "Word Card": "🃏",
  "Picture Card": "🖼",
}

export default function MaterialsPage() {
  const [active, setActive] = useState("hangeul")
  const current = worlds.find((w) => w.id === active)!

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 max-w-4xl mx-auto">

      {/* Breadcrumb */}
      <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6">
        Learning Plaza &nbsp;›&nbsp;{" "}
        <span className="text-yellow-400">Materials</span>
      </p>

      {/* Hero */}
      <div className="relative mb-6 rounded-2xl bg-[#0d0d0d] p-6 overflow-hidden border border-white/5">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-yellow-400 border border-yellow-400/30 rounded-full px-3 py-1 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            Study Materials
          </div>
          <div>
            <span className="text-4xl font-black tracking-tight">Materials</span>
            <span className="text-sm text-stone-500 ml-3">자료실</span>
          </div>
          <p className="text-sm text-stone-400 mt-2">Worksheets, word cards, and picture cards organized by world.</p>
          <p className="text-xs text-stone-600 mt-1">세계관별로 정리된 학습지, 단어카드, 그림카드를 확인하세요.</p>
        </div>
      </div>

      {/* World selector - 3 top + 2 bottom */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {worlds.slice(0, 3).map((w) => (
          <button
            key={w.id}
            onClick={() => setActive(w.id)}
            className={`py-3 rounded-xl border text-sm font-medium transition ${
              active === w.id
                ? "border-yellow-400/50 text-yellow-400 bg-yellow-400/10"
                : "border-white/10 text-stone-400 hover:border-white/20"
            }`}
          >
            {w.label}
            <span className="block text-[10px] text-stone-600 mt-0.5">{w.ko}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {worlds.slice(3).map((w) => (
          <button
            key={w.id}
            onClick={() => setActive(w.id)}
            className={`py-3 rounded-xl border text-sm font-medium transition ${
              active === w.id
                ? "border-yellow-400/50 text-yellow-400 bg-yellow-400/10"
                : "border-white/10 text-stone-400 hover:border-white/20"
            }`}
          >
            {w.label}
            <span className="block text-[10px] text-stone-600 mt-0.5">{w.ko}</span>
          </button>
        ))}
      </div>

      {/* Section label */}
      <p className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-3 flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: current.color }}></span>
        {current.label} · {current.ko}
      </p>

      {/* Materials grid - 2x2 */}
      <div className="grid grid-cols-2 gap-3">
        {current.materials.map((m, i) => (
          <div
            key={i}
            className={`bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-yellow-400/30 transition ${m.locked ? "opacity-40" : ""}`}
          >
            <div className="h-16 bg-white/5 rounded-xl mb-3 flex items-center justify-center text-2xl">
              {typeIcon[m.type]}
            </div>
            <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: m.locked ? "#444" : current.color }}>
              {m.type}
            </p>
            <p className={`text-sm font-medium leading-snug ${m.locked ? "blur-sm select-none text-stone-600" : "text-stone-100"}`}>
              {m.title}
            </p>
            <p className={`text-xs mt-1 ${m.locked ? "blur-sm select-none text-stone-800" : "text-stone-600"}`}>
              {m.titleKo}
            </p>
            <p className="text-xs text-stone-700 mt-2">{m.meta}</p>
          </div>
        ))}
      </div>

      {/* Login banner */}
      <div className="mt-6 flex items-center justify-between bg-white/5 border border-yellow-400/20 rounded-2xl px-5 py-4 gap-4">
        <div>
          <p className="text-sm text-stone-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1.5 -mt-0.5" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Log in to preview all materials.
          </p>
          <p className="text-xs text-stone-600 mt-0.5">더 많은 자료는 로그인 후 미리볼 수 있어요.</p>
        </div>
        <a href="/login" className="text-sm font-bold bg-yellow-400 text-black px-5 py-2 rounded-xl hover:bg-yellow-300 transition whitespace-nowrap">
          Log in →
        </a>
      </div>

    </div>
  )
}
