import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../contexts/ThemeContext'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme } = useTheme()
  const [clicks, setClicks] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  const handleSecretClick = (e) => {
    e.preventDefault()
    const newClicks = clicks + 1
    setClicks(newClicks)
    console.log('🔓 Easter egg clicks:', newClicks)
    if (newClicks >= 3) {
      navigate('/hack')
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-1000"
      style={{ 
        backgroundColor: `${theme.bg}E6`,
        borderColor: theme.border.replace('border-', '').replace('gray-800', 'rgba(128, 128, 128, 0.3)')
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo - Minimalist */}
          <Link to="/">
            <motion.div
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 group"
            >
              <motion.div
                onClick={handleSecretClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: 15 }}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-1000 cursor-pointer"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.accent.replace('from-', '').replace(' to-', ', ')})` 
                }}
                title={clicks >= 1 ? `${clicks}/3 clicks...` : ""}
              >
                <span className="text-black text-sm font-bold tracking-wider">AL</span>
              </motion.div>
              <span 
                className="font-light text-lg tracking-wide hidden sm:block transition-colors duration-1000"
                style={{ color: theme.text }}
              >
                Aaron Ladron
              </span>
            </motion.div>
          </Link>

          {/* Navigation Links - Elegant spacing */}
          <div className="hidden md:flex gap-12 items-center">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  whileHover={{ opacity: 1 }}
                  className={`relative text-sm font-light tracking-wide transition-all duration-300`}
                  style={{
                    color: isActive(link.path) ? theme.text : theme.textSecondary
                  }}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] transition-colors duration-1000"
                      style={{
                        background: `linear-gradient(90deg, ${theme.accent.replace('from-', '').replace(' to-', ', ')})`
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right side - Download CV + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Download CV - Hidden on mobile */}
            <a href="/cv.pdf" download="Aaron_Ladron_CV.pdf" className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full border text-sm font-light tracking-wide transition-all duration-300"
                style={{
                  borderColor: theme.border.replace('border-', 'rgba(128, 128, 128, 0.5)'),
                  color: theme.text,
                  background: `linear-gradient(135deg, ${theme.accent.replace('from-', '').replace(' to-', ', ')})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'white',
                }}
              >
                Télécharger CV
              </motion.div>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t"
              style={{ borderColor: theme.border.replace('border-', '').replace('gray-800', 'rgba(128, 128, 128, 0.3)') }}
            >
              <div className="px-6 py-4 space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-white/10 to-white/5 border border-gray-700'
                          : 'border border-transparent hover:bg-white/5'
                      }`}
                      style={{
                        color: isActive(link.path) ? theme.text : theme.textSecondary
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-light tracking-wide">{link.name}</span>
                        {isActive(link.path) && (
                          <motion.div
                            layoutId="mobile-indicator"
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${theme.accent.replace('from-', '').replace(' to-', ', ')})`
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  </Link>
                ))}
                
                {/* Download CV in mobile menu */}
                <a 
                  href="/cv.pdf" 
                  download="Aaron_Ladron_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 rounded-lg border border-gray-700 text-center transition-all duration-300 hover:bg-white/5"
                    style={{ color: theme.text }}
                  >
                    <span className="text-base font-medium tracking-wide">📥 Télécharger CV</span>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

