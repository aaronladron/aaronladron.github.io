import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../contexts/ThemeContext'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme } = useTheme()
  const [clicks, setClicks] = useState(0)

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

          {/* Right side - Download CV + Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Download CV */}
            <a href="/cv.pdf" download="Aaron_Ladron_CV.pdf">
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
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

