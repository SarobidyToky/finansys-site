export default function BrowserFrame({ src, alt, url = 'app.finansys-compta.mg', className = '' }) {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-white ${className}`}
      style={{ boxShadow: '0 30px 60px -20px rgba(20,21,43,0.35)', border: '1px solid rgba(20,21,43,0.08)' }}
    >
      <div className="flex items-center gap-3 px-4 py-2.5" style={{ backgroundColor: '#EDECF6' }}>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D8D6EA' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D8D6EA' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D8D6EA' }} />
        </div>
        <div
          className="flex-1 text-center text-xs py-1 rounded-md truncate"
          style={{ backgroundColor: '#FFFFFF', color: 'var(--color-text-muted)' }}
        >
          {url}
        </div>
      </div>
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}
