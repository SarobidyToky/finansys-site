import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';
import BrowserFrame from './BrowserFrame';
import '../styles/animations.css';

import dashboardImg from '../img/screenshots/dashboard.png';
import dashboardFiscalImg from '../img/screenshots/dashboard-fiscal.png';
import dashboardEsgImg from '../img/screenshots/dashboard-esg.png';
import planComptableImg from '../img/screenshots/plan-comptable.png';
import abonnementImg from '../img/screenshots/abonnement.png';
import factureImg from '../img/screenshots/facture.png';

const SCREENS = [
  { src: dashboardImg, title: 'Tableau de bord', description: "Chiffre d'affaires, charges, résultat et trésorerie en un coup d'œil." },
  { src: dashboardFiscalImg, title: 'Dashboard fiscal', description: 'TVA, impôt estimé et historique mensuel calculés automatiquement.' },
  { src: dashboardEsgImg, title: 'Dashboard ESG', description: 'Score de durabilité détaillé par pilier Environnement, Social, Gouvernance.' },
  { src: planComptableImg, title: 'Plan comptable', description: 'Le plan comptable malgache (PCG 2005), déjà prêt à l\'emploi.' },
  { src: abonnementImg, title: 'Abonnement', description: 'Choisissez et combinez vos packs selon vos besoins.' },
  { src: factureImg, title: 'Facturation', description: 'Suivi détaillé de chaque facture, paiements compris.' },
];

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  );
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const item = SCREENS[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: 'rgba(15,17,35,0.92)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white transition"
        aria-label="Fermer"
      >
        <CloseIcon />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 md:left-6 text-white/70 hover:text-white transition p-2"
        aria-label="Précédent"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 md:right-6 text-white/70 hover:text-white transition p-2"
        aria-label="Suivant"
      >
        <ArrowIcon direction="right" />
      </button>

      <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-auto rounded-xl shadow-2xl"
          style={{ maxHeight: '78vh', objectFit: 'contain', backgroundColor: 'white' }}
        />
        <div className="text-center mt-4">
          <p className="text-white font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</p>
          <p className="text-white/60 text-sm mt-1">{item.description}</p>
          <p className="text-white/40 text-xs mt-2">{index + 1} / {SCREENS.length}</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.05);
  const [openIndex, setOpenIndex] = useState(null);

  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i - 1 + SCREENS.length) % SCREENS.length);
  const next = () => setOpenIndex((i) => (i + 1) % SCREENS.length);

  return (
    <section id="apercu" className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} max-w-xl mb-14`}>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold leading-[1.1] mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
            FinanSys en images
          </h2>
          <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
            Un aperçu concret de l'outil, avant même de créer votre compte.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[1fr] gap-5">
          {SCREENS.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setOpenIndex(i)}
              className={`reveal ${gridVisible ? 'reveal-visible' : ''} group text-left min-w-0 transition-transform hover:-translate-y-1 ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`relative overflow-hidden rounded-lg ${i === 0 ? 'lg:h-full' : ''}`} style={{ aspectRatio: i === 0 ? undefined : '16/10' }}>
                <BrowserFrame src={item.src} alt={item.title} />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: 'rgba(20,21,43,0.35)' }}
                >
                  <span className="text-white text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}>
                    Agrandir
                  </span>
                </div>
              </div>
              <div className="pt-4">
                <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>{item.title}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
