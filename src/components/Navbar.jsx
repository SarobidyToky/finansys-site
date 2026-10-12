import { useState } from 'react';
import fr from '../content/fr';
import logoNavbar from '../assets/logo-navbar.png';

const NAV_BG = '#FFFFFF';
const NAV_BLUE = '#003399';
const NAV_GREEN = '#16B84E';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 shadow-sm transition-all duration-300" style={{ backgroundColor: NAV_BG }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/#hero" className="flex items-center gap-3 text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: NAV_BLUE }}>
          <img src={logoNavbar} alt="Logo Finansys" className="w-11 h-11 object-contain" />
          <span>FinanSys</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {fr.nav.map((item) => (
            <a key={item.href} href={item.href} className="relative font-medium transition-opacity hover:opacity-70 group" style={{ color: NAV_BLUE }}>
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: NAV_GREEN }} />
            </a>
          ))}
          <a href={fr.nav[fr.nav.length - 1].href} className="px-5 py-2 rounded-full font-semibold text-white transition-transform hover:scale-105" style={{ backgroundColor: NAV_GREEN }}>
            {fr.cta.label}
          </a>
        </div>

        <button type="button" className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
          <span className="w-6 h-0.5" style={{ backgroundColor: NAV_BLUE }} />
          <span className="w-6 h-0.5" style={{ backgroundColor: NAV_BLUE }} />
          <span className="w-6 h-0.5" style={{ backgroundColor: NAV_BLUE }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden shadow-md px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: NAV_BG }}>
          {fr.nav.map((item) => (
            <a key={item.href} href={item.href} className="font-medium" style={{ color: NAV_BLUE }} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={fr.nav[fr.nav.length - 1].href} className="px-5 py-2 rounded-full font-semibold text-white text-center" style={{ backgroundColor: NAV_GREEN }} onClick={() => setMenuOpen(false)}>
            {fr.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
