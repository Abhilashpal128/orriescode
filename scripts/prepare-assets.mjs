import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

// Optional: npm exec -- node scripts/prepare-assets.mjs <hero.png> <editorial.png>
const [hero, editorial] = process.argv.slice(2)
if (!hero || !editorial) {
  console.error('Provide paths to the two original generated images.')
  process.exit(1)
}
await mkdir('public/images', { recursive: true })
await Promise.all([
  sharp(hero).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 86 }).toFile('public/images/jewelry-hero.webp'),
  sharp(editorial).resize({ width: 1536, withoutEnlargement: true }).webp({ quality: 85 }).toFile('public/images/jewelry-editorial.webp'),
])
console.log('Optimized project images saved in public/images.')
