const fr = {
  nav: [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Services', href: '#services' },
    { label: 'Avantages', href: '#avantages' },
    { label: 'Contact', href: '#contact' },
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
      { icon: 'chart-pie', title: 'Tableau de bord', description: "Une vue claire et centralisée de votre santé financière." },
      { icon: 'cash', title: 'Trésorerie', description: 'Suivi et anticipation de vos flux de trésorerie.' },
      { icon: 'report', title: 'États financiers', description: 'Bilans et rapports conformes, générés simplement.' },
      { icon: 'school', title: 'Formation', description: "Des formations pour comprendre et piloter vos chiffres." },
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