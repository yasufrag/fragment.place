import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { FragmentMeta } from './types'
import { extractExcerpt } from './helpers'

const fragmentsDir = path.join(process.cwd(), 'src/data/fragments')

export function getAllFragments(): FragmentMeta[] {
  const files = fs
    .readdirSync(fragmentsDir)
    .filter((file) => file.endsWith('.mdx'))

  return files
    .map((filename) => {
      const filePath = path.join(fragmentsDir, filename)
      const slug = filename.replace(/\.mdx$/, '')

      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      if (!data.shouldPublish) return null

      const meta: FragmentMeta = {
        title: data.title || 'Untitled',
        date: data.date || '',
        slug,
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt || extractExcerpt(content),
        shouldPublish: true,
        shouldExportMdx: !!data.shouldExportMdx,
        hasImage: !!(data.image && data.image.src),
        image: data.image?.src
          ? {
              src: data.image.src,
              alt: data.image.alt || '',
              caption: data.image.caption || '',
            }
          : null,
      }

      return meta
    })
    .filter((frag): frag is FragmentMeta => Boolean(frag))
    .sort((a, b) => (a.date < b.date ? 1 : -1)) // 新しい順に並べる
}