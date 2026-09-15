import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const APP_URL = 'http://app.finansys-compta.mg';

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
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} max-w-2xl mx-auto text-center mb-14`}>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Nos offres</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Un pack pour chaque besoin
          </h2>
          <p className="text-sm mt-3" style={{ color: 'var(--color-text-muted)' }}>
            Commencez gratuitement, combinez les packs payants selon vos besoins.
          </p>
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
                  className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-6 flex flex-col`}
                  style={{
                    transitionDelay: `${(i + 1) * 0.1}s`,
                    backgroundColor: featured ? 'var(--color-primary)' : 'white',
                    border: featured ? 'none' : '1px solid var(--color-bg-soft)',
                  }}
                >
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
    </section>
  );
}