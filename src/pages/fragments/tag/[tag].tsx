import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MetaTag } from '@/components/MetaTag'
import { FragmentCard } from '@/components/FragmentCard'
import type { FragmentMeta } from '@/lib/fragments'

// === Utility: Read all fragments ===
const getAllFragments = (): FragmentMeta[] => {
  const dir = path.join(process.cwd(), 'src/data/fragments')
  const files = fs.readdirSync(dir)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(dir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      const slug = filename.replace(/\.mdx$/, '')

      return {
        title: data.title || 'Untitled',
        date: data.date || '',
        slug,
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt || '',
        image:
          typeof data.image === 'object' && data.image?.src
            ? {
                src: data.image.src,
                alt: data.image.alt || '',
                caption: data.image.caption || '',
              }
            : null,
      }
    })
}

// === Page Component ===
type Props = {
  tag: string
  fragments: FragmentMeta[]
}

export default function TagPage({ tag, fragments }: Props) {
  return (
    <>
      <MetaTag
        title={`Fragments tagged with "${tag}"`}
        description={`A collection of fragments tagged with "${tag}".`}
        url={`https://poietic.site/fragments/tag/${tag}`}
      />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">#{tag}</h1>
        <div className="grid gap-6">
          {fragments.map((fragment) => (
            <FragmentCard key={fragment.slug} {...fragment} showImage={false} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/fragments" className="no-underline hover:underline text-gray-300 hover:text-white">
            ← Back to Fragments
          </Link>
        </div>
      </main>
    </>
  )
}

// === Static Paths ===
export const getStaticPaths: GetStaticPaths = async () => {
  const allFragments = getAllFragments()
  const allTags = new Set(allFragments.flatMap((f) => f.tags || []))

  const paths = Array.from(allTags).map((tag) => ({
    params: { tag },
  }))

  return { paths, fallback: false }
}

// === Static Props ===
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const tag = params?.tag as string
  const allFragments = getAllFragments()
  const taggedFragments = allFragments.filter((f) => f.tags?.includes(tag))

  return {
    props: {
      tag,
      fragments: taggedFragments,
    },
  }
}