import path from 'path'

export function slugToFilePath(slug: string): string {
  const [yyyy, mm, ...rest] = slug.split('-')
  const filename = `${rest.join('-')}.mdx`
  return path.join(process.cwd(), 'src/data/fragments', yyyy, mm, filename)
}

export function extractExcerpt(content: string): string {
  const lines = content.trim().split('\n')
  return lines.find((line) => line.trim() !== '')?.slice(0, 140) ?? ''
}
