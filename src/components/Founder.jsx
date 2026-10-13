import fondatriceImg from '../img/fondatrice.png';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const PARAGRAPHS = [
  "Au contact des entrepreneurs, j'ai constaté leurs difficultés à gérer leurs finances et à développer leur activité.",
  "De ce constat est né FinanSys : un outil de gestion financière intuitif et performant, dédié aux jeunes entreprises, afin qu'elles pilotent leurs projets sereinement.",
  "Je suis heureuse de vous accompagner et vous remercie de votre confiance. Ensemble, donnons plus de clarté à vos chiffres et plus de force à vos ambitions.",
];

export default function Founder() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} max-w-3xl mx-auto px-6`}
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative inline-block mb-5">
            <img
              src={fondatriceImg}
              alt="RAJAONARIVONY Fitia, fondatrice de FinanSys"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto"
              style={{ border: '4px solid var(--color-bg-soft)', boxShadow: '0 20px 40px -15px rgba(0,51,153,0.3)' }}
            />
            <span
              className="absolute bottom-1 right-1 flex items-center justify-center w-9 h-9 rounded-full"
              style={{ backgroundColor: 'var(--color-primary)', border: '3px solid white' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
          </div>

          <h3
            className="text-xl md:text-2xl font-bold mb-1"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}
          >
            RAJAONARIVONY Fitia
          </h3>
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--color-primary)' }}
          >
            Fondatrice de FinanSys
          </p>
        </div>

        <div className="relative rounded-2xl p-8 md:p-10" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
          <svg viewBox="0 0 40 32" className="w-9 h-7 mb-5" fill="var(--color-primary)" opacity="0.3">
            <path d="M0 32V19.2C0 8.6 6.6 1.6 16.8 0l1.6 4.8C11.2 6.4 7.2 10.8 7.2 17.6H16V32H0zm22.4 0V19.2c0-10.6 6.6-17.6 16.8-19.2l1.6 4.8c-7.2 1.6-11.2 6-11.2 12.8h8.8V32H22.4z" />
          </svg>

          <p
            className="text-lg md:text-xl font-medium leading-snug mb-5"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}
          >
            Bienvenue chez FinanSys.
          </p>

          <div className="flex flex-col gap-4">
            {PARAGRAPHS.map((p) => (
              <p key={p} className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}