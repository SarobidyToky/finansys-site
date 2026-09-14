import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const icons = {
  leaf: (
    <path d="M5 21c9 0 14-5 14-14V4h-3C7 4 5 9 5 15v6zM5 21c3-5 7-9 12-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  'map-pin': (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.3" />
    </g>
  ),
  bulb: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.45 1 1.15 1 1.9v.2h5v-.2c0-.75.4-1.45 1-1.9A6 6 0 0012 3z" />
    </g>
  ),
  compass: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6z" />
    </g>
  ),
  'building-bank': (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M3 10l9-6 9 6M5 10v9M9 10v9M15 10v9M19 10v9M3 19h18" />
    </g>
  ),
  users: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 14.2c2.4.5 4.5 2.6 4.5 5.8" />
    </g>
  ),
  lock: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </g>
  ),
};

function Icon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      {icons[name]}
    </svg>
  );
}

export default function Advantages() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [featuredRef, featuredVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section id="avantages" className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} max-w-2xl mx-auto text-center mb-14`}>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{fr.avantages.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {fr.avantages.title}
          </h2>
        </div>

        <div
          ref={featuredRef}
          className={`reveal ${featuredVisible ? 'reveal-visible' : ''} rounded-2xl p-7 mb-8 flex items-start gap-4`}
          style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '2px solid var(--color-accent)' }}
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0" style={{ backgroundColor: 'rgba(34,197,94,0.2)', color: 'var(--color-accent)' }}>
            <Icon name={fr.avantages.featured.icon} className="w-6 h-6" />
          </span>
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
              {fr.avantages.featured.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{fr.avantages.featured.description}</p>
          </div>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fr.avantages.items.map((item, i) => (
            <div
              key={item.title}
              className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-6 bg-white`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl mb-4" style={{ backgroundColor: 'rgba(59,63,161,0.1)', color: 'var(--color-primary)' }}>
                <Icon name={item.icon} className="w-5 h-5" />
              </span>
              <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}