const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;

// Liste les articles (Google Docs) du dossier Drive configuré comme blog.
// Le dossier doit être partagé en "Toute personne disposant du lien" (lecteur),
// sinon l'API Drive refusera l'accès même avec une clé API valide.
export async function getBlogPosts() {
  const q = encodeURIComponent(
    `'${FOLDER_ID}' in parents and trashed = false and mimeType = 'application/vnd.google-apps.document'`
  );
  const fields = encodeURIComponent('files(id,name,modifiedTime)');
  const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&orderBy=modifiedTime desc&key=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Impossible de charger les articles du blog');
  const data = await res.json();
  return data.files || [];
}