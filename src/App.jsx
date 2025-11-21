import { useEffect, useState, useCallback } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Frames from './components/Frames'
import Footer from './components/Footer'
import AuthBox from './components/AuthBox'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const scrollToAuth = useCallback(() => {
    const el = document.getElementById('auth')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen bg-[#070B0F] text-white relative">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_300px_at_10%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(700px_300px_at_100%_100%,rgba(16,185,129,0.08),transparent)]" />

      <Navbar onSignIn={scrollToAuth} theme={theme} setTheme={setTheme} />
      <main className="relative">
        <Hero />
        <AuthBox />
        <Frames />
      </main>
      <Footer />
    </div>
  )
}

export default App
