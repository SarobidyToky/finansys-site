import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

export default function Testimonials() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section id="temoignages" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} max-w-2xl mx-auto text-center mb-14`}>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{fr.testimonials.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {fr.testimonials.title}
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fr.testimonials.items.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-6 flex flex-col justify-between`}
              style={{ backgroundColor: 'var(--color-bg-soft)', transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-sm mb-5" style={{ color: 'var(--color-text)' }}>« {t.quote} »</p>
              <div>
                <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{t.name}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}