import { sanityClient } from './sanity'

export interface HomepageData {
  heroSubtitle: string
  heroTitle: string
  heroDescription: string
  marqueeItems: string[]
  servicesLabel: string
  servicesTitle: string
  services: { num: string; title: string; text: string }[]
  stats: { value: number; suffix: string; label: string }[]
  aboutLabel: string
  aboutHeading: string
  aboutParagraphs: string[]
  aboutQuote: string
  aboutEstablished: string
  contactLabel: string
  contactHeading: string
  contactDescription: string
  footerTagline: string
  footerEmail: string
  footerPhone: string
}

const homepageQuery = `*[_type == "homepage" && _id == "homepage"][0]{
  heroSubtitle,
  heroTitle,
  heroDescription,
  marqueeItems,
  servicesLabel,
  servicesTitle,
  services[]{ num, title, text },
  stats[]{ value, suffix, label },
  aboutLabel,
  aboutHeading,
  aboutParagraphs,
  aboutQuote,
  aboutEstablished,
  contactLabel,
  contactHeading,
  contactDescription,
  footerTagline,
  footerEmail,
  footerPhone
}`

export async function getHomepageData(): Promise<HomepageData | null> {
  return sanityClient.fetch(homepageQuery, {}, { next: { revalidate: 60 } })
}
