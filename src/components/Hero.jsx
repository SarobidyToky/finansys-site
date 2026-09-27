import fr from '../content/fr';
import useCountUp from '../hooks/useCountUp';
import BrowserFrame from './BrowserFrame';
import dashboardImg from '../img/screenshots/dashboard.png';
import dashboardFiscalImg from '../img/screenshots/dashboard-fiscal.png';
import '../styles/animations.css';

export default function Hero() {
  const count = useCountUp(fr.hero.statValue, 1600, 900);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
      {/* Fond texturé maison : mesh gradient + grille de points + lignes de courbe fantômes */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 20%, rgba(120,124,220,0.35), transparent), radial-gradient(ellipse 50% 60% at 90% 80%, rgba(245,180,0,0.16), transparent)' }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none">
          <defs>
            <pattern id="heroDots" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroDots)" />
        </svg>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.18]">
          <path d="M0,350 C200,300 320,380 480,320 C640,260 760,340 920,280 C1100,210 1260,260 1440,190" fill="none" stroke="white" strokeWidth="2" />
          <path d="M0,420 C220,390 340,440 500,400 C680,355 800,410 960,370 C1140,325 1280,360 1440,310" fill="none" stroke="var(--color-secondary)" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center relative">
        <div className="animate-fade-up">
          <h1
            className="text-[2.6rem] md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: 'white' }}
          >
            {fr.hero.title}
          </h1>
          <p className="text-lg mb-9 max-w-md" style={{ color: 'rgba(255,255,255,0.68)' }}>
            {fr.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mb-14">
            <a href="#contact" className="px-7 py-3 rounded-full font-semibold transition-transform hover:scale-105" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-ink)' }}>
              {fr.hero.ctaPrimary}
            </a>
            <a href="#services" className="px-7 py-3 rounded-full font-semibold border-2 transition-colors hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              {fr.hero.ctaSecondary}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-lg">
            <div>
              <div className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}>
                +{count}{fr.hero.statSuffix}
              </div>
              <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{fr.hero.statLabel}</div>
            </div>
            {fr.stats.items.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>
                  {s.value}{s.suffix}
                </div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up hidden lg:block" style={{ animationDelay: '0.15s' }}>
          {/* Capture secondaire, décalée derrière — donne de la profondeur */}
          <div className="absolute -top-10 -right-6 w-[78%] opacity-90 rotate-3">
            <BrowserFrame src={dashboardFiscalImg} alt="Dashboard fiscal FinanSys" />
          </div>

          {/* Capture principale */}
          <div className="relative -rotate-2">
            <BrowserFrame src={dashboardImg} alt="Tableau de bord FinanSys" />
          </div>

          <div
            className="absolute -bottom-6 -left-8 bg-white rounded-2xl px-4 py-3 items-center gap-3 hidden sm:flex"
            style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)' }}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(31,157,85,0.12)' }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M5 13l4 4L19 7" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
            <span className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{fr.hero.badge}</span>
          </div>
        </div>

        {/* Version mobile : une seule capture, sans rotation/superposition */}
        <div className="relative animate-fade-up lg:hidden" style={{ animationDelay: '0.15s' }}>
          <BrowserFrame src={dashboardImg} alt="Tableau de bord FinanSys" />
        </div>
      </div>
    </section>
  );
}
