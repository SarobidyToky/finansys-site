import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const PLAN_ICONS = {
  gratuit: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 3a9 9 0 109 9h-9V3z" /><path d="M15 3.5A9 9 0 0120.5 9H15V3.5z" /></g>,
  comptabilite: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><rect x="2.5" y="6" width="19" height="12" rx="2" /><circle cx="12" cy="12" r="3" /></g>,
  fiscalite: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 3v18M7 7h10M4 7l3-3 3 3-3 5-3-5zM14 7l3-3 3 3-3 5-3-5z" /></g>,
  durabilite: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M5 21c9 0 14-5 14-14V4h-3C7 4 5 9 5 15v6zM5 21c3-5 7-9 12-11" /></g>,
  complet: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4z" /></g>,
};
const PlanIcon = ({ name, color }) => (
  <span className="flex items-center justify-center w-11 h-11 rounded-lg mb-4" style={{ color, backgroundColor: color === 'white' ? 'rgba(255,255,255,0.15)' : 'rgba(0,51,153,0.1)' }}>
    <svg viewBox="0 0 24 24" className="w-6 h-6">{PLAN_ICONS[name] || PLAN_ICONS.comptabilite}</svg>
  </span>
);

// Couleurs alignées sur les piliers de Platform.jsx (même code couleur partout sur le site)
const DOMAIN_COLORS = {
  Comptabilité: '#003399',
  Fiscalité: '#DC2626',
  Durabilité: '#16B84E',
};

// Composition affichée sous le nom du plan (seulement si plus d'un domaine,
// "Essentiel" = Comptabilité seule n'a pas besoin de ce rappel).
const COMPOSITION = {
  comptabilite: ['Comptabilité'],
  fiscalite: ['Comptabilité', 'Fiscalité'],
  durabilite: ['Comptabilité', 'Durabilité'],
  complet: ['Comptabilité', 'Fiscalité', 'Durabilité'],
};

const CompositionBadges = ({ domains, featured }) => {
  if (!domains) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5 mb-3">
      {domains.map((domain, i) => (
        <span key={domain} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className="text-xs font-semibold" style={{ color: featured ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)' }}>+</span>
          )}
          <span
            className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
            style={{
              color: featured ? 'white' : DOMAIN_COLORS[domain],
              backgroundColor: featured ? 'rgba(255,255,255,0.15)' : `${DOMAIN_COLORS[domain]}1A`,
            }}
          >
            {domain}
          </span>
        </span>
      ))}
    </div>
  );
};

const APP_URL = 'https://app.finansys-compta.mg';

// Les 4 packs réels (renvoyés par l'API) affichés sous un nom commercial
// différent. Pas de somme ni de combinaison : chaque pack garde son propre
// prix et son propre packId, tel que défini côté admin. C'est un simple
// habillage d'étiquette — "Essentiel" est juste le nouveau nom du pack
// "comptabilite", "Conformité" celui de "fiscalite", etc.
const LABELS = {
  comptabilite: 'Essentiel',
  fiscalite: 'Conformité',
  durabilite: 'Impact',
  complet: 'Excellence',
};
const DISPLAY_ORDER = ['comptabilite', 'fiscalite', 'durabilite', 'complet'];

const buildOffers = (rawPlans) =>
  DISPLAY_ORDER.map((name) => {
    const plan = rawPlans.find((p) => p.name === name);
    if (!plan) return null;
    return {
      id: plan.id,
      name: plan.name,
      label: LABELS[name] || plan.label,
      price: plan.price,
      description: plan.description,
      registerPackNames: plan.name,
    };
  }).filter(Boolean);

const formatAr = (n) => new Intl.NumberFormat('fr-MG').format(n) + ' Ar';

// Transforme "TVA, calcul fiscal, déclarations." ou "Comptabilité + Fiscalité + Durabilité"
// en liste de points à cocher.
const splitFeatures = (description) =>
  description
    .replace(/\.$/, '')
    .split(/,|\+/)
    .map((s) => s.trim())
    .filter(Boolean);

const CheckIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 flex-shrink-0">
    <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const FeatureList = ({ description, iconColor, textColor }) => (
  <ul className="text-sm mb-6 flex-1 space-y-2">
    {splitFeatures(description).map((feature) => (
      <li key={feature} className="flex items-start gap-2">
        <CheckIcon color={iconColor} />
        <span style={{ color: textColor }}>{feature}</span>
      </li>
    ))}
  </ul>
);

export default function Pricing() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${APP_URL}/api/subscriptions/plans`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((json) => setPlans(json.data || []))
      .catch((err) => {
        console.error('Erreur chargement des offres:', err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const registerUrl = (packNames) =>
    packNames ? `${APP_URL}/register?packs=${packNames}` : `${APP_URL}/register`;

  return (
    <section id="offres" className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} max-w-2xl mx-auto text-center mb-12`}>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
            Un pack pour chaque besoin
          </h2>
          <p className="text-sm mt-3" style={{ color: 'var(--color-text-muted)' }}>
            Commencez gratuitement, combinez les packs payants selon vos besoins.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-3 md:p-4" style={{ boxShadow: '0 30px 60px -25px rgba(20,21,43,0.25)', border: '1px solid #EDEDED' }}>
        <div className="flex items-center gap-2 px-2 py-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#EDEDED' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#EDEDED' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#EDEDED' }} />
          <span className="text-xs ml-2" style={{ color: 'var(--color-text-muted)' }}>app.finansys-compta.mg/abonnement</span>
        </div>

        {loading && (
          <p className="text-center text-sm" style={{ color: 'var(--color-text-muted)' }}>Chargement des offres...</p>
        )}

        {error && (
          <p className="text-center text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Impossible de charger les tarifs pour le moment.
          </p>
        )}

        {!loading && !error && (
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carte Gratuit, fixe (n'est pas listée par l'API des packs payants) */}
            <div
              className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-6 bg-white flex flex-col`}
              style={{ border: '1px solid var(--color-bg-soft)' }}
            >
              <PlanIcon name="gratuit" color="var(--color-primary)" />
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Gratuit
              </h3>
              <div className="mb-3" style={{ height: '22px' }} aria-hidden="true" />
              <p className="text-2xl font-extrabold mb-3" style={{ color: 'var(--color-primary)' }}>0 Ar</p>
              <FeatureList
                description="Tableau de bord, utilisateurs, journal d'audit."
                iconColor="var(--color-accent)"
                textColor="var(--color-text-muted)"
              />
              <a
                href={registerUrl(null)}
                className="text-center text-sm font-semibold px-4 py-2.5 rounded-lg transition"
                style={{ border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)' }}
              >
                Commencer gratuitement
              </a>
            </div>

            {buildOffers(plans).map((plan, i) => {
              const featured = plan.name === 'complet';
              return (
                <div
                  key={plan.id}
                  className={`reveal ${gridVisible ? 'reveal-visible' : ''} relative rounded-2xl p-6 flex flex-col`}
                  style={{
                    transitionDelay: `${(i + 1) * 0.1}s`,
                    backgroundColor: featured ? 'var(--color-primary)' : 'white',
                    border: featured ? 'none' : '1px solid var(--color-bg-soft)',
                  }}
                >
                  {featured && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-ink)' }}
                    >
                      LE PLUS COMPLET
                    </span>
                  )}
                  <PlanIcon name={plan.name} color={featured ? 'white' : 'var(--color-primary)'} />
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ fontFamily: 'var(--font-heading)', color: featured ? 'white' : 'var(--color-text)' }}
                  >
                    {plan.label}
                  </h3>
                  <CompositionBadges domains={COMPOSITION[plan.name]} featured={featured} />
                  <p className="text-2xl font-extrabold mb-3" style={{ color: featured ? 'white' : 'var(--color-primary)' }}>
                    {formatAr(plan.price)}
                    <span className="text-sm font-medium"> /mois</span>
                  </p>
                  <FeatureList
                    description={plan.description}
                    iconColor={featured ? 'white' : 'var(--color-accent)'}
                    textColor={featured ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)'}
                  />
                  <a
                    href={registerUrl(plan.registerPackNames)}
                    className="text-center text-sm font-semibold px-4 py-2.5 rounded-lg transition"
                    style={
                      featured
                        ? { backgroundColor: 'white', color: 'var(--color-primary)' }
                        : { backgroundColor: 'var(--color-primary)', color: 'white' }
                    }
                  >
                    Essayer
                  </a>
                </div>
              );
            })}
          </div>
        )}
        </div>
      </div>
    </section>
  );
}