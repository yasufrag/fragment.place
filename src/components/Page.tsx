import Head from 'next/head';

interface PageProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  children: React.ReactNode;
}

export default function Page({
  title,
  description,
  url,
  image,
  children,
}: PageProps) {
  const siteName = 'co.poiesis';
  const fullTitle = `${title} | ${siteName}`;
  const metaDescription =
    description || 'co.poiesis is a poetic syntax unfolding in fragments.';
  const siteURL = url || 'https://poietic-site.vercel.app';
  const imageURL =
    image || 'https://poietic-site.vercel.app/og-default.png'; // 必要に応じて共通OG画像を用意
  const canonicalURL = url || siteURL;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalURL} />

        {/* Open Graph (Facebook, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalURL} />
        <meta property="og:image" content={imageURL} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageURL} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">{title}</h1>
        <div className="prose prose-neutral">{children}</div>
      </div>
    </>
  );
}