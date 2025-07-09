import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { FragmentMeta } from './types'

export async function getFragmentBySlug(
  slug: string
): Promise<{ meta: FragmentMeta; content: MDXRemoteSerializeResult } | null> {
  const filePath = path.join(process.cwd(), 'src/data/fragments', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = await fs.promises.readFile(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  const meta: FragmentMeta = {
    title: data.title || 'Untitled',
    date: data.date || '',
    slug,
    tags: Array.isArray(data.tags) ? data.tags : [],
    excerpt: data.excerpt || '',
    image: !!data.image,
    image_alt: data.image_alt || '',
    image_caption: data.image_caption || '',
  }

  const mdxSource = await serialize(content, {
    scope: data,
    parseFrontmatter: false,
  })

  return { meta, content: mdxSource }
}