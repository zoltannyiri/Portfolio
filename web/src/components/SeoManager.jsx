import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useLanguage } from "../i18n/LanguageContext"
import { getCanonicalUrl, pageMeta } from "../seo/seoConfig"

const updateMeta = (selector, content) => {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute("content", content)
}

const SeoManager = () => {
  const { pathname } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const normalizedPath = pathname === "/home" ? "/" : pathname
    const languageMeta = pageMeta[language] || pageMeta.hu
    const meta = languageMeta[normalizedPath] || languageMeta["/"]
    const canonicalUrl = getCanonicalUrl(normalizedPath)

    document.title = meta.title
    updateMeta('meta[name="description"]', meta.description)
    updateMeta('meta[property="og:title"]', meta.title)
    updateMeta('meta[property="og:description"]', meta.description)
    updateMeta('meta[property="og:url"]', canonicalUrl)
    updateMeta('meta[property="og:locale"]', language === "en" ? "en_US" : "hu_HU")
    updateMeta('meta[name="twitter:title"]', meta.title)
    updateMeta('meta[name="twitter:description"]', meta.description)
    updateMeta('meta[property="og:image:alt"]', meta.title)
    updateMeta('meta[name="twitter:image:alt"]', meta.title)

    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute("href", canonicalUrl)
  }, [language, pathname])

  return null
}

export default SeoManager
