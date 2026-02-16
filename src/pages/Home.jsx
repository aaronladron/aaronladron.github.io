import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import profileImage from '../assets/image.webp'

export default function Home() {
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  
  const commands = [
    '$ whoami',
    '> Aaron Ladron',
    '$ cat role.txt',
    '> Développeur Full Stack',
    '$ cat bio.txt',
    '> Étudiant à la Web@cadémie by Epitech, je développe des',
    '> compétences en développement web, algorithmique et',
    '> programmation orientée projet. Passionné par la sécurité',
    '> informatique, je vise une spécialisation en cybersécurité,',
    '> avec un fort intérêt pour les réseaux et la protection',
    '> des applications.',
    '$ ls skills/',
    '> React • Node.js • TypeScript • Python',
    '$ echo $STATUS',
    '> Ready to build amazing projects'
  ]

  useEffect(() => {
    // Loader effect
    const loaderTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(loaderTimer)
  }, [])

  useEffect(() => {
    if (isLoading) return // Don't start typing until loader is done

    let currentCommand = 0
    let currentChar = 0
    let currentText = ''
    
    const typeInterval = setInterval(() => {
      if (currentCommand < commands.length) {
        if (currentChar < commands[currentCommand].length) {
          currentText += commands[currentCommand][currentChar]
          setTerminalText(currentText)
          currentChar++
        } else {
          currentText += '\n'
          setTerminalText(currentText)
          currentCommand++
          currentChar = 0
        }
      } else {
        clearInterval(typeInterval)
      }
    }, 50)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [isLoading])

  // Loader Component
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50"
      >
        <div className="relative">
          {/* Simple elegant circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border-2 border-gray-800 border-t-white"
          />
          
          {/* Initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-light tracking-widest">AL</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gray-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-900/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Photo + Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start space-y-6 -mt-12 lg:ml-8"
        >
          {/* Name and Title */}
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-light tracking-tight mb-4 text-white"
            >
              Aaron Ladron
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-lg md:text-xl text-gray-400 font-light"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-600"></div>
              <span>Étudiant à Epitech</span>
              <span>Développeur Full Stack</span>
            </motion.div>
          </div>

          {/* Photo with elegant effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group lg:ml-12"
          >
            {/* Subtle shadow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-white/5 to-gray-800/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition duration-700"></div>
            
            {/* Photo Container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
              <img 
                src={profileImage} 
                alt="Aaron Ladron" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Social Icons elegant design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-3"
          >
            <a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-gray-800 flex items-center justify-center hover:bg-white/10 hover:border-gray-600 transition-all duration-300">
                <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aaron-ladron-67b945340/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-gray-800 flex items-center justify-center hover:bg-white/10 hover:border-gray-600 transition-all duration-300">
                <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>

            <a
              href="https://x.com/Embraceee7"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-gray-800 flex items-center justify-center hover:bg-white/10 hover:border-gray-600 transition-all duration-300">
                <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Enhanced Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-2xl">
            {/* Terminal Window */}
            <div className="bg-[#111111] rounded-lg overflow-hidden border border-gray-800/50 hover:border-gray-700 transition-all duration-500">
              {/* Terminal Header */}
              <div className="bg-[#0d0d0d] px-4 py-3 flex items-center justify-between border-b border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">terminal</span>
                </div>
                <div className="text-gray-600 text-xs">zsh</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[450px] bg-[#111111]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-500">$</span>
                  <span className="text-gray-400">~</span>
                </div>
                
                <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {terminalText}
                  {showCursor && <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-block w-2 h-5 bg-green-400 ml-1"
                  />}
                </pre>

                {/* Additional terminal details for realism */}
                {terminalText.length > 100 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-6 pt-4 border-t border-gray-800"
                  >
                    <div className="text-gray-600 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Last login: {new Date().toLocaleString('fr-FR')}</span>
                      </div>
                      <div className="flex gap-4 mt-2">
                        <span className="text-purple-500">✓ System ready</span>
                        <span className="text-blue-500">◉ Online</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-[#0d0d0d] px-4 py-2 border-t border-gray-800/50 flex items-center justify-between text-xs">
                <span className="text-gray-600 font-mono">aaron@portfolio</span>
                <span className="text-gray-700">UTF-8</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
