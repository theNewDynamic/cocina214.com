import { getImageURL } from "@util/sanity/image";
import { getExcerpt } from "@util/helpers";
import { isHome, absUrl, escapeString } from "."
import getCustomData from "./getCustomData";
import { getSettings } from "@data/site.js";
const site = await getSettings()
/**
 * Retrieves and processes data for a given entry to format for SEO and metadata purposes.
 * @param {Object} entry - The entry object containing data to be processed.
 * @returns {Object} - Formatted data including metadata for SEO.
 * @property {string} _type - The type of the entry as stored in Sanity.
 * @property {string} title - The title of the entry, possibly combined with the site title.
 * @property {string} publishedTime - The published time of the entry.
 * @property {string} modifiedTime - The last modified time of the entry.
 * @property {Array<Object>} authors - An array of objects representing authors of the entry, each containing a name and URL.
 * @property {string} description - The description of the entry.
 * @property {string} canonical - The canonical URL of the entry.
 * @property {boolean} noindex - Indicates whether the entry should be indexed by search engines.
 * @property {boolean} nofollow - Indicates whether links within the entry should be followed by search engines.
 * @property {string} charset - The character encoding of the entry.
 * @property {string} ogTitle - The Open Graph title of the entry.
 * @property {string} type - The type of the entry, "article" or "website" etc..
 * @property {string} image - The URL of the image associated with the entry.
 * @property {string} imageAlt - The alternative text for the image associated with the entry.
 * @property {string} url - The URL of the entry.
 * @property {string} locale - The locale of the entry, defaults to 'en_US'.
 * @property {Array<string>} localeAlternate - An array of alternate locales for the entry.
 * @property {Array<Object>} languageAlternates - An array of objects representing alternate languages for the entry, each containing a href and hrefLang.
 * @property {string} siteTitle - The title of the website.
 * @property {string} twitterCard - The type of Twitter card to be used for the entry.
 * @property {string} twitterHandle - The Twitter handle associated with the entry.
 * @property {string} twitterCreatorHandle - The Twitter handle of the creator of the entry.
 * @property {string} venue - The venue associated with the entry (specific to events).
 * @property {string} timeStart - The start time of the event (specific to events).
 * @property {string} timeEnd - The end time of the event (specific to events).
 */
const getData = (entry) => {
  const baseURL = site.url
  const { title: siteTitle, description: siteDescription, image: siteImage, seo: {title: seoSiteTitle = site.title, twitterHandle: siteTwitterHandle } = {} } = site
  let {
    title = "Missing",
    type = "website",
    _type,
    _updatedAt,
    time_start,
    time_end,
    venue,
    date,
    url,
    description,
    descriptionText,
    locale = 'en_US',
    image,
    authors = [],
    bodyText,
    translation,
    twitterCard = "summary_large_image",
    twitterHandle = siteTwitterHandle,
    twitterCreatorHandle = siteTwitterHandle,
  } = entry

  const seo = entry.seo || {}

  const {
    title: seoTitle,
    description: seoDescription,
    image: seoImage,
    canonical: seoCanonical,
    private: seoPrivate = false,
  } = seo

  image = seoImage || image || siteImage

  type = _type == "post" ? "article" : "website"

  url = url && absUrl(url)

  const isPrivate = seoPrivate || !site.prod()

  const canonical = seoCanonical || url

  let imageAlt = ''

  title = seoTitle ? seoTitle :
          title ? escapeString(title) :
          siteTitle


  description = seoDescription ? seoDescription :
                descriptionText ? escapeString(descriptionText) :
                description && typeof description == "string" ? escapeString(description) :
                bodyText ? getExcerpt(bodyText, 300) :
                siteDescription

  let ogTitle = title

  if(siteTitle && !isHome(entry)) {
    title = `${title} | ${siteTitle}`
  } else if(isHome(entry)){
    title = site.title
    ogTitle = site.title
  }

  if(image && typeof image != "string") {
    // Before overwriting image with its SRC, we look for an alternative text.
    imageAlt = image && image.altText ? image.altText : imageAlt
    image = getImageURL(image, {width: 1000})
  } else if(image) {
    image = baseURL + image
  }

  const languageAlternates = translation && [{
    href: translation.url,
    hrefLang: translation.lang
  }]
  const localeAlternate = translation && [translation.lang]

  let output = {
    _type,
    title,
    publishedTime: date,
    modifiedTime: _updatedAt,
    authors: (authors && authors.length) ? authors.map(a => ({name: a.title, url: absUrl(a.url)})) : [],
    description,
    canonical,
    noindex: isPrivate,
    nofollow: isPrivate,
    charset: 'UTF-8',
    ogTitle,
    type,
    image,
    imageAlt,
    url,
    locale,
    localeAlternate,
    languageAlternates,
    siteTitle,
    twitterCard,
    twitterHandle,
    twitterCreatorHandle,
    // For Events
    venue,
    timeStart: time_start,
    timeEnd: time_end,
  }

  output = {
    ...output,
    ...getCustomData(entry)
  }
  return output
}

export default getData