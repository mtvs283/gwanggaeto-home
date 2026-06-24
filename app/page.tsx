"use client"

import { useTranslations } from "next-intl"
import LocaleToggle from "@/components/LocaleToggle"

function HomeLink() {
  return (
    <a
      href="#top"
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-200 backdrop-blur-md transition hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black"
    >
      Home
    </a>
  )
}

export default function GwanggaetoCinematicLobbyHomepage() {
  const th = useTranslations("home")
  // 영어 = 광개토 시각 정체성(제목/버튼 등 항상 영어 고정).
  // 학습 내용은 th(...)가 선택된 로케일 언어(토글: 한국어 ⇄ 정한 모국어) 한 가지로 표시.

  const worlds = [
    {
      title: "Hangeul",
      sub: "The Core Gateway",
      desc: "All learning begins with Korean sounds and letters.",
      ko: "한국어 소리와 글자부터 시작하세요.",
      koKey: "startKoreanSoundLetters",
      color: "from-yellow-950/90 to-black/90",
      href: "#hangeul",
      required: true,
    },
    {
      title: "Study in Korea",
      sub: "University & Campus Life",
      desc: "Essential Korean for international students.",
      ko: "대학 생활과 유학 생활에 필요한 한국어를 배웁니다.",
      koKey: "schoolKoreanDesc",
      color: "from-blue-950/80 to-black/80",
      href: "#study",
    },
    {
      title: "Work Korean",
      sub: "Work & Factory Korean",
      desc: "Korean for jobs, factories, and daily work life.",
      ko: "일터와 생활 현장에서 바로 쓰는 한국어를 배웁니다.",
      koKey: "workKoreanShortDesc",
      color: "from-red-950/80 to-black/80",
      href: "#work",
    },
    {
      title: "Daily Korean",
      sub: "Real Life Conversation",
      desc: "Practice the Korean used in everyday situations.",
      ko: "생활 속 실제 대화를 상황별로 연습합니다.",
      koKey: "dailyConversationDesc",
      color: "from-zinc-900/90 to-black/90",
      href: "#daily",
    },
    {
      title: "Travel Korean",
      sub: "Korea Survival Guide",
      desc: "Taxi, restaurants, shopping, and transportation.",
      ko: "택시, 식당, 쇼핑, 교통 표현을 익힙니다.",
      koKey: "travelExpressionDesc",
      color: "from-emerald-950/80 to-black/80",
      href: "#travel",
    },
    {
      title: "Learning Plaza",
      sub: "Resources & Community",
      desc: "Class materials, notices, study guides, and live classroom links.",
      ko: "학습 자료와 온라인 수업 입구를 한곳에서 확인하세요.",
      koKey: "learningAccessDesc",
      color: "from-purple-950/80 to-black/80",
      href: "#plaza",
    },
  ]

  const hangeulButtons = [
    { label: "Vowels App", ko: "모음 배우기", koKey: "learnVowels", href: "/hangeul/vowels" },
    { label: "Consonants App", ko: "자음 배우기", koKey: "learnConsonants", href: "/hangeul/consonants" },
    { label: "Syllable App", ko: "실라블 배우기", koKey: "learnSyllables", href: "/hangeul/syllables" },
    { label: "Final Consonants App", ko: "받침 배우기", koKey: "learnFinalConsonants", href: "/hangeul/final-consonants" },
    { label: "Hangeul Class", ko: "한글 기초반 신청", koKey: "applyHangeulBasic", href: "/apply/hangeul" },
  ]

  const plazaButtons = [
    { label: "Materials", ko: "자료실", koKey: "resources", href: "/materials" },
    { label: "Notice", ko: "공지사항", koKey: "notices", href: "/notice" },
    { label: "Community Board", ko: "게시판", koKey: "board", href: "/community" },
    { label: "Class Application", ko: "강의 신청", koKey: "applyClass", href: "/apply" },
    { label: "Enter Classroom", ko: "강의실 입장", koKey: "enterClassroom", href: "/classroom" },
    { label: "Teacher & Institution", ko: "교사·기관 문의", koKey: "teacherInstitutionInquiry", href: "#teachers" },
  ]

  const learningSections = [
    {
      id: "study",
      eyebrow: "Study in Korea",
      title: "University & Campus Korean",
      koTitle: "유학 한국어",
      koTitleKey: "studyAbroadKorean",
      desc: "Learn the Korean needed for campus life, school notices, departments, housing, and student services.",
      koDesc: "대학 생활, 학교 공지, 학과, 기숙사, 학생 지원 서비스에 필요한 한국어를 배웁니다.",
      koDescKey: "schoolKoreanDesc",
      buttons: ["Campus Life", "School Notices", "Presentation Korean", "Study Guides"],
      color: "border-blue-300/20 bg-blue-950/20",
    },
    {
      id: "work",
      eyebrow: "Work Korean",
      title: "Korean for Work and Daily Jobs",
      koTitle: "일터 한국어",
      koTitleKey: "workKorean",
      desc: "Practice workplace Korean for factories, schedules, safety, instructions, and real communication at work.",
      koDesc: "공장, 일정, 안전, 업무 지시, 직장 생활 대화에 필요한 한국어를 연습합니다.",
      koDescKey: "workKoreanDesc",
      buttons: ["Factory Korean", "Safety Korean", "Work Dialogues", "EPS Practice"],
      color: "border-red-300/20 bg-red-950/20",
    },
    {
      id: "daily",
      eyebrow: "Daily Korean",
      title: "Real Life Conversation Practice",
      koTitle: "생활 한국어",
      koTitleKey: "dailyKorean",
      desc: "Practice Korean for greetings, shopping, hospitals, banks, phone calls, and everyday problem solving.",
      koDesc: "인사, 쇼핑, 병원, 은행, 전화, 일상 문제 해결 표현을 상황별로 배웁니다.",
      koDescKey: "dailyKoreanDesc",
      buttons: ["Conversation", "Role Play", "Listening", "Word Cards"],
      color: "border-stone-300/20 bg-stone-900/40",
    },
    {
      id: "travel",
      eyebrow: "Travel Korean",
      title: "Korea Survival Guide",
      koTitle: "여행 한국어",
      koTitleKey: "travelKorean",
      desc: "Learn the Korean you need for taxis, restaurants, shopping, directions, transportation, and travel emergencies.",
      koDesc: "택시, 식당, 쇼핑, 길 찾기, 교통, 여행 중 긴급 상황 표현을 배웁니다.",
      koDescKey: "travelKoreanDesc",
      buttons: ["Taxi", "Restaurant", "Shopping", "Transportation"],
      color: "border-emerald-300/20 bg-emerald-950/20",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white scroll-smooth">
      {/* Hero Background */}
      <div className="absolute left-0 top-0 h-screen w-full overflow-hidden">
        <img
          src="/images/main.png"
          alt="Gwanggaeto and Sejong"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
      </div>

      {/* Floating Fog */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] left-[18%] text-yellow-200/30 text-5xl animate-pulse">ㄱ</div>
        <div className="absolute top-[22%] right-[20%] text-yellow-300/20 text-6xl animate-bounce">ㅇ</div>
        <div className="absolute top-[38%] left-[8%] text-white/15 text-4xl animate-pulse">ㅁ</div>
        <div className="absolute top-[48%] right-[12%] text-yellow-100/20 text-5xl animate-pulse">ㅅ</div>
        <div className="absolute bottom-[32%] left-[24%] text-yellow-300/20 text-7xl animate-bounce">ㅣ</div>
        <div className="absolute bottom-[20%] right-[28%] text-white/10 text-5xl animate-pulse">ㆍ</div>
      </div>

      {/* Gold Light Effects */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-yellow-400/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-amber-300/10 blur-[140px] rounded-full" />

      {/* Navigation (fixed so the logo + language toggle float like the corner badges) */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#top" className="block">
          <div className="text-stone-200 text-xs tracking-[0.4em] uppercase">
            Onmaeum Korean
          </div>
          <div className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white">
            GWANGGAETO
          </div>
        </a>

        <LocaleToggle />
      </header>

      {/* Main Lobby */}
      <main id="top" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-8 text-center">
        <div className="max-w-4xl translate-y-10 space-y-5 backdrop-blur-[2px] [@media(max-height:800px)]:translate-y-6 [@media(max-height:800px)]:space-y-3">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-sm tracking-[0.25em] uppercase text-stone-200 [@media(max-height:800px)]:py-1.5 [@media(max-height:800px)]:text-xs">
            Interactive Korean Learning
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-none drop-shadow-2xl animate-pulse [@media(max-height:800px)]:text-6xl">
            Learn Korean
            <span className="block text-yellow-300 mt-2 [@media(max-height:800px)]:mt-0">
              Through Experience
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed [@media(max-height:800px)]:max-w-xl [@media(max-height:800px)]:text-base">
            Explore Korean sounds, culture, and interaction through an immersive AI learning world.
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-3 [@media(max-height:800px)]:pt-1">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-300/10 blur-3xl rounded-full" />
            <a href="#gateways" className="px-10 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg shadow-2xl shadow-yellow-500/20 transition duration-300 [@media(max-height:800px)]:px-8 [@media(max-height:800px)]:py-3 [@media(max-height:800px)]:text-base">
              Enter the World
            </a>

            <a href="#hangeul" className="px-10 py-4 rounded-2xl border border-white/30 bg-black/20 backdrop-blur-md hover:bg-white/10 transition duration-300 text-lg [@media(max-height:800px)]:px-8 [@media(max-height:800px)]:py-3 [@media(max-height:800px)]:text-base">
              Start Hangeul
            </a>
          </div>
        </div>
      </main>

      {/* Learning Gateways */}
      <section id="gateways" className="relative z-10 min-h-screen border-t border-white/10 bg-black px-6 py-8 flex items-center scroll-mt-0 [@media(max-height:800px)]:py-4">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/images/gold_frame_background.png"
            alt="Gold frame background"
            className="h-full w-full scale-110 object-contain object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="absolute right-0 top-0 z-20">
            <HomeLink />
          </div>

          <div className="text-center mb-7 pt-8 [@media(max-height:800px)]:mb-4 [@media(max-height:800px)]:pt-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-300/30 bg-black/30 backdrop-blur-md text-xs tracking-[0.25em] uppercase text-yellow-200 mb-4 [@media(max-height:800px)]:mb-2 [@media(max-height:800px)]:py-1.5">
              Learning Gateways
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl [@media(max-height:800px)]:text-4xl">
              Select Your Korean World
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 [@media(max-height:800px)]:gap-2.5">
            {worlds.map((world, index) => (
              <a
                key={index}
                href={world.href}
                className={`group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-b ${world.color} backdrop-blur-xl p-4 min-h-[170px] hover:-translate-y-1 hover:border-yellow-300/50 transition duration-500 cursor-pointer [@media(max-height:800px)]:min-h-[118px] [@media(max-height:800px)]:p-3.5`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_70%)] transition duration-500" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-yellow-200 mb-2 [@media(max-height:800px)]:mb-1.5 [@media(max-height:800px)]:text-xs">
                      {world.sub}
                    </div>

                    <h2 className="text-2xl md:text-[1.7rem] font-black leading-tight mb-2 [@media(max-height:800px)]:mb-1.5 [@media(max-height:800px)]:text-2xl">
                      {world.title}
                    </h2>

                    <p className="text-stone-300 text-sm leading-relaxed [@media(max-height:800px)]:text-xs">
                      {world.desc}
                    </p>

                    <p className="mt-2 text-stone-200 text-sm leading-relaxed [@media(max-height:800px)]:hidden">
                      {th(world.koKey)}
                    </p>

                    {world.required && (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-xs tracking-[0.2em] uppercase text-yellow-300 [@media(max-height:800px)]:hidden">
                        Required First Step
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 [@media(max-height:800px)]:pt-2.5">
                    <span className="text-yellow-300 font-semibold [@media(max-height:800px)]:text-sm">
                      Enter
                    </span>

                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-yellow-300 group-hover:text-black transition duration-300 [@media(max-height:800px)]:h-9 [@media(max-height:800px)]:w-9">
                      →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hangeul Section */}
      <section id="hangeul" className="relative z-10 min-h-screen border-t border-yellow-300/10 bg-black px-6 py-12 flex items-center scroll-mt-0">
        <div className="relative max-w-7xl mx-auto rounded-[2rem] border border-yellow-300/20 bg-black/60 backdrop-blur-xl p-6 md:p-8 overflow-hidden">
          <div className="relative z-20 mb-5 flex justify-end">
            <HomeLink />
          </div>

          <div className="absolute right-8 top-8 text-[10rem] md:text-[16rem] font-black text-yellow-300/5 leading-none pointer-events-none">
            한글
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="text-yellow-200 text-sm tracking-[0.3em] uppercase mb-4">
              Hangeul 한글 배우기
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Start with Korean sounds and letters.
            </h2>
            <p className="text-lg text-stone-200 leading-relaxed mb-3">
              {th("startKoreanSoundLetters")}
            </p>
            <p className="text-stone-300 leading-relaxed">
              Learn Korean letters through vowels, consonants, syllables, final consonants, and word cards.
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {hangeulButtons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-yellow-300/20 bg-yellow-300/10 hover:bg-yellow-300 hover:text-black transition duration-300 p-5 min-h-28 flex flex-col justify-between"
              >
                <span className="text-lg font-bold">{item.label}</span>
                <span className="text-sm opacity-80">{th(item.koKey)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Learning Sections */}
      {learningSections.map((section) => (
        <section key={section.id} id={section.id} className="relative z-10 border-t border-white/10 bg-black px-6 py-16 scroll-mt-10">
          <div className={`max-w-7xl mx-auto rounded-[2.5rem] border ${section.color} backdrop-blur-xl p-8 md:p-12`}>
            <div className="mb-8 flex justify-end">
              <HomeLink />
            </div>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div>
                <div className="text-yellow-200 text-sm tracking-[0.3em] uppercase mb-4">
                  {section.eyebrow}
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-4">
                  {section.title}
                </h2>
                <div className="text-2xl text-yellow-200 font-bold mb-6">
                  {th(section.koTitleKey)}
                </div>
                <p className="text-stone-300 leading-relaxed mb-4">
                  {section.desc}
                </p>
                <p className="text-stone-200 leading-relaxed">
                  {th(section.koDescKey)}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {section.buttons.map((button) => (
                  <a
                    key={button}
                    href="#plaza"
                    className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 text-lg font-bold"
                  >
                    {button}
                    <span className="block mt-6 text-yellow-300">Open →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Learning Plaza Section */}
      <section id="plaza" className="relative z-10 min-h-screen border-t border-purple-300/10 bg-black px-6 py-12 flex items-center scroll-mt-10">
        <div className="relative max-w-7xl mx-auto rounded-[2rem] border border-purple-300/20 bg-purple-950/20 backdrop-blur-xl p-6 md:p-8 overflow-hidden">
          <div className="relative z-20 mb-5 flex justify-end">
            <HomeLink />
          </div>

          <div className="absolute right-8 top-8 text-[8rem] md:text-[13rem] font-black text-purple-300/5 leading-none pointer-events-none">
            PLAZA
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="text-purple-200 text-sm tracking-[0.3em] uppercase mb-4">
              Learning Plaza 학습 광장
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Materials, Community, and Live Classes
            </h2>
            <p className="text-xl text-stone-200 leading-relaxed mb-4">
              {th("plazaItems")}
            </p>
            <p className="text-stone-300 leading-relaxed">
              Find study materials, notices, class applications, and live classroom links.
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {plazaButtons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-purple-300/20 bg-white/5 hover:bg-purple-300 hover:text-black transition duration-300 p-5 min-h-28 flex flex-col justify-between"
              >
                <span className="text-xl font-bold">{item.label}</span>
                <span className="text-sm opacity-80">{th(item.koKey)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers & Institutions Section */}
      <section id="teachers" className="relative z-10 border-t border-white/10 bg-black px-6 pt-10 pb-32 scroll-mt-10">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] border border-white/10 bg-black/60 backdrop-blur-xl p-8 md:p-12">
          <div className="mb-8 flex justify-end">
            <HomeLink />
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="text-yellow-200 text-sm tracking-[0.3em] uppercase mb-4">
                Teachers &amp; Institutions
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Korean Education AI Research &amp; Development Institute
              </h2>
              <p className="text-xl text-stone-200 leading-relaxed mb-4">
                {th("aiInstituteSection")}
              </p>
              <p className="text-stone-300 leading-relaxed">
                Connect teacher collaboration, institutional partnership, content licensing, and AI Korean education tools from here.
              </p>
            </div>

            <div className="grid gap-4">
              <a href="/teachers" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 font-bold">
                Teacher Portal / 교사 포털 →
              </a>
              <a href="/institutions" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 font-bold">
                Institution Partnership / 기관 제휴 →
              </a>
              <a href="/license" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 font-bold">
                License Inquiry / 라이선스 문의 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 px-6 py-10 text-center text-stone-400">
        <div className="text-white font-black tracking-[0.25em] text-2xl mb-3">GWANGGAETO</div>
        <div>Onmaeum Korean · Korean Education AI Research & Development Institute</div>
      </footer>

      {/* Floating Seal → 집현전 약방 */}
      <a
        href="https://yakbang-two.vercel.app/"
        aria-label="집현전 약방으로 가기"
        title="집현전 약방"
        className="group fixed bottom-8 right-8 z-30 block transition duration-500 hover:scale-110"
      >
        <img
          src="/images/stamp_onmaeum.png"
          alt="집현전 약방 도장"
          className="w-24 rotate-6 opacity-90 group-hover:opacity-100"
        />
        <span className="absolute -top-9 right-0 whitespace-nowrap rounded-lg bg-black/75 px-3 py-1.5 text-sm font-bold text-yellow-300 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
          집현전 약방으로 →
        </span>
      </a>

      {/* Moongchi */}
      <div className="fixed left-5 bottom-5 z-30 group cursor-pointer">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/20 bg-black/40 backdrop-blur-md hover:scale-105 transition duration-300">
          <img
            src="/images/teacher-logo.png"
            alt="Moongchi"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -top-12 left-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl text-sm whitespace-nowrap">
          Welcome to Gwanggaeto
        </div>
      </div>
    </div>
  )
}
