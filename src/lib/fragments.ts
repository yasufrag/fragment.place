import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type FragmentMeta = {
  title: string
  date: string
  tags?: string[]
  slug: string
  excerpt?: string
  image?: {
    src: string
    alt?: string
    caption?: string
  } | null
}

const fragmentsDir = path.join(process.cwd(), 'src/data/fragments')

function extractExcerpt(content: string): string {
  const lines = content.trim().split('\n')
  return lines.find((line) => line.trim() !== '')?.slice(0, 140) ?? ''
}

export function getAllFragments(): FragmentMeta[] {
  const filenames = fs.readdirSync(fragmentsDir)

  return filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(fragmentsDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      return {
        title: data.title || 'Untitled',
        date: data.date || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt || extractExcerpt(content),
        image: typeof data.image === 'object' && data.image?.src
          ? {
              src: data.image.src,
              alt: data.image.alt || '',
              caption: data.image.caption || '',
            }
          : null,
        slug,
      }
    })
}