import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import TechStack from '../components/TechStack'
import AnimatedBackground from '../components/AnimatedBackground'

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const journey = [
    {
      phase: "Le lycée",
      year: "2020-2024",
      icon: "🎓",
      title: "L'éveil d'une passion",
      description: "Spécialités NSI et mathématiques. Une ambition claire : la cybersécurité. Un domaine qui m'attire pour son exigence technique et son rôle essentiel.",
      color: "from-blue-500 to-cyan-500",
      status: "challenge"
    },
    {
      phase: "Terminale",
      year: "2024",
      icon: "⚡",
      title: "L'épreuve",
      description: "Des difficultés personnelles freinent mon parcours scolaire. Le baccalauréat m'échappe. Mais abandonner n'était pas une option.",
      color: "from-red-500 to-orange-500",
      status: "turning-point"
    },
    {
      phase: "Reconversion",
      year: "2024-2025",
      icon: "🔥",
      title: "La forge",
      description: "CQPM Soudeur. Une expérience formatrice qui m'apprend la rigueur, la précision et la persévérance. Mais une évidence s'impose : ce n'est pas ma voie.",
      color: "from-amber-500 to-yellow-500",
      status: "discovery"
    },
    {
      phase: "Le retour",
      year: "2026",
      icon: "💻",
      title: "Renaissance",
      description: "Epitech me fait confiance. Je trouve ma place. Pleinement investi, déterminé à exploiter chaque opportunité. Ma passion devient enfin mon parcours.",
      color: "from-purple-500 to-pink-500",
      status: "current"
    },
    {
      phase: "L'objectif",
      year: "2027+",
      icon: "🎯",
      title: "Vers le master",
      description: "Master en cybersécurité. Faire de ma passion un métier. Évoluer dans un domaine qui me motive, me challenge et donne du sens à mon engagement.",
      color: "from-green-500 to-emerald-500",
      status: "future"
    }
  ]

  const interests = [
    { icon: "🎨", title: "Art", desc: "Création et expression visuelle", color: "from-pink-500 to-rose-500" },
    { icon: "🥊", title: "Boxe", desc: "8 ans de pratique • Discipline & rigueur", color: "from-red-500 to-orange-500" },
    { icon: "🔐", title: "Cybersécurité", desc: "Protection & analyse des systèmes", color: "from-blue-500 to-cyan-500" },
    { icon: "⚙️", title: "Soudure", desc: "Travail manuel & fabrication", color: "from-amber-500 to-yellow-500" },
    { icon: "💻", title: "Tech", desc: "Nouvelles technologies & innovation", color: "from-purple-500 to-indigo-500" }
  ]

  const qualities = [
    {
      icon: "🔍",
      title: "Curieux",
      desc: "Toujours motivé pour découvrir de nouvelles technologies et méthodes",
      percentage: 95
    },
    {
      icon: "⚡",
      title: "Rigoureux",
      desc: "Attention aux détails et aux bonnes pratiques dans mes projets",
      percentage: 92
    },
    {
      icon: "🚀",
      title: "Autonome",
      desc: "Capable de gérer mes tâches et d'apprendre rapidement",
      percentage: 90
    },
    {
      icon: "🤝",
      title: "Esprit d'équipe",
      desc: "J'apprécie le travail collaboratif et le partage de connaissances",
      percentage: 88
    },
    {
      icon: "📋",
      title: "Organisé",
      desc: "Je structure mon travail pour être efficace et respecter les deadlines",
      percentage: 91
    },
    {
      icon: "❤️",
      title: "Passionné",
      desc: "Motivé par le développement web et la cybersécurité",
      percentage: 98
    }
  ]

  const languages = [
    { lang: "Anglais", level: "B1", desc: "Compréhension fonctionnelle, lecture de docs techniques", percentage: 60 },
    { lang: "Espagnol", level: "B2", desc: "Bonne maîtrise écrite et orale, contenus complexes", percentage: 75 }
  ]

  return (
    <>
      <AnimatedBackground />

      <div ref={containerRef} className="relative">
        {/* Hero Section - Ultra impactant */}
        <motion.div
          style={{ opacity, scale }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
          {/* Effet de lumière dynamique */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Mon Histoire
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-3xl text-gray-400 font-light mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Un parcours <span className="text-white font-medium">non linéaire</span>, guidé par une passion <span className="text-white font-medium">constante</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center gap-8 mt-12"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">20</div>
                  <div className="text-sm text-gray-500 mt-1">ans</div>
                </div>
                <div className="h-16 w-px bg-gray-800"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">∞</div>
                  <div className="text-sm text-gray-500 mt-1">passion</div>
                </div>
                <div className="h-16 w-px bg-gray-800"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">1</div>
                  <div className="text-sm text-gray-500 mt-1">objectif</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section - Parcours détaillé */}
        <div className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Le Parcours
                </span>
              </h2>
              <p className="text-xl text-gray-400">De l'ambition aux épreuves, des doutes à la renaissance</p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2 hidden md:block" />

              <div className="space-y-24">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative group"
                      >
                        {/* Glow effect */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500`}></div>

                        <div className="relative p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="text-sm font-mono text-gray-500 mb-2">{item.year}</div>
                              <div className="text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r {item.color} mb-3">
                                {item.phase}
                              </div>
                            </div>
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                              className="text-4xl"
                            >
                              {item.icon}
                            </motion.div>
                          </div>

                          <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{item.description}</p>

                          {/* Status indicator */}
                          <div className="mt-4 flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${item.status === 'current' ? 'bg-green-400 animate-pulse' :
                                item.status === 'future' ? 'bg-blue-400' :
                                  item.status === 'turning-point' ? 'bg-orange-400' :
                                    'bg-gray-600'
                              }`}></div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">
                              {item.status === 'current' ? 'En cours' :
                                item.status === 'future' ? 'Objectif' :
                                  item.status === 'turning-point' ? 'Point tournant' :
                                    item.status === 'discovery' ? 'Découverte' :
                                      'Challenge'}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:block relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-[#0a0a0a]`}
                      />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Centres d'intérêt - Section immersive */}
        <div className="relative py-32 px-6 overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400">
                  Centres d'intérêt
                </span>
              </h2>
              <p className="text-xl text-gray-400">Ce qui me passionne au-delà du code</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${interest.color} rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500`}></div>

                  <div className="relative p-8 rounded-xl bg-[#0a0a0a] border border-gray-800 group-hover:border-gray-700 transition-all duration-500 h-full flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl mb-4"
                    >
                      {interest.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{interest.title}</h3>
                    <p className="text-gray-400 text-sm">{interest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Qualités - Grid dynamique */}
        <div className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                  Mes Qualités
                </span>
              </h2>
              <p className="text-xl text-gray-400">Ce qui me définit en tant que développeur</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl"
                      >
                        {quality.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-white">{quality.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{quality.desc}</p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">Niveau</span>
                        <span className="text-xs font-bold text-gray-400">{quality.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${quality.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Langues - Section élégante */}
        <div className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  Langues
                </span>
              </h2>
              <p className="text-xl text-gray-400">Communication internationale</p>
            </motion.div>

            <div className="space-y-8">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>

                  <div className="relative p-8 rounded-xl bg-[#0a0a0a] border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{language.lang}</h3>
                        <p className="text-sm text-gray-400">{language.desc}</p>
                      </div>
                      <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                        {language.level}
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Stack Technique
                </span>
              </h2>
              <p className="text-xl text-gray-400">Les technologies que je maîtrise</p>
            </motion.div>
            <TechStack />
          </div>
        </div>

        {/* CTA Final */}
        <div className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

              <div className="relative p-12 rounded-3xl bg-[#0a0a0a] border border-gray-800">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Prêt à construire<br />des projets incroyables
                  </span>
                </h3>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  D'un parcours atypique à une détermination sans faille.<br />
                  Chaque ligne de code est une étape vers l'excellence.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Travaillons ensemble
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
