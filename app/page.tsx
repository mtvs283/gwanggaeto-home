export default function GwanggaetoCinematicLobbyHomepage() {
  const worlds = [
    {
      title: "Hangeul",
      sub: "The Core Gateway",
      desc: "All learning begins with Korean sounds and letters.",
      color: "from-yellow-950/90 to-black/90",
      required: true,
    },
    {
      title: "Study in Korea",
      sub: "University & Campus Life",
      desc: "Essential Korean for international students.",
      color: "from-blue-950/80 to-black/80",
    },
    {
      title: "EPS Korea",
      sub: "Work & Factory Korean",
      desc: "Korean for jobs, factories, and daily work life.",
      color: "from-red-950/80 to-black/80",
    },
    {
      title: "Daily Korean",
      sub: "Real Life Conversation",
      desc: "Practice the Korean used in everyday situations.",
      color: "from-zinc-900/90 to-black/90",
    },
    {
      title: "Travel Korean",
      sub: "Korea Survival Guide",
      desc: "Taxi, restaurants, shopping, and transportation.",
      color: "from-emerald-950/80 to-black/80",
    },
    {
      title: "TOPIK",
      sub: "Exam & Challenge",
      desc: "Train for the Korean proficiency test.",
      color: "from-purple-950/80 to-black/80",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/main.png"
          alt="Gwanggaeto and Sejong"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
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

      {/* Navigation */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6">
        <div>
          <div className="text-stone-200 text-xs tracking-[0.4em] uppercase">
            Onmaeum Korean
          </div>
          <div className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white">
            GWANGGAETO
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">KR</button>
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">EN</button>
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">JP</button>
          <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">VN</button>
        </div>
      </header>

      {/* Main Lobby */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 text-center">
        <div className="space-y-6 max-w-4xl backdrop-blur-[2px]">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-sm tracking-[0.25em] uppercase text-stone-200">
            Interactive Korean Learning
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none drop-shadow-2xl animate-pulse">
            Learn Korean
            <span className="block text-yellow-300 mt-2">
              Through Experience
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Explore Korean sounds, culture, and interaction through an immersive AI learning world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-300/10 blur-3xl rounded-full" />
            <button className="px-10 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg shadow-2xl shadow-yellow-500/20 transition duration-300">
              Enter the World
            </button>

            <button className="px-10 py-4 rounded-2xl border border-white/30 bg-black/20 backdrop-blur-md hover:bg-white/10 transition duration-300 text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        </main>

      {/* World Selection Page */}
      <section className="relative z-10 min-h-screen px-6 py-24 flex items-center">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/images/gold_frame_background.png"
            alt="Gold frame background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-300/30 bg-black/30 backdrop-blur-md text-sm tracking-[0.25em] uppercase text-yellow-200 mb-5">
              Choose Your Path
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">
              Select Your Korean World
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {worlds.map((world, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b ${world.color} backdrop-blur-xl p-8 min-h-[260px] hover:-translate-y-2 hover:border-yellow-300/50 transition duration-500 cursor-pointer`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_70%)] transition duration-500" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-yellow-200 mb-3">
                    {world.sub}
                  </div>

                  <h2 className="text-4xl font-black leading-tight mb-4">
                    {world.title}
                  </h2>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    {world.desc}
                  </p>

                  {world.required && (
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-xs tracking-[0.2em] uppercase text-yellow-300">
                      Required First Step
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-10">
                  <span className="text-yellow-300 font-semibold">
                    Enter
                  </span>

                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-yellow-300 group-hover:text-black transition duration-300">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Floating Seal */}
      <img
        src="/images/stamp_onmaeum.png"
        alt="seal"
        className="fixed bottom-8 right-8 w-24 rotate-6 opacity-90 hover:scale-110 transition duration-500 z-30"
      />

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
