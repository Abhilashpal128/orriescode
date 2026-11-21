import { chromium } from '@playwright/test'
import { mkdir, writeFile } from 'node:fs/promises'
import AxeBuilder from '@axe-core/playwright'

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' })
const page = await context.newPage()
await mkdir('.preview', { recursive: true })
await page.goto('http://127.0.0.1:5173/')
await page.evaluate(async () => {
  await document.fonts.ready
  await Promise.all(Array.from(document.images).map(image => { image.loading = 'eager'; return image.decode() }))
})
await page.screenshot({ path: '.preview/desktop.png', fullPage: true })
await page.screenshot({ path: '.preview/hero-desktop.png' })
await page.locator('#work').screenshot({ path: '.preview/work-desktop.png' })
const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
await writeFile('.preview/accessibility.json', JSON.stringify(accessibility.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })), null, 2))
for (const width of [320, 390, 768, 1024]) {
  await page.setViewportSize({ width, height: 844 })
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
  await page.evaluate(() => window.scrollTo(0, 0))
  const overflow = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, elements: [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && (r.right > innerWidth + 1 || r.left < -1) && !e.closest('.project-visual') && !e.matches('.contact-orbit, .service-watermark') }).map(e => ({ tag: e.tagName, class: e.className, right: e.getBoundingClientRect().right, left: e.getBoundingClientRect().left })) }))
  console.log(JSON.stringify(overflow))
  if (width === 390) await page.screenshot({ path: '.preview/mobile.png', fullPage: true })
}
await browser.close()
