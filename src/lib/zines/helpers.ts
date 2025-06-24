export function extractExcerpt(content: string): string {
  const lines = content.trim().split('\n')
  return lines.find((line) => line.trim() !== '')?.slice(0, 140) ?? ''
}