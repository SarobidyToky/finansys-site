import fr from '../content/fr';
import useCountUp from '../hooks/useCountUp';
import '../styles/animations.css';

export default function Hero() {
  const count = useCountUp(fr.hero.statValue, 1600, 900);

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {fr.hero.title}
          </h1>
          <p className="text-lg mb-8 max-w-md" style={{ color: 'var(--color-text-muted)' }}>
            {fr.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-7 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105" style={{ backgroundColor: 'var(--color-primary)' }}>
              {fr.hero.ctaPrimary}
            </a>
            <a href="#services" className="px-7 py-3 rounded-full font-semibold border-2 transition-colors hover:bg-gray-50" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
              {fr.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative w-full max-w-md rounded-3xl p-6 md:p-8" style={{ backgroundColor: 'var(--color-bg-soft)', boxShadow: '0 20px 50px -15px rgba(59,63,161,0.25)' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Croissance des actifs</span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
            </div>

            <div className="flex items-end gap-2 mb-4">
              <span className="text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                +{count}{fr.hero.statSuffix}
              </span>
              <span className="text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>{fr.hero.statLabel}</span>
            </div>

            <svg viewBox="0 0 320 180" className="w-full h-auto">
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                </linearGradient>
                <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--color-accent)" />
                </marker>
              </defs>

              <line x1="20" y1="170" x2="300" y2="170" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="20" y1="120" x2="300" y2="120" stroke="#EEF0F5" strokeWidth="1" />
              <line x1="20" y1="70" x2="300" y2="70" stroke="#EEF0F5" strokeWidth="1" />

              <path className="chart-area" d="M20,150 C60,140 70,125 90,120 C120,112 140,100 160,90 C185,78 205,68 230,60 C255,50 280,35 293,26 L293,170 L20,170 Z" fill="url(#areaGradient)" />

              <path className="chart-path" pathLength="1" d="M20,150 C60,140 70,125 90,120 C120,112 140,100 160,90 C185,78 205,68 230,60 C255,50 278,37 292,27" fill="none" stroke="var(--color-accent)" strokeWidth="3.5" strokeLinecap="round" markerEnd="url(#arrowhead)" />

              <circle className="chart-arrow-tip" cx="90" cy="120" r="4" fill="white" stroke="var(--color-accent)" strokeWidth="2" />
              <circle className="chart-arrow-tip" cx="160" cy="90" r="4" fill="white" stroke="var(--color-accent)" strokeWidth="2" />
              <circle className="chart-arrow-tip" cx="230" cy="60" r="4" fill="white" stroke="var(--color-accent)" strokeWidth="2" />
            </svg>

            <div className="float-badge absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-2" style={{ boxShadow: '0 10px 25px -8px rgba(0,0,0,0.2)' }}>
              <span className="flex items-center justify-center w-7 h-7 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{fr.hero.badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
