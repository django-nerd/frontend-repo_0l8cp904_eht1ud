import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, LucideIcon } from 'lucide-react'

export default function AuthModal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[6px]" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ type: 'spring', mass: 0.9, damping: 18, stiffness: 250 }}
            className="relative w-[92vw] max-w-md rounded-3xl border border-white/10 bg-white/10 dark:bg-white/10 backdrop-blur-2xl p-6 shadow-[0_20px_120px_rgba(16,185,129,0.25)]"
          >
            <div className="absolute -inset-px rounded-3xl pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.15),rgba(16,185,129,0.15),transparent_40%)]" />

            <div className="relative">
              <h3 className="text-xl font-semibold text-white">Welcome back</h3>
              <p className="text-sm text-white/70 mb-4">Sign in to continue your Arcyn journey</p>

              <div className="space-y-3">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 transition">
                  <Mail size={18} /> Continue with Email
                </button>
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 transition">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google"/> Continue with Google
                </button>
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 transition">
                  <Github size={18} /> Continue with GitHub
                </button>
              </div>

              <p className="mt-4 text-xs text-white/60">
                By continuing, you agree to our <a href="#privacy" className="underline decoration-white/30 hover:decoration-white">Privacy</a> and <a href="#terms" className="underline decoration-white/30 hover:decoration-white">Terms</a>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
