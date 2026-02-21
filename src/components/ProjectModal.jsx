import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview')

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal centré */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              className="w-full max-w-2xl max-h-[85vh] sm:max-h-[80vh] bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-2xl shadow-2xl flex flex-col"
            >
              {/* Header compact & responsive */}
              <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-700/50 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg sm:text-2xl font-bold text-white truncate">{project.title}</h2>
                    <div className="flex gap-1 sm:gap-2 mt-1.5 sm:mt-2 flex-wrap">
                      {project.year && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs bg-gray-800 text-gray-300 border border-gray-700">
                          {project.year}
                        </span>
                      )}
                      <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs border whitespace-nowrap ${
                        project.type === 'academic'
                          ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                          : 'bg-orange-500/20 text-orange-300 border-orange-400/30'
                      }`}>
                        {project.type === 'academic' ? '🎓' : '🚀'}
                      </span>
                      <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs border whitespace-nowrap ${
                        project.status === 'Terminé'
                          ? 'bg-green-500/20 text-green-300 border-green-400/30'
                          : 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="p-1 sm:p-1.5 hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
                  >
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Tabs scrollable horizontal */}
              <div className="flex-shrink-0 border-b border-gray-700/50 px-3 sm:px-6 overflow-x-auto">
                <div className="flex gap-1">
                  {[
                    { id: 'overview', label: 'Aperçu' },
                    { id: 'technical', label: 'Technique' },
                    { id: 'architecture', label: 'Arch' },
                    { id: 'features', label: 'Features' }
                  ].map(tab => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-sm whitespace-nowrap border-b-2 transition-all ${
                        activeTab === tab.id
                          ? 'text-purple-400 border-purple-500'
                          : 'text-gray-400 border-transparent hover:text-gray-300'
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Contenu scrollable responsive */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-3 sm:py-4">
                {/* Overview */}
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">À propos</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Points clés</h3>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300">
                              <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Technical */}
                {activeTab === 'technical' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Stack Technologique</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech && project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 text-xs sm:text-xs font-semibold text-purple-300 hover:border-gray-600 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.technicalDetails && project.technicalDetails.length > 0 && (
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Détails</h3>
                        <div className="space-y-2">
                          {project.technicalDetails.map((detail, i) => (
                            <div key={i} className="p-2 sm:p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                              <h4 className="font-semibold text-blue-300 text-xs sm:text-sm mb-1">{detail.title}</h4>
                              <p className="text-gray-300 text-xs leading-relaxed">{detail.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Architecture */}
                {activeTab === 'architecture' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    {project.architecture && project.architecture.length > 0 ? (
                      project.architecture.map((section, i) => (
                        <div key={i} className="p-2.5 sm:p-3.5 rounded-lg bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-gray-700/50">
                          <h4 className="font-semibold text-purple-300 text-xs sm:text-sm mb-1">{section.layer}</h4>
                          <p className="text-gray-300 text-xs leading-relaxed">{section.description}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-xs sm:text-sm">Non disponible</p>
                    )}
                  </motion.div>
                )}

                {/* Features */}
                {activeTab === 'features' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    {project.features && project.features.length > 0 ? (
                      project.features.map((feature, i) => (
                        <div key={i} className="p-2.5 sm:p-3 rounded-lg bg-gray-800/40 border border-gray-700/50">
                          <div className="flex gap-1.5 sm:gap-2">
                            <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">{feature.icon || '⭐'}</span>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-white text-xs sm:text-sm">{feature.title}</h4>
                              <p className="text-gray-400 text-xs mt-0.5">{feature.description}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-xs sm:text-sm">Non disponible</p>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Footer avec boutons responsive */}
              <div className="flex-shrink-0 border-t border-gray-700/50 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm text-white flex items-center gap-1.5 sm:gap-2 transition-all ${
                      project.type === 'academic'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                        : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
                    }`}
                  >
                    <span className="text-sm">🚀</span>
                    <span className="hidden sm:inline">Démo</span>
                  </motion.a>
                )}
                
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm text-gray-300 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 flex items-center gap-1.5 sm:gap-2 transition-all"
                  >
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="hidden sm:inline">GitHub</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
