export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500" />
          <span className="text-white/70 text-sm">© {new Date().getFullYear()} Arcyn • All rights reserved</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a id="privacy" href="#privacy" className="text-white/70 hover:text-white">Privacy</a>
          <a id="terms" href="#terms" className="text-white/70 hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
