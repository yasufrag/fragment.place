// pages/fragments/[slug].tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

type FragmentPageProps = {
  title: string
  date: string
  content: MDXRemoteSerializeResult
}

export default function FragmentPage({ title, date, content }: FragmentPageProps) {
  return (
    <>
      <MetaTag {...meta.fragments} />
      <h1>{title}</h1>
      <p className="text-sm text-neutral-500 mb-6">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>
      <div className="prose prose-invert">
        <MDXRemote {...content} />
      </div>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const filePath = path.join(process.cwd(), 'src/data/fragments', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)
  return {
    props: {
      title: data.title || slug,
      date: data.date || '',
      content: mdxSource,
    },
  }
}