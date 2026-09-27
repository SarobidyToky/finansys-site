import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const PLAN_ICONS = {
  gratuit: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 3a9 9 0 109 9h-9V3z" /><path d="M15 3.5A9 9 0 0120.5 9H15V3.5z" /></g>,
  fiscalite: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 3v18M7 7h10M4 7l3-3 3 3-3 5-3-5zM14 7l3-3 3 3-3 5-3-5z" /></g>,
  durabilite: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M5 21c9 0 14-5 14-14V4h-3C7 4 5 9 5 15v6zM5 21c3-5 7-9 12-11" /></g>,
  comptabilite: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><rect x="2.5" y="6" width="19" height="12" rx="2" /><circle cx="12" cy="12" r="3" /></g>,
  complet: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4z" /></g>,
};
const PlanIcon = ({ name, color }) => (
  <span className="flex items-center justify-center w-11 h-11 rounded-lg mb-4" style={{ color, backgroundColor: color === 'white' ? 'rgba(255,255,255,0.15)' : 'rgba(59,63,161,0.1)' }}>
    <svg viewBox="0 0 24 24" className="w-6 h-6">{PLAN_ICONS[name] || PLAN_ICONS.comptabilite}</svg>
  </span>
);

const APP_URL = 'https://app.finansys-compta.mg';

const formatAr = (n) => new Intl.NumberFormat('fr-MG').format(n) + ' Ar';

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

  const registerUrl = (packName) =>
    packName ? `${APP_URL}/register?packs=${packName}` : `${APP_URL}/register`;

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

        <div className="rounded-2xl bg-white p-3 md:p-4" style={{ boxShadow: '0 30px 60px -25px rgba(20,21,43,0.25)', border: '1px solid #EDECF6' }}>
        <div className="flex items-center gap-2 px-2 py-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#EDECF6' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#EDECF6' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#EDECF6' }} />
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
              <p className="text-2xl font-extrabold mb-3" style={{ color: 'var(--color-primary)' }}>0 Ar</p>
              <p className="text-sm mb-6 flex-1" style={{ color: 'var(--color-text-muted)' }}>
                Tableau de bord, utilisateurs, journal d'audit.
              </p>
              <a
                href={registerUrl(null)}
                className="text-center text-sm font-semibold px-4 py-2.5 rounded-lg transition"
                style={{ border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)' }}
              >
                Commencer gratuitement
              </a>
            </div>

            {plans.map((plan, i) => {
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
                  <p className="text-2xl font-extrabold mb-3" style={{ color: featured ? 'white' : 'var(--color-primary)' }}>
                    {formatAr(plan.price)}
                    <span className="text-sm font-medium"> /mois</span>
                  </p>
                  <p
                    className="text-sm mb-6 flex-1"
                    style={{ color: featured ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)' }}
                  >
                    {plan.description}
                  </p>
                  <a
                    href={registerUrl(plan.name)}
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