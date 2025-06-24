import { notFound } from 'next/navigation'
import { getAllZines, getZineBySlug } from '@/lib/zines'
import MDXContent from '@/components/MDXContent'

export async function generateStaticParams() {
  const zines = getAllZines()
  return zines.map((zine) => ({ slug: zine.slug }))
}

export default async function ZineDetail({ params }: { params: { slug: string } }) {
  const result = await getZineBySlug(params.slug)
  if (!result || !result.meta) notFound()

  const { content } = result

  return (
    <div className="prose prose-invert mx-auto">
      {/* カバー・タイトル・日付は .mdx 側の <ZineCover /> に任せる */}
      <MDXContent source={content} />
    </div>
  )
}