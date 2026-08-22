import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useLanguage } from "../i18n/LanguageContext"

const SITE_URL = "https://zoltannyiri.hu"

const pageMeta = {
  hu: {
    "/": {
      title: "Nyiri Zoltán | Web- és mobilalkalmazás-fejlesztő",
      description: "Nyiri Zoltán web- és mobilalkalmazás-fejlesztő portfóliója. Egyedi digitális megoldások az ötlettől a működő termékig.",
    },
    "/about": {
      title: "Rólam | Nyiri Zoltán",
      description: "Ismerd meg Nyiri Zoltán web- és mobilalkalmazás-fejlesztő szakmai hátterét, tanulmányait és fejlesztői szemléletét.",
    },
    "/projects": {
      title: "Projektjeim | Nyiri Zoltán",
      description: "React, React Native, Angular és Node.js technológiákkal készült webes és mobilalkalmazás-projektek.",
    },
    "/resume": {
      title: "Önéletrajz | Nyiri Zoltán",
      description: "Nyiri Zoltán végzettségei, tanúsítványai és web- valamint mobilalkalmazás-fejlesztői tapasztalatai.",
    },
    "/prices": {
      title: "Együttműködés | Nyiri Zoltán",
      description: "Óradíjas és projektalapú együttműködési lehetőségek weboldalak és mobilalkalmazások tervezésére és fejlesztésére.",
    },
    "/contact": {
      title: "Kapcsolat | Nyiri Zoltán",
      description: "Vedd fel a kapcsolatot Nyiri Zoltánnal weboldal-, mobilalkalmazás- vagy egyedi szoftverfejlesztési együttműködéshez.",
    },
  },
  en: {
    "/": {
      title: "Nyiri Zoltán | Web & Mobile Application Developer",
      description: "The portfolio of web and mobile application developer Zoltán Nyiri. Custom digital solutions from idea to working product.",
    },
    "/about": {
      title: "About | Nyiri Zoltán",
      description: "Learn about Zoltán Nyiri's professional background, education, and approach to web and mobile application development.",
    },
    "/projects": {
      title: "Projects | Nyiri Zoltán",
      description: "Web and mobile application projects built with React, React Native, Angular, and Node.js.",
    },
    "/resume": {
      title: "Resume | Nyiri Zoltán",
      description: "Zoltán Nyiri's education, certificates, and professional experience in web and mobile application development.",
    },
    "/prices": {
      title: "Collaboration | Nyiri Zoltán",
      description: "Hourly and project-based collaboration for designing and developing websites and mobile applications.",
    },
    "/contact": {
      title: "Contact | Nyiri Zoltán",
      description: "Contact Zoltán Nyiri about website, mobile application, or custom software development projects.",
    },
  },
}

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
    const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`

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
