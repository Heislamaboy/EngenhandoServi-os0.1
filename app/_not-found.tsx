// app/_not-found.tsx
import Link from 'next/link';

export default function NotFoundPage() {
  // Use a variável de ambiente com protocolo completo
  const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://landing-page-4j36.vercel.app';

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        A página que você está procurando não existe.
      </p>
      <Link href={siteUrl} style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#0070f3', padding: '0.8rem 1.5rem', borderRadius: '8px' }}>
        Voltar para a página inicial
      </Link>
    </main>
  );
}
