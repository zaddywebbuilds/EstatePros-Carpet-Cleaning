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
const SITE = 'https://zaddywebbuilds.github.io/Jose-Cardoso-Cleaning-Service'

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
    title: 'Services | Jose Cardoso Cleaning Service',
    description:
      'Carpet, upholstery, area rug and commercial cleaning enquiries for homes and businesses across North York, Ontario.',
  },
  {
    path: 'about',
    title: 'Our Approach | Jose Cardoso Cleaning Service',
    description:
      'How Jose Cardoso Cleaning Service approaches carpet care in North York: listening first, preparing properly, and treating every enquiry as a conversation.',
  },
  {
    path: 'gallery',
    title: 'Before & After | Jose Cardoso Cleaning Service',
    description:
      'Drag through before and after comparisons showing the kind of change a proper clean makes. Illustrative visualizations.',
  },
  {
    path: 'reviews',
    title: 'Reviews | Jose Cardoso Cleaning Service',
    description:
      'Rated 5.0 on Google. Read what North York customers say about Jose Cardoso Cleaning Service, quoted as written.',
  },
  {
    path: 'contact',
    title: 'Contact & Quote | Jose Cardoso Cleaning Service',
    description:
      'Call (438) 922-6861 or send an enquiry. Jose Cardoso Cleaning Service, 991 Caledonia Rd, North York, Monday to Friday 8am to 5pm.',
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Jose Cardoso Cleaning Service',
    description: 'How Jose Cardoso Cleaning Service handles personal information under PIPEDA.',
  },
  ...services.map((s) => ({
    path: `services/${s.id}`,
    title: `${s.name} | Jose Cardoso Cleaning Service`,
    description: `${s.name} for homes and businesses across North York and Toronto. Call (438) 922-6861 for a quote.`,
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
