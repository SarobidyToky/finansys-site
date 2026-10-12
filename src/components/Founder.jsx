import fondatriceImg from '../img/fondatrice.png';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

export default function Founder() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} max-w-3xl mx-auto px-6 text-center`}
      >
        <div className="relative inline-block mb-6">
          <img
            src={fondatriceImg}
            alt="RAJAONARIVONY Laingo Fitiamanankery, fondatrice de FinanSys"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover mx-auto"
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

        <p
          className="text-xs font-semibold uppercase tracking-wider mb-2"
          style={{ color: 'var(--color-primary)' }}
        >
          Fondatrice de FinanSys
        </p>
        <h3
          className="text-xl md:text-2xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}
        >
          RAJAONARIVONY Laingo Fitiamanankery
        </h3>
        <p
          className="text-sm md:text-base leading-relaxed max-w-lg mx-auto"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Convaincue que chaque entrepreneur malgache mérite une gestion financière claire, elle a fondé FinanSys pour rendre la comptabilité accessible, digitale et durable.
        </p>
      </div>
    </section>
  );
}
