import { useEffect, useState } from 'react';
import fr from '../content/fr';
import logo from '../img/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'py-3 shadow-lg' : 'py-5'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(20,21,43,0.82)' : 'rgba(20,21,43,0.45)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="/#hero" className="flex items-center gap-2.5">
          <img src={logo} alt="FinanSys" className="h-9 w-9 object-contain" />
          <span className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            FinanSys
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {fr.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-semibold text-white/90 hover:text-[var(--color-secondary)] transition-colors group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-secondary)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={fr.nav[fr.nav.length - 1].href}
            className="px-5 py-2 rounded-full font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {fr.cta.label}
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4 backdrop-blur-md"
          style={{ backgroundColor: 'rgba(20,21,43,0.92)' }}
        >
          {fr.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={fr.nav[fr.nav.length - 1].href}
            className="px-5 py-2 rounded-full font-semibold text-white text-center"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {fr.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
