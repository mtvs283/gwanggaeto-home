export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl mb-6">🏗️</div>
        <h1 className="text-4xl font-black tracking-tight mb-3">Under Construction</h1>
        <p className="text-stone-500 text-sm mb-1">공사 중이에요. 곧 만나요!</p>
        <p className="text-stone-700 text-xs mb-8">This page is coming soon.</p>
        <a href="/" className="text-sm font-bold bg-yellow-400 text-black px-6 py-2.5 rounded-xl hover:bg-yellow-300 transition">
          ← Back to Home
        </a>
      </div>
    </div>
  )
}
