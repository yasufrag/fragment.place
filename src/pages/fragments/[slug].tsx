// pages/fragments/[slug].tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MetaTag } from '@/components/MetaTag'
import { meta as globalMeta } from '@/meta/meta'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export type FragmentMeta = {
  title: string
  date: string
  tags?: string[]
  excerpt?: string
  image?: {
    src: string
    alt?: string
    caption?: string
  } | null
}

type FragmentPageProps = {
  meta: FragmentMeta
  mdxSource: MDXRemoteSerializeResult
}

export default function FragmentPage({ meta, mdxSource }: FragmentPageProps) {
  return (
    <>
      <MetaTag title={meta.title} description={meta.excerpt || ''} />
      <article className="max-w-3xl mx-auto px-6 py-12 text-white">
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          {new Date(meta.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>

        {meta.image?.src && (
          <div className="mb-6">
            <img
              src={meta.image.src}
              alt={meta.image.alt || ''}
              className="rounded-xl object-cover w-full h-auto"
              loading="lazy"
            />
            {meta.image.caption && (
              <p className="text-xs text-gray-400 mt-2 italic">
                {meta.image.caption}
              </p>
            )}
          </div>
        )}

        <div className="prose prose-invert">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fragmentsDir = path.join(process.cwd(), 'src/data/fragments')
  const filenames = fs.readdirSync(fragmentsDir)
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<FragmentPageProps> = async ({ params }) => {
  const slug = params?.slug as string
  const filePath = path.join(process.cwd(), 'src/data/fragments', `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content)

  const image =
    typeof data.image === 'object' && data.image?.src
      ? {
          src: data.image.src,
          alt: data.image.alt || '',
          caption: data.image.caption || '',
        }
      : null

  return {
    props: {
      meta: {
        title: data.title || 'Untitled',
        date: data.date || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt || '',
        image,
      },
      mdxSource,
    },
  }
}