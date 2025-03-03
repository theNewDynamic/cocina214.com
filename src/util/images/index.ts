import sanity from '@data/sanity/config'
import { getImageURL } from "@util/sanity/image"

const getHeight = (image: any, width: number) => {
  let heightInfer = Math.round(width / image.aspectRatio)
  return heightInfer
}


type GetImageParameters = {
    /**
   * The Image object out of GROQ.
   * @type {any}
   */
  image: any; // or a more specific type if needed (e.g., URL or some image type)
  /**
   * The list of requested widths.
   * @type {number[]}
   * @example: [400, 800]
   */
  widths?: number[]; // optional array of numbers
  /**
   * The list of requested heights.
   * If the height is set, it should be set for all widths element in same order
   * @type {number[]}
   * @example: [200, 400]
   */
  heights?: number[]; // optional array of numbers
  /**
   * Should only the src be returned?
   * @type {boolean}
   * @default false
   */
  onlySrc?: boolean; // optional boolean
  /**
   * Should we use passThrough?
   * If true, will overwrite project's setting.
   * @type {boolean}
   * @default false
   */
  passThrough?: boolean; // optional boolean
  /**
   * Image transformation parameters
   */
  [key: string]: any;
};

/**
 * @param {GetImageParameters} parameters - The parameters for getting the image.
 * @returns {string|object}
 */
export const getImage = async (parameters: GetImageParameters): Promise<any> => {

  const {image, widths: rawWidths = [], heights: rawHeights = [], onlySrc = false, passThrough: doPassThroughInput = false, ...params} = parameters

  // Transformations (and potential passthrough) will only be applied if image is an object.
  const doTransform = image && typeof image != "string"

  // Retrieve rawWidths/rawHeights and turning them into init
  const widths = rawWidths.map(w => parseInt(w))
  const heights = rawHeights && rawHeights.length ? rawHeights.map(w => parseInt(w)) : []

  let main
  let sources = []
  // Bulk of logic is in transformation
  if(doTransform) {
    const inferParams = {
      ...params,
    }
    // At this points, widths should be set, even if only one entry.
    if(widths.length) {
      sources = widths.length && await Promise.all(widths.map(async (w, index) => {
        // We dynamically set the width parameter
        let setParams = {
          width: w,
        }
        // If a height counterpar is found at the same index in the heights array, we use it to set a height parameter.
        if(heights && heights.length == widths.length ){
          setParams.height = heights[index]
        }
        // Initial transformed image is the Sanity generated URL.
        let transformedSrc = getImageURL(image, {...inferParams, ...setParams})
        return {
          src: transformedSrc,
          //params: {...inferParams, ...setParams},
          // Width is know
          width: w,
          // Height is infered.
          height: setParams.height || getHeight(image, w)
        }
      }));
      // Main image is the last widths.
      main = sources[sources.length - 1]; // 5
    } else {
      // If we have no width set, inferParams do not need to have more than its defaults.
      let transformedSrc = getImageURL(image, inferParams)
      // Widtha and height are not infered but took from the sanity image object itself.
      main = {
        src: transformedSrc,
        //params: inferParams,
        width: image.width,
        height: image.height
      }
    }
  } else {
    // If the image parameter is a string, we do not perform any transformation via Sanity or other
    // but use the `image` param as `src`.
    // Width and Height should have been passed as prop to the component.
    main = {
      src: image,
      ...(widths[0]? {width: widths[0]} : {}),
      ...(heights[0]? {height: heights[0]} : {})
    }
  }

  // We can now build the object to return.
  const output = {
    src: main.src,
    ...(sources.length > 1 ? {srcset: sources.map(s => `${s.src} ${s.width}w`)} : {}),
    ...(main.width ? {width: main.width} : {}),
    ...(main.height ? {height: main.height } : {})
  }
  // If the `onlySrc` parameter is set, we return a string rather than object.
  if(onlySrc) {
    return output.src
  }
  return output
}