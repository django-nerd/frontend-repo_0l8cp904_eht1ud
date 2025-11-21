import { Mail, Github } from 'lucide-react'
import { useCallback } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AuthBox() {
  const handleGoogle = useCallback(() => {
    window.location.href = `${BACKEND_URL}/auth/google`
  }, [])

  const handleGithub = useCallback(() => {
    window.location.href = `${BACKEND_URL}/auth/github`
  }, [])

  const handleMagic = useCallback(async () => {
    const email = prompt('Enter your email for a magic link:')
    if (!email) return
    try {
      const res = await fetch(`${BACKEND_URL}/auth/magic-link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        credentials: 'include',
      })
      const data = await res.json()
      if (data.backend_verify) {
        window.location.href = `${BACKEND_URL}${data.backend_verify}`
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <section id="auth" className="relative py-16">
      <div className="mx-auto max-w-4xl px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Sign in to Arcyn</h2>
          <p className="mt-3 text-white/70">Continue with your preferred method. We use secure sessions with HTTP-only cookies.</p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-[0_20px_120px_rgba(16,185,129,0.25)]">
          <div className="absolute -inset-px rounded-3xl pointer-events-none bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.15),rgba(16,185,129,0.15),transparent_40%)]" />
          <div className="relative space-y-3">
            <button onClick={handleMagic} className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 transition">
              <Mail size={18} /> Continue with Email
            </button>
            <button onClick={handleGoogle} className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google"/> Continue with Google
            </button>
            <button onClick={handleGithub} className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 transition">
              <Github size={18} /> Continue with GitHub
            </button>
            <p className="mt-1 text-xs text-white/60 text-center">
              By continuing, you agree to our <a href="#privacy" className="underline decoration-white/30 hover:decoration-white">Privacy</a> and <a href="#terms" className="underline decoration-white/30 hover:decoration-white">Terms</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
