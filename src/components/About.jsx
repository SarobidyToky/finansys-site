import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

export default function About() {
  const [textRef, textVisible] = useInView(0.2);
  const [cardsRef, cardsVisible] = useInView(0.2);

  return (
    <section id="apropos" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
      <svg className="absolute -top-10 -left-24 w-72 h-72 opacity-[0.35] -z-0" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="2 5" />
      </svg>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
        <div ref={textRef} className={`reveal ${textVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
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
