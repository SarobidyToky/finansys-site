import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const icons = {
  trending: (
    <path d="M3 17l6-6 4 4 8-8M21 7h-6m6 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  target: (
    <g stroke="currentColor" strokeWidth="2" fill="none">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </g>
  ),
  percent: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
      <line x1="5" y1="19" x2="19" y2="5" />
      <circle cx="7" cy="7" r="2.2" />
      <circle cx="17" cy="17" r="2.2" />
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
