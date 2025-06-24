import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, unlink } from 'fs/promises'
import path from 'path'
import { stripExif } from '@/lib/image/stripExif'
import { logUpload } from '@/lib/logUpload'

const UPLOAD_DIR = path.join(process.cwd(), 'public/images/fragments')
const MAX_IMAGES = 5
const CLEANUP_AFTER_DAYS = 7
const AUTH_SECRET = process.env.WEBHOOK_SECRET || ''

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization') || ''
  if (!authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] !== AUTH_SECRET) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const contentType = req.headers.get('content-type') || ''
  if (!contentType.includes('multipart/form-data')) {
    return new NextResponse('Unsupported Media Type', { status: 415 })
  }

  const formData = await req.formData()
  const slug = formData.get('slug') as string
  const files = formData.getAll('image') as File[]

  if (!slug || files.length === 0) {
    return new NextResponse('Missing slug or image files', { status: 400 })
  }

  if (files.length > MAX_IMAGES) {
    return new NextResponse(`Max ${MAX_IMAGES} images allowed`, { status: 400 })
  }

  const uploadPath = path.join(UPLOAD_DIR, slug)
  await mkdir(uploadPath, { recursive: true })

  const savedFiles: string[] = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const processedBuffer = await stripExif(buffer)
    const filename = `${String(i + 1).padStart(3, '0')}.jpg`
    const fullPath = path.join(uploadPath, filename)

    await writeFile(fullPath, processedBuffer)
    savedFiles.push(`/images/fragments/${slug}/${filename}`)

    await logUpload(`Upload completed for slug: ${slug}, total images: ${files.length}`)
  }

  return NextResponse.json({ status: 'ok', files: savedFiles })
}