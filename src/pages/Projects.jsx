import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import AnimatedBackground from '../components/AnimatedBackground'
import { getAcademicProjects, getPersonalProjects } from '../data/projects'

export default function Projects() {
  const [activeSection, setActiveSection] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
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
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <motion.button
              onClick={() => setActiveSection('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                activeSection === 'all'
                  ? 'bg-purple-600 text-white'
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
                  ? 'bg-blue-600 text-white'
                      : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
                  <span className="hidden sm:inline">Projets Académiques ({academicProjects.length})</span>
                  <span className="sm:hidden">Académiques ({academicProjects.length})</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveSection('personal')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                activeSection === 'personal'
                  ? 'bg-orange-600 text-white'
                      : 'bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
                  <span className="hidden sm:inline">Projets Personnels ({personalProjects.length})</span>
                  <span className="sm:hidden">Personnels ({personalProjects.length})</span>
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
                className="mb-8 sm:mb-12 text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Projets Académiques</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-2">Formation Web@cadémie by Epitech • Maîtrise des fondamentaux</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mx-auto max-w-6xl"
              >
                {academicProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                    onViewDetails={setSelectedProject}
                  />
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
                className="mb-8 sm:mb-12 text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Projets Personnels</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-2">Innovation & passion • Cybersécurité, blockchain et plus</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mx-auto max-w-6xl"
              >
                {personalProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                    onViewDetails={setSelectedProject}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Network nodes background (subtle) */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-30" viewBox="0 0 1200 300" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <g stroke="url(#g1)" strokeWidth="1" fill="none">
                <line x1="50" y1="40" x2="220" y2="120" />
                <line x1="220" y1="120" x2="420" y2="30" />
                <line x1="420" y1="30" x2="780" y2="90" />
                <line x1="780" y1="90" x2="980" y2="40" />
                <circle cx="50" cy="40" r="3" fill="#3b82f6" />
                <circle cx="220" cy="120" r="4" fill="#06b6d4" />
                <circle cx="420" cy="30" r="3" fill="#60a5fa" />
                <circle cx="780" cy="90" r="3" fill="#06b6d4" />
                <circle cx="980" cy="40" r="4" fill="#3b82f6" />
              </g>
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
              <div className="p-6 sm:p-8 rounded-2xl border border-gray-800 bg-[#071024]/60 text-center backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">
                  {academicProjects.length + personalProjects.length}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl border border-gray-800 bg-[#071024]/60 text-center backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl border border-gray-800 bg-[#071024]/60 text-center backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">2+</div>
                <div className="text-xs sm:text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl border border-gray-800 bg-[#071024]/60 text-center backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">
                  {personalProjects.filter(p => p.status === 'En développement actif' || p.status === 'En développement').length}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">En cours</div>
              </div>
            </div>

            {/* Filter bar (wide) */}
            <div className="max-w-6xl mx-auto mt-6 mb-12">
              <div className="rounded-2xl bg-[#071024]/50 border border-gray-800/60 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left flex-1 min-w-0">
                  <div className="text-xs uppercase text-gray-400 tracking-wide mb-2">Lecture par intention</div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white truncate">Filtre ton angle de lecture selon le besoin du recruteur</h3>
                </div>

                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold">DevOps</button>
                  <button className="px-4 py-2 rounded-full bg-white/5 text-gray-300">Réseau</button>
                  <button className="px-4 py-2 rounded-full bg-white/5 text-gray-300">Système</button>
                  <button className="px-4 py-2 rounded-full bg-white/5 text-gray-300">Sécurité</button>
                </div>
              </div>
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

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  )
}
