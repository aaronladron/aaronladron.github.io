import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-950" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-3xl mix-blend-screen"
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl mix-blend-screen"
      />

      <motion.div
        animate={{
          y: [0, 30, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/2 right-1/6 w-72 h-72 bg-accent-blue/15 rounded-full blur-3xl mix-blend-screen"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" />
              <feDisplacementMap in="SourceGraphic" scale="20" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="rgba(255,255,255,0.02)" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  )
}
