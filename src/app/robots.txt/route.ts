export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https:/fragment.place/sitemap.xml
Sitemap: https://fragment.place/rss.xml
  `.trim()

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}