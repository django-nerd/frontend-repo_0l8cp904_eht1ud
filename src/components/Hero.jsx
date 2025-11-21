import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.3])

  return (
    <section ref={ref} className="relative h-[120vh] overflow-hidden">
      <motion.div style={{ scale, y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="relative z-10 h-full grid place-items-center pointer-events-none">
        <div className="text-center px-6">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_10px_50px_rgba(59,130,246,0.35)]">
            Arcyn Find
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Futuristic AI discovery with midnight crystal blue and emerald energy.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </section>
  )
}
