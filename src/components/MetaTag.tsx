// components/MetaTag.tsx
import Head from 'next/head'

type MetaTagProps = {
  title: string
  description?: string
  url?: string
  image?: string
}

export const MetaTag = ({ title, description, url, image }: MetaTagProps) => {
  const siteName = 'co.poiesis'
  const fullTitle = `${title} | ${siteName}`
  const metaDescription =
    description || 'co.poiesis is a poetic syntax unfolding in fragments.'
  const canonicalURL = url || 'https://poietic.site'
  const ogImage = image || 'https://poietic.site/og-default.png'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalURL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@poietic_site" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Optional */}
      <meta name="robots" content="index,follow" />
      <meta name="author" content="co.poiesis" />
    </Head>
  )
}
