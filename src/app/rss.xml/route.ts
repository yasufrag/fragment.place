import { Feed } from 'feed'
import { getAllFragments } from '@/lib/fragments'

export async function GET() {
  const baseUrl = 'https://fragment.place'

  const feed = new Feed({
    title: 'fragment.place Feed',
    description: 'a fragment in motion',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
    updated: new Date(),
    generator: 'fragment.place Feed Generator',
    copyright: '© 2025 yasufrag',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author: {
      name: 'yasufrag',
      link: baseUrl,
    },
  })

  const fragments = await getAllFragments()

  fragments.forEach((fragment) => {
    feed.addItem({
      title: fragment.title,
      id: `${baseUrl}/fragments/${fragment.slug}`,
      link: `${baseUrl}/fragments/${fragment.slug}`,
      date: new Date(fragment.date),
      description: fragment.excerpt || '',
      author: [{ name: 'yasufrag', link: baseUrl }],
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}