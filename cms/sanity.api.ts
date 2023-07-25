export const projectId: string = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset: string = process.env.SANITY_STUDIO_DATASET!
export const projectTitle: string = process.env.SANITY_STUDIO_PROJECT_TITLE!
// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion: string = process.env.SANITY_STUDIO_API_VERSION || '2022-11-15'

export const useCdn =
  typeof document !== 'undefined' && process.env.NODE_ENV === 'production'

// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId: `${string}.${string}` = 'preview.secret'


export const includePreview = [
  "event",  
  'media',
  'pageAbout',
  "post",
  "pageChairs",
  "home",
  "page",
]


export const productionDomain = "https://www.cocina214.com"
export const previewHash = "77ce18c3317165749f0dc37b42cb251f"
export const domain = process.env.NODE_ENV == "development" ? "http://localhost:3000" : productionDomain
