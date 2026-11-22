import { mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

// Two interwoven, three-lobed loops recreate the supplied mark as flat vector art.
const blue = '#315be8'
const ink = '#17243d'
const center = 36
const format = value => Number(value.toFixed(3))

function loopPath(rotation) {
  const steps = 24
  const step = Math.PI * 2 / steps
  function point(angle) {
    const phase = 3 * (angle + Math.PI / 2 + rotation)
    const radius = 25 + 6 * Math.cos(phase)
    const derivative = -18 * Math.sin(phase)
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
      dx: derivative * Math.cos(angle) - radius * Math.sin(angle),
      dy: derivative * Math.sin(angle) + radius * Math.cos(angle),
    }
  }
  const start = -Math.PI / 2
  const first = point(start)
  let path = `M${format(first.x)} ${format(first.y)}`
  for (let index = 0; index < steps; index++) {
    const from = point(start + index * step)
    const to = point(start + (index + 1) * step)
    path += `C${format(from.x + from.dx * step / 3)} ${format(from.y + from.dy * step / 3)} ${format(to.x - to.dx * step / 3)} ${format(to.y - to.dy * step / 3)} ${format(to.x)} ${format(to.y)}`
  }
  return `${path}Z`
}

const paths = [loopPath(0), loopPath(Math.PI / 3)]
const loops = (width = 5) => `<g class="loop" fill="none" stroke="${blue}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round">${paths.map(path => `<path d="${path}"/>`).join('')}</g>`
const code = `<path d="M29 31L23 36L29 41M39 29L34 43M43 31L49 36L43 41" fill="none" stroke="${ink}" stroke-width="2.8" stroke-linecap="square" stroke-linejoin="miter"/>`
const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" role="img" aria-labelledby="title"><title id="title">Orris &amp; Code — looped code symbol</title>${loops()}${code}</svg>\n`
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><style>@media(prefers-color-scheme:dark){.loop{stroke:#83a5ff}}</style>${loops(6)}</svg>\n`
const touchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><rect width="72" height="72" rx="16" fill="white"/><g transform="translate(7 7) scale(.8056)">${loops(6)}</g></svg>`

await mkdir('public/images/brand', { recursive: true })
await writeFile('public/images/brand/orris-code-mark.svg', mark)
await writeFile('public/favicon.svg', favicon)
await sharp(Buffer.from(mark)).resize(512, 512).png().toFile('public/images/brand/orris-code-mark.png')
await sharp(Buffer.from(touchIcon)).resize(180, 180).png().toFile('public/images/brand/apple-touch-icon.png')
console.log('Prepared the flat logo, PNG export, favicon, and touch icon.')
