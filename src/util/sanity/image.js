
/**
 * Returns a Sanity Image URL with optional transformation query
 * @param {string|Object} image Either a string or an object containing a `src`
 * @param {Object} params The transformation to be applied to the image.
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
  // If dl param is set (dowload instead of server using dl value as filename),
  // we skip the formating and simply return {url}?dl={dl}
  if(typeof params !== "undefined" && typeof params.dl !== "undefined" && params.dl) {
    return output + '?dl=' + params.dl
  }

  // We have an overwritable default
  let outputParams = {
    //dpr: 2,
  }

  if(params && !params.fm) {
    outputParams.auto = 'format'
  }

  if(params.height) {
    outputParams.crop = 'entropy'
    outputParams.fit = 'crop'
  }

  if(params) {
    for (const [key, value] of Object.entries(params)) {
      if(key == "width"){
        if(value != "auto") {
          outputParams.w = value
        }
      } else if(key == "height") {
        outputParams.h =value
      } else if(key == "saturation") {
          outputParams.sat = value
      } else if(key == "crop") {
        outputParams.crop = value
        if(value == "focalpoint" && image.focalPoints) {
          outputParams['fp-x'] = image.focalPoints.x
          outputParams['fp-y'] = image.focalPoints.y
        }
      } else {
        outputParams[key] = value
      }
    }
  }
  const queryParams = new URLSearchParams(outputParams)
  return output + '?' + queryParams.toString()
}
