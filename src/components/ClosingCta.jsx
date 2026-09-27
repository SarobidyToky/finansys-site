import fr from '../content/fr';

export default function ClosingCta() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-[2.6rem] font-extrabold leading-[1.1] mb-4"
          style={{ fontFamily: 'var(--font-heading)', color: 'white' }}
        >
          {fr.closingCta.title}
        </h2>
        <p className="text-base md:text-lg mb-9" style={{ color: 'rgba(255,255,255,0.75)' }}>
          {fr.closingCta.text}
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105"
          style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-ink)' }}
        >
          {fr.closingCta.ctaLabel}
        </a>
      </div>
    </section>
  );
}
