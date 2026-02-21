export const projects = [
  // Projets Académiques
  {
    id: 1,
    title: 'Klivio',
    description: 'Mon premier projet académique qui a posé les bases de mes compétences en développement web. Une interface moderne et entièrement responsive, développée avec une attention particulière aux bonnes pratiques d\'intégration et aux principes de design modernes.',
    longDescription: 'Klivio représente mon entrée dans le monde du développement web professionnel. Ce projet m\'a permis de maîtriser la création d\'interfaces utilisateur modernes en utilisant HTML sémantique et Tailwind CSS. J\'ai particulièrement travaillé sur la responsive design, l\'accessibilité et les performances, en veillant à ce que chaque élément soit optimisé pour une expérience utilisateur fluide sur tous les appareils.',
    image: '/projects/klivio.jpg',
    tech: ['HTML5', 'Tailwind CSS', 'Responsive Design', 'Best Practices'],
    category: ['Académique', 'Frontend'],
    type: 'academic',
    year: '2025',
    status: 'Terminé',
    highlights: [
      'Interface 100% responsive',
      'Design moderne et épuré',
      'Code structuré et maintenable',
      'Respect des standards web'
    ],
    technicalDetails: [
      {
        title: 'HTML5 Sémantique',
        description: 'Utilisation correcte des balises sémantiques : <header>, <nav>, <main>, <section>, <article>, <footer>. Structure logique et hiérarchique avec headings h1-h6 appropriés. Attributs data-* pour fonctionnalités JS. ARIA labels pour accessibilité. Meta tags SEO : viewport, description, og:image pour OpenGraph.'
      },
      {
        title: 'Tailwind CSS & Design System',
        description: 'Framework utility-first pour rapid prototyping sans CSS custom. Configuration personnalisée : couleurs, spacing, typography. Composants abstraits : buttons, cards, modals, forms. Responsive modifiers (sm:, md:, lg:) pour mobile-first design. Dark mode support via class toggle. Animation utilities pour micro-interactions.'
      },
      {
        title: 'Responsive Design & Mobile-First',
        description: 'Breakpoints Tailwind : mobile (< 640px), tablet (640-1024px), desktop (1024+). Flex et Grid layouts avec adaptation écrans. Images responsive avec srcset. Hamburger menu mobile. Touch-friendly buttons min 44x44px. Viewport meta tag 1:1 pour correct zoom mobile.'
      },
      {
        title: 'Accessibilité & Inclusivité',
        description: 'WCAG 2.1 AA compliance. Contraste texte min 4.5:1. Focus visible sur tous input. Skip to content link. Semantic HTML pour lecteurs d\'écran. Labels explicites pour formulaires. Alt text descriptifs images. Keyboard navigation complète.'
      },
      {
        title: 'Performance & Optimisation',
        description: 'Lazy loading images avec loading=lazy. CSS minifié et purifié via Tailwind PurgeCSS. Images optimisées format WebP + fallback. No render-blocking ressources. Lighthouse score 90+. Cumulative Layout Shift mitigé. Performance Budget < 100KB CSS.'
      }
    ],
    architecture: [
      {
        layer: 'HTML Structure',
        description: 'Single page ou multi-pages. Partials réutilisables (header, footer, navbar). Template hiérarchie claire. Semantic markup exploité au maximum.'
      },
      {
        layer: 'Styling (Tailwind CSS)',
        description: 'Configuration centralisée tailwind.config.js. Utility classes appliquées directement HTML. @layer pour customization. Component layer pour abstractions fréquentes.'
      },
      {
        layer: 'JavaScript Minimal',
        description: 'Vanilla JS pour interactivité : menu toggle, smooth scroll, form validation. Event listeners simples. No dependencies lourdes. Progressive enhancement.'
      }
    ],
    features: [
      {
        icon: '📱',
        title: 'Design Responsive Complet',
        description: 'Adaptation fluide de mobile à 4K. Layouts flexibles avec Flexbox/Grid. Images scaling proportionnel. Navigation mobile optimisée avec hamburger menu.'
      },
      {
        icon: '♿',
        title: 'Accessibilité Prioritaire',
        description: 'WCAG 2.1 AA compliance. Navigation au clavier entière. Lecteur d\'écran friendly. Contraste élevé. Focus indicators visibles.'
      },
      {
        icon: '⚡',
        title: 'Performance Optimisée',
        description: 'Lighthouse 90+ score. Temps chargement < 3s. Images optimisées WebP. CSS inlining critique pour above-the-fold.'
      },
      {
        icon: '🎨',
        title: 'Design System Tailwind',
        description: 'Componentes visuels cohérents. Couleurs et spacing harmonieux. Typography hiérarchie claire. Animations subtiles et fluides.'
      },
      {
        icon: '🔍',
        title: 'SEO-Friendly',
        description: 'Meta tags structurés. OpenGraph cards. Semantic HTML. Mobile-first indexing. Sitemap et robots.txt.'
      },
      {
        icon: '💾',
        title: 'Code Clean & Maintenable',
        description: 'Class naming conventions BEM. Fichiers organisés et modulaires. Commentaires explicatifs. Zero technical debt.'
      }
    ],
    github: 'https://github.com/aaronladron/Klivio-site'
  },
  {
    id: 2,
    title: 'Générateur de CV',
    description: 'Application web interactive permettant de créer des CV professionnels personnalisables. Une interface intuitive développée avec JavaScript natif, Bootstrap pour le design, et PHP pour la gestion des données backend.',
    longDescription: 'Ce générateur de CV dynamique offre une expérience utilisateur complète avec prévisualisation en temps réel, multiples templates professionnels et export PDF. Le frontend utilise JavaScript pour gérer les interactions dynamiques, Bootstrap pour garantir une interface responsive et moderne, tandis que PHP gère la logique serveur, la validation des données et la génération des fichiers.',
    image: '/projects/cv-generator.jpg',
    tech: ['JavaScript', 'PHP', 'Bootstrap', 'MySQL', 'PDF Generation'],
    category: ['Académique', 'Full Stack'],
    type: 'academic',
    year: '2025',
    status: 'Terminé',
    highlights: [
      'Prévisualisation en temps réel',
      'Multiples templates professionnels',
      'Export PDF haute qualité',
      'Sauvegarde et modification des CV'
    ],
    technicalDetails: [
      {
        title: 'Frontend JavaScript interactif',
        description: 'Vanilla JavaScript pour manipulation DOM dynamique. Utilisation API File Reader pour upload image et conversion Base64. Event listeners pour ajout/suppression dynamique sections (expériences, formations, compétences). LocalStorage pour persister données temporairement. Gestion thèmes couleurs via CSS variables et manipulation HEX/RGB avec expressions régulières.'
      },
      {
        title: 'Bootstrap 5 & Design Responsive',
        description: 'Grid system Bootstrap pour layout responsive. Formulaires Bootstrap avec validation client-side. Cards et components pour section CV. Font Awesome 6 pour icônes professionnelles. Thèmes couleur prédéfinis avec customization. Mobile-first design avec breakpoints adaptés.'
      },
      {
        title: 'Backend PHP 8+ & Gestion Documents',
        description: 'PHP 8+ avec framework léger (Slim/Fat-Free OuCustom). Routes API : /generate-pdf, /save-cv, /load-cv. Validation input stricte côté serveur. Session management pour utilisateurs. Middleware de sécurité : CSRs protection, sanitization inputs.'
      },
      {
        title: 'Génération PDF avec Browsershot/Puppeteer',
        description: 'Spatie Browsershot pour wrapper Puppeteer. Node.js + Puppeteer côté serveur pour headless Chrome. HTML template avec CSS inliner pour fidélité visuelle PDF. Génération A4 avec margins/padding précis. Optimisation performance : queue génération, caching templates, nettoyage fichiers temporaires.'
      },
      {
        title: 'Base de Données MySQL',
        description: 'Tables : users, cvs, experiences, educations, skills, languages. Relations avec foreign keys. Timestamps created_at/updated_at. Soft deletes pour CV supprimés. Indexes sur user_id et created_at. Backups incrémentiels.'
      }
    ],
    architecture: [
      {
        layer: 'Frontend (HTML/CSS/JS)',
        description: 'Pages : index.html (accueil), generateur.html (formulaire), preview.html (aperçu). Components : FormSection, CVPreview, ThemeSelector. Services : ApiClient.js pour requêtes backend.'
      },
      {
        layer: 'Backend API (PHP)',
        description: 'Routes : POST /api/generate-pdf (Browsershot), POST /api/save-cv, GET /api/cv/:id. Middleware authentification. Services : PDFGenerator, CVValidator, ImageProcessor.'
      },
      {
        layer: 'PDF Generation (Node.js)',
        description: 'Puppeteer server Worker. HTML to PDF conversion. CSS media print optimization. Asset inlining. Output stream vers stockage serveur.'
      },
      {
        layer: 'Base de Données (MySQL)',
        description: 'Migrations pour structure. Eloquent ORM ou PreparedStatements. Repositories pattern pour queries CV. Triggers pour audit logs modifications.'
      }
    ],
    features: [
      {
        icon: '📝',
        title: 'Formulaire Dynamique',
        description: 'Remplissage des sections (infos perso, expériences, formations, compétences, langues). Ajout/suppression d\'entrées illimitées. Validation temps réel avec feedback utilisateur. Auto-sauvegarde brouillon localStorage.'
      },
      {
        icon: '👁️',
        title: 'Aperçu Temps Réel',
        description: 'Synchronisation instantanée formulaire <-> aperçu CV. Updates au clavier sans délai. Gestion thèmes appliqués directement. Scroll sync entre sections. Responsive preview sur tous écrans.'
      },
      {
        icon: '🖼️',
        title: 'Gestion Photo Profil',
        description: 'Upload image avec File Reader API. Conversion Base64 pour stockage. Preview instantanée. Crop/redimensionnement côté client. Support formats : JPG, PNG, WebP until 5MB max.'
      },
      {
        icon: '🎨',
        title: 'Sélection Thèmes & Couleurs',
        description: 'Thèmes prédéfinis : Classique (bleu), Moderne (noir/blanc), Créatif (multicolore). Customization couleur primaire/secondaire. Palettes harmoniques générées. Export configuration thème.'
      },
      {
        icon: '📄',
        title: 'Export PDF Professionnel',
        description: 'Génération PDF A4 côté serveur via Puppeteer. Fidélité 100% avec aperçu navigateur. Optimisation poids fichier (compression images). Métadonnées PDF (auteur, titre, création). Téléchargement immédiat ou stockage cloud.'
      },
      {
        icon: '💾',
        title: 'Sauvegarde & Gestion CVs',
        description: 'Plusieurs CVs par utilisateur (versions). Historique modifications. Restauration brouillons. Partage CVs via lien unique. Export format JSON pour sauvegarde locale.'
      }
    ],
    github: 'https://github.com/aaronladron/Generateur-CV'
  },
  {
    id: 3,
    title: 'My-Cinema',
    description: 'Panel d\'administration complet pour la gestion d\'un cinéma. Une solution full-stack robuste avec backend PHP/SQL pour la gestion des données et frontend moderne en JavaScript/Tailwind pour une expérience utilisateur optimale.',
    longDescription: 'My-Cinema est une plateforme de gestion complète destinée aux gérants de cinéma. Le système permet de gérer les films, les séances, les réservations et les statistiques de fréquentation. Le backend en PHP assure une architecture MVC solide couplée à une base de données SQL optimisée, tandis que l\'interface d\'administration en JavaScript et Tailwind offre une expérience fluide avec graphiques en temps réel et tableaux de bord interactifs.',
    image: '/projects/mycinema.jpg',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'MVC Architecture'],
    category: ['Académique', 'Full Stack'],
    type: 'academic',
    year: '2025',
    status: 'Terminé',
    highlights: [
      'Gestion complète des séances',
      'Système de réservation en ligne',
      'Dashboard avec statistiques',
      'Interface admin intuitive',
      'Architecture MVC structurée'
    ],
    technicalDetails: [
      {
        title: 'Architecture MVC en PHP 8',
        description: 'Structure clean avec séparation Controllers/Models/Views. Controllers : FilmController, SalleController, SeanceController. Models pour logique métier. Repository Pattern pour accès données. Routing simple avec switch/case ou micro-framework léger. Type hints et properties typées PHP 8. Error handling avec exceptions custom.'
      },
      {
        title: 'API RESTful & Communication',
        description: 'Endpoints : GET/POST/PUT/DELETE pour films, salles, séances. JSON responses standardisées {success, data, message}. CORS headers pour requêtes cross-origin. Validation input côté serveur stricte. POST/PUT avec Content-Type application/json. Rate limiting basique session-based.'
      },
      {
        title: 'Frontend JavaScript & Interactivité',
        description: 'Vanilla JS ES6+ pour manipulation DOM efficace. Async/await pour requêtes API avec Fetch. Event delegation pour formulaires dynamiques. LocalStorage pour preferences utilisateur. Toast notifications système. Form validation client-side avant envoi server. SPA-like experience sans rechargements page complète.'
      },
      {
        title: 'Styling avec Tailwind CSS 4.1',
        description: 'Utility-first CSS framework pour rapid UI development. PostCSS + Tailwind config personnalisé. Responsive design avec breakpoints : sm/md/lg/xl. Dark mode support optionnel. Components réutilisables : cards, modals, tables. Optimisation CSS : PurgeCSS pour fichiers production minimisés.'
      },
      {
        title: 'Base de Données MySQL Optimisée',
        description: 'Tables normalisées (3NF) : films, salles, seances avec FK. Indexes sur foreign keys et colonnes fréquemment filtrées (date_heure, is_active). Timestamps created_at/updated_at pour audit. Soft deletes possible. Transactions ACID pour opérations critiques (création séance multi-étape). Backups quotidiens automatiques.'
      }
    ],
    architecture: [
      {
        layer: 'Frontend (HTML/JavaScript/Tailwind)',
        description: 'Static pages : index.html, films.html, salles.html, seances.html. Composants JS réutilisables : Modal, Table, Form, Notification. API Client wrapper pour requêtes centralisées. State management simple (objets globaux). CSS compilé depuis Tailwind config.'
      },
      {
        layer: 'Backend API (PHP 8 MVC)',
        description: 'Entry point : backend/index.php avec routing simple. Controllers gèrent logique requête. Models : FilmModel, SalleModel, SeanceModel. Repository Pattern pour query builder custom. Services pour logique métier transversale. Middleware pour validation/auth.'
      },
      {
        layer: 'ORM & Data Access',
        description: 'Repository classes Film/Salle/Seance pour isolation requêtes. PDO Prepared Statements contre SQL injection. Query builders chainable. Lazy loading relations. Caching résultats simples en session/Redis.'
      },
      {
        layer: 'Base de Données (MySQL)',
        description: 'Schema script.sql avec Create tables + populer données initiales (30 films). Relations : seances.film_id -> films.id, seances.salle_id -> salles.id. Constraints CHECK (capacité > 0). Default timestamps.'
      }
    ],
    features: [
      {
        icon: '📽️',
        title: 'Gestion des Films',
        description: 'CRUD complet : ajouter, modifier, supprimer films. Détails : titre, réalisateur, durée, synopsis, année sortie. Recherche et filtrage liste. Pagination 20 films par page. Import données initiales (30 films récents 2022-2024).'
      },
      {
        icon: '🏛️',
        title: 'Gestion des Salles',
        description: 'Créer salles avec nom et capacité. Activation/désactivation with toggle button. Vue toutes salles avec statut. Édition en ligne. Limitation séances par salle capacité. Historique occupations.'
      },
      {
        icon: '🎫',
        title: 'Programmation Séances',
        description: 'Associer film + salle + date/heure. Calendar widget pour sélection date. Validation contra-overlaps (pas 2 séances même salle même heure). Vue agenda semaine/mois. Alertes séances proches. Modification/suppression séances.'
      },
      {
        icon: '🎨',
        title: 'Interface Responsive',
        description: 'Design moderne Tailwind CSS. Mobile-first responsive (breakpoints sm/md/lg). Navbar navigation contextualisée. Sidebar collapsible. Tables scrollables mobile. Modals overlay pour formulaires.'
      },
      {
        icon: '🔔',
        title: 'Système Notifications',
        description: 'Toast notifications : succès/erreur/info/warning. Auto-dismiss après 5 secondes. Notifications animées avec Tailwind. Persistent badges pour alertes critiques. Sound alerts optionnel.'
      },
      {
        icon: '📊',
        title: 'Dashboard & Statistiques',
        description: 'KPIs : total films, salles actives, séances today. Graphiques simples Chart.js. Taux occupation salles. Films populaires. Taux remplissage par film. Export stats CSV/PDF.'
      }
    ],
    github: 'https://github.com/aaronladron/My-Cin-ma'
  },
  {
    id: 6,
    title: 'My Connect',
    description: 'Mini réseau social académique développé en React (frontend) et Laravel (backend). Une plateforme complète de connexion, partage de posts et interaction entre utilisateurs avec architecture moderne et sécurisée.',
    longDescription: 'My Connect est un projet académique ambitieux qui simule un vrai réseau social. Conçu pour mettre en pratique les principes SOLID et les architectures modernes, ce projet démontre la maîtrise d\'une stack fullstack complète. L\'application permet aux utilisateurs de créer des comptes, publier des posts, commenter, liker, et découvrir d\'autres utilisateurs. Le frontend React offre une UX réactive avec gestion d\'état Zustand, tandis que le backend Laravel assure une API RESTful sécurisée avec authentification JWT.',
    image: '/projects/myconnect.jpg',
    tech: ['React', 'Laravel', 'MySQL', 'JWT', 'Tailwind CSS', 'Axios', 'Zustand'],
    category: ['Académique', 'Full Stack', 'Social Network'],
    type: 'academic',
    year: '2026',
    status: 'En développement',
    highlights: [
      'Système d\'authentification JWT sécurisé',
      'Gestion des utilisateurs et profils',
      'CRUD posts complète avec timestamps',
      'Système de likes et commentaires',
      'Notifications en temps réel',
      'Pagination et lazy loading'
    ],
    technicalDetails: [
      {
        title: 'Frontend React',
        description: 'Utilisation de React 18+ avec hooks personnalisés (useAuth, usePosts, useUser). Gestion d\'état centralisée avec Zustand pour éviter le prop drilling. Composants réutilisables avec composition pattern. Utilisation d\'Axios avec interceptors pour gérer automatiquement les tokens JWT. Pagination côté client avec lazy loading des images. Responsive design avec Tailwind CSS utility-first.'
      },
      {
        title: 'Backend Laravel',
        description: 'Architecture RESTful et SOLID avec Laravel 10+. Authentification stateless via JWT tokens avec refresh tokens pour la sécurité. Migrations complexes avec relations polymorphes pour les likes/commentaires. Eloquent ORM avec eager loading pour optimiser les requêtes (N+1 problem). Middleware personnalisé pour valider les tokens et les roles. Tests unitaires PHPUnit pour les critiques.'
      },
      {
        title: 'Base de Données',
        description: 'Schema MySQL bien normalisé (3NF minimum) avec tables : users, posts, comments, likes, followers. Indexes stratégiques sur les clés étrangères et les timestamps pour les requêtes fréquentes. Soft deletes pour la conservation des données. Transactions ACID pour les opérations critiques.'
      },
      {
        title: 'Sécurité',
        description: 'Validation input/output côté client ET serveur. Protection CSRF avec tokens. Hachage des passwords avec bcrypt. SQL injection prevention via ORM Eloquent. Rate limiting sur les endpoints sensibles. CORS configuration stricte. Validation des uploads fichiers utilisateurs.'
      }
    ],
    architecture: [
      {
        layer: 'Frontend (React)',
        description: 'Pages composants (Home, Profile, UserSearch), Composants réutilisables (Card, Avatar, Button). Hooks personnalisés et Context API pour authentification. Service layer pour les appels API.'
      },
      {
        layer: 'Backend API (Laravel)',
        description: 'Controllers : UserController, PostController, CommentController. Routes API avec versioning (/api/v1). Middleware : auth:jwt, cors, rateLimit. Services pour la logique métier complexe.'
      },
      {
        layer: 'Base de Données (MySQL)',
        description: 'Eloquent Models avec relations HasMany, BelongsTo, ManyToMany. Migrations versionnées. Factories et Seeders pour les tests.'
      }
    ],
    features: [
      {
        icon: '👤',
        title: 'Authentification & Profils',
        description: 'Système de connexion/inscription avec JWT. Profils utilisateurs modifiables avec avatar, bio, localisation.'
      },
      {
        icon: '📝',
        title: 'Création & Partage de Posts',
        description: 'Publication de posts texte et images. Édition/suppression avec soft deletes. Timestamps relatifs (il y a 2h).'
      },
      {
        icon: '👍',
        title: 'Interactions Sociales',
        description: 'Like/Unlike posts et commentaires. Compteurs en temps réel. Système de follow/unfollow utilisateurs.'
      },
      {
        icon: '💬',
        title: 'Système de Commentaires',
        description: 'Commentaires imbriquées sur les posts. Réponses et mentions (@username). Notifications d\'interaction.'
      },
      {
        icon: '🔍',
        title: 'Découverte',
        description: 'Feed personnalisé basé sur les follows. Recherche d\'utilisateurs par nom/email. Suggestions d\'utilisateurs à suivre.'
      },
      {
        icon: '🔒',
        title: 'Confidentialité',
        description: 'Contrôle des posts publics/privés. Blocage d\'utilisateurs. Suppression complète des données utilisateur sur demande.'
      }
    ],
    github: 'https://github.com/aaronladron/myconnect'
  },

  // Projets Personnels
  {
    id: 4,
    title: 'SecuGuard',
    description: 'Panel d\'administration professionnel pour une entreprise spécialisée en défense et cybersécurité. Une plateforme complète pour gérer les projets de sécurité, les audits, les rapports de vulnérabilités et le suivi des interventions.',
    longDescription: 'SecuGuard est une solution d\'entreprise conçue pour centraliser la gestion de tous les aspects liés à la cybersécurité et la défense. La plateforme permet aux équipes de sécurité de suivre les projets cybersécurité, gérer les audits de sécurité, documenter les vulnérabilités découvertes, et générer des rapports détaillés pour les clients. L\'interface met l\'accent sur la clarté des données sensibles et l\'efficacité opérationnelle.',
    image: '/projects/secuguard.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT Auth', 'Tailwind CSS'],
    category: ['Personnel', 'Cybersécurité', 'Full Stack'],
    type: 'personal',
    year: '2026',
    status: 'En développement',
    highlights: [
      'Gestion de projets cyber',
      'Suivi des audits de sécurité',
      'Base de données de vulnérabilités',
      'Génération de rapports professionnels',
      'Authentification sécurisée',
      'Dashboard temps réel'
    ],
    technicalDetails: [
      {
        title: 'Frontend React & Visualizations',
        description: 'Interface React 18+ avec Redux pour gestion d\'état centralisée. Intégration Chart.js/D3.js pour visualisation des données de sécurité. Composants Recharts pour graphiques de risques temps réel. Dark mode optimisé pour utilisation nocturne. Responsive design pour dashboards sur tout appareil. Code splitting et lazy loading pour performance.'
      },
      {
        title: 'Backend Node.js/Express API',
        description: 'API RESTful scalable avec Express.js et middleware personnalisés. JWT tokens pour authentification stateless avec refresh tokens. Rate limiting 500req/min par utilisateur. CORS restrictif. Validation schemas Joi/Yup pour toutes les requêtes. Error handling centralisé avec logging structured.'
      },
      {
        title: 'Base de Données PostgreSQL',
        description: 'Schema complexe avec tables : projects, audits, vulnerabilities, findings, clients, users, reports. Relations Many-to-Many pour Audits/Vulnérabilités. JSONB columns pour données flexibles. Triggers pour audit_logs automatiques. Indexes stratégiques sur queries fréquentes. Backups incrémentiels horaires avec Point-In-Time Recovery.'
      },
      {
        title: 'Gestion des Fichiers & Rapports',
        description: 'Upload documents PDF/Excel avec virus scanning. Génération rapports PDF dynamiques via pdfkit. Export Excel avec graphiques. Stockage S3 pour documents. Signature numérique des rapports (RSA-2048). Versioning des rapports avec audit trail complet.'
      },
      {
        title: 'Sécurité & Encryption',
        description: 'AES-256 encryption données sensibles au repos. TLS 1.3 en transit. Hachage SHA-256 des passwords avec salt 16 bytes. 2FA TOTP optional. Rate limiting exponential backoff. Logs d\'audit completes : qui a accédé quoi quand. Test de pénétration intégré.'
      }
    ],
    architecture: [
      {
        layer: 'Frontend (React)',
        description: 'Pages principales : Dashboard, Projects, Audits, Vulnerabilities, Reports, Settings. Composants : Card, Chart, Table, Modal, Form. Services API layer. Redux slices pour authentification/projects/audits.'
      },
      {
        layer: 'Backend API (Node.js/Express)',
        description: 'Routes modulaires : /api/projects, /api/audits, /api/vulnerabilities, /api/reports. Middleware : auth, cors, rateLimit, errorHandler. Services métier dans /services. Utilities pour PDF generation et encryption.'
      },
      {
        layer: 'Base de Données (PostgreSQL)',
        description: 'Migrations versionnées. Seed scripts pour données de test. Stored procedures pour calcul risque complexe. Triggers pour archivage automatique. Replication read-only pour scaling reads.'
      },
      {
        layer: 'Storage & Archiving',
        description: 'S3 pour documents/rapports. ElasticSearch pour recherche full-text audits. Redis cache pour dashboards fréquents. CDN pour assets statiques.'
      }
    ],
    features: [
      {
        icon: '📊',
        title: 'Dashboard Analytics',
        description: 'Vue d\'ensemble risques (CVSS scores). Graphiques tendances: vulnérabilités par mois, résolution rate. KPIs: MTTR, audit completion %. Filtrage par client/projet/priorité.'
      },
      {
        icon: '🔍',
        title: 'Gestion des Projets Cyber',
        description: 'Création projets avec scope/timeline. Assignment équipe. Tracking statut : Planning, In Progress, Review, Completed. Templates réutilisables. Intégration Jira/Trello.'
      },
      {
        icon: '📋',
        title: 'Audits de Sécurité',
        description: 'Configuration audits (scopes, standards OWASP/NIST). Planification calendrier. Checklist interactive. Enregistrement findings. Photos/attachments des issues. Mapping CVE.'
      },
      {
        icon: '⚠️',
        title: 'Base Vulnérabilités',
        description: 'Catalogue 10000+ vulnérabilités CVE. Scores CVSS automatiques. Détails exploitation, mitigation. Historique résolution. Impact analysis. Suggestion correctifs.'
      },
      {
        icon: '📄',
        title: 'Génération Rapports',
        description: 'Templates professionnels (Executive, Technical, Detailed). PDF branded corporate. Graphiques intégrés. Table of contents auto. Signatures digitales. Export multi-formats.'
      },
      {
        icon: '👥',
        title: 'Gestion Accès & Clients',
        description: 'RBAC : Admin, Auditor, Manager, Client. Portail client pour consultation rapports. Permissions granulaires par projet. Limite données par client (isolation).'
      }
    ],
    github: 'https://github.com/aaronladron/secuguard'
  },
  {
    id: 5,
    title: 'MemeBot',
    description: 'Bot Discord avancé connecté à la blockchain qui détecte et analyse automatiquement les nouveaux tokens crypto. Utilise votre wallet personnel pour exécuter des achats automatiques basés sur une analyse multi-critères en temps réel.',
    longDescription: 'MemeBot est un projet crypto ambitieux qui combine plusieurs technologies pour créer un système de trading automatisé intelligent. Le bot surveille en temps réel l\'apparition de nouveaux tokens sur diverses blockchains, analyse plusieurs métriques (liquidité, volume, holders, contrat vérifié, etc.), puis envoie des alertes dans vos messages privés Discord. Si les critères de fiabilité sont remplis, il peut exécuter automatiquement des achats via votre wallet connecté. Je travaille actuellement sur l\'amélioration de l\'algorithme de détection pour minimiser les risques de rugpull et maximiser la fiabilité des signaux.',
    image: '/projects/memebot.jpg',
    tech: ['JavaScript', 'Node.js', 'Discord.js', 'Web3.js', 'Blockchain APIs', 'WebSocket'],
    category: ['Personnel', 'Blockchain', 'Bot'],
    type: 'personal',
    year: '2026',
    status: 'En développement actif',
    highlights: [
      'Détection automatique de nouveaux tokens',
      'Analyse multi-critères de fiabilité',
      'Connexion wallet personnel',
      'Achat automatique intelligent',
      'Alertes Discord en temps réel',
      'Protection anti-rugpull en cours',
      'Dashboard de statistiques'
    ],
    technicalDetails: [
      {
        title: 'Discord.js Bot Architecture',
        description: 'Client Discord.js v14 avec intents sélectifs (GUILD_MESSAGES, DIRECT_MESSAGES). Command handler modulaire avec dossier /commands. Event listeners : ready, messageCreate, interactionCreate. Slash commands modernisés. Rate limiting Discord built-in. Presence bot dynamic (\"Watching /help\").'
      },
      {
        title: 'Blockchain Monitoring & Web3.js',
        description: 'Web3.js v1 pour connexion nœuds Ethereum/BSC/Polygon. Écoute events NewPair sur DEX (Uniswap, PancakeSwap). WebSocket connexions pour real-time. Parsing ABI contrats. Fetch prix tokens via Coingecko API. Gas fee estimation dynamique.'
      },
      {
        title: 'Token Analysis Engine',
        description: 'Multi-criteria scoring : liquidité ($), volume 24h, holder distribution, contract verification, renounce ownership check. Machine Learning basique : SVM ou Random Forest entraîné sur rugpulls connus. Honeypot check via Bscscan API. Owner fonction analyze. Unlock schedule checker.'
      },
      {
        title: 'Smart Contract Interaction',
        description: 'Wallet connection via ethers.js ou web3auth. Signing transactions sans exposer private key. Swap execution via Router contrats. Slippage tolerance config (0.5-5%). Gas limit auto-calculate. Nonce management multi-tx. Error recovery retry logic.'
      },
      {
        title: 'Data Persistence & Analytics',
        description: 'MongoDB pour historique trades/tokens signals. Redis cache pour prix lookup rapide. Analytics : ROI trades, false positive rate, Sharpe ratio. User preferences stockées DB encryptées. Audit logs de toutes actions bot.'
      }
    ],
    architecture: [
      {
        layer: 'Discord Bot (Discord.js)',
        description: 'Entry point : bot.js. Command modules : /commands (analyze, portfolio, history). Event handlers : /events (ready, message reactions). Utilities : config loader, logger, decorators.'
      },
      {
        layer: 'Blockchain Monitor (Web3.js)',
        description: 'Service : BlockchainMonitor class. Écoute web3.js on(\"NewPair\"). Filter tokens par chaîne (Ethereum/BSC/Polygon). Queue système pour traitement séquentiel.'
      },
      {
        layer: 'Analysis Engine (ML)',
        description: 'TokenAnalyzer class. Feature extraction : liquidité, holders, owner renounce. Scoring algorithm. ML model inference. Rugpull probability output.'
      },
      {
        layer: 'Trading Executor (ethers.js)',
        description: 'Wallet manager avec seed encryption. Transaction builder. Smart contract ABI interactions. Slippage protection. Position tracking.'
      }
    ],
    features: [
      {
        icon: '🔍',
        title: 'Détection Tokens Auto-Launch',
        description: 'Écoute pairs Uniswap/PancakeSwap en temps réel. Notification instantanée sur Discord DM. Parsing metadata token (symbol, decimals, supply totale).'
      },
      {
        icon: '📊',
        title: 'Analyse Multi-Critères',
        description: 'Scoring composite : liquidité (40%), holders distribution (20%), owner verification (20%), contrat check (15%), historique (5%). ML prediction rugpull probability. Detailed report en Discord embed.'
      },
      {
        icon: '🔐',
        title: 'Protection Anti-Rugpull',
        description: 'Contract ownership check. Honeypot detection. Drain functions scan. Suspensions droits admin. Blacklist smart contract connues scams. Validation owner renounce.'
      },
      {
        icon: '💰',
        title: 'Execution Trades Automatique',
        description: 'Wallet connection sécurisée (seed key chiffré). Montant trade configurable. Slippage tolerance (0.5-5%). Gas fee optimization. Conditional execution : score > threshold.'
      },
      {
        icon: '📈',
        title: 'Portfolio & Track Position',
        description: 'Dashboard Discord : holdings, unrealized PnL, ROI par token. Historique trades avec entry/exit. Profit target alerts. Stop loss automatique.'
      },
      {
        icon: '⚙️',
        title: 'Configuration Personnalisée',
        description: 'Commands : /threshold (min score), /amount (montant buy), /chains (quelles blockchains). Settings sauvegardées DB. Whitelist/blacklist tokens custom. Schedule trading (on/off heures).'
      }
    ],
    warning: '⚠️ Projet crypto expérimental - Trading automatique à haut risque',
    github: 'https://github.com/aaronladron/memebot'
  },
  {
    id: 7,
    title: 'Icom - Site Graphisme',
    description: 'Backend PHP sécurisé pour le site web d\'Icom, entreprise de graphisme. Intégration du formulaire de contact côté backend et implémentation complète de la sécurité cybernétique selon les standards OWASP.',
    longDescription: 'Icom est un projet personnel professionnel où j\'ai développé toute la partie backend PHP pour le site web d\'une entreprise de graphisme. Ma mission incluait l\'intégration du formulaire de contact avec validation rigoureuse, middleware de sécurité avancé, et protection contre les attaques web communes. Le projet met l\'accent sur la cybersécurité avec implémentation stricte des recommandations OWASP Top 10, rate limiting, sanitization des inputs, et protection contre les injections SQL et XSS.',
    image: '/projects/icom.jpg',
    tech: ['PHP', 'MySQL', 'OWASP', 'Cybersecurity', 'Email API', 'CSRF Protection', 'Rate Limiting'],
    category: ['Personnel', 'Backend', 'Cybersécurité'],
    type: 'personal',
    year: '2026',
    status: 'Terminé',
    highlights: [
      'Backend PHP sécurisé et performant',
      'Formulaire de contact avec validation',
      'Protection OWASP Top 10 complète',
      'Authentification admin sécurisée',
      'Logs d\'activité et audit trail',
      'CDN et caching optimisé',
      'Gestion des uploads fichiers sécurisée'
    ],
    technicalDetails: [
      {
        title: 'Architecture & Stack',
        description: 'Backend PHP 8.1+ avec architecture MVC. Framework custom léger ou Slim Framework. MySQL 8.0 avec InnoDB. PDO prepared statements pour toutes les requêtes. Doctrine ORM pour l\'abstraction. Composer pour la gestion des dépendances. Redis pour le caching côté serveur.'
      },
      {
        title: 'Sécurité - OWASP Top 10',
        description: 'A01:2021 – Broken Access Control : Authentification admin avec JWT + session tokens. Vérification des permissions à chaque action. A03:2021 – Injection : Prepared statements systématiques. Validation whitelist des inputs. Escaping des outputs pour prévenir XSS. A05:2021 – CSRF : Tokens CSRF anti-forgery sur tous les formulaires. SameSite cookies. A07:2021 – Cryptographic Failures : Mots de passe hasés en bcrypt($2y$12). HTTPS obligatoire. Chiffrement des données sensibles base de données.'
      },
      {
        title: 'Formulaire de Contact & Emails',
        description: 'Validation côté serveur (HTML5 validation + PHP). Captcha reCAPTCHA v3 pour prévention de spam/bots. Nettoyage input avec filter_var(), strip_tags(). Sanitization complète avant stockage DB. SPF/DKIM/DMARC pour authentifier les emails sortants. Utilisation SwiftMailer ou Symfony Mailer. HTML emails templates avec variables. Rate limiting : max 5 mails/IP par heure. Logging de tous les emails envoyés.'
      },
      {
        title: 'Rate Limiting & DDoS',
        description: 'Middleware de rate limiting avec Redis : max 100 requêtes/minute/IP. Throttle spécifique sur endpoint formulaire : 5 submissions/IP/heure. Détection IP suspectes avec GeoIP. Blacklist/whitelist IP. Protection headers : X-Rate-Limit-Remaining, X-Rate-Limit-Reset. Monitoring avec alerts si anomalies patterns de trafic.'
      },
      {
        title: 'Authentification & Sessions Admin',
        description: 'Login sécurisé avec bcrypt password hashing. Sessions PHP sécurisées avec HttpOnly, Secure, SameSite cookies. JWT tokens refresh pour API. Timeout inactivité 30min. 2FA optional (TOTP). Logs audit trail complets : who, what, when, from IP. Détection tentatives brute-force avec attendre progressif (exponential backoff).'
      },
      {
        title: 'Protection Fichiers & Uploads',
        description: 'Stockage uploads hors racine web (private/). Whitelist MIME types stricts. Restriction extensions : .jpg, .png, .pdf seulement. Scan antivirus ClamAV intégré. Renommage aléatoire des fichiers. Limits taille max 5MB. Serving via script PHP (téléchargement, pas direct access). Content-Disposition headers. Scan antivirus via VirusTotal API.'
      },
      {
        title: 'Logs & Monitoring',
        description: 'PSR-3 logging : monolog avec rotation fichiers. Logs séparés : security.log, error.log, access.log. Sensitive data masking (passwords). Stack traces complètes en dev, messages génériques en prod. Centralized logging : envoi ELK stack ou Sentry. Alertes email sur erreurs critiques. Dashboard d\'analytics.'
      }
    ],
    architecture: [
      {
        layer: 'Frontend Contact Form',
        description: 'HTML5 form avec validation client. JavaScript pour validation côté client avant envoi. Progressive enhancement (fonctionne sans JS). CSRF token hidden field.'
      },
      {
        layer: 'API Backend PHP',
        description: 'Endpoint POST /api/contact. Validation input complète. Captcha verification. Email sending async (queue). Response JSON avec status/message. Error handling standardisé.'
      },
      {
        layer: 'Email Service',
        description: 'Queue système (Redis ou DB) pour async sends. Worker cron qui traite emails. Retry logic sur failures. Tracking opens/clicks (pixels). Unsubscribe list management.'
      },
      {
        layer: 'Database & Logs',
        description: 'Table contacts : id, name, email, subject, message, ip_address, user_agent, created_at. Logs table : id, action, user_id, ip, timestamp. Backups répliqués.'
      }
    ],
    features: [
      {
        icon: '📧',
        title: 'Formulaire de Contact Sécurisé',
        description: 'Validation robuste avec reCAPTCHA. Stockage des submissions en base. Notifications email admin. Réponses automatiques aux utilisateurs. Suivi des emails envoyés.'
      },
      {
        icon: '🔐',
        title: 'Protection Cybersécurité',
        description: 'Implémentation complète OWASP Top 10. Rate limiting anti-spam. Protection CSRF. Sanitization XSS. Prepared statements SQL injection.'
      },
      {
        icon: '📊',
        title: 'Tableau de Bord Admin',
        description: 'Vue d\'ensemble submissions. Filtrage par date, email, statut. Export CSV. Réponses templates. Gestion utilisateurs admin.'
      },
      {
        icon: '📈',
        title: 'Analytics & Logs',
        description: 'Tracking formulaire views/submissions. Conversion rates. Device/browser analytics. Security logs avec tentatives suspectes.'
      },
      {
        icon: '🚀',
        title: 'Performance & Caching',
        description: 'CDN intégration (Cloudflare). Browser caching headers. Database query optimization. Static assets minification. GZIP compression.'
      },
      {
        icon: '⚙️',
        title: 'DevOps & Monitoring',
        description: 'Error tracking (Sentry). Performance monitoring (New Relic). Uptime monitoring. SSL/TLS management. Automated backups.'
      }
    ],
    github: 'https://github.com/aaronladron/icom'
  }
]

// Fonction helper pour filtrer par type
export const getAcademicProjects = () => projects.filter(p => p.type === 'academic')
export const getPersonalProjects = () => projects.filter(p => p.type === 'personal')

