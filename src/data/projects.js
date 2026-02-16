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
    github: 'https://github.com/aaronladron/klivio'
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
    github: 'https://github.com/aaronladron/cv-generator'
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
    github: 'https://github.com/aaronladron/my-cinema'
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
    warning: '⚠️ Projet crypto expérimental - Trading automatique à haut risque',
    github: 'https://github.com/aaronladron/memebot'
  }
]

// Fonction helper pour filtrer par type
export const getAcademicProjects = () => projects.filter(p => p.type === 'academic')
export const getPersonalProjects = () => projects.filter(p => p.type === 'personal')

