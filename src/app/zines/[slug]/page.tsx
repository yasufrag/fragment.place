import { notFound } from 'next/navigation'
import { getAllZines, getZineBySlug } from '@/lib/zines'
import MDXContent from '@/components/MDXContent'
import TagBox from '@/components/zines/TagBox'
import YourSyntaxShare from '@/components/zines/YourSyntaxShare'
import { zineComponents } from '@/components/zines'

export async function generateStaticParams() {
  const zines = getAllZines()
  return zines.map((zine) => ({ slug: zine.slug }))
}

export default async function ZineDetail({ params }: { params: { slug: string } }) {
  const result = await getZineBySlug(params.slug)
  if (!result || !result.meta) notFound()

  const { content, meta } = result

  return (
    <div className="prose prose-invert mx-auto">
      <MDXContent source={content} components={zineComponents} />

      <TagBox tags={meta.tags ?? []} />

      <YourSyntaxShare defaultText="There was one last eggplant, waiting like a quiet punctuation mark..." />
    </div>
  )
}