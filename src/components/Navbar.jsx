import { useEffect, useState } from 'react';
import fr from '../content/fr';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="/#hero" className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
          FinanSys
        </a>

        <div className="hidden md:flex items-center gap-8">
          {fr.nav.map((item) => (
            <a key={item.href} href={item.href} className="relative font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors group">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href={fr.nav[fr.nav.length - 1].href} className="px-5 py-2 rounded-full font-semibold text-white transition-transform hover:scale-105" style={{ backgroundColor: 'var(--color-primary)' }}>
            {fr.cta.label}
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          {fr.nav.map((item) => (
            <a key={item.href} href={item.href} className="font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={fr.nav[fr.nav.length - 1].href} className="px-5 py-2 rounded-full font-semibold text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
            {fr.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
