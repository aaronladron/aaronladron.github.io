import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { name: 'GitHub', url: 'https://github.com', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'LI' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'X' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="relative bg-dark-900/50 backdrop-blur-md border-t border-white/5"
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent mb-2">
              AL.
            </h3>
            <p className="text-gray-400 text-sm">
              Développeur Full Stack EPITECH • Passion pour le code premium
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="hover:text-accent-violet transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent-violet transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent-violet transition-colors">CV</a></li>
              <li><a href="#" className="hover:text-accent-violet transition-colors">Snippets</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connectez-vous</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-gray-300 hover:bg-accent-violet/20 hover:text-accent-violet border border-white/10"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Aaron Ladron. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-violet transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent-violet transition-colors">Terms</a>
            <a href="#" className="hover:text-accent-violet transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
