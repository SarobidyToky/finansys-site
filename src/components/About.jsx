import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

export default function About() {
  const [textRef, textVisible] = useInView(0.2);
  const [cardsRef, cardsVisible] = useInView(0.2);

  return (
    <section id="apropos" className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div ref={textRef} className={`reveal ${textVisible ? 'reveal-visible' : ''}`}>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{fr.apropos.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3 mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {fr.apropos.title}
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            {fr.apropos.text}
          </p>
        </div>

        <div ref={cardsRef} className="flex flex-col gap-5">
          {fr.apropos.values.map((value, i) => (
            <div key={value.title} className={`reveal-card ${cardsVisible ? 'reveal-card-visible' : ''} bg-white rounded-2xl p-6 flex items-start gap-4`} style={{ transitionDelay: `${i * 0.15}s`, boxShadow: '0 10px 30px -15px rgba(59,63,161,0.15)' }}>
              <span className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-white shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}>
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
