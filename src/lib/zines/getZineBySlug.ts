import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { ZineMeta } from './types'

export async function getZineBySlug(
  slug: string
): Promise<{ meta: ZineMeta; content: MDXRemoteSerializeResult } | null> {
  const filePath = path.join(process.cwd(), 'src/data/zines', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = await fs.promises.readFile(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  const meta: ZineMeta = {
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    slug,
    excerpt: data.excerpt ?? '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image === true,
    image_alt: typeof data.image_alt === 'string' ? data.image_alt : '',
    image_caption: typeof data.image_caption === 'string' ? data.image_caption : '',
  }

  const mdxSource = await serialize(content, {
    scope: data,
    parseFrontmatter: false,
  })

  return { meta, content: mdxSource }
}