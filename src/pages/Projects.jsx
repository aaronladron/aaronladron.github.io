import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import AnimatedBackground from '../components/AnimatedBackground'
import { getAcademicProjects, getPersonalProjects } from '../data/projects'

export default function Projects() {
  const [activeSection, setActiveSection] = useState('all')
  
  const academicProjects = getAcademicProjects()
  const personalProjects = getPersonalProjects()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <>
      <AnimatedBackground />
      
      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-3 sm:mb-4"
            >
              <span className="text-5xl sm:text-6xl">💼</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Mes Projets
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
              De mes premiers pas en développement web à des projets personnels ambitieux, découvrez mon parcours technique et ma progression continue
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <motion.button
              onClick={() => setActiveSection('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                activeSection === 'all'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <span className="hidden sm:inline">Tous les projets</span>
              <span className="sm:hidden">Tous</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveSection('academic')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                activeSection === 'academic'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <span className="hidden sm:inline">🎓 Projets Académiques ({academicProjects.length})</span>
              <span className="sm:hidden">🎓 Académiques ({academicProjects.length})</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveSection('personal')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                activeSection === 'personal'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <span className="hidden sm:inline">🚀 Projets Personnels ({personalProjects.length})</span>
              <span className="sm:hidden">🚀 Personnels ({personalProjects.length})</span>
            </motion.button>
          </motion.div>

          {/* Academic Projects Section */}
          {(activeSection === 'all' || activeSection === 'academic') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16 sm:mb-20"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-12"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">🎓</div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Projets Académiques</h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">Formation Web@cadémie by Epitech • Maîtrise des fondamentaux</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20"></div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {academicProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Personal Projects Section */}
          {(activeSection === 'all' || activeSection === 'personal') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16 sm:mb-20"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-12"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">🚀</div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Projets Personnels</h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">Innovation & passion • Cybersécurité, blockchain et plus</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20"></div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
              >
                {personalProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} featured />
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
          >
            <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-blue-500/10 to-transparent text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">
                {academicProjects.length + personalProjects.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Projets réalisés</div>
            </div>
            <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-purple-500/10 to-transparent text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-1 sm:mb-2">
                10+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
            </div>
            <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-green-500/10 to-transparent text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-1 sm:mb-2">
                2+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Années d'expérience</div>
            </div>
            <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-orange-500/10 to-transparent text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-1 sm:mb-2">
                {personalProjects.filter(p => p.status === 'En développement actif' || p.status === 'En développement').length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">En cours</div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
            
            <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Une idée de projet ?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Je suis toujours ouvert à de nouvelles collaborations et défis techniques. 
                Que ce soit du développement web, de la cybersécurité ou des projets innovants, discutons-en !
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-base sm:text-lg shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/70 transition-all duration-300"
              >
                Démarrer un projet
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
