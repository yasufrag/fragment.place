import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

/**
 * Exifデータを除去し、JPEGに変換して保存する
 * @param inputBuffer 変換前の画像Buffer
 * @param outputPath 保存先のフルパス（.jpg）
 */
export async function stripExifAndConvertToJpg(inputBuffer: Buffer, outputPath: string): Promise<void> {
  await sharp(inputBuffer)
    .jpeg({ quality: 90 }) // Exif除去とともにJPEGに再変換
    .toFile(outputPath)
}

/**
 * 一時ファイルを読み込み→Exif除去→保存→削除までを行う
 * @param tempFilePath 一時ファイルのパス
 * @param destPath 保存先の最終パス
 */
export async function processImageFile(tempFilePath: string, destPath: string): Promise<void> {
  const buffer = await fs.readFile(tempFilePath)
  await stripExifAndConvertToJpg(buffer, destPath)
  await fs.unlink(tempFilePath) // 元ファイル削除
}