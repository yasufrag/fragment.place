import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { stripExifAndConvertToJpg } from '@/lib/image/stripExif'
import { logUpload } from '@/lib/logUpload'

const UPLOAD_DIR = path.join(process.cwd(), 'uploads', 'fragments')
const MAX_IMAGES = 5
const AUTH_SECRET = process.env.WEBHOOK_SECRET || ''

// ⛑️ GETリクエストに対するダミーハンドラ（ビルドエラー回避用）
export async function GET() {
  return new NextResponse('Method Not Allowed', { status: 405 })
}

// 📤 アップロード処理
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization') || ''
  if (!authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] !== AUTH_SECRET) {
    console.warn('[AUTH] Invalid Authorization header')
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const contentType = req.headers.get('content-type') || ''
  if (!contentType.includes('multipart/form-data')) {
    console.warn('[CONTENT] Unsupported Media Type:', contentType)
    return new NextResponse('Unsupported Media Type', { status: 415 })
  }

  const formData = await req.formData()
  const slug = formData.get('slug') as string
  const files = formData.getAll('image') as File[]

  console.log(`[RECEIVED] Slug: ${slug}, Image files received: ${files.length}`)

  if (!slug || files.length === 0) {
    console.warn('[VALIDATION] Missing slug or image files')
    return new NextResponse('Missing slug or image files', { status: 400 })
  }

  if (files.length > MAX_IMAGES) {
    console.warn('[VALIDATION] Too many images:', files.length)
    return new NextResponse(`Max ${MAX_IMAGES} images allowed`, { status: 400 })
  }

  const uploadPath = path.join(UPLOAD_DIR, slug)
  console.log(`[DIR] Creating upload directory: ${uploadPath}`)
  await mkdir(uploadPath, { recursive: true })

  const savedFiles: string[] = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const filename = `${String(i + 1).padStart(3, '0')}.jpg`
    const fullPath = path.join(uploadPath, filename)

    console.log(`[PROCESS] Saving image ${filename} to ${fullPath}`)

    try {
      await stripExifAndConvertToJpg(buffer, fullPath)
      savedFiles.push(`/api/image/${slug}/${filename}`)
      console.log(`[SUCCESS] Saved: ${filename}`)
    } catch (error) {
      console.error(`[ERROR] Failed to save ${filename}:`, error)
    }
  }

  await logUpload(`Upload completed for slug: ${slug}, total images: ${files.length}`)

  return NextResponse.json({ status: 'ok', files: savedFiles })
}