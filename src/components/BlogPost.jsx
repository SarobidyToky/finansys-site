import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

export default function BlogPost() {
  const { fileId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fileId]);

  if (!fileId) return <Navigate to="/" replace />;

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <Link to="/#blog" className="text-sm font-semibold inline-block" style={{ color: 'var(--color-primary)' }}>
          ← Retour au blog
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid #EDEDED', boxShadow: '0 20px 50px -20px rgba(0,51,153,0.15)' }}
        >
          {/* Le document Google Doc est chargé en direct à chaque visite :
              toute modification faite par le client dans Drive apparaît
              automatiquement ici, sans déploiement du site. */}
          <iframe
            src={`https://docs.google.com/document/d/${fileId}/preview`}
            title="Article FinanSys"
            className="w-full"
            style={{ height: '80vh', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}