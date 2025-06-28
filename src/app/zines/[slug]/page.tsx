import { notFound } from 'next/navigation'
import { getAllZines, getZineBySlug } from '@/lib/zines'
import ZineCover from '@/components/zines/ZineCover'
import MDXContent from '@/components/MDXContent'
import TagBox from '@/components/zines/TagBox'
import ArticleButton from '@/components/ArticleButton'
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
    <div className="article-container">
      <ZineCover
        title={meta.title}
        subtitle={meta.excerpt}
        image={meta.image?.src}
        alt={meta.image?.alt}
        date={meta.date}
      />

      <TagBox tags={meta.tags ?? []} />

      <MDXContent source={content} components={zineComponents} />

      <ArticleButton />
    </div>
  )
}