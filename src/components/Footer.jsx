import fr from '../content/fr';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <span className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>FinanSys</span>
          <p className="mt-4 text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{fr.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4" style={{ color: 'white' }}>{fr.footer.columnsTitle}</h4>
          <ul className="flex flex-col gap-3">
            {fr.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4" style={{ color: 'white' }}>{fr.footer.socialTitle}</h4>
          <ul className="flex flex-col gap-3">
            {fr.footer.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{fr.footer.copyright}</p>
          <div className="flex gap-6">
            {fr.footer.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
