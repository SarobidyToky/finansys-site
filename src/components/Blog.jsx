import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../services/driveBlog';
import useInView from '../hooks/useInView';
import '../styles/animations.css';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('fr-MG', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Blog() {
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBlogPosts()
      .then(setPosts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // Pas d'articles et pas d'erreur de chargement : on n'affiche pas une section vide
  if (!loading && !error && posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'reveal-visible' : ''} max-w-2xl mb-14`}>
          <h2 className="text-3xl md:text-[2.4rem] font-extrabold leading-[1.1] mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
            Le blog FinanSys
          </h2>
          <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
            Conseils pratiques pour gérer vos finances, pensés pour les entrepreneurs malgaches.
          </p>
        </div>

        {loading && (
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Chargement des articles...</p>
        )}
        {error && (
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Impossible de charger le blog pour le moment.</p>
        )}

        {!loading && !error && (
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className={`reveal ${gridVisible ? 'reveal-visible' : ''} rounded-2xl p-6 bg-white transition-all hover:-translate-y-1 block group`}
                style={{ transitionDelay: `${i * 0.08}s`, border: '1px solid #EDEDED' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-primary)' }}>
                  {formatDate(post.modifiedTime)}
                </p>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink)' }}>
                  {post.name}
                </h3>
                <span
                  className="text-sm font-semibold inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Lire l'article
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}