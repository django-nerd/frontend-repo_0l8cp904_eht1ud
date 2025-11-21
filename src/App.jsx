import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Frames from './components/Frames'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'

function App() {
  const [theme, setTheme] = useState('dark')
  const [authOpen, setAuthOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const halfway = window.innerHeight * 0.6
      if (window.scrollY > halfway && !authOpen) setAuthOpen(true)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [authOpen])

  return (
    <div className="min-h-screen bg-[#070B0F] text-white relative">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_300px_at_10%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(700px_300px_at_100%_100%,rgba(16,185,129,0.08),transparent)]" />

      <Navbar onSignIn={() => setAuthOpen(true)} theme={theme} setTheme={setTheme} />
      <main className="relative">
        <Hero />
        <Frames />
      </main>
      <Footer />

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
