export function TabletFrame({ src, alt, className = '' }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-black p-2.5 ${className}`}
      style={{ boxShadow: '0 30px 60px -20px rgba(20,21,43,0.45)' }}
    >
      <div className="rounded-lg overflow-hidden bg-white">
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" style={{ aspectRatio: '4/3' }} />
      </div>
    </div>
  );
}

export function PhoneFrame({ src, alt, className = '' }) {
  return (
    <div
      className={`rounded-[1.8rem] overflow-hidden bg-black p-2 ${className}`}
      style={{ boxShadow: '0 25px 50px -15px rgba(20,21,43,0.5)' }}
    >
      <div className="rounded-[1.3rem] overflow-hidden bg-white relative">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 rounded-full bg-black z-10" />
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" style={{ aspectRatio: '9/17.5' }} />
      </div>
    </div>
  );
}
