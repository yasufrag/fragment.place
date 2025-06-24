export type ZineMeta = {
  title: string
  date: string
  slug: string
  tags?: string[]
  excerpt?: string
  image?: {
    src: string
    alt?: string
    caption?: string
  } | null
}