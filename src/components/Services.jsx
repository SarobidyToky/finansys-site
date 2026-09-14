import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const icons = {
  'chart-pie': (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M12 3a9 9 0 109 9h-9V3z" />
      <path d="M15 3.5A9 9 0 0120.5 9H15V3.5z" />
    </g>
  ),
  cash: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 9v.01M18 15v.01" />
    </g>
  ),
  report: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M7 3h8l4 4v14H7V3z" />
      <path d="M15 3v4h4M9 12h6M9 16h6" />
    </g>
  ),
  school: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M12 3l10 5-10 5L2 8l10-5z" />
      <path d="M6 10.5v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </g>
  ),
};

export default function Services() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} max-w-2xl mx-auto text-center mb-16`}>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{fr.services.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3 mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {fr.services.title}
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>{fr.services.subtitle}</p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fr.services.items.map((item, i) => (
            <div key={item.title} className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-7 transition-transform hover:-translate-y-1`} style={{ transitionDelay: `${i * 0.1}s`, backgroundColor: 'var(--color-bg-soft)' }}>
              <span className="flex items-center justify-center w-12 h-12 rounded-xl mb-5" style={{ backgroundColor: 'rgba(59,63,161,0.1)', color: 'var(--color-primary)' }}>
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  {icons[item.icon]}
                </svg>
              </span>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
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