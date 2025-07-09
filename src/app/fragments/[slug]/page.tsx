import { notFound } from 'next/navigation'
import { getAllFragments, getFragmentBySlug } from '@/lib/fragments'
import ArticleButton from '@/components/ArticleButton'
import MDXContent from '@/components/MDXContent'

export async function generateStaticParams() {
  const fragments = getAllFragments()
  return fragments.map((fragment) => ({ slug: fragment.slug }))
}

export default async function FragmentDetail({ params }: { params: { slug: string } }) {
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
          <figcaption className="article-caption">
            {meta.image_caption}
          </figcaption>
        </figure>
      )}

      <MDXContent source={content} />

      <ArticleButton />
    </div>
  )
}