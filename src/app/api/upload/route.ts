import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const file = form.get('image') as File
  const slug = form.get('slug') as string

  if (!file || !slug) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 })
  }

  const blob = await put(`fragments/${slug}/${file.name}`, file, {
    access: 'public',
  })

  return NextResponse.json({ status: 'ok', url: blob.url })
}