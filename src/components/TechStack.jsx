import { motion } from 'framer-motion'
import { useState } from 'react'
import 'devicons/css/devicons.css'

const DevIcon = ({ className }) => {
  // Si c'est une icône devicons (de la vieille librairie), utiliser la classe devicons
  // Sinon utiliser devicon (pour les icônes du CDN)
  const baseClass = className.startsWith('devicons-') ? 'devicons' : 'devicon'
  return <i className={`${baseClass} ${className}`}></i>
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Développement Frontend',
      description: 'Création d\'interfaces utilisateur modernes et performantes',
      icon: '⚛️',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, experience: '2 ans', icon: 'devicon-react-original' },
        { name: 'TypeScript', level: 85, experience: '1.5 ans', icon: 'devicon-typescript-original' },
        { name: 'Tailwind CSS', level: 95, experience: '2 ans', icon: 'devicon-tailwindcss-original' },
        { name: 'Next.js', level: 80, experience: '1 an', icon: '▲' },
        { name: 'Vue.js', level: 75, experience: '1 an', icon: '💚' },
      ]
    },
    {
      id: 'backend',
      title: 'Développement Backend',
      description: 'Architecture serveur et gestion de données robustes',
      icon: '🔧',
      gradient: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Node.js', level: 85, experience: '2 ans', icon: 'devicons-nodejs' },
        { name: 'Python', level: 80, experience: '2 ans', icon: 'devicons-python' },
        { name: 'PostgreSQL', level: 75, experience: '1 an', icon: 'devicons-postgresql' },
        { name: 'MongoDB', level: 70, experience: '1 an', icon: 'devicons-mongodb' },
        { name: 'REST API', level: 90, experience: '2 ans', icon: '🔌' },
      ]
    },
    {
      id: 'security',
      title: 'Cybersécurité',
      description: 'Objectif principal • Protection et analyse des systèmes',
      icon: '🔐',
      gradient: 'from-red-500 to-orange-500',
      featured: true,
      skills: [
        { name: 'Sécurité Réseau', level: 80, experience: 'NSI + pratique', icon: '🛡️' },
        { name: 'Web Security', level: 85, experience: 'Formation continue', icon: '🔒' },
        { name: 'Pentesting', level: 75, experience: 'En apprentissage', icon: '🔓' },
        { name: 'Cryptographie', level: 70, experience: 'Études théoriques', icon: '🔐' },
        { name: 'OSINT', level: 80, experience: 'Pratique régulière', icon: '🔍' },
      ]
    },
    {
      id: 'tools',
      title: 'DevOps & Outils',
      description: 'Workflow professionnel et déploiement',
      icon: '🛠️',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90, experience: '2 ans', icon: 'devicon-github-original' },
        { name: 'Docker', level: 75, experience: '1 an', icon: 'devicons-docker' },
        { name: 'Vercel', level: 85, experience: '1.5 ans', icon: '▲' },
        { name: 'AWS', level: 70, experience: 'En apprentissage', icon: 'devicons-aws' },
        { name: 'CI/CD', level: 75, experience: '1 an', icon: '♾️' },
      ]
    }
  ]

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory)

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
        <motion.button
          onClick={() => setActiveCategory('all')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 ${
            activeCategory === 'all'
              ? 'bg-white text-black'
              : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
          }`}
        >
          <span className="hidden sm:inline">Vue d'ensemble</span>
          <span className="sm:hidden">Tout</span>
        </motion.button>
        {skillCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category.id
                ? `bg-gradient-to-r ${category.gradient} text-white`
                : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            <span>{category.icon}</span>
            <span className="hidden sm:inline">{category.title.split(' ')[1]}</span>
            {category.featured && <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full hidden md:inline">Objectif</span>}
          </motion.button>
        ))}
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {filteredCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="relative"
          >
            {/* Category Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl"
                >
                  {category.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 flex flex-wrap items-center gap-2 sm:gap-3">
                    {category.title}
                    {category.featured && (
                      <span className={`text-xs px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white font-normal`}>
                        🎯 Mon objectif de carrière
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{category.description}</p>
                </div>
              </div>
              <div className={`h-1 w-full bg-gradient-to-r ${category.gradient} rounded-full opacity-20`}></div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-3 sm:space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    {/* Icon */}
                    <div className="text-2xl sm:text-3xl w-10 sm:w-12 flex items-center justify-center flex-shrink-0">
                      {skill.icon.startsWith('devicon') ? (
                        <DevIcon className={skill.icon} />
                      ) : (
                        skill.icon
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 min-w-0">
                          <h4 className="text-sm sm:text-base font-semibold text-white truncate">{skill.name}</h4>
                          <span className="text-xs text-gray-500 font-mono">{skill.experience}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                          <span className="text-xs sm:text-sm font-bold text-white">{skill.level}%</span>
                          <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.05, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.gradient} relative`}
                        >
                          {/* Animated shine */}
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>

                        {/* Level markers */}
                        <div className="absolute inset-0 flex justify-between px-1">
                          {[25, 50, 75].map((marker) => (
                            <div
                              key={marker}
                              className="w-px h-full bg-gray-700"
                              style={{ marginLeft: `${marker}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-white/5 to-transparent"
      >
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Parcours & Objectifs</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          <div>
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎓</div>
            <h4 className="font-semibold text-white text-sm sm:text-base mb-1.5 sm:mb-2">Formation actuelle</h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Étudiant à Web@cadémie by Epitech
              <br />
              <span className="text-gray-500">Développement Full Stack</span>
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
            <h4 className="font-semibold text-white text-sm sm:text-base mb-1.5 sm:mb-2">Objectif 2027</h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Master en cybersécurité
              <br />
              <span className="text-gray-500">Spécialisation protection des systèmes</span>
            </p>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🥊</div>
            <h4 className="font-semibold text-white text-sm sm:text-base mb-1.5 sm:mb-2">État d'esprit</h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Rigueur et détermination
              <br />
              <span className="text-gray-500">8 ans de boxe • Soudeur reconverti</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-blue-500/10 to-transparent text-center"
        >
          <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1.5 sm:mb-2">
            {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
          </div>
          <div className="text-xs sm:text-sm text-gray-400">Technologies maîtrisées</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-green-500/10 to-transparent text-center"
        >
          <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-1.5 sm:mb-2">
            2+
          </div>
          <div className="text-xs sm:text-sm text-gray-400">Années d'expérience</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-red-500/10 to-transparent text-center"
        >
          <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-1.5 sm:mb-2">
            🔐
          </div>
          <div className="text-xs sm:text-sm text-gray-400">Spécialisation visée</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-purple-500/10 to-transparent text-center"
        >
          <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-1.5 sm:mb-2">
            {Math.round(
              skillCategories.reduce((acc, cat) => 
                acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0) / cat.skills.length
              , 0) / skillCategories.length
            )}%
          </div>
          <div className="text-sm text-gray-400">Niveau moyen</div>
        </motion.div>
      </div>
    </div>
  )
}
