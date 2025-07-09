import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { FragmentMeta } from './types'

const fragmentsDir = path.join(process.cwd(), 'src/data/fragments')

export function getAllFragments(): FragmentMeta[] {
  const files = fs
    .readdirSync(fragmentsDir)
    .filter((file) => file.endsWith('.mdx'))

  const fragments = files.flatMap((filename) => {
    const filePath = path.join(fragmentsDir, filename)
    const slug = filename.replace(/\.mdx$/, '')

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)

    const meta: FragmentMeta = {
      title: data.title || 'Untitled',
      date: data.date || '',
      slug,
      tags: Array.isArray(data.tags) ? data.tags : [],
      excerpt: data.excerpt || '',
      image: data.image ?? false,
      image_alt: data.image_alt || '',
      image_caption: data.image_caption || '',
    }

    return [meta]
  })

  return fragments.sort((a, b) => (a.date < b.date ? 1 : -1))
}