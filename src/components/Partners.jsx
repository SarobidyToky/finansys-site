import partners from '../content/partners';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

export default function Partners() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="py-14 md:py-16 bg-white" style={{ borderBottom: '1px solid #EDEDED' }}>
      <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} max-w-6xl mx-auto px-6`}>
        <p
          className="text-center text-xs font-semibold uppercase tracking-wider mb-8"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Ils nous accompagnent
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {partners.map((p) => (
            <img
              key={p.name}
              src={p.logo}
              alt={p.name}
              className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
