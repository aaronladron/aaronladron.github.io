import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HackerMode() {
  const [phase, setPhase] = useState('boot') // boot -> login -> terminal
  const [bootLines, setBootLines] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isHacking, setIsHacking] = useState(false)
  const [systemUnlocked, setSystemUnlocked] = useState(false)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)
  const loginRef = useRef(null)

  // Simple obfuscation (not real security, just makes it less obvious)
  const dec = (s) => atob(s)

  const secretInfo = {
    passwords: [dec('YzBmZjMzXzRkZDFjdA=='), dec('bjFnaHRfMHds'), dec('cDF6ejRfbDB2M3I=')],
    files: [
      { name: 'favorite_music.txt', content: 'Playlist: Lofi Hip Hop 24/7 🎧' },
      { name: 'secret_talent.txt', content: 'Je peux résoudre un Rubik\'s Cube en 2min !' },
      { name: 'guilty_pleasure.txt', content: 'J\'adore les films de Noël... même en été 🎄' },
      { name: 'super_power.txt', content: 'Je peux coder pendant 12h avec juste du café ☕' },
      { name: 'weekend_plan.txt', content: 'Debug mon code / Jouer aux jeux vidéo / Répéter' }
    ],
    achievements: [
      '🏆 100 commits en un weekend',
      '🎯 Debug un bug à 3h du matin',
      '☕ Survivre avec 6 expressos par jour',
      '🔥 Stack Overflow réputation: Legendary',
      '🚀 Déployer en prod un vendredi soir (oui, vraiment)'
    ]
  }

  const bootSequence = [
    'Phoenix BIOS v6.00',
    'Copyright (C) 2026 AaronTech Systems',
    '',
    'CPU: Intel Core i9-13900K @ 5.8GHz',
    'Memory Test: 32768MB OK',
    'Detecting Primary Master... AaronOS SSD 1TB',
    'Detecting Primary Slave... None',
    '',
    '[BOOT] Loading AaronOS kernel...',
    '[OK] Initializing system drivers',
    '[OK] Mounting encrypted partitions',
    '[OK] Starting network interfaces',
    '[OK] Loading security modules',
    '[WARNING] Unauthorized access detected',
    '[INFO] System: AaronOS v3.14.159',
    '',
    'Press any key to continue...'
  ]

  useEffect(() => {
    if (phase === 'boot') {
      let delay = 0
      bootSequence.forEach((line) => {
        setTimeout(() => {
          setBootLines(prev => [...prev, line])
        }, delay)
        delay += line === '' ? 50 : 120
      })

      setTimeout(() => {
        setPhase('login')
        setTimeout(() => loginRef.current?.focus(), 300)
      }, delay + 1000)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'terminal' && terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, phase])

  useEffect(() => {
    if (phase === 'terminal') {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [phase])

  const handleLogin = (e) => {
    e.preventDefault()
    
    // Obfuscated credentials (base64 encoded)
    const validLogins = [
      { user: dec('YWRtaW4='), pass: dec('YWRtaW4=') },           // admin/admin
      { user: dec('cm9vdA=='), pass: dec('dG9vcg==') },           // root/toor
      { user: dec('YWFyb24='), pass: dec('aGFjaw==') },           // aaron/hack
      { user: dec('Z3Vlc3Q='), pass: dec('MTIzNA==') }            // guest/1234
    ]

    const isValid = validLogins.some(
      login => login.user.toLowerCase() === username.toLowerCase() && 
               login.pass === password
    )

    if (isValid) {
      setPhase('terminal')
      setTimeout(() => {
        setHistory([
          { type: 'system', text: `Welcome back, ${username}!` },
          { type: 'system', text: `Last login: ${new Date().toLocaleString()}` },
          { type: 'system', text: '' },
          { type: 'system', text: 'AaronOS Terminal v3.14' },
          { type: 'system', text: 'Type "help" for available commands' },
          { type: 'system', text: '' }
        ])
      }, 500)
    } else {
      setLoginAttempts(prev => prev + 1)
      setLoginError(`Access denied. Attempt ${loginAttempts + 1}/5`)
      setPassword('')
      
      if (loginAttempts >= 4) {
        setTimeout(() => {
          setLoginError('System locked. Hint: Try "admin/admin" or "aaron/hack"')
        }, 1000)
      }
    }
  }

  const commands = {
    help: () => [
      'Available commands:',
      '  help          - Show this message',
      '  scan          - Scan system for vulnerabilities',
      '  crack         - Attempt to crack password',
      '  decrypt       - Decrypt hidden files',
      '  secrets       - View secret achievements',
      '  clear         - Clear terminal',
      '  exit          - Exit hacker mode',
      ''
    ],

    scan: () => {
      setIsHacking(true)
      setTimeout(() => setIsHacking(false), 2000)
      return [
        '[SCANNING] Analyzing system vulnerabilities...',
        '█████████████░░░░░░░ 65%',
        '',
        'Vulnerabilities found:',
        '  - Weak password detected',
        '  - Encrypted files detected',
        '  - Hidden achievements detected',
        '',
        'Use "crack" to break password encryption'
      ]
    },

    crack: () => {
      if (currentStep < 1) {
        setCurrentStep(1)
        setIsHacking(true)
        setTimeout(() => setIsHacking(false), 3000)
        return [
          '[CRACKING] Brute forcing password...',
          'Trying: password123... ❌',
          'Trying: admin123... ❌',
          'Trying: qwerty... ❌',
          `Trying: ${secretInfo.passwords[0]}... ✅`,
          '',
          '🔓 PASSWORD CRACKED!',
          `Password: ${secretInfo.passwords[0]}`,
          '',
          'Access granted. Use "decrypt" to view files.'
        ]
      }
      return ['Password already cracked. Use "decrypt" to continue.']
    },

    decrypt: () => {
      if (currentStep < 1) {
        return ['❌ Access denied. Crack the password first using "crack".']
      }
      if (currentStep < 2) {
        setCurrentStep(2)
        setIsHacking(true)
        setTimeout(() => setIsHacking(false), 2500)
        const output = [
          '[DECRYPTING] Extracting hidden files...',
          '',
          '📂 Files decrypted successfully:',
          ''
        ]
        secretInfo.files.forEach(file => {
          output.push(`  📄 ${file.name}`)
          output.push(`     → ${file.content}`)
          output.push('')
        })
        output.push('Use "secrets" to unlock final achievements!')
        return output
      }
      return ['Files already decrypted. Use "secrets" for more.']
    },

    secrets: () => {
      if (currentStep < 2) {
        return ['❌ Decrypt files first using "decrypt".']
      }
      if (!systemUnlocked) {
        setSystemUnlocked(true)
        setIsHacking(true)
        setTimeout(() => setIsHacking(false), 2000)
        return [
          '[ACCESSING] Top secret achievements...',
          '',
          '🎉 SYSTEM FULLY COMPROMISED!',
          '',
          '🏅 Secret Achievements Unlocked:',
          '',
          ...secretInfo.achievements,
          '',
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          '✨ Congratulations, you\'re a true hacker! ✨',
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          '',
          'Thanks for finding this easter egg 🥚',
          'Type "exit" to return to portfolio'
        ]
      }
      return secretInfo.achievements
    },

    clear: () => {
      setHistory([])
      return []
    },

    exit: () => {
      window.location.href = '/'
      return ['Exiting...']
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    
    if (!cmd) return

    setHistory(prev => [...prev, { type: 'command', text: `$ ${input}` }])

    if (commands[cmd]) {
      const output = commands[cmd]()
      setTimeout(() => {
        output.forEach(line => {
          setHistory(prev => [...prev, { type: 'output', text: line }])
        })
      }, 100)
    } else {
      setTimeout(() => {
        setHistory(prev => [...prev, { 
          type: 'error', 
          text: `bash: ${cmd}: command not found. Type "help" for available commands.` 
        }])
      }, 100)
    }

    setInput('')
  }

  if (phase === 'boot') {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-8 flex flex-col">
        <div className="flex-1 overflow-hidden">
          {bootLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
              className="mb-1"
            >
              {line}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block"
          >
            _
          </motion.span>
        </div>
      </div>
    )
  }

  if (phase === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-1 rounded-2xl shadow-2xl">
            <div className="bg-black p-6 rounded-xl border-4 border-gray-700">
              <div className="bg-gradient-to-b from-blue-950 to-black p-8 rounded-lg border border-cyan-900/50">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center mb-8"
                >
                  <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-bold text-cyan-400 mb-1">AaronOS</h1>
                  <p className="text-xs text-gray-500">Secure System Login</p>
                </motion.div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Username</label>
                    <input
                      ref={loginRef}
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-gray-900/50 border border-cyan-900/50 rounded-lg px-4 py-3 text-cyan-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter username"
                      autoComplete="off"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-900/50 border border-cyan-900/50 rounded-lg px-4 py-3 text-cyan-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter password"
                    />
                  </div>

                  {loginError && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-red-950/50 border border-red-500/50 rounded-lg px-4 py-2 text-xs text-red-400"
                    >
                      ⚠️ {loginError}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
                  >
                    Login
                  </button>
                </form>

                <div className="mt-6 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-600 text-center">
                    Hint: Common credentials work here 😉
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-2">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full" />
          </div>
          <div className="flex justify-center">
            <div className="w-24 h-8 bg-gray-800 rounded-b-lg" />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div 
      className="min-h-screen pt-20 pb-12 px-6 font-mono"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-green-400 flex items-center gap-2">
              <span className="animate-pulse">🔓</span>
              AaronOS Terminal - {username}@system
            </h1>
            <div className="flex gap-2">
              <div className={`w-3 h-3 rounded-full ${systemUnlocked ? 'bg-green-400' : 'bg-red-500'} animate-pulse`} />
              <span className="text-xs text-gray-500">
                {systemUnlocked ? 'FULLY COMPROMISED' : 'PROTECTED'}
              </span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {username}@aaronos:~# System access level: {currentStep}/3
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/90 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-2xl overflow-hidden"
        >
          <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-gray-400 ml-4">{username}@terminal ~ zsh</span>
          </div>

          <div 
            ref={terminalRef}
            className="p-6 h-[600px] overflow-y-auto custom-scrollbar"
            onClick={() => inputRef.current?.focus()}
          >
            <AnimatePresence>
              {history.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className={`mb-1 ${
                    line.type === 'command' ? 'text-green-400 font-semibold' :
                    line.type === 'error' ? 'text-red-400' :
                    line.type === 'system' ? 'text-blue-400' :
                    'text-gray-300'
                  }`}
                  style={{ fontSize: '14px', lineHeight: '1.6' }}
                >
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-green-400 font-semibold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-green-400 font-mono"
                style={{ fontSize: '14px', caretColor: '#4ade80' }}
                autoComplete="off"
                spellCheck="false"
                disabled={isHacking}
              />
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-400"
              >
                █
              </motion.span>
            </form>
          </div>

          <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-t border-green-500/30 text-xs">
            <div className="text-gray-400">
              {isHacking ? (
                <span className="text-yellow-400 animate-pulse">⚡ HACKING IN PROGRESS...</span>
              ) : (
                <span>Ready for input</span>
              )}
            </div>
            <div className="text-gray-500">
              Progress: {Math.round((currentStep / 3) * 100)}%
            </div>
          </div>
        </motion.div>

        {!systemUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-4 text-center text-xs text-gray-600"
          >
            💡 Hint: Start with "help" or "scan"
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 222, 128, 0.5);
        }
      `}</style>
    </div>
  )
}
