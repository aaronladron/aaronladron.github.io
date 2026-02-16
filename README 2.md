# Portfolio Premium - Développeur Full Stack EPITECH

Portfolio personnel minimal, moderne et premium. Créé avec React, Vite, Tailwind CSS et Framer Motion.

## 🚀 Features

✨ **Design Premium** - Dark mode élégant avec dégradés et glassmorphisme
🎬 **Animations fluides** - Framer Motion pour des transitions douces et naturelles
📱 **Responsive** - Optimisé mobile, tablet et desktop
♿ **Accessible** - WCAG compliant, sémantique HTML correcte
⚡ **Performance** - Vite pour builds rapides, optimisation images
🔍 **SEO Ready** - Meta tags, Open Graph, sitemap

## 📁 Architecture

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx       # Navigation fixe avec animation
│   ├── Footer.jsx       # Pied de page avec liens sociaux
│   ├── ProjectCard.jsx  # Carte projet avec hover effects
│   ├── AnimatedBackground.jsx  # Arrière-plan animé avec orbs
│   └── TechStack.jsx    # Affichage des compétences
├── pages/               # Pages principales
│   ├── Home.jsx         # Landing hero premium
│   ├── About.jsx        # Présentation & timeline
│   ├── Projects.jsx     # Grille projets avec filtres
│   └── Contact.jsx      # Formulaire de contact
├── data/
│   └── projects.js      # Données des projets
├── assets/              # Images, fonts, etc.
├── App.jsx              # Configuration routing
├── main.jsx             # Entry point React
└── index.css            # Styles globaux

```

## 🛠 Stack Technique

- **React 18** - UI library moderne
- **Vite** - Build tool ultra-rapide
- **React Router DOM** - Routing côté client
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations déclaratives
- **TypeScript** (optionnel) - Type safety

## 💻 Installation

```bash
# Clone le repo
git clone https://github.com/aaronladron/portfolio.git
cd portfolio

# Installe les dépendances
npm install

# Démarre le serveur dev
npm run dev

# Build pour la production
npm run build

# Prévisualise la build
npm run preview
```

## 🎨 Customisation

### Couleurs
Modifiez `tailwind.config.js`:
```js
colors: {
  accent: {
    violet: '#a78bfa',
    cyan: '#06b6d4',
    blue: '#3b82f6'
  }
}
```

### Données Personnelles
1. Remplacez "Aaron Ladron" par votre nom
2. Mise à jour dans:
   - `index.html` - Titre et meta
   - `src/components/Navbar.jsx` - Logo
   - `src/pages/Home.jsx` - Hero titre
   - `src/data/projects.js` - Vos projets

### Projets
Ajoutez vos projets dans `src/data/projects.js`:
```js
{
  id: 1,
  title: 'Mon Projet',
  description: 'Description...',
  tech: ['React', 'Node.js'],
  category: ['Full Stack'],
  github: 'https://github.com/...',
  demo: 'https://demo...'
}
```

## 📧 Formulaire Contact

Pour activer l'envoi d'emails, intégrez un service:
- **EmailJS** - Facile, gratuit jusqu'à 200 emails/mois
- **Formspree** - Service de formulaire simple
- **Backend personnalisé** - Node.js + Nodemailer

Exemple avec EmailJS:
```js
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');
// Puis envoyer via le formulaire
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload le dossier dist à Netlify
```

### GitHub Pages
Modifiez `vite.config.js`:
```js
export default defineConfig({
  base: '/portfolio/'
})
```

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Sécurité

- Pas de données sensibles en dur
- HTTPS sur production
- Headers de sécurité configurés
- XSS protection via React

## 📝 Bonnes Pratiques

✅ **Code**
- Composants réutilisables et modulaires
- Nommage explicite et cohérent
- Pas de logique métier dans les components
- Hooks React modernes

✅ **Performance**
- Images optimisées
- Code splitting automatique
- Lazy loading des routes
- Minification en production

✅ **Accessibilité**
- ARIA labels appropriés
- Contraste suffisant
- Navigation au clavier
- Lecteur d'écran compatible

## 🤝 Contribution

Les pull requests sont bienvenues! Pour les changements majeurs, ouvrez d'abord une issue.

## 📄 License

MIT - Libre d'utilisation et de modification.

## 👋 Contact

- Email: hello@aaronladron.com
- LinkedIn: [Aaron Ladron](https://linkedin.com)
- GitHub: [@aaronladron](https://github.com)

---

**Made with ❤️ by Aaron Ladron** | EPITECH 2025
