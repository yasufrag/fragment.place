import { notFound } from 'next/navigation'
import { getAllFragments, getFragmentBySlug } from '@/lib/fragments'
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
    <>
      <h1>{meta.title}</h1>

      <p>
        {new Date(meta.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>

      {meta.image?.src && (
        <figure className="mb-8">
          <img
            src={meta.image.src}
            alt={meta.image.alt || ''}
            className="rounded-xl object-cover w-full h-auto"
          />
          {meta.image.caption && (
            <figcaption>
              {meta.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      <MDXContent source={content} />
    </>
  )
}