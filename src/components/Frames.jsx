import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const Frame = ({ index, title, subtitle, children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 })

  return (
    <section ref={ref} className="relative h-[120vh] grid place-items-center">
      <motion.div style={{ opacity, y: springY }} className="relative w-[92vw] max-w-6xl">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-sky-950/50 to-emerald-950/40 dark:from-slate-900/40 dark:to-black/40 backdrop-blur-xl p-8 shadow-[0_20px_140px_rgba(16,185,129,0.18)]">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(600px_200px_at_20%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(400px_200px_at_100%_100%,rgba(16,185,129,0.12),transparent)]" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-3">
              {title}
            </h2>
            {subtitle && <p className="text-white/70 mb-6 max-w-2xl">{subtitle}</p>}
            <div className="grid gap-6">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default function Frames() {
  return (
    <div className="relative">
      <Frame index={1} title="Discover AI Tools Instantly" subtitle="Ultra-fast, context-aware results with zero clutter.">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="h-48 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl" />
          <div className="h-48 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl" />
        </div>
      </Frame>

      <Frame index={2} title="Smart Search. Clean Results." subtitle="Type once. Arcyn does the rest.">
        <div className="h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl" />
      </Frame>

      <Frame index={3} title="Upcoming Features" subtitle="Profiles, Collections, Reviews, Followings">
        <div className="grid sm:grid-cols-3 gap-6">
          {['Profiles','Collections','Reviews'].map((t) => (
            <div key={t} className="h-40 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl grid place-items-center text-white/80">{t}</div>
          ))}
        </div>
      </Frame>

      <Frame index={4} title="Powered by Arcyn OS" subtitle="A mini OS built for discovery">
        <div className="h-64 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl" />
      </Frame>

      <Frame index={5} title="Ready to explore?">
        <div className="grid place-items-center">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-500 text-black font-semibold shadow-[0_20px_120px_rgba(16,185,129,0.35)] hover:shadow-[0_30px_160px_rgba(16,185,129,0.45)] transition">
            Enter Arcyn Find
          </button>
        </div>
      </Frame>
    </div>
  )
}
