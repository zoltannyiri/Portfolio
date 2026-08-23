import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { getCanonicalUrl, pageMeta, SEO_ROUTES } from "../src/seo/seoConfig.js"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const distDirectory = path.resolve(scriptDirectory, "../dist")
const rootHtmlPath = path.join(distDirectory, "index.html")

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

const replaceRequired = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`Missing SEO element while generating ${label}`)
  }

  return html.replace(pattern, replacement)
}

const replaceMeta = (html, attribute, key, content, route) => {
  const pattern = new RegExp(`<meta\\s+(?=[^>]*${attribute}=["']${key}["'])[^>]*>`, "i")
  return replaceRequired(
    html,
    pattern,
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
    `${route}: ${key}`,
  )
}

const createRouteHtml = (template, route) => {
  const meta = pageMeta.hu[route]
  const canonicalUrl = getCanonicalUrl(route)
  let html = template

  html = replaceRequired(
    html,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`,
    `${route}: title`,
  )
  html = replaceMeta(html, "name", "description", meta.description, route)
  html = replaceRequired(
    html,
    /<link\s+(?=[^>]*rel=["']canonical["'])[^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `${route}: canonical`,
  )
  html = replaceMeta(html, "property", "og:title", meta.title, route)
  html = replaceMeta(html, "property", "og:description", meta.description, route)
  html = replaceMeta(html, "property", "og:url", canonicalUrl, route)
  html = replaceMeta(html, "property", "og:image:alt", meta.title, route)
  html = replaceMeta(html, "name", "twitter:title", meta.title, route)
  html = replaceMeta(html, "name", "twitter:description", meta.description, route)
  html = replaceMeta(html, "name", "twitter:image:alt", meta.title, route)

  return html
}

const template = await readFile(rootHtmlPath, "utf8")

for (const route of SEO_ROUTES) {
  const routeHtml = createRouteHtml(template, route)
  const outputPath = route === "/"
    ? rootHtmlPath
    : path.join(distDirectory, route.slice(1), "index.html")

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, routeHtml, "utf8")
}

console.log(`Generated static SEO HTML for ${SEO_ROUTES.length} routes.`)
