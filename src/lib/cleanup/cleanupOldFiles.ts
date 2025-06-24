import fs from 'fs'
import path from 'path'

const now = Date.now()

/**
 * 指定ディレクトリ内の古いファイルを削除する
 * @param dirPath 対象ディレクトリの絶対パス
 * @param expirationMs 有効期間（ミリ秒）例: 7日 => 7 * 24 * 60 * 60 * 1000
 */
export function deleteOldFiles(dirPath: string, expirationMs: number): void {
  if (!fs.existsSync(dirPath)) return

  const files = fs.readdirSync(dirPath)
  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isFile()) {
      const age = now - stat.mtimeMs
      if (age > expirationMs) {
        fs.unlinkSync(filePath)
        console.log(`🗑️ Deleted old file: ${filePath}`)
      }
    }

    if (stat.isDirectory()) {
      deleteOldFiles(filePath, expirationMs)
    }
  })
}