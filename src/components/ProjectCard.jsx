import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ project, index, featured = false, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm"
    >
      {/* Image Container - Simple et élégant */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Gradient simple */}
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 bg-gradient-to-br ${
            project.type === 'academic' 
              ? 'from-blue-600/40 via-cyan-500/30 to-blue-800/40' 
              : 'from-orange-600/40 via-red-500/30 to-pink-600/40'
          }`}
        />

        {/* Pattern subtil */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Badges en haut */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <div className="flex gap-2">
            {project.year && (
              <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-sm text-xs font-medium text-white border border-white/10">
                {project.year}
              </span>
            )}
            <span className={`px-3 py-1 rounded-md backdrop-blur-sm text-xs font-medium border ${
              project.type === 'academic'
                ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                : 'bg-orange-500/20 text-orange-300 border-orange-400/30'
            }`}>
              {project.type === 'academic' ? '🎓 Académique' : '🚀 Personnel'}
            </span>
          </div>
          
          <span className={`px-3 py-1 rounded-md backdrop-blur-sm text-xs font-medium border ${
            project.status === 'Terminé' 
              ? 'bg-green-500/20 text-green-300 border-green-400/30' 
              : 'bg-blue-500/20 text-blue-300 border-blue-400/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Warning en bas */}
        {project.warning && (
          <div className="absolute bottom-4 right-4 z-10">
            <span className="px-3 py-1.5 rounded-md bg-orange-500/30 backdrop-blur-sm border border-orange-400/40 text-xs text-orange-200 font-medium flex items-center gap-1.5">
              ⚠️ Expérimental
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4 space-y-1.5">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        {project.tech && (
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-400 border border-white/10 hover:border-gray-600 hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-500 border border-white/10">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-2.5">
          {/* Details button */}
          {onViewDetails && (
            <motion.button
              onClick={() => onViewDetails(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-2 transition-all"
            >
              <span>📖</span>
              <span>Voir les détails</span>
            </motion.button>
          )}

          {/* Demo button */}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                project.type === 'academic' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                  : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
              }`}
            >
              <span>🚀</span>
              <span>Voir la démo</span>
            </motion.a>
          )}
          
          {/* GitHub button */}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Accéder au repo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Subtle glow on hover */}
      {isHovered && (
        <div className="absolute -inset-0.5 -z-10 opacity-50 blur-xl transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-r ${
            project.type === 'academic' 
              ? 'from-blue-600/30 to-cyan-600/30' 
              : 'from-orange-600/30 to-red-600/30'
          }`} />
        </div>
      )}
    </motion.div>
  )
}
