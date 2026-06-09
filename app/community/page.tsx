"use client"
import { useState, useEffect, useRef } from "react"

function JamoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let animId = 0

    function resize() {
      if (!canvas) return
      canvas.width = canvas.parentElement?.offsetWidth ?? 800
      canvas.height = canvas.parentElement?.offsetHeight ?? 120
    }
    resize()
    window.addEventListener("resize", resize)

    const jamos = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㅏ','ㅑ','ㅓ','ㅕ','ㅗ','ㅛ','ㅜ','ㅠ','ㅡ','ㅣ']
    const particles = Array.from({ length: 18 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 120,
      char: jamos[Math.floor(Math.random() * jamos.length)],
      size: 20 + Math.random() * 28,
      opacity: 0.06 + Math.random() * 0.1,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.08,
      color: Math.random() < 0.4 ? '#d4a843' : '#ffffff',
    }))

    function animate() {
      if (!canvas || !ctx) return
      animId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -40) p.x = canvas.width + 20
        if (p.x > canvas.width + 40) p.x = -20
        if (p.y < -40) p.y = canvas.height + 20
        if (p.y > canvas.height + 40) p.y = -20
        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.font = `${p.size}px serif`
        ctx.fillStyle = p.color
        ctx.fillText(p.char, p.x, p.y)
        ctx.restore()
      })
    }
    animate()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

const qaPosts = [
  { title: "What's the difference between 이/가 and 은/는?", author: "user_***", date: "06.09", comments: 3, locked: false },
  { title: "How do I use -아/어요 vs -습니다?", author: "user_***", date: "06.08", comments: 5, locked: false },
  { title: "Can someone explain 받침 pronunciation rules?", author: "user_***", date: "06.07", comments: 2, locked: false },
  { title: "로그인 후 확인할 수 있는 게시글", author: "***", date: "06.06", comments: 0, locked: true },
  { title: "로그인 후 확인할 수 있는 게시글", author: "***", date: "06.05", comments: 0, locked: true },
]

const freePosts = [
  {
    id: 1, nick: "jk_learns", initials: "JK", date: "06.09",
    body: "Finally passed TOPIK II! 드디어 토픽 2급 합격했어요 🎉 Studying with Gwanggaeto materials really helped.",
    comments: [
      { nick: "sara_kr", text: "Congratulations!! 축하해요!" },
      { nick: "민준", text: "대단해요~ which materials did you use?" },
    ],
  },
  {
    id: 2, nick: "amira_m", initials: "AM", date: "06.08",
    body: "한국 음식 이름 외우는 게 제일 재미있어요 ㅋㅋ 오늘은 삼겹살이랑 된장찌개 배웠어요!",
    comments: [
      { nick: "TK쌤", text: "잘했어요! 맛있는 단어부터 시작하는 거 좋아요 😄" },
    ],
  },
]

export default function CommunityPage() {
  const [tab, setTab] = useState<"qa" | "free">("qa")

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-8">

      <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">
        Learning Plaza &nbsp;›&nbsp;<span className="text-yellow-400">Community</span>
      </p>

      {/* Hero with floating jamo */}
      <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden mb-6">
        <JamoCanvas />
        <div className="relative z-10 p-6">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-yellow-400 border border-yellow-400/30 rounded-full px-3 py-1 mb-3">
            Community Board
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black tracking-tight">Community</span>
            <span className="text-sm text-stone-500">게시판</span>
          </div>
          <p className="text-sm text-stone-400 mt-1">Ask questions and share your Korean learning journey.</p>
          <p className="text-xs text-stone-600 mt-0.5">학습 질문을 올리고 한국어 공부 이야기를 나눠보세요.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-6">
        <button onClick={() => setTab("qa")}
          className={`text-sm px-5 py-2 border-b-2 transition ${tab === "qa" ? "border-yellow-400 text-yellow-400" : "border-transparent text-stone-500 hover:text-stone-300"}`}>
          Q&A <span className="text-[10px] text-stone-600 ml-1">질문·답변</span>
        </button>
        <button onClick={() => setTab("free")}
          className={`text-sm px-5 py-2 border-b-2 transition ${tab === "free" ? "border-yellow-400 text-yellow-400" : "border-transparent text-stone-500 hover:text-stone-300"}`}>
          Free Board <span className="text-[10px] text-stone-600 ml-1">자유게시판</span>
        </button>
      </div>

      {/* Q&A Panel */}
      {tab === "qa" && (
        <div>
          <div className="flex flex-col gap-2">
            {qaPosts.map((post, i) => (
              <div key={i}>
                {i === 3 && <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent my-1" />}
                <div className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 cursor-pointer hover:border-yellow-400/30 transition ${post.locked ? "opacity-40" : ""}`}>
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-yellow-400/15 text-yellow-400 whitespace-nowrap">Q&A</span>
                  <span className={`flex-1 text-sm font-medium ${post.locked ? "blur-sm select-none text-stone-600" : "text-stone-100"}`}>{post.title}</span>
                  <span className="text-xs text-stone-600 whitespace-nowrap">{post.author}</span>
                  {post.comments > 0 && <span className="text-xs text-stone-600">{post.comments}</span>}
                  <span className="text-xs text-stone-700 whitespace-nowrap">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between bg-white/5 border border-yellow-400/20 rounded-2xl px-5 py-3 gap-4">
            <div>
              <p className="text-sm text-stone-400">Log in to read and post questions.</p>
              <p className="text-xs text-stone-600 mt-0.5">로그인하면 질문을 읽고 직접 올릴 수 있어요.</p>
            </div>
            <a href="/login" className="text-sm font-bold bg-yellow-400 text-black px-5 py-2 rounded-xl hover:bg-yellow-300 transition whitespace-nowrap">Log in →</a>
          </div>
        </div>
      )}

      {/* Free Board Panel */}
      {tab === "free" && (
        <div>
          <div className="bg-white/5 border border-yellow-400/20 rounded-2xl p-4 mb-4">
            <p className="text-xs text-stone-600 mb-2">Log in to post · 로그인 후 글쓰기 가능</p>
            <textarea disabled placeholder="Share your Korean learning story... (login required)"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-stone-600 resize-none h-14 outline-none cursor-not-allowed opacity-40" />
            <div className="flex justify-end mt-2">
              <button disabled className="text-xs font-bold bg-yellow-400 text-black px-4 py-1.5 rounded-lg opacity-40 cursor-not-allowed">Post</button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {freePosts.map((post) => (
              <div key={post.id} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs text-stone-400 border border-white/10">{post.initials}</div>
                  <span className="text-sm font-medium text-stone-300">{post.nick}</span>
                  <span className="text-xs text-stone-600 ml-auto">{post.date}</span>
                </div>
                <p className="text-sm text-stone-300 leading-relaxed mb-3">{post.body}</p>
                <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
                  {post.comments.map((c, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-xs font-medium text-stone-500 whitespace-nowrap">{c.nick}</span>
                      <span className="text-xs text-stone-600">{c.text}</span>
                    </div>
                  ))}
                  <div className="flex gap-2 mt-1">
                    <input type="text" placeholder="Nickname" className="w-20 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-stone-300 outline-none" />
                    <input type="text" placeholder="Write a comment..." className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-stone-300 outline-none" />
                    <button className="text-xs font-bold bg-yellow-400 text-black px-3 py-1.5 rounded-lg hover:bg-yellow-300 transition whitespace-nowrap">Send</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
