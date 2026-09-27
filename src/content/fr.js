const fr = {
  nav: [
    { label: 'Accueil', href: '/#hero' },
    { label: 'À propos', href: '/#apropos' },
    { label: 'Services', href: '/#services' },
    { label: 'Avantages', href: '/#avantages' },
    { label: 'Contact', href: '/#contact' },
  ],
  cta: {
    label: 'Nous contacter',
  },
  hero: {
    title: 'La comptabilité digitale et durable, pensée pour les entrepreneurs malgaches',
    subtitle: "Centralisez vos données financières, suivez votre trésorerie et faites-vous accompagner par une équipe qui connaît le contexte malgache.",
    ctaPrimary: 'Prendre rendez-vous',
    ctaSecondary: 'Découvrir nos services',
    statValue: 184,
    statSuffix: '%',
    statLabel: 'de croissance moyenne sur 12 mois',
    badge: 'Objectif dépassé',
  },
  stats: {
    items: [
      { value: 120, suffix: '+', label: 'clients accompagnés à Madagascar' },
      { value: 8, suffix: ' ans', label: "d'expérience terrain" },
      { value: 6, suffix: '', label: 'secteurs accompagnés (PME, coopératives...)' },
    ],
  },
  apropos: {
    eyebrow: 'À propos de FinanSys',
    title: 'Une gestion financière pensée pour votre réussite',
    text: "Depuis sa création, FinanSys accompagne particuliers et entreprises dans la construction d'une stratégie financière solide et durable. Notre vision : rendre la gestion financière accessible, transparente et efficace pour tous.",
    values: [
      { title: 'Confiance', description: 'Une relation basée sur la transparence et l\'écoute.' },
      { title: 'Expertise', description: 'Des conseils rigoureux, fondés sur l\'analyse et l\'expérience.' },
      { title: 'Résultats', description: 'Des solutions concrètes, orientées vers votre réussite financière.' },
    ],
  },
  services: {
    eyebrow: 'Nos services',
    title: 'Des solutions pour chaque étape de votre gestion',
    subtitle: "Que vous soyez indépendant, PME ou coopérative, FinanSys propose des outils adaptés à votre activité.",
    items: [
      { icon: 'chart-pie', slug: 'tableau-de-bord', title: 'Tableau de bord', description: "Une vue claire et centralisée de votre santé financière." },
      { icon: 'cash', slug: 'tresorerie', title: 'Trésorerie', description: 'Suivi et anticipation de vos flux de trésorerie.' },
      { icon: 'report', slug: 'etats-financiers', title: 'États financiers', description: 'Bilans et rapports conformes, générés simplement.' },
      { icon: 'school', slug: 'formation', title: 'Formation', description: "Des formations pour comprendre et piloter vos chiffres." },
      { icon: 'scale', slug: 'fiscalite', title: 'Fiscalité', description: 'Anticipez vos impôts et vos déclarations sans mauvaise surprise.' },
      { icon: 'digital', slug: 'digitalisation', title: 'Digitalisation', description: 'Modernisez vos processus de gestion au quotidien.' },
    ],
  },
  avantages: {
    eyebrow: 'Pourquoi FinanSys',
    title: 'Ce qui différencie FinanSys',
    featured: {
      icon: 'leaf',
      title: 'La comptabilité durable',
      description: "Intègre les dimensions économique, sociale et environnementale, avec suivi et rapports d'impact. Aucun concurrent malgache identifié ne le propose.",
    },
    items: [
      { icon: 'map-pin', title: 'Contexte malgache', description: 'Pensé pour les réalités comptables et fiscales locales.' },
      { icon: 'bulb', title: 'Simplicité', description: "Des données compréhensibles, même sans expertise comptable." },
      { icon: 'compass', title: 'Pilotage et décision', description: 'Trésorerie, rentabilité, besoin en fonds de roulement.' },
      { icon: 'building-bank', title: 'Fiscalité intégrée', description: "Comptabilité et suivi fiscal dans un même environnement." },
      { icon: 'users', title: 'Accompagnement humain', description: "Coaching, mentorat, formation, en complément de l'outil." },
      { icon: 'lock', title: 'Sécurité des données', description: 'Chiffrement et confidentialité des données financières.' },
    ],
  },
  testimonials: {
    eyebrow: 'Ils nous font confiance',
    title: 'Ce que disent nos clients',
    items: [
      { quote: "FinanSys nous a permis de suivre notre trésorerie au jour le jour, on ne navigue plus à l'aveugle.", name: 'Rado H.', role: 'Gérant, PME import-export' },
      { quote: "Une équipe qui comprend vraiment le contexte malgache. L'accompagnement fait toute la différence.", name: 'Voahangy R.', role: 'Présidente, coopérative agricole' },
      { quote: "Enfin des rapports que je comprends sans être comptable. Le pilotage devient simple.", name: 'Tojo A.', role: 'Fondateur, startup' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Vos questions, nos réponses',
    items: [
      {
        question: "Qu'est-ce que FinanSys exactement ?",
        reponse: "FinanSys est une plateforme digitale malgache qui simplifie la gestion comptable, fiscale et financière des entreprises, avec une approche de comptabilité durable. Elle combine un outil en ligne et un accompagnement humain (coaching, mentorat, formation).",
      },
      {
        question: "À qui s'adresse FinanSys ?",
        reponse: "À toute personne ou structure ayant une activité à gérer : startups, TPE, PME, entrepreneurs, commerçants, artisans, coopératives et associations à Madagascar.",
      },
      {
        question: "FinanSys remplace-t-il mon expert-comptable ?",
        reponse: "Non. FinanSys simplifie la gestion au quotidien et vous donne une lecture claire de vos chiffres, mais l'expertise, le conseil et la validation réglementaire d'un expert-comptable restent recommandés, notamment pour les sujets fiscaux.",
      },
      {
        question: "Mes données financières sont-elles en sécurité avec FinanSys ?",
        reponse: "La sécurité et la confidentialité des données sont une priorité pour FinanSys : chiffrement, accès sécurisé, hébergement des données.",
      },
      {
        question: "FinanSys convient-il à une entreprise qui débute tout juste ?",
        reponse: "Oui. La plateforme est pensée pour être accessible dès les premiers mois d'activité, sans nécessiter de compétences comptables préalables.",
      },
      {
        question: "Qu'est-ce que la comptabilité durable proposée par FinanSys ?",
        reponse: "C'est un module qui permet de suivre, en plus des indicateurs financiers classiques, l'impact économique, social et environnemental de votre entreprise, avec des rapports simples à générer et à partager.",
      },
      {
        question: 'Comment se passe la prise en main de la plateforme ?',
        reponse: "FinanSys propose un accompagnement à la prise en main, ainsi que des formations pour vous aider à comprendre et utiliser vos données financières, même sans expérience comptable.",
      },
      {
        question: 'FinanSys est-il utilisable partout à Madagascar ?',
        reponse: "FinanSys est une plateforme en ligne, accessible depuis toute connexion internet, partout à Madagascar. L'accompagnement humain (coaching, formations) est actuellement concentré sur certaines zones et s'étend progressivement — contactez-nous pour vérifier la disponibilité dans votre région.",
      },
      {
        question: 'Quels sont les tarifs de FinanSys ?',
        reponse: 'Les tarifs dépendent de vos besoins et de la taille de votre activité. Contactez l\'équipe FinanSys pour obtenir une offre adaptée à votre situation.',
      },
      {
        question: 'Comment contacter FinanSys pour une démonstration ?',
        reponse: 'Via le formulaire de contact du site, ou directement par téléphone. Une prise de rendez-vous est proposée pour découvrir la plateforme et échanger sur vos besoins.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre avenir financier',
    subtitle: "Une question, un projet ? Notre équipe vous répond sous 24h.",
    infos: [
      { label: 'Adresse', value: 'Fort-Dauphin, Madagascar' },
      { label: 'Téléphone', value: '034 04 141 22 (à confirmer)' },
      { label: 'Email', value: 'contact@finansys.mg' },
    ],
    form: {
      nameLabel: 'Nom complet',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      messageLabel: 'Message',
      submitLabel: 'Envoyer le message',
      successMessage: 'Merci ! Votre message a bien été envoyé, nous vous répondrons rapidement.',
    },
  },
  footer: {
    tagline: 'Votre partenaire de confiance pour une gestion financière sereine et performante.',
    columnsTitle: 'Navigation',
    socialTitle: 'Suivez-nous',
    social: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
    legalLinks: [
      { label: 'Mentions légales', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
    ],
    copyright: '© 2026 FinanSys. Tous droits réservés.',
  },
};

export default fr;
