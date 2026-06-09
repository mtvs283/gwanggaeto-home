import Link from "next/link"

const notices = [
  {
    id: 1,
    badge: "Class",
    badgeKo: "수업 안내",
    title: "Holiday schedule: no classes Jul 17",
    titleKo: "제헌절 휴강 안내",
    date: "2026.07.17",
    category: "class",
  },
  {
    id: 2,
    badge: "Event",
    badgeKo: "이벤트",
    title: "50% off your first month — new members only",
    titleKo: "신규 가입 할인",
    date: "2026.06.25",
    category: "event",
  },
  {
    id: 3,
    badge: "Platform",
    badgeKo: "플랫폼",
    title: "Live classroom switching from Zoom to our own system",
    titleKo: "강의실 변경",
    date: "2026.06.20",
    category: "platform",
  },
]

const badgeStyles: Record<string, string> = {
  class: "bg-yellow-400/15 text-yellow-400",
  event: "bg-teal-400/15 text-teal-400",
  platform: "bg-purple-400/15 text-purple-300",
}

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 max-w-4xl mx-auto">

      {/* Breadcrumb */}
      <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6">
        Learning Plaza &nbsp;›&nbsp;{" "}
        <span className="text-yellow-400">Notice</span>
      </p>

      {/* Hero */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-yellow-400 border border-yellow-400/30 rounded-full px-3 py-1 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          Announcements
        </div>
        <div>
          <span className="text-4xl font-black tracking-tight">Notice</span>
          <span className="text-sm text-stone-500 ml-3">공지사항</span>
        </div>
        <p className="text-sm text-stone-400 mt-2">
          Class schedules, platform updates, and event announcements.
        </p>
        <p className="text-xs text-stone-600 mt-1">
          수업 일정, 플랫폼 업데이트, 이벤트 소식을 확인하세요.
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap mb-6">
        {[
          { en: "All", ko: "전체" },
          { en: "Class", ko: "수업 안내" },
          { en: "Platform", ko: "플랫폼" },
          { en: "Event", ko: "이벤트" },
        ].map((chip, i) => (
          <button
            key={chip.en}
            className={`text-xs px-4 py-1.5 rounded-full border transition ${
              i === 0
                ? "border-yellow-400/50 text-yellow-400 bg-yellow-400/10"
                : "border-white/15 text-stone-400 hover:border-white/30"
            }`}
          >
            {chip.en}{" "}
            <span className="text-[10px] text-stone-600 ml-0.5">{chip.ko}</span>
          </button>
        ))}
      </div>

      {/* Notice list */}
      <div className="flex flex-col gap-3">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:border-yellow-400/30 transition cursor-pointer"
          >
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-md whitespace-nowrap ${badgeStyles[notice.category]}`}
            >
              {notice.badge}
            </span>
            <span className="flex-1 text-sm font-medium text-stone-100">
              {notice.title}
              <span className="text-xs text-stone-600 ml-2">{notice.titleKo}</span>
            </span>
            <span className="text-xs text-stone-600 whitespace-nowrap">{notice.date}</span>
          </div>
        ))}
      </div>

      {/* Login banner */}
      <div className="mt-6 flex items-center justify-between bg-white/5 border border-yellow-400/20 rounded-2xl px-5 py-4 gap-4">
        <div>
          <p className="text-sm text-stone-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1.5 -mt-0.5" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Log in to read all notices.
          </p>
          <p className="text-xs text-stone-600 mt-0.5">
            더 많은 공지사항은 로그인 후 확인할 수 있어요.
          </p>
        </div>
        <Link
          href="/login"
          className="text-sm font-bold bg-yellow-400 text-black px-5 py-2 rounded-xl hover:bg-yellow-300 transition whitespace-nowrap"
        >
          Log in →
        </Link>
      </div>

    </div>
  )
}
