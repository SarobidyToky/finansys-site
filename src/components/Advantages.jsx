import fr from '../content/fr';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import '../styles/animations.css';

function StatBlock({ stat, visible, delay }) {
  const count = useCountUp(visible ? stat.value : 0, 1400, 100);
  return (
    <div className={`reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>
        {count}{stat.suffix}
      </div>
      <div className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{stat.label}</div>
    </div>
  );
}

export default function Advantages() {
  const [panelRef, panelVisible] = useInView(0.3);
  const [listRef, listVisible] = useInView(0.1);

  return (
    <section id="avantages" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        <div ref={panelRef} className="rounded-3xl p-10 flex flex-col justify-center gap-8" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div>
            <span className="font-semibold text-sm" style={{ color: 'var(--color-secondary)' }}>{fr.avantages.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mt-3" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>
              {fr.avantages.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            {fr.avantages.stats.map((stat, i) => (
              <StatBlock key={stat.label} stat={stat} visible={panelVisible} delay={i * 0.15} />
            ))}
          </div>
        </div>

        <div ref={listRef} className="flex flex-col gap-5 justify-center">
          {fr.avantages.items.map((item, i) => (
            <div key={item.title} className={`reveal ${listVisible ? 'reveal-visible' : ''} flex items-start gap-4`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(34,197,94,0.15)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M5 13l4 4L19 7" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
