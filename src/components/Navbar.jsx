import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { User, Sun, MoonStar } from 'lucide-react'

export default function Navbar({ onSignIn, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/40 dark:bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 shadow-[0_0_30px_rgba(34,197,94,0.35)]" />
          <span className="text-white/90 font-semibold tracking-wide">Arcyn Find</span>
        </motion.div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <MoonStar size={16} />}
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <button
            onClick={onSignIn}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400/90 to-emerald-500/90 hover:from-cyan-400 hover:to-emerald-500 text-black font-semibold px-4 py-2 shadow-[0_8px_30px_rgba(34,197,94,0.35)] active:scale-[0.98] transition"
          >
            <User size={16} />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </div>
  )
}
