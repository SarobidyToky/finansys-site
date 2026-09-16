import { useState } from 'react';
import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

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
    <div
      className="rounded-2xl overflow-hidden bg-white"
      style={{ border: '1px solid var(--color-bg-soft)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
      >
        <span className="font-semibold text-base" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
          {item.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {item.reponse}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [listRef, listVisible] = useInView(0.05);
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} text-center mb-12`}>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{fr.faq.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {fr.faq.title}
          </h2>
        </div>

        <div ref={listRef} className={`reveal ${listVisible ? 'reveal-visible' : ''} space-y-3`}>
          {fr.faq.items.map((item, i) => (
            <FaqItem key={item.question} item={item} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
