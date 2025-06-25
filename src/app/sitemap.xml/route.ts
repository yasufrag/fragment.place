import { getAllFragments } from '@/lib/fragments' // 実装に応じて調整
import { getAllZines } from '@/lib/zines'         // 任意：ZINEを含める場合
import { siteMetadata } from '@/lib/siteMetadata' // サイト共通設定

export async function GET() {
  const baseUrl = siteMetadata.siteUrl || 'https://poietic.site'
  const fragments = await getAllFragments()
  const zines = await getAllZines?.() || []

  const urls = [
    { loc: `${baseUrl}/`, priority: '1.0' },
    { loc: `${baseUrl}/fragments`, priority: '0.8' },
    { loc: `${baseUrl}/zines`, priority: '0.7' },
    ...fragments.map((f) => ({
      loc: `${baseUrl}/fragments/${f.slug}`,
      lastmod: f.date,
      priority: '0.6',
    })),
    ...zines.map((z) => ({
      loc: `${baseUrl}/zines/${z.slug}`,
      lastmod: z.date,
      priority: '0.5',
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    return `
  <url>
    <loc>${url.loc}</loc>
    ${'lastmod' in url ? `<lastmod>${new Date(url.lastmod).toISOString()}</lastmod>` : ''}
    <priority>${url.priority}</priority>
  </url>`
  })
  .join('')}
</urlset>`

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}