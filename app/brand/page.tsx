const pieces = [
  {
    src: "/brand/onmaeum-gwanggaeto-lockup.png",
    title: "Official lockup",
    note: "ONMAEUM KOREAN sits small above GWANGGAETO — same order as the homepage header.",
    span: "wide",
  },
  {
    src: "/brand/onmaeum-hangul-wordmark.png",
    title: "온마음한국어 wordmark",
    note: "Parent brand in Hangul. English stays the shell; Korean is the name itself.",
    span: "wide",
  },
  {
    src: "/brand/onmaeum-korean-seal.png",
    title: "Parent seal · 心",
    note: "온마음한국어. Heart/mind seal. Pairs with the existing 광개토약방 印 stamp.",
    span: "square",
  },
  {
    src: "/brand/onmaeum-jamo-mark.png",
    title: "Jamo mark · ㅇ",
    note: "Product mark for 온마음한국어 자모. The ring is ㅇ, the glow is 온마음.",
    span: "square",
  },
  {
    src: "/brand/onmaeum-yakbang-seals.png",
    title: "Seal family",
    note: "온마음한국어 (心) and 광개토약방 (印) as a matched pair of stamps.",
    span: "wide",
  },
  {
    src: "/brand/onmaeum-gwanggaeto-hero.png",
    title: "World key visual",
    note: "Gwanggaeto the Great and Sejong under the Onmaeum Korean name. The world stays GWANGGAETO.",
    span: "wide",
  },
  {
    src: "/brand/onmaeum-brand-family.png",
    title: "Brand family",
    note: "One parent, three lines: GWANGGAETO world, Yakbang, and Jamo.",
    span: "wide",
  },
  {
    src: "/brand/onmaeum-gwanggaeto-splash.png",
    title: "Vertical splash",
    note: "Mobile/app open. Same lockup, floating jamo, palace roof in gold mist.",
    span: "tall",
  },
] as const

export default function OnmaeumBrandConceptsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-6xl items-end justify-between px-6 py-10 md:px-10">
        <a href="/" className="block">
          <div className="text-xs uppercase tracking-[0.4em] text-stone-200">Onmaeum Korean</div>
          <div className="text-3xl font-black tracking-[0.2em] md:text-5xl">GWANGGAETO</div>
        </a>
        <a
          href="/"
          className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-200 backdrop-blur-md transition hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black"
        >
          Home
        </a>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-200">Brand concepts</p>
        <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">
          Onmaeum Korean
          <span className="mt-2 block text-yellow-300">meets GWANGGAETO</span>
        </h1>
        <p className="mb-12 max-w-2xl text-stone-300">
          Parent brand is 온마음한국어. The world stays GWANGGAETO. Yakbang and Jamo sit underneath.
          These are concepts only — the homepage is unchanged.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {pieces.map((piece) => (
            <figure
              key={piece.src}
              className={
                piece.span === "wide"
                  ? "md:col-span-2"
                  : piece.span === "tall"
                    ? "md:col-span-1 md:row-span-1"
                    : ""
              }
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className={
                    piece.span === "tall"
                      ? "mx-auto max-h-[720px] w-auto object-contain"
                      : "h-auto w-full object-cover"
                  }
                />
              </div>
              <figcaption className="mt-4 space-y-1 px-1">
                <div className="font-bold tracking-wide text-yellow-200">{piece.title}</div>
                <p className="text-sm leading-relaxed text-stone-400">{piece.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  )
}
