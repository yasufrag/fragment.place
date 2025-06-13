import Head from 'next/head'

type MetaTagProps = {
  title: string
  description: string
  url: string
  image: string
}

export const MetaTag = ({ title, description, url, image }: MetaTagProps) => (
  <Head>
    {/* Basic */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@poietic_site" />{' '}
    {/* 任意：Xアカウントある場合 */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {/* Optional SEO meta */}
    <meta name="robots" content="index,follow" />
    <meta name="author" content="co.poiesis" />
  </Head>
)
