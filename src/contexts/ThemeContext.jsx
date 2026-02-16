import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const themes = {
  dark: {
    name: 'Dark',
    icon: '🌙',
    bg: '#0a0a0a',
    bgGradient: 'from-[#0a0a0a] to-[#0f0f0f]',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    accent: 'from-purple-500 to-pink-500',
    border: 'border-gray-800',
    card: 'bg-[#0a0a0a]',
    glow: 'from-purple-500/20 to-pink-500/20',
    image: 'night-sky',
  },
  light: {
    name: 'Light',
    icon: '☀️',
    bg: '#ffffff',
    bgGradient: 'from-white to-gray-50',
    text: '#0a0a0a',
    textSecondary: '#666666',
    accent: 'from-blue-600 to-purple-600',
    border: 'border-gray-200',
    card: 'bg-white',
    glow: 'from-blue-600/20 to-purple-600/20',
    image: 'sunny-day',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    icon: '🔮',
    bg: '#0d0221',
    bgGradient: 'from-[#0d0221] to-[#1a0b2e]',
    text: '#00ff9f',
    textSecondary: '#bd00ff',
    accent: 'from-[#00ff9f] to-[#bd00ff]',
    border: 'border-[#00ff9f]/30',
    card: 'bg-[#0d0221]',
    glow: 'from-[#00ff9f]/30 to-[#bd00ff]/30',
    image: 'neon-city',
  },
  sunset: {
    name: 'Sunset',
    icon: '🌅',
    bg: '#1a0b2e',
    bgGradient: 'from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]',
    text: '#fff5e1',
    textSecondary: '#ffb8d1',
    accent: 'from-orange-500 via-pink-500 to-purple-500',
    border: 'border-pink-500/30',
    card: 'bg-[#1a0b2e]/80',
    glow: 'from-orange-500/30 to-purple-500/30',
    image: 'sunset-clouds',
  },
  ocean: {
    name: 'Ocean',
    icon: '🌊',
    bg: '#001427',
    bgGradient: 'from-[#001427] via-[#002855] to-[#003d82]',
    text: '#e0f4ff',
    textSecondary: '#7dd3fc',
    accent: 'from-cyan-400 to-blue-500',
    border: 'border-cyan-500/30',
    card: 'bg-[#001427]/80',
    glow: 'from-cyan-400/30 to-blue-500/30',
    image: 'ocean-waves',
  },
  forest: {
    name: 'Forest',
    icon: '🌲',
    bg: '#0a1f0a',
    bgGradient: 'from-[#0a1f0a] via-[#162d16] to-[#1e3a1e]',
    text: '#d4f1d4',
    textSecondary: '#90ee90',
    accent: 'from-green-400 to-emerald-600',
    border: 'border-green-500/30',
    card: 'bg-[#0a1f0a]/80',
    glow: 'from-green-400/30 to-emerald-600/30',
    image: 'forest-trees',
  }
}

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
    // Apply theme to root on mount
    applyThemeToDocument(savedTheme || 'dark')
  }, [])

  const applyThemeToDocument = (themeName) => {
    const theme = themes[themeName]
    document.documentElement.style.backgroundColor = theme.bg
    document.documentElement.style.color = theme.text
    document.body.style.backgroundColor = theme.bg
    document.body.style.color = theme.text
    document.body.style.transition = 'background-color 2500ms ease-in-out, color 2500ms ease-in-out'
  }

  const changeTheme = (themeName) => {
    if (themeName === currentTheme || isTransitioning) return

    setIsTransitioning(true)
    setCurrentTheme(themeName)
    localStorage.setItem('portfolio-theme', themeName)
    
    // Apply theme to document immediately
    applyThemeToDocument(themeName)

    // Animation transition
    setTimeout(() => {
      setIsTransitioning(false)
    }, 2500)
  }

  const theme = themes[currentTheme]

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, changeTheme, isTransitioning, themes }}>
      <div 
        className="min-h-screen w-full transition-colors duration-[2500ms] ease-in-out"
        style={{ backgroundColor: theme.bg, color: theme.text }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
