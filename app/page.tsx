"use client"

import { useTranslations } from "next-intl"
import LocaleToggle from "@/components/LocaleToggle"

function HomeLink() {
  const thh = useTranslations("header")
  return (
    <a
      href="#top"
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-200 backdrop-blur-md transition hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black"
    >
      {thh("navHome")}
    </a>
  )
}

export default function GwanggaetoCinematicLobbyHomepage() {
  const th = useTranslations("home")
  const thh = useTranslations("header")
  // 히어로(제목/부제/CTA 버튼)는 광개토 시각 정체성으로 영어 고정.
  // 그 외 학습 콘텐츠는 thh(섹션 제목)·th(설명)로 선택된 한 가지 언어만 표시.

  const worlds = [
    {
      titleKey: "hangeul",
      subKey: "coreGateway",
      koKey: "startKoreanSoundLetters",
      color: "from-yellow-950/90 to-black/90",
      href: "#hangeul",
      required: true,
    },
    {
      titleKey: "studyInKorea",
      subKey: "campusLife",
      koKey: "schoolKoreanDesc",
      color: "from-blue-950/80 to-black/80",
      href: "#study",
    },
    {
      titleKey: "workKorean",
      subKey: "workFactory",
      koKey: "workKoreanShortDesc",
      color: "from-red-950/80 to-black/80",
      href: "#work",
    },
    {
      titleKey: "dailyKorean",
      subKey: "realLife",
      koKey: "dailyConversationDesc",
      color: "from-zinc-900/90 to-black/90",
      href: "#daily",
    },
    {
      titleKey: "travelKorean",
      subKey: "survivalGuide",
      koKey: "travelExpressionDesc",
      color: "from-emerald-950/80 to-black/80",
      href: "#travel",
    },
    {
      titleKey: "learningPlaza",
      subKey: "resourcesCommunity",
      koKey: "learningAccessDesc",
      color: "from-purple-950/80 to-black/80",
      href: "#plaza",
    },
  ]

  const hangeulButtons = [
    { id: "vowels", koKey: "learnVowels", href: "/hangeul/vowels" },
    { id: "consonants", koKey: "learnConsonants", href: "/hangeul/consonants" },
    { id: "syllables", koKey: "learnSyllables", href: "/hangeul/syllables" },
    { id: "final", koKey: "learnFinalConsonants", href: "/hangeul/final-consonants" },
    { id: "class", koKey: "applyHangeulBasic", href: "/apply/hangeul" },
  ]

  const plazaButtons = [
    { id: "materials", koKey: "resources", href: "/materials" },
    { id: "notice", koKey: "notices", href: "/notice" },
    { id: "community", koKey: "board", href: "/community" },
    { id: "apply", koKey: "applyClass", href: "/apply" },
    { id: "classroom", koKey: "enterClassroom", href: "/classroom" },
    { id: "teachers", koKey: "teacherInstitutionInquiry", href: "#teachers" },
  ]

  const learningSections = [
    {
      id: "study",
      eyebrowKey: "studyInKorea",
      titleKey: "studyTitle",
      koTitleKey: "studyAbroadKorean",
      koDescKey: "schoolKoreanDesc",
      buttonKeys: ["studyCampusLife", "schoolNotices", "presentationKorean", "studyGuides"],
      color: "border-blue-300/20 bg-blue-950/20",
    },
    {
      id: "work",
      eyebrowKey: "workKorean",
      titleKey: "workTitle",
      koTitleKey: "workKorean",
      koDescKey: "workKoreanDesc",
      buttonKeys: ["factoryKorean", "safetyKorean", "workDialogues", "epsPractice"],
      color: "border-red-300/20 bg-red-950/20",
    },
    {
      id: "daily",
      eyebrowKey: "dailyKorean",
      titleKey: "dailyTitle",
      koTitleKey: "dailyKorean",
      koDescKey: "dailyKoreanDesc",
      buttonKeys: ["conversationPractice", "rolePlay", "listeningPractice", "wordCards"],
      color: "border-stone-300/20 bg-stone-900/40",
    },
    {
      id: "travel",
      eyebrowKey: "travelKorean",
      titleKey: "survivalGuide",
      koTitleKey: "travelKorean",
      koDescKey: "travelKoreanDesc",
      buttonKeys: ["taxiKorean", "restaurantKorean", "shoppingKorean", "transportationKorean"],
      color: "border-emerald-300/20 bg-emerald-950/20",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white scroll-smooth">
      {/* Language toggle: fixed floating button at the bottom-center (portaled). */}
      <LocaleToggle />
      {/* Hero Background */}
      <div className="absolute left-0 top-0 h-screen w-full overflow-hidden">
        <img
          src="/images/main.png"
          alt="GWANGGAETO and Sejong"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_30%]"
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

      {/* Navigation (fixed so the logo floats like the corner badges) */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#top" className="block">
          <div className="text-stone-200 text-xs tracking-[0.4em] uppercase">
            Onmaeum Korean
          </div>
          <div className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white">
            GWANGGAETO
          </div>
        </a>
      </header>

      {/* Main Lobby — 히어로는 영어 고정 */}
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
              {thh("gatewaysEyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl [@media(max-height:800px)]:text-4xl">
              {thh("gatewaysTitle")}
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
                      {thh(world.subKey)}
                    </div>

                    <h2 className="text-2xl md:text-[1.7rem] font-black leading-tight mb-2 [@media(max-height:800px)]:mb-1.5 [@media(max-height:800px)]:text-2xl">
                      {thh(world.titleKey)}
                    </h2>

                    <p className="text-stone-200 text-sm leading-relaxed [@media(max-height:800px)]:text-xs">
                      {th(world.koKey)}
                    </p>

                    {world.required && (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-xs tracking-[0.2em] uppercase text-yellow-300 [@media(max-height:800px)]:hidden">
                        {th("essentialLearning")}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 [@media(max-height:800px)]:pt-2.5">
                    <span className="text-yellow-300 font-semibold [@media(max-height:800px)]:text-sm">
                      {th("enter")}
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
              {thh("hangeulEyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {th("startKoreanSoundLetters")}
            </h2>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {hangeulButtons.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-2xl border border-yellow-300/20 bg-yellow-300/10 hover:bg-yellow-300 hover:text-black transition duration-300 p-5 min-h-28 flex flex-col justify-between"
              >
                <span className="text-lg font-bold">{th(item.koKey)}</span>
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
                  {thh(section.eyebrowKey)}
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-4">
                  {thh(section.titleKey)}
                </h2>
                <div className="text-2xl text-yellow-200 font-bold mb-6">
                  {th(section.koTitleKey)}
                </div>
                <p className="text-stone-200 leading-relaxed">
                  {th(section.koDescKey)}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {section.buttonKeys.map((buttonKey) => (
                  <a
                    key={buttonKey}
                    href="#plaza"
                    className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 text-lg font-bold"
                  >
                    {th(buttonKey)}
                    <span className="block mt-6 text-yellow-300">{th("enter")} →</span>
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
              {thh("learningPlaza")}
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {thh("plazaTitle")}
            </h2>
            <p className="text-xl text-stone-200 leading-relaxed mb-4">
              {th("plazaItems")}
            </p>
            <p className="text-stone-300 leading-relaxed">
              {th("plazaDesc")}
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {plazaButtons.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-2xl border border-purple-300/20 bg-white/5 hover:bg-purple-300 hover:text-black transition duration-300 p-5 min-h-28 flex flex-col justify-between"
              >
                <span className="text-xl font-bold">{th(item.koKey)}</span>
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
                {thh("teachersEyebrow")}
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                {thh("teachersTitle")}
              </h2>
              <p className="text-xl text-stone-200 leading-relaxed mb-4">
                {th("aiInstituteSection")}
              </p>
              <p className="text-stone-300 leading-relaxed">
                {th("aiInstituteDesc")}
              </p>
            </div>

            <div className="grid gap-4">
              <a href="/teachers" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 font-bold">
                {th("teacherPortal")} →
              </a>
              <a href="/institutions" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 font-bold">
                {th("institutionPartnership")} →
              </a>
              <a href="/license" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 p-6 font-bold">
                {th("licenseInquiry")} →
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

      {/* Floating Seal → 광개토약방 */}
      <a
        href="https://yakbang-two.vercel.app/"
        aria-label="GWANGGAETO YAKBANG"
        title="GWANGGAETO YAKBANG"
        className="group fixed bottom-8 right-8 z-30 block transition duration-500 hover:scale-110"
      >
        <img
          src="/images/stamp_gwanggaeto_yakbang.png"
          alt="GWANGGAETO YAKBANG seal"
          className="w-24 rotate-6 opacity-90 group-hover:opacity-100"
        />
        <span className="absolute -top-9 right-0 whitespace-nowrap rounded-lg bg-black/75 px-3 py-1.5 text-sm font-bold text-yellow-300 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
          {th("goYakbang")}
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
          {th("welcomeGwanggaeto")}
        </div>
      </div>
    </div>
  )
}
