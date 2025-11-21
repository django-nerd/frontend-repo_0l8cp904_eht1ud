import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const steps = [
  { id: 0, title: 'Booting up…', subtitle: 'Boy opens the laptop', delay: 2200 },
  { id: 1, title: 'Arcyn Console', subtitle: 'Camera zooms to the screen', delay: 2200 },
  { id: 2, title: 'Search: google gemini', subtitle: 'Typing…', delay: 2200 },
  { id: 3, title: 'Results: Gemini 1.5, 2.0, 3', subtitle: 'Clean, focused results', delay: 2200 },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.3])

  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    let active = true
    const tick = () => {
      if (!active) return
      setStepIndex((i) => (i + 1) % steps.length)
    }
    const interval = setInterval(tick, steps[stepIndex].delay)
    return () => {
      active = false
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex])

  return (
    <section ref={ref} className="relative h-[120vh] overflow-hidden">
      <motion.div style={{ scale, y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* HUD overlay simulating the narrative */}
      <div className="relative z-10 h-full grid place-items-center pointer-events-none">
        <div className="text-center px-6">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_10px_50px_rgba(59,130,246,0.35)]">
            Arcyn Find
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Futuristic AI discovery with midnight crystal blue and emerald energy.
          </p>

          <div className="mt-8 mx-auto max-w-2xl">
            <div className="relative pointer-events-auto">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-400/30 to-emerald-400/30 blur-xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, y: 10, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.995 }}
                    transition={{ type: 'spring', mass: 0.7, damping: 18, stiffness: 260 }}
                    className="text-left"
                  >
                    <p className="text-xs uppercase tracking-wider text-white/60">Scene</p>
                    <h3 className="text-lg font-semibold text-white">{steps[stepIndex].title}</h3>
                    <p className="text-white/70">{steps[stepIndex].subtitle}</p>

                    {/* Faux console/search UI */}
                    <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-3">
                      <div className="flex items-center gap-2 text-white/60 text-xs">
                        <span className="w-2 h-2 rounded-full bg-red-400/70" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                        <span className="w-2 h-2 rounded-full bg-green-400/70" />
                        <span className="ml-2">arcyn://console</span>
                      </div>
                      <div className="mt-3 rounded-xl bg-white/5 border border-white/10 p-3 text-white/90">
                        {stepIndex < 2 ? (
                          <span className="text-white/60">$</span>
                        ) : stepIndex === 2 ? (
                          <span>search "google gemini"</span>
                        ) : (
                          <ul className="space-y-1 text-sm">
                            <li>• Google Gemini 1.5</li>
                            <li>• Google Gemini 2.0</li>
                            <li>• Google Gemini 3</li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </section>
  )
}
