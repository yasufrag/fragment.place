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
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>

      <p className="text-sm text-gray-400 mb-6">
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
            <figcaption className="text-xs text-gray-400 mt-2 italic text-left">
              {meta.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="prose prose-invert poetic-flow">
        <MDXContent source={content} />
      </div>
    </>
  )
}