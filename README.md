# 🚀 Portfolio Aaron Ladron

Portfolio personnel moderne et sécurisé développé avec React, Vite et Tailwind CSS.

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive
- 🌙 Mode thème dynamique
- 🎮 Easter egg interactif (HackerMode)
- 📧 Formulaire de contact sécurisé
- 🔐 Validation stricte des inputs
- ⚡ Performances optimisées avec Vite
- 🎭 Animations fluides avec Framer Motion

## 🛡️ Sécurité

Ce portfolio implémente plusieurs mesures de sécurité :
- ✅ Content Security Policy (CSP)
- ✅ Validation et sanitization des inputs
- ✅ Rate limiting
- ✅ Protection XSS
- ✅ Variables d'environnement pour les secrets

Voir [SECURITY.md](SECURITY.md) pour plus de détails.

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/aaronladron/aaronladron.github.io.git
cd aaronladron.github.io

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env et ajouter votre clé Formspree

# Lancer en développement
npm run dev
```

## 📝 Configuration

### Variables d'Environnement

Créer un fichier `.env` à la racine du projet :

```env
VITE_FORMSPREE_ID=your_formspree_id_here
```

Pour obtenir une clé Formspree :
1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau form
3. Copier l'ID du formulaire

## 🎯 Scripts Disponibles

```bash
npm run dev        # Démarrer le serveur de développement
npm run build      # Build pour la production
npm run preview    # Prévisualiser le build
npm run lint       # Linter le code
```

## 🏗️ Structure du Projet

```
src/
├── components/     # Composants réutilisables
├── contexts/       # Contextes React (Theme)
├── data/          # Données statiques (projets)
├── pages/         # Pages principales
└── assets/        # Images et ressources

public/            # Fichiers statiques
```

## 🚀 Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main`.

Pour déployer manuellement :
```bash
npm run build
# Les fichiers sont générés dans /dist
```

## 🔑 Easter Egg

Clique 3 fois sur le logo "AL" dans la navbar pour accéder au mode hacker ! 🎮

Credentials valides :
- `admin` / `admin`
- `aaron` / `hack`
- `root` / `toor`
- `guest` / `1234`

## 🛠️ Technologies

- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Formspree** - Formulaire de contact

## 📄 License

MIT - Libre d'utilisation et de modification.

## 👨‍💻 Auteur

**Aaron Ladron**
- 📧 Email: aaron.ladron@epitech.eu
- 🐙 GitHub: [@aaronladron](https://github.com/aaronladron)
- 💼 LinkedIn: [Aaron Ladron](https://www.linkedin.com/in/aaron-ladron-67b945340/)

---

**Made with ❤️ and ☕ by Aaron Ladron** | EPITECH 2025