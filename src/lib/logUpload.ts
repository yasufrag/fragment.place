import fs from 'fs'
import path from 'path'

const LOG_PATH = path.resolve(process.cwd(), 'logs/upload.log')

export async function logUpload(message: string) {
  const timestamp = new Date().toISOString()
  const line = `[${timestamp}] ${message}\n`
  await fs.promises.mkdir(path.dirname(LOG_PATH), { recursive: true })
  await fs.promises.appendFile(LOG_PATH, line, 'utf8')
}