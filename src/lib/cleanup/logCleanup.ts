import fs from 'fs'
import path from 'path'

export function logCleanupReport(entries: string[], baseDir: string) {
  const logDir = path.resolve(process.cwd(), baseDir)
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const logPath = path.join(logDir, `cleanup-${timestamp}.log`)

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true })
  }

  fs.writeFileSync(logPath, entries.join('\n'), 'utf8')
}