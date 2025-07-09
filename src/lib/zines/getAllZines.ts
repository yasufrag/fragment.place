import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ZineMeta } from './types'
import { extractExcerpt } from './helpers'

const zineDir = path.join(process.cwd(), 'src/data/zines')

export function getAllZines(): ZineMeta[] {
  if (!fs.existsSync(zineDir)) return []

  const filenames = fs.readdirSync(zineDir)

  return filenames
    .filter((file) => file.toLowerCase().endsWith('.mdx'))
    .map((filename) => {
      try {
        const filePath = path.join(zineDir, filename)
        const slug = filename.replace(/\.mdx$/, '')
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        const image = data.image === true
        const image_alt = typeof data.image_alt === 'string' ? data.image_alt : ''
        const image_caption = typeof data.image_caption === 'string' ? data.image_caption : ''

        const meta: ZineMeta = {
          title: data.title || 'Untitled',
          date: data.date || '',
          slug,
          tags: Array.isArray(data.tags) ? data.tags : [],
          excerpt: data.excerpt || extractExcerpt(content),
          image,
          image_alt,
          image_caption,
        }

        return meta
      } catch (err) {
        console.error(`Failed to parse ZINE file: ${filename}`, err)
        return null
      }
    })
    .filter((zine): zine is ZineMeta => zine !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}