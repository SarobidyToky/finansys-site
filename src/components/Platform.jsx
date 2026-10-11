import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const PILLAR_ICONS = [
  // Comptabilité — graphique
  <g key="a" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M4 19V5M4 19h16M8 15l3-3 2 2 4-5" /></g>,
  // Fiscalité — balance
  <g key="b" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M12 3v18M7 7h10M4 7l3-3 3 3-3 5-3-5zM14 7l3-3 3 3-3 5-3-5z" /></g>,
  // Durabilité — feuille
  <g key="c" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M5 21c9 0 14-5 14-14V4h-3C7 4 5 9 5 15v6zM5 21c3-5 7-9 12-11" /></g>,
];

// Comptabilité = bleu, Fiscalité = rouge, Durabilité = vert
const PILLAR_COLORS = ['#003399', '#DC2626', '#16B84E'];

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

          <div className="relative w-full aspect-square max-w-2xl mx-auto">
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
              <span className="font-bold text-sm md:text-lg" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>FinanSys</span>
            </div>

            {fr.plateforme.pillars.map((p, i) => {
              const pos = POSITIONS[i];
              const color = PILLAR_COLORS[i];
              return (
                <div
                  key={p.title}
                  className="absolute rounded-xl px-4 py-3 md:px-5 md:py-4 w-[50%] md:w-[42%]"
                  style={{
                    left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)',
                    backgroundColor: 'var(--color-bg-soft)',
                    border: `1.5px solid ${color}`,
                    boxShadow: '0 15px 30px -10px rgba(0,0,0,0.35)',
                  }}
                >
                  <span
                    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg mb-2"
                    style={{ color, backgroundColor: `${color}1A` }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">{PILLAR_ICONS[i]}</svg>
                  </span>
                  <p className="font-bold text-sm md:text-base mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>{p.title}</p>
                  <p className="text-xs md:text-sm leading-snug" style={{ color: 'var(--color-text-muted)' }}>{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
