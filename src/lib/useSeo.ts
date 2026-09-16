import { useEffect } from 'react'

const SITE_NAME = 'СОКОЛ — группа компаний'
const SITE_ORIGIN = 'https://krasilnikow.github.io'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

interface SeoOptions {
  /** Page title. Rendered as "<title> — СОКОЛ — группа компаний". Pass nothing for the homepage. */
  title?: string
  description: string
  noindex?: boolean
}

/** Sets document title, meta description, canonical link and Open Graph/Twitter
 *  tags for the current route. Call once at the top of each page component. */
export function useSeo({ title, description, noindex }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)

    const canonicalUrl = SITE_ORIGIN + window.location.pathname
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
    setMeta('property', 'og:url', canonicalUrl)

    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, noindex])
}
