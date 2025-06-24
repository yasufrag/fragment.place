'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { FC } from 'react'
import { zineComponents } from '@/components/zines'

interface Props {
  source: MDXRemoteSerializeResult
}

const MDXContent: FC<Props> = ({ source }) => {
  return <MDXRemote {...source} components={zineComponents} />
}

export default MDXContent