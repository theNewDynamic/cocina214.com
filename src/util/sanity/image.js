
import imageUrlBuilder from '@sanity/image-url'
import { sanity } from '@data/site'
import { createClient } from '@sanity/client'
const { projectId, apiVersion, useCdn, token = false} = sanity

const client = createClient({
  projectId,
  dataset: 'production',
  useCdn, // set to `false` to bypass the edge cache
  apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
  token
})
const imageBuilder = imageUrlBuilder(client);

/**
 * Returns a Sanity Asset from the a raw asset reference.
 * @param {object} asset The asset reference {_type: image, _ref: xxxxxxx}
 * @returns An Sanity Asset that can be transformed with `.width(600)` etc...
 */
export const getSanityImage = (asset) => {
  return imageBuilder.image(asset);
}

/**
 * Returns a Sanity Image URL with optional transformation query
 * @param {string|Object} image Either a string or an object containing a `src` 
 * @param {Object=} params  The transformation to be applied to the image.
 * @returns 
 */
export const getImageURL = (image, params = {}) => {
  // https://cdn.sanity.io/images/epfbj25g/production/8e4320753b4b01984d73973ef8b8c813a684f1a6-4000x2250.jpg?w=300&fit=scale&auto=format
  let output = ''
  if(typeof image == "string") {
    return image
  }
  if(typeof image.src == "undefined" || !image.src) {
    return ''
  } else {
    output = image.src
  }
  let outputParams = new URLSearchParams({
    auto: 'format'
  })
  if(typeof params !== "undefined") {
    if(typeof params.width !== "undefined") {
      outputParams.append('w', params.width)
    }
    if(typeof params.height !== "undefined") {
      outputParams.append('h', params.height)
    }
    if(typeof params.crop !== "undefined") {
      outputParams.append('crop', params.crop)
    }
    if(typeof params.saturation !== "undefined") {
      outputParams.append('sat', params.saturation)
    }
    if(typeof params.fit !== "undefined") {
      outputParams.append('fit', params.fit)
    } else {
      outputParams.append('fit', 'scale')
    }
  }
  return output + '?' + outputParams.toString()
}