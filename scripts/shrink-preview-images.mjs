// Downscales oversized photos IN PLACE, for the GitHub Pages preview build.
//
// public/images holds camera originals (17-21 MB each) and next.config.mjs
// sets images.unoptimized, so a visitor downloads the full file. The Pages
// workflow runs this against its own checkout before building; the committed
// originals are never touched. Run it manually only on a copy.
//
// Usage: node scripts/shrink-preview-images.mjs [directory]

import { readdir, stat, rename, unlink } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const dir = process.argv[2] ?? "public/images"
const MAX_BYTES = 2 * 1024 * 1024 // leave already-web-sized files alone
const MAX_EDGE = 2000 // enough for full-bleed hero images on a 2x display
const QUALITY = 82

const isPhoto = (name) => /\.(jpe?g|png)$/i.test(name)
const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`

const entries = await readdir(dir, { withFileTypes: true })
let before = 0
let after = 0
let shrunk = 0

for (const entry of entries) {
  if (!entry.isFile() || !isPhoto(entry.name)) continue

  const file = path.join(dir, entry.name)
  const original = (await stat(file)).size
  before += original

  if (original <= MAX_BYTES) {
    after += original
    continue
  }

  // sharp cannot write back to the file it is reading.
  const tmp = `${file}.shrinking`
  try {
    await sharp(file)
      .rotate() // apply EXIF orientation before it is stripped
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(tmp)
    await rename(tmp, file)
  } catch (error) {
    await unlink(tmp).catch(() => {})
    console.error(`  ${entry.name}: left as-is (${error.message})`)
    after += original
    continue
  }

  const resized = (await stat(file)).size
  after += resized
  shrunk += 1
  console.log(`  ${entry.name}: ${mb(original)} -> ${mb(resized)}`)
}

console.log(`${dir}: ${shrunk} file(s) resized, ${mb(before)} -> ${mb(after)}`)
