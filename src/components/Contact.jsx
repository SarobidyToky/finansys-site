import { useState } from 'react';
import fr from '../content/fr';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const infoIcons = {
  Adresse: (
    <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  Téléphone: (
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  Email: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 7 10-7" />
    </g>
  ),
};

export default function Contact() {
  const [infoRef, infoVisible] = useInView(0.2);
  const [formRef, formVisible] = useInView(0.2);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div ref={infoRef} className={`reveal ${infoVisible ? 'reveal-visible' : ''}`}>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{fr.contact.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3 mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {fr.contact.title}
          </h2>
          <p className="text-lg mb-10" style={{ color: 'var(--color-text-muted)' }}>{fr.contact.subtitle}</p>

          <div className="flex flex-col gap-6">
            {fr.contact.infos.map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0" style={{ backgroundColor: 'rgba(59,63,161,0.1)', color: 'var(--color-primary)' }}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5">{infoIcons[info.label]}</svg>
                </span>
                <div>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{info.label}</div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={formRef} className={`reveal ${formVisible ? 'reveal-visible' : ''} bg-white rounded-3xl p-8`} style={{ boxShadow: '0 20px 50px -20px rgba(59,63,161,0.2)' }}>
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <span className="flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: 'rgba(34,197,94,0.15)' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M5 13l4 4L19 7" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              <p className="font-semibold text-lg" style={{ color: 'var(--color-text)' }}>{fr.contact.form.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>{fr.contact.form.nameLabel}</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>{fr.contact.form.emailLabel}</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>{fr.contact.form.phoneLabel}</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>{fr.contact.form.messageLabel}</label>
                <textarea name="message" rows="4" required value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[var(--color-primary)] transition-colors resize-none" />
              </div>
              <button type="submit" className="mt-2 px-7 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105" style={{ backgroundColor: 'var(--color-primary)' }}>
                {fr.contact.form.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
