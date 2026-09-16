import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import services from '../content/services';

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: 'var(--color-primary)' }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white" style={{ border: '1px solid var(--color-bg-soft)' }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
        <span className="font-semibold text-base" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
          {item.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>
      <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {item.reponse}
          </p>
        </div>
      </div>
    </div>
  );
}

// Injecte le titre + la meta description pour le SEO (pas de dépendance
// supplémentaire type react-helmet, juste un effet ciblé sur ces 2 balises).
function useSEO(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevContent = meta.getAttribute('content');
    meta.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (created) {
        meta.remove();
      } else if (prevContent != null) {
        meta.setAttribute('content', prevContent);
      }
    };
  }, [title, description]);
}

export default function ServicePage() {
  const { slug } = useParams();
  const data = services[slug];
  const [openIndex, setOpenIndex] = useState(0);

  useSEO(
    data ? data.seoTitle : 'FinanSys',
    data ? data.metaDescription : ''
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <Navigate to="/" replace />;

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <div className="pt-28 pb-20">
      {/* HERO */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-16">
        <Link to="/#services" className="text-sm font-semibold inline-block mb-4" style={{ color: 'var(--color-primary)' }}>
          ← Retour aux services
        </Link>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
          {data.heroTitle}
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-16">
        {/* INTRO */}
        <div className="space-y-4">
          {data.intro.map((p, i) => (
            <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{p}</p>
          ))}
        </div>

        {/* POURQUOI */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Pourquoi c'est important ?
          </h2>
          <div className="space-y-4">
            {data.why.map((p, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{p}</p>
            ))}
          </div>
        </div>

        {/* 3 DIMENSIONS (comptabilité durable uniquement) */}
        {data.dimensions && (
          <div className="grid sm:grid-cols-3 gap-5">
            {data.dimensions.map((d) => (
              <div key={d.titre} className="rounded-2xl p-5" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                  {d.titre}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{d.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* COMMENT ÇA FONCTIONNE */}
        <div>
          <h2 className="text-2xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Comment ça fonctionne ?
          </h2>
          <div className="space-y-4">
            {data.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                >
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed pt-1" style={{ color: 'var(--color-text-muted)' }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CE QUE VOUS OBTENEZ */}
        <div>
          <h2 className="text-2xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Ce que vous obtenez avec FinanSys
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {data.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {data.faq.map((item, i) => (
              <FaqItem key={item.question} item={item} isOpen={openIndex === i} onToggle={() => toggle(i)} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center rounded-2xl p-10" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
          <p className="text-lg font-semibold mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {data.cta}
          </p>
          <Link
            to="/#contact"
            className="inline-block px-7 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
}
