import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const PILLAR_ICONS = [
  // Comptabilité — graphique
  <g key="a" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M4 19V5M4 19h16M8 15l3-3 2 2 4-5" /></g>,
  // Fiscalité — balance
  <g key="b" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 3v18M7 7h10M4 7l3-3 3 3-3 5-3-5zM14 7l3-3 3 3-3 5-3-5z" /></g>,
  // Durabilité — feuille
  <g key="c" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M5 21c9 0 14-5 14-14V4h-3C7 4 5 9 5 15v6zM5 21c3-5 7-9 12-11" /></g>,
];

const PILLAR_STYLES = [
  { bg: 'rgba(59,63,161,0.14)', border: 'rgba(120,124,220,0.5)' },
  { bg: 'rgba(245,180,0,0.14)', border: 'rgba(245,180,0,0.5)' },
  { bg: 'rgba(31,157,85,0.14)', border: 'rgba(60,200,120,0.5)' },
];

// Positions en pourcentage (0-100), partagées entre les lignes SVG et les cartes HTML
// pour qu'elles restent alignées à toutes les tailles d'écran.
const POSITIONS = [
  { x: 18, y: 20 },
  { x: 82, y: 20 },
  { x: 50, y: 86 },
];
const HUB = { x: 50, y: 50 };

export default function Platform() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-ink)' }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`reveal ${visible ? 'reveal-visible' : ''} grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center`}>
          <div>
            <h2
              className="text-3xl md:text-[2.6rem] font-extrabold leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: 'white' }}
            >
              {fr.plateforme.title}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {fr.plateforme.text}
            </p>
          </div>

          <div className="relative w-full aspect-square max-w-md mx-auto">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {POSITIONS.map((p, i) => (
                <line
                  key={i}
                  x1={HUB.x} y1={HUB.y} x2={p.x} y2={p.y}
                  stroke="rgba(255,255,255,0.18)" strokeWidth="0.4"
                />
              ))}
            </svg>

            <div
              className="absolute rounded-full flex flex-col items-center justify-center text-center"
              style={{
                left: `${HUB.x}%`, top: `${HUB.y}%`, transform: 'translate(-50%,-50%)',
                width: '25%', aspectRatio: '1',
                backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              <span className="font-bold text-xs md:text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>FinanSys</span>
            </div>

            {fr.plateforme.pillars.map((p, i) => {
              const pos = POSITIONS[i];
              const style = PILLAR_STYLES[i];
              return (
                <div
                  key={p.title}
                  className="absolute rounded-xl px-3 py-2.5 md:px-4 md:py-3 w-[46%] md:w-[40%]"
                  style={{
                    left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)',
                    backgroundColor: style.bg, border: `1.5px solid ${style.border}`,
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 mb-1.5 opacity-90">{PILLAR_ICONS[i]}</svg>
                  <p className="font-bold text-xs md:text-sm mb-0.5" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>{p.title}</p>
                  <p className="text-[10px] md:text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
