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
  }
}

const fragmentsDir = path.join(process.cwd(), 'src/data/fragments')

function extractExcerpt(content: string): string {
  const lines = content.trim().split('\n')
  return lines.find((line) => line.trim() !== '')?.slice(0, 140) ?? ''
}

export function getAllFragments(): FragmentMeta[] {
  const fileNames = fs.readdirSync(fragmentsDir)

  return fileNames
    .filter((file) => file.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(fragmentsDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        title: data.title || 'Untitled',
        date: data.date ? new Date(data.date).toISOString() : '',
        tags: data.tags || [],
        slug: fileName.replace(/\.mdx$/, ''),
        excerpt: extractExcerpt(content),
        image: data.image || undefined, // image フィールドを追加
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}