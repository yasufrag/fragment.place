import { notFound } from 'next/navigation'
import { getAllFragments, getFragmentBySlug } from '@/lib/fragments'
import { createPageMetadata } from '@/lib/metadata'
import ArticleButton from '@/components/ArticleButton'
import MDXContent from '@/components/MDXContent'
import type { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const result = await getFragmentBySlug(params.slug)

  if (!result || !result.meta) {
    return {
      title: 'Fragment Not Found',
      description: 'The requested fragment does not exist.',
      robots: 'noindex',
    }
  }

  const { meta } = result

  return createPageMetadata({
    title: meta.title,
    description: meta.excerpt || 'A reflective fragment from fragment.place.',
    path: `/fragments/${meta.slug}`,
    image: meta.image ? `https://fragment.place/images/fragments/${meta.slug}/001.jpg` : undefined,
  })
}

export async function generateStaticParams() {
  const fragments = getAllFragments()
  return fragments.map((fragment) => ({ slug: fragment.slug }))
}

export default async function FragmentDetail({
  params,
}: {
  params: { slug: string }
}) {
  const result = await getFragmentBySlug(params.slug)

  if (!result || !result.meta) notFound()

  const { meta, content } = result

  return (
    <div className="article-container">
      <h1 className="article-title">{meta.title}</h1>

      <p className="article-date">
        {new Date(meta.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>

      {meta.image && (
        <figure className="article-figure">
          <img
            src={`/images/fragments/${meta.slug}/001.jpg`}
            alt="Fragment image"
            className="article-image"
          />
          {meta.image_caption && (
            <figcaption className="article-caption">{meta.image_caption}</figcaption>
          )}
        </figure>
      )}

      <MDXContent source={content} />

      <ArticleButton />
    </div>
  )
}