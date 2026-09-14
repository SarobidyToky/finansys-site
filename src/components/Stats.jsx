import fr from '../content/fr';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import '../styles/animations.css';

function StatCard({ stat, visible, delay }) {
  const count = useCountUp(visible ? stat.value : 0, 1400, 100);
  return (
    <div
      className={`reveal ${visible ? 'reveal-visible' : ''} rounded-2xl p-6 text-center`}
      style={{ backgroundColor: 'var(--color-bg-soft)', transitionDelay: `${delay}s` }}
    >
      <div className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
        {count}{stat.suffix}
      </div>
      <div className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, visible] = useInView(0.3);

  return (
    <section id="chiffres-cles" className="py-14 md:py-20 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {fr.stats.items.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} visible={visible} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}