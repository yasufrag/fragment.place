import { Feed } from 'feed'
import { getAllFragments } from '@/lib/fragments'

export async function GET() {
  const feed = new Feed({
    title: 'Poietic Feed',
    description: 'Poetic fragments in motion',
    id: 'https://poietic.site/',
    link: 'https://poietic.site/',
    language: 'en',
    favicon: 'https://poietic.site/favicon.ico',
    updated: new Date(),
    generator: 'PoieticOS Feed Generator',
    copyright: '© 2025 poieticid',
    feedLinks: {
      rss2: 'https://poietic.site/rss.xml',
    },
    author: {
      name: 'poieticid',
      link: 'https://poietic.site',
    },
})

  const fragments = await getAllFragments()

  fragments.forEach((fragment) => {
    feed.addItem({
      title: fragment.title,
      id: `https://poietic.site/fragments/${fragment.slug}`,
      link: `https://poietic.site/fragments/${fragment.slug}`,
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