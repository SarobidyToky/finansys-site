import { useState } from 'react';

// Accepte : URL YouTube (watch?v=, youtu.be/, embed/), ID YouTube brut, ou fichier vidéo direct (.mp4/.webm)
function parseSource(url) {
  if (!url) return null;
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return { type: 'file', src: url };
  const match =
    url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/) ||
    (/^[\w-]{11}$/.test(url) ? [null, url] : null);
  return match ? { type: 'youtube', id: match[1] } : null;
}

export default function VideoEmbed({ url, title, poster, className = '' }) {
  const [playing, setPlaying] = useState(false);
  const source = parseSource(url);
  if (!source) return null;

  const thumb =
    poster || (source.type === 'youtube' ? `https://i.ytimg.com/vi/${source.id}/hqdefault.jpg` : undefined);

  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-black ${className}`}
      style={{ boxShadow: '0 30px 60px -25px rgba(20,21,43,0.45)' }}
    >
      {playing ? (
        source.type === 'youtube' ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video className="absolute inset-0 w-full h-full" src={source.src} controls autoPlay poster={thumb} />
        )
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label={`Lire la vidéo : ${title}`}
        >
          {thumb && <img src={thumb} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />}
          <span className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,21,43,0.55), rgba(20,21,43,0.1))' }} />
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full transition-transform group-hover:scale-110"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 ml-0.5" fill="var(--color-ink)">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
