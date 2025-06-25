export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://poietic.site/sitemap.xml
Sitemap: https://poietic.site/rss.xml
  `.trim()

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}