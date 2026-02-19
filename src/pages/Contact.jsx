import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [validationErrors, setValidationErrors] = useState({})
  const lastSubmitTime = useRef(0)

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, '')
  }

  const validateForm = () => {
    const errors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis'
    } else if (formData.name.length < 2) {
      errors.name = 'Le nom doit contenir au moins 2 caractères'
    } else if (formData.name.length > 100) {
      errors.name = 'Le nom est trop long (max 100 caractères)'
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis'
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email invalide'
    } else if (formData.email.length > 200) {
      errors.email = 'L\'email est trop long'
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Le sujet est requis'
    } else if (formData.subject.length < 3) {
      errors.subject = 'Le sujet doit contenir au moins 3 caractères'
    } else if (formData.subject.length > 200) {
      errors.subject = 'Le sujet est trop long (max 200 caractères)'
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Le message est requis'
    } else if (formData.message.length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères'
    } else if (formData.message.length > 5000) {
      errors.message = 'Le message est trop long (max 5000 caractères)'
    }

    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError(null)
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Rate limiting: 1 message per 30 seconds
    const now = Date.now()
    if (now - lastSubmitTime.current < 30000) {
      setError('Merci d\'attendre 30 secondes entre chaque envoi')
      return
    }

    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setError('Veuillez corriger les erreurs dans le formulaire')
      return
    }

    setLoading(true)
    setError(null)
    setValidationErrors({})

    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      }

      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'xqedewka'
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData)
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message')
      }

      lastSubmitTime.current = now
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('Erreur lors de l\'envoi. Vérifie ta connexion et réessaie.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const contactChannels = [
    {
      emoji: '📧',
      title: 'Email',
      description: 'aaron.ladron@epitech.eu',
      href: 'mailto:aaron.ladron@epitech.eu',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      emoji: '🐙',
      title: 'GitHub',
      description: 'Voir mes projets',
      href: 'https://github.com/aaronladron',
      gradient: 'from-purple-500 to-pink-500',
      external: true,
      delay: 0.1
    },
    {
      emoji: '💼',
      title: 'LinkedIn',
      description: 'Mon profil',
      href: 'https://www.linkedin.com/in/aaron-ladron-67b945340/',
      gradient: 'from-cyan-500 to-blue-500',
      external: true,
      delay: 0.2
    }
  ]

  // Floating particles
  const floatingParticles = Array.from({ length: 6 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
      initial={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0.2
      }}
      animate={{
        y: [0, -30 - i * 10, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 5 + i,
        repeat: Infinity,
        delay: i * 0.3
      }}
    />
  ))

  return (
    <>
      <AnimatedBackground />
      
      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingParticles}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
              className="inline-block mb-3 sm:mb-4"
            >
              <motion.span 
                className="text-5xl sm:text-6xl"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💌
              </motion.span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Restons en contact
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Une question, une collaboration ou une opportunité ? N'hésite pas à me contacter ou utilise le formulaire ci-dessous
            </motion.p>
          </motion.div>

          {/* Contact Channels */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            {contactChannels.map((channel, idx) => (
              <motion.a
                key={idx}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: channel.delay, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-6 sm:p-8 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-gray-700 transition-all"
              >
                {/* Animated glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Pulsing border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r ${channel.gradient} opacity-0`}
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 inline-block"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    {channel.emoji}
                  </motion.div>
                  <motion.h3 
                    className="text-white font-bold text-lg sm:text-xl mb-2"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {channel.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-xs sm:text-sm break-all"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {channel.description}
                  </motion.p>
                </div>

                {/* Animated border bottom */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${channel.gradient}`}
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Animated Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12 sm:mb-16 md:mb-20 relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ou envoie-moi un message
              </motion.h2>
              <motion.p 
                className="text-gray-400 text-sm sm:text-base"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Remplis ce formulaire et je te répondrai rapidement
              </motion.p>
            </div>

            {/* Form Card */}
            <motion.div 
              className="relative p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-xl overflow-hidden"
              whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Top gradient line animation */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-5 sm:space-y-6">
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                  >
                    <p className="text-red-400 text-xs sm:text-sm">❌ {error}</p>
                  </motion.div>
                )}

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 sm:p-4 rounded-xl bg-green-500/10 border border-green-500/30"
                  >
                    <motion.p 
                      className="text-green-400 text-xs sm:text-sm font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      ✓ Message envoyé avec succès!
                    </motion.p>
                  </motion.div>
                )}

                {/* Two Column Grid */}
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.label 
                      className="block text-sm font-semibold text-white mb-3"
                      whileHover={{ color: '#d8b4fe' }}
                    >
                      Nom
                    </motion.label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength="100"
                      placeholder="Ton nom"
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all ${
                        validationErrors.name 
                          ? 'border-red-500 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20' 
                          : 'border-gray-700 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20'
                      }`}
                    />
                    {validationErrors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {validationErrors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 }}
                  >
                    <motion.label 
                      className="block text-sm font-semibold text-white mb-3"
                      whileHover={{ color: '#d8b4fe' }}
                    >
                      Email
                    </motion.label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength="200"
                      placeholder="ton@email.com"
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all ${
                        validationErrors.email 
                          ? 'border-red-500 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20' 
                          : 'border-gray-700 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20'
                      }`}
                    />
                    {validationErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {validationErrors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.label 
                    className="block text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3"
                    whileHover={{ color: '#d8b4fe' }}
                  >
                    Sujet
                  </motion.label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    maxLength="200"
                    placeholder="Quel est le sujet ?"
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all ${
                      validationErrors.subject 
                        ? 'border-red-500 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20' 
                        : 'border-gray-700 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20'
                    }`}
                  />
                  {validationErrors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {validationErrors.subject}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                >
                  <motion.label 
                    className="block text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3"
                    whileHover={{ color: '#d8b4fe' }}
                  >
                    Message
                  </motion.label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength="5000"
                    placeholder="Raconte-moi..."
                    rows="5"
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all resize-none ${
                      validationErrors.message 
                        ? 'border-red-500 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20' 
                        : 'border-gray-700 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20'
                    }`}
                  />
                  {validationErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {validationErrors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submitted || loading}
                  className="w-full py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 disabled:opacity-50 transition-all relative overflow-hidden group"
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />

                  <motion.span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                          ⏳
                        </motion.span>
                        Envoi en cours...
                      </>
                    ) : submitted ? (
                      <>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>
                          ✓
                        </motion.span>
                        Message envoyé!
                      </>
                    ) : (
                      <>
                        🚀 Envoyer
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center text-gray-500 text-xs sm:text-sm mt-8 sm:mt-12"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Je vérifierai ton message rapidement ⚡
            </motion.span>
          </motion.p>
        </div>
      </div>
    </>
  )
}
