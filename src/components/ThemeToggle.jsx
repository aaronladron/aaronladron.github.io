import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

// SVG theme image
const themeImages = {
  'night-sky': (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="night" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#1a0a2e" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#night)" />
      <circle cx="80" cy="60" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="120" cy="40" r="1.5" fill="#ffffff" opacity="0.6" />
      <circle cx="200" cy="30" r="2.5" fill="#ffffff" opacity="0.7" />
      <circle cx="280" cy="50" r="1.8" fill="#ffffff" opacity="0.5" />
      <circle cx="320" cy="80" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="150" cy="100" r="1.2" fill="#ffffff" opacity="0.4" />
      <circle cx="350" cy="120" r="1.5" fill="#ffffff" opacity="0.6" />
      <circle cx="30" cy="150" r="2" fill="#ffffff" opacity="0.7" />
      <circle cx="200" cy="60" r="60" fill="#a78bfa" opacity="0.3" />
    </svg>
  ),
  'sunny-day': (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="sunny" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87ceeb" />
          <stop offset="100%" stopColor="#e0f6ff" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#sunny)" />
      <circle cx="200" cy="80" r="40" fill="#ffd700" opacity="0.9" />
      <circle cx="200" cy="80" r="50" fill="#ffed4e" opacity="0.3" />
      <ellipse cx="80" cy="300" rx="60" ry="30" fill="#90ee90" opacity="0.6" />
      <ellipse cx="320" cy="320" rx="70" ry="35" fill="#90ee90" opacity="0.5" />
    </svg>
  ),
  'neon-city': (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="neon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d0221" />
          <stop offset="100%" stopColor="#1a0b2e" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#neon)" />
      <rect x="50" y="150" width="80" height="150" fill="#00ff9f" opacity="0.2" />
      <rect x="150" y="100" width="100" height="200" fill="#bd00ff" opacity="0.2" />
      <rect x="270" y="130" width="70" height="170" fill="#00ff9f" opacity="0.2" />
      <line x1="0" y1="250" x2="400" y2="250" stroke="#00ff9f" strokeWidth="2" opacity="0.4" />
      <circle cx="200" cy="200" r="80" fill="none" stroke="#bd00ff" strokeWidth="2" opacity="0.5" />
    </svg>
  ),
  'sunset-clouds': (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="sunset" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b9d" />
          <stop offset="50%" stopColor="#ffa07a" />
          <stop offset="100%" stopColor="#2d1b4e" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#sunset)" />
      <circle cx="200" cy="200" r="45" fill="#ffa500" opacity="0.7" />
      <path d="M 100 280 Q 120 260, 140 280" fill="#fff5e1" opacity="0.6" />
      <path d="M 260 300 Q 280 280, 300 300" fill="#fff5e1" opacity="0.5" />
    </svg>
  ),
  'ocean-waves': (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="ocean" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#001427" />
          <stop offset="50%" stopColor="#003d82" />
          <stop offset="100%" stopColor="#002855" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#ocean)" />
      <path d="M 0 150 Q 100 130, 200 150 T 400 150" fill="none" stroke="#7dd3fc" strokeWidth="3" opacity="0.6" />
      <path d="M 0 220 Q 100 200, 200 220 T 400 220" fill="none" stroke="#7dd3fc" strokeWidth="2" opacity="0.4" />
      <path d="M 0 300 Q 100 280, 200 300 T 400 300" fill="none" stroke="#7dd3fc" strokeWidth="2" opacity="0.3" />
      <circle cx="350" cy="80" r="30" fill="#e0f4ff" opacity="0.2" />
    </svg>
  ),
  'forest-trees': (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="forest" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a1f0a" />
          <stop offset="100%" stopColor="#1e3a1e" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#forest)" />
      <polygon points="60,250 30,320 90,320" fill="#2d5a2d" opacity="0.7" />
      <polygon points="160,270 120,350 200,350" fill="#3a7d3a" opacity="0.8" />
      <polygon points="280,260 240,340 320,340" fill="#2d5a2d" opacity="0.7" />
      <polygon points="340,280 310,360 370,360" fill="#4a994a" opacity="0.6" />
      <circle cx="200" cy="100" r="60" fill="#90ee90" opacity="0.2" />
    </svg>
  ),
}

export default function ThemeToggle() {
  const { currentTheme, changeTheme, isTransitioning, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [nextTheme, setNextTheme] = useState(null)

  const themeKeys = Object.keys(themes)

  return (
    <div className="relative">
      {/* Main Theme Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-12 h-12 rounded-full border ${themes[currentTheme].border} backdrop-blur-xl flex items-center justify-center overflow-hidden group transition-all duration-300`}
        style={{ backgroundColor: isTransitioning ? themes[currentTheme].bg : 'transparent' }}
      >
        {/* Animated background glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-r ${themes[currentTheme].accent} opacity-20 blur-xl`}
        />

        {/* Icon with rotation animation */}
        <motion.div
          animate={{ rotate: isTransitioning ? 720 : 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="relative z-10 text-2xl"
        >
          {themes[currentTheme].icon}
        </motion.div>

        {/* Ripple effect on click */}
        {isTransitioning && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${themes[currentTheme].accent}`}
          />
        )}
      </motion.button>

      {/* Theme Selector Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-16 right-0 p-3 rounded-2xl border border-gray-800/50 backdrop-blur-2xl bg-[#0a0a0a]/95 shadow-2xl min-w-[280px] z-50"
          >
            {/* Header */}
            <div className="px-3 py-2 mb-3 border-b border-gray-800/50">
              <h3 className="text-sm font-light tracking-wide text-gray-400">Choisir un thème</h3>
            </div>

            {/* Theme Grid */}
            <div className="grid grid-cols-2 gap-3">
              {themeKeys.map((themeKey) => {
                const themeData = themes[themeKey]
                const isActive = currentTheme === themeKey

                return (
                  <motion.button
                    key={themeKey}
                    onClick={() => {
                      setNextTheme(themeKey)
                      changeTheme(themeKey)
                      setIsOpen(false)
                    }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-4 rounded-xl transition-all duration-500 group overflow-hidden ${
                      isActive ? 'ring-2 ring-white/40 shadow-2xl' : 'shadow-lg'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${themeData.bg} 0%, ${themeData.bg}dd 100%)`,
                      border: `2px solid ${isActive ? 'rgba(255,255,255,0.4)' : 'rgba(128,128,128,0.3)'}`,
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 bg-gradient-to-br ${themeData.accent} opacity-20`}
                    />

                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${themeData.accent} rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700 -z-10`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <motion.div
                        animate={isActive ? { 
                          rotate: [0, 10, -10, 10, 0],
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 1.5, repeat: isActive ? Infinity : 0, repeatDelay: 2 }}
                        className="relative"
                      >
                        {/* Icon with colored background */}
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${themeData.accent} shadow-lg`}>
                          <span className="text-3xl filter drop-shadow-lg">{themeData.icon}</span>
                        </div>
                      </motion.div>
                      <span
                        className="text-xs font-semibold tracking-wide"
                        style={{ color: isActive ? themeData.text : '#aaa' }}
                      >
                        {themeData.name}
                      </span>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="theme-active"
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#0a0a0a]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-full h-full rounded-full bg-green-400"
                        />
                      </motion.div>
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Footer tip */}
            <div className="mt-3 pt-3 border-t border-gray-800/50">
              <p className="text-xs text-gray-500 text-center">
                Le thème est sauvegardé automatiquement
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particles effect during theme transition */}
      <AnimatePresence>
        {isTransitioning && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: window.innerWidth / 2,
                  y: 100,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${themes[currentTheme].accent}`}
                style={{
                  boxShadow: `0 0 30px currentColor`,
                  filter: 'blur(1px)'
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Theme Transition - Full Screen Animation */}
      <AnimatePresence>
        {isTransitioning && nextTheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none top-0 left-0 w-screen h-screen"
            style={{ 
              background: `linear-gradient(135deg, ${themes[nextTheme].bg} 0%, ${themes[nextTheme].bg}ee 50%, ${themes[nextTheme].text}20 100%)`,
            }}
          >
            {/* Animated gradient waves */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${themes[nextTheme].accent.replace('from-', '').split(' ')[0]}40 25%, transparent 50%, ${themes[nextTheme].accent.replace('to-', '').split(' ')[0]}40 75%, transparent 100%)`,
                backfaceVisibility: 'hidden',
              }}
            />

            {/* Radial glow from center */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
              style={{
                background: `radial-gradient(circle, ${themes[nextTheme].text}40 0%, transparent 70%)`,
              }}
            />

            {/* Top shimmer effect */}
            <motion.div
              initial={{ top: '-100%' }}
              animate={{ top: '100%' }}
              exit={{ top: '100%' }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute left-0 w-full h-1/3"
              style={{
                background: `linear-gradient(180deg, ${themes[nextTheme].text}30 0%, transparent 100%)`,
              }}
            />

            {/* Bottom shimmer effect */}
            <motion.div
              initial={{ bottom: '-100%' }}
              animate={{ bottom: '100%' }}
              exit={{ bottom: '100%' }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute left-0 w-full h-1/3"
              style={{
                background: `linear-gradient(0deg, ${themes[nextTheme].text}30 0%, transparent 100%)`,
              }}
            />

            {/* Center glow burst */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 2.5, delay: i * 0.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  border: `2px solid ${themes[nextTheme].text}`,
                  opacity: 0.2,
                  backdropFilter: 'blur(10px)',
                }}
              />
            ))}

            {/* Content - Icon and Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-9xl mb-8 drop-shadow-2xl"
              >
                {themes[nextTheme].icon}
              </motion.div>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-6xl font-black tracking-wider"
                style={{ 
                  color: themes[nextTheme].text,
                  textShadow: `0 0 40px ${themes[nextTheme].text}60, 0 0 80px ${themes[nextTheme].text}30`,
                  letterSpacing: '8px',
                }}
              >
                {themes[nextTheme].name}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-lg mt-6 font-light tracking-widest"
                style={{ color: themes[nextTheme].text }}
              >
                ✨ Thème changé avec succès ✨
              </motion.p>
            </motion.div>

            {/* Flowing particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  opacity: 0.6,
                }}
                animate={{ 
                  y: window.innerHeight + 20,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2.5 + Math.random(),
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{
                  background: themes[nextTheme].text,
                  boxShadow: `0 0 10px ${themes[nextTheme].text}`,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
