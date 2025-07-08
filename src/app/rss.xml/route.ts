import { Feed } from 'feed'
import { getAllFragments } from '@/lib/fragments'

export async function GET() {
  const feed = new Feed({
    title: 'fragment.place Feed',
    description: 'a fragment in motion',
    id: 'https://fragment.place/',
    link: 'https://fragment.place/',
    language: 'en',
    favicon: 'https://fragment.place/favicon.ico',
    updated: new Date(),
    generator: 'fragment.place Feed Generator',
    copyright: '© 2025 yasufrag',
    feedLinks: {
      rss2: 'https://fragment.place/rss.xml',
    },
    author: {
      name: 'yasufrag',
      link: 'https://fragment.place',
    },
})

  const fragments = await getAllFragments()

  fragments.forEach((fragment) => {
    feed.addItem({
      title: fragment.title,
      id: `https://fragment.place/fragments/${fragment.slug}`,
      link: `https://fragment.place/fragments/${fragment.slug}`,
      date: new Date(fragment.date),
      description: fragment.excerpt,
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}