import { motion } from 'framer-motion'
import Icon from './Icon'

export default function TechStack() {
  const technologyCards = [
    { id: 'web', title: 'Web', icon: 'web', gradient: 'from-purple-600 to-pink-500', desc: 'Développement front-end et backend' },
    { id: 'linux', title: 'Linux', icon: 'linux', gradient: 'from-gray-600 to-gray-500', desc: 'Administration et gestion serveur' },
    { id: 'git', title: 'Git', icon: 'git', gradient: 'from-orange-400 to-red-400', desc: 'Gestion de versions et collaboration' },
    { id: 'database', title: 'Base de données', icon: 'database', gradient: 'from-cyan-500 to-sky-500', desc: 'Modélisation, requêtes et stockage' },
    { id: 'cyber', title: 'Cybersécurité', icon: 'cyber', gradient: 'from-yellow-400 to-amber-500', desc: 'Sécurisation, bonnes pratiques et défense' },
    { id: 'network', title: 'Réseau', icon: 'network', gradient: 'from-green-500 to-emerald-500', desc: 'TCP/IP, configuration, sécurité basique' },
    { id: 'bash', title: 'Bash', icon: 'bash', gradient: 'from-yellow-500 to-orange-400', desc: 'Scripting et automatisation' },
    { id: 'devops', title: 'DevOps', icon: 'devops', gradient: 'from-indigo-500 to-violet-500', desc: 'Automatisation, CI/CD et déploiement' }
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {technologyCards.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group"
          >
            <div className="relative p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-white/4 to-transparent backdrop-blur-sm hover:scale-105 transform transition-all duration-300 text-center overflow-hidden h-44 sm:h-48 md:h-52">
              <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${t.gradient} blur-2xl`} />
              <div className="relative z-10 flex flex-col items-center text-center gap-3 h-full justify-center">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${t.gradient} text-white shadow-md`} aria-hidden>
                  <Icon name={t.icon} className="text-3xl" />
                </div>
                <h3 className="text-base font-semibold text-white">{t.title}</h3>
                <p className="text-sm text-gray-400 max-w-[14rem]">{t.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
