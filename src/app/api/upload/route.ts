import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { readFile } from 'fs/promises'

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string; filename: string } }
) {
  const { slug, filename } = params
  const imagePath = path.join(process.cwd(), 'uploads', 'fragments', slug, filename)

  try {
    const fileBuffer = await readFile(imagePath)
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return new NextResponse('Not Found', { status: 404 })
  }
}