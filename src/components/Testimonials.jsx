import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

export default function Testimonials() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);
  const [featured, ...rest] = fr.testimonials.items;

  return (
    <section id="temoignages" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} mb-14`}>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold leading-[1.1] max-w-lg" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
            {fr.testimonials.title}
          </h2>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <div className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-8 md:p-10`} style={{ backgroundColor: 'var(--color-bg-soft)' }}>
            <svg viewBox="0 0 40 32" className="w-10 h-8 mb-5" fill="var(--color-primary)" opacity="0.25">
              <path d="M0 32V19.2C0 8.6 6.6 1.6 16.8 0l1.6 4.8C11.2 6.4 7.2 10.8 7.2 17.6H16V32H0zm22.4 0V19.2c0-10.6 6.6-17.6 16.8-19.2l1.6 4.8c-7.2 1.6-11.2 6-11.2 12.8h8.8V32H22.4z" />
            </svg>
            <p className="text-xl md:text-2xl leading-snug font-medium mb-8" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
              {featured.quote}
            </p>
            <div>
              <p className="font-bold text-sm" style={{ color: 'var(--color-ink)' }}>{featured.name}</p>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{featured.role}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {rest.map((t, i) => (
              <div
                key={t.name}
                className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-6`}
                style={{ transitionDelay: `${(i + 1) * 0.1}s`, border: '1px solid #EAE9F3' }}
              >
                <p className="text-sm mb-5" style={{ color: 'var(--color-text)' }}>« {t.quote} »</p>
                <div>
                  <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
