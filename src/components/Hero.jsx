import fr from '../content/fr';
import heroWomanImg from '../assets/hero-woman.png';
import '../styles/animations.css';
import { REGISTER_URL } from '../config/appUrl';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ backgroundColor: '#003399' }}>
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
          <div className="flex flex-wrap gap-4">
            <a href={REGISTER_URL} className="px-7 py-3 rounded-full font-semibold transition-transform hover:scale-105" style={{ backgroundColor: '#FFD54A', color: '#003399' }}>
              {fr.hero.ctaPrimary}
            </a>
            <a href="#services" className="px-7 py-3 rounded-full font-semibold border-2 transition-colors hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              {fr.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up hidden lg:block" style={{ animationDelay: '0.15s' }}>
          <img src={heroWomanImg} alt="Présentation de FinanSys" className="w-full rounded-2xl object-cover" />
        </div>

        <div className="relative animate-fade-up lg:hidden" style={{ animationDelay: '0.15s' }}>
          <img src={heroWomanImg} alt="Présentation de FinanSys" className="w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}