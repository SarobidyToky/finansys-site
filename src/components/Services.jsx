import { Link } from 'react-router-dom';
import fr from '../content/fr';
import useInView from '../hooks/useInView';
import VideoEmbed from './VideoEmbed';
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
  scale: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M12 3v18M7 7h10M4 7l3-3 3 3-3 5-3-5zM14 7l3-3 3 3-3 5-3-5z" />
    </g>
  ),
  digital: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M7 9l3 3-3 3M13 12h4" />
    </g>
  ),
};

export default function Services() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-end mb-16`}>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold leading-[1.1]" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
            {fr.services.title}
          </h2>
          <p className="text-base md:text-lg md:text-right" style={{ color: 'var(--color-text-muted)' }}>{fr.services.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 items-start">
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5">
          {fr.services.items.map((item, i) => (
            <Link
              to={`/services/${item.slug}`}
              key={item.title}
              className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-6 transition-all hover:-translate-y-1 block bg-white group`}
              style={{ transitionDelay: `${i * 0.1}s`, border: '1px solid #EAE9F3' }}
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-lg mb-5" style={{ color: 'var(--color-primary)' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  {icons[item.icon]}
                </svg>
              </span>
              <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
                {item.title}
              </h3>
              <ul className="space-y-1.5 mb-4">
                {item.bullets.map((b) => (
                  <li key={b} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-muted)' }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--color-primary)' }} />
                    {b}
                  </li>
                ))}
              </ul>
              <span
                className="text-sm font-semibold inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                style={{ color: 'var(--color-primary)' }}
              >
                En savoir plus
              </span>
            </Link>
          ))}
        </div>

        {fr.services.video && (
          <div
            className={`reveal ${gridVisible ? 'reveal-visible' : ''} lg:sticky lg:top-28`}
            style={{ transitionDelay: '0.2s' }}
          >
            <VideoEmbed url={fr.services.video.url} title={fr.services.video.title} />
            <div className="mt-5 px-1">
              <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
                {fr.services.video.title}
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
                {fr.services.video.description}
              </p>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
