import fr from '../content/fr';
import partners from '../content/partners';
import { REGISTER_URL } from '../config/appUrl';

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
          href={REGISTER_URL}
          className="inline-block px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105"
          style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-ink)' }}
        >
          {fr.closingCta.ctaLabel}
        </a>

        <div className="mt-16 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-8"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Ils nous accompagnent
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl flex items-center justify-center shrink-0"
                style={{ width: '210px', height: '115px' }}
              >
                <img src={p.logo} alt={p.name} className="max-h-16 md:max-h-[4.5rem] max-w-[85%] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
