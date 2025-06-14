// src/lib/fragments.ts

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type FragmentMeta = {
  title: string
  date: string // ← string にします
  tags?: string[]
  slug: string
  excerpt?: string
}

const fragmentsDir = path.join(process.cwd(), 'src/data/fragments')

// 本文の先頭1段落を抜粋として返す補助関数（シンプル版）
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
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}