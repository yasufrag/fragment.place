import cron from 'node-cron'
import path from 'path'
import { deleteOldFiles } from '../src/lib/cleanup/deleteOldFiles'
import { CLEANUP_CONFIG } from '../src/config/cleanup.config'
import { logCleanupReport } from '../src/lib/cleanup/logCleanup'

const TARGET_DIR = path.resolve(process.cwd(), CLEANUP_CONFIG.TARGET_DIR)

cron.schedule('0 3 * * *', async () => {
  const now = new Date()
  console.log(`[${now.toISOString()}] Starting cleanup job...`)

  const deleted = deleteOldFiles(TARGET_DIR, CLEANUP_CONFIG.EXPIRATION_MS)

  if (CLEANUP_CONFIG.LOG_ENABLED && deleted.length > 0) {
    logCleanupReport(deleted, CLEANUP_CONFIG.LOG_DIR)
  }

  console.log(`[${new Date().toISOString()}] Cleanup job finished. Deleted ${deleted.length} item(s).`)
})