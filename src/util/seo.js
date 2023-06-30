
import site from "@data/site.js"
import { getImageURL }  from "@util/sanity/image";
const config = {
  ...site,
  ...site.seo
}

const escapeString = (string) => {
  if(string) {
    return string.replace('"', '&quot;')
  }
}

const getConfig = (key) => {
  if(key in config){
    return config[key]
  } else {
    return false
  }
}
const absURL = (url) => {
  if(typeof url !== "undefined"){
    return false
  }
  const separator = url.charAt(0) != "/" ? "/" : ""
  const { url: baseURL } = site
  return baseURL + separator + url
}

const isHome = (entry) => {
  return typeof entry.home !== "undefined" && entry.home
}

const getSEOData = (entry) => {
  const baseURL = site.url
  let url = '/'
  if(typeof entry.url !== "undefined" && entry.url){
    url = absURL(entry.url)
  }
  let description = config.description
  let site_name = getConfig('site_name')
  let title = "Missing"
  if(typeof entry.title != "undefined" && entry.title) {
    title = entry.title
  }
  if(entry.type == 'lessonPlan') {
    title = 'Lesson Plan: ' + title
  }
  title = title.replace(/"/g, `\"`);

  let default_image = site.url + getConfig('default_image')
  let image = entry.image ? entry.image : default_image
  if(typeof image !== "string" && image.src){
    image = image = getImageURL(image, {width: 1000})
  }
  let twitter_card = "summary_large_image"
  let twitter_handle = '@' + getConfig('twitter_handle').toLowerCase()
  let twitter_author = '@' + getConfig('twitter_handle').toLowerCase()
  let is_private = !site.prod()
  let type = "website"
  let locale = "en"
  let canonical = url
  if(typeof entry.locale !== "undefined") {
    locale = entry.locale
  }
  const localeAlternate = entry.localeAlternate ? entry.localeAlternate : []

  if(typeof entry.descriptionText !== "undefined") {
    description = entry.descriptionText
  }
  if(isHome(entry)){
    title = site.title
  }

  let seo_params = {}
  if(typeof entry.seo == "object" && entry.seo) {
    seo_params = entry.seo
    if(typeof seo_params.description !== "undefined" && seo_params.description) {
      description = seo_params.description
    }
    if(typeof seo_params.canonical !== "undefined" && seo_params.canonical) {
      canonical = seo_params.canonical
    }
    if(typeof seo_params.title !== "undefined" && seo_params.title) {
      title = seo_params.title
    }
  }
  title = escapeString(title)
  description = escapeString(description)

  if(entry.type == "job") {
    title = `${title} - Jobs`
  }

  let og_title = title
  let date = typeof entry.date != "undefined" ? entry.date : false 

  if(getConfig('site_name') && !isHome(entry)){
    title = `${title} | ${site_name}`;
  }

  if(entry.private) {
    is_private = true
  }

  let article = {}

  if(entry.type == "news") {
    article = {
      publishedTime: date,
      tags: typeof entry.categories !== "undefined" ? entry.categories : []
    }
  }
  return {
    title,
    description,
    canonical,
    noindex: is_private,
    nofollow: is_private,
    openGraph: {
      basic: {
        title: og_title,
        type,
        image,
        url,
      },
      optional: {
        locale,
        localeAlternate,
        description,
      },
      image: {
        alt: "Alt Image"
      },
      article
    },
    twitter: {
      description,
      card: twitter_card,
      site: twitter_handle,
      creator: twitter_handle

    }
  }
}

export { getSEOData }