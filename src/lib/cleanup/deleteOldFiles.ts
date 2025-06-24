import fs from 'fs'
import path from 'path'

type DeleteResult = string[]

export function deleteOldFiles(dirPath: string, expirationMs: number): DeleteResult {
  if (!fs.existsSync(dirPath)) return []

  const now = Date.now()
  const deleted: DeleteResult = []

  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isFile()) {
      const age = now - stat.mtimeMs
      if (age > expirationMs) {
        fs.unlinkSync(filePath)
        deleted.push(`[FILE] ${filePath}`)
      }
    } else if (stat.isDirectory()) {
      const subDeleted = deleteOldFiles(filePath, expirationMs)
      if (subDeleted.length > 0) deleted.push(`[DIR] ${filePath}`, ...subDeleted)
    }
  }

  return deleted
}