/**
 * GitHub Pages answers an unknown path with 404.html and an HTTP 404. Link
 * crawlers discard metadata on a 404, so a shared /reviews link previewed as a
 * bare hostname no matter what tags that file carried.
 *
 * Writing a real dist/<route>/index.html makes each route a 200, which also
 * lets every page carry its own title and description.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const SITE = 'https://zaddywebbuilds.github.io/EstatePros-Carpet-Cleaning'

const shell = readFileSync(join(dist, 'index.html'), 'utf8')

// Keep service routes in step with the config rather than restating them.
// shortDesc is what distinguishes a service from the process steps, which
// share the id/name shape but are not routes.
const config = readFileSync(join(root, 'src/config/business.ts'), 'utf8')
const services = [
  ...config.matchAll(/id:\s*'([a-z-]+)',\s*\n\s*name:\s*'([^']+)',\s*\n\s*shortDesc:/g),
].map((m) => ({ id: m[1], name: m[2] }))

if (services.length === 0) throw new Error('no services parsed from business.ts')

const routes = [
  {
    path: 'services',
    title: 'Services | EstatePros Carpet Cleaning Calgary',
    description:
      'Carpet, upholstery, area rug and commercial cleaning enquiries for homes and businesses across Calgary, Alberta.',
  },
  {
    path: 'about',
    title: 'Our Approach | EstatePros Carpet Cleaning Calgary',
    description:
      'How EstatePros approaches carpet care in Calgary: listening first, preparing properly, and treating every enquiry as a conversation.',
  },
  {
    path: 'gallery',
    title: 'Before & After | EstatePros Carpet Cleaning Calgary',
    description:
      'Drag through before and after comparisons showing the kind of change carpet cleaning can make. Illustrative visualizations.',
  },
  {
    path: 'reviews',
    title: 'Reviews | EstatePros Carpet Cleaning Calgary',
    description:
      'Read what Calgary homeowners and businesses say about EstatePros on our Google Business Profile.',
  },
  {
    path: 'contact',
    title: 'Contact & Quote | EstatePros Carpet Cleaning Calgary',
    description:
      'Tell us about your space and we will help you plan the next step. Serving Calgary, Alberta.',
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | EstatePros Carpet Cleaning Calgary',
    description: 'How EstatePros Carpet Cleaning handles personal information under PIPEDA.',
  },
  ...services.map((s) => ({
    path: `services/${s.id}`,
    title: `${s.name} | EstatePros Carpet Cleaning Calgary`,
    description: `${s.name} enquiries for homes and businesses across Calgary, Alberta.`,
  })),
]

const escape = (v) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const swapContent = (html, matcher, value) => {
  const re = new RegExp(`(<meta\\s+${matcher}\\s+content=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`meta not found: ${matcher}`)
  return html.replace(re, `$1${escape(value)}$2`)
}

for (const { path, title, description } of routes) {
  let html = shell
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
  html = swapContent(html, 'name="description"', description)
  html = swapContent(html, 'property="og:title"', title)
  html = swapContent(html, 'property="og:description"', description)
  html = swapContent(html, 'property="og:url"', `${SITE}/${path}`)
  html = swapContent(html, 'name="twitter:title"', title)
  html = swapContent(html, 'name="twitter:description"', description)

  const dir = join(dist, path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
}

console.log(`prerendered ${routes.length} routes:`)
for (const r of routes) console.log(`  /${r.path}`)
