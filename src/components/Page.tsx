// components/Page.tsx
import { MetaTag } from './MetaTag'

type PageProps = {
  title: string
  description?: string
  url?: string
  image?: string
  children: React.ReactNode
}

export default function Page({
  title,
  description,
  url,
  image,
  children,
}: PageProps) {
  return (
    <>
      <MetaTag
        title={title}
        description={description}
        url={url}
        image={image}
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">{title}</h1>
        <div className="prose prose-neutral dark:prose-invert">{children}</div>
      </main>
    </>
  )
}
