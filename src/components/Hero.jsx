import fr from '../content/fr';
import heroPhoto from '../img/hero-photo.png';
import '../styles/animations.css';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001F5C 0%, #001640 45%, #0A0E1A 100%)' }}
    >
      {/* Fond texturé maison : dégradé profond + formes douces + grille de points + courbes + graphique en filigrane */}
      <div className="absolute inset-0 -z-10">
        {/* Formes douces (blobs flous) */}
        <div
          className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,51,153,0.55), transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(22,184,78,0.4), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[320px] h-[320px] rounded-full opacity-[0.12] blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(22,184,78,0.5), transparent 70%)' }}
        />

        {/* Grille de points */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.09]" preserveAspectRatio="none">
          <defs>
            <pattern id="heroDots" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroDots)" />
        </svg>

        {/* Courbes fantômes */}
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.18]">
          <path d="M0,350 C200,300 320,380 480,320 C640,260 760,340 920,280 C1100,210 1260,260 1440,190" fill="none" stroke="white" strokeWidth="2" />
          <path d="M0,420 C220,390 340,440 500,400 C680,355 800,410 960,370 C1140,325 1280,360 1440,310" fill="none" stroke="var(--color-secondary)" strokeWidth="2" />
        </svg>

        {/* Graphique en filigrane (barres + ligne de tendance) */}
        <svg viewBox="0 0 400 260" className="absolute -bottom-8 -right-8 w-[320px] md:w-[420px] opacity-[0.07]" fill="none">
          <rect x="30" y="160" width="36" height="80" fill="white" />
          <rect x="90" y="120" width="36" height="120" fill="white" />
          <rect x="150" y="90" width="36" height="150" fill="white" />
          <rect x="210" y="130" width="36" height="110" fill="white" />
          <rect x="270" y="60" width="36" height="180" fill="white" />
          <rect x="330" y="40" width="36" height="200" fill="white" />
          <path d="M30,150 L90,110 L150,80 L210,120 L270,50 L330,30" stroke="var(--color-secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
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
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)' }}>
            <img src={heroPhoto} alt="Utilisatrice présentant le tableau de bord FinanSys" className="w-full h-auto block" />
          </div>

          <div
            className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl px-4 py-3 items-center gap-3 hidden sm:flex"
            style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)' }}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(22,184,78,0.12)' }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M5 13l4 4L19 7" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
            <span className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{fr.hero.badge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
