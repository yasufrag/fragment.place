'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { MDXComponents } from 'mdx/types'

interface Props {
  source: MDXRemoteSerializeResult
  components?: MDXComponents
}

export default function MDXContent({ source, components }: Props) {
  return <MDXRemote {...source} components={components} />
}