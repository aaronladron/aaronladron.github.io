# Resume development
Aller dans le répertoire du projet et exécuter:

```bash
npm install
npm run dev
```

# Build pour production
```bash
npm run build
npm run preview
```

# Instructions de personnalisation

1. **Remplacer le nom**: Cherchez "Aaron Ladron" dans tous les fichiers et remplacez par votre nom
   
2. **Ajouter vos projets**: Modifiez `src/data/projects.js`

3. **Ajouter des images**: Placez les images de projets dans `src/assets/` et mettez à jour les chemins

4. **Configurer les contacts**:
   - Email: Mettez à jour l'adresse dans Footer et Contact
   - Liens sociaux: Modifiez les URLs dans Navbar et Footer

5. **Déployer**:
   - Vercel: `npm install -g vercel && vercel`
   - Netlify: Connectez votre repo via l'interface Netlify
   - GitHub Pages: Modifiez `vite.config.js` et pushez sur `gh-pages`

Tout est commenté et facilement modifiable. Bon courage! 🚀
