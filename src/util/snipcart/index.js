import { getImageURL } from '@util/sanity/image'
import { getExcerpt } from '@util/helpers'
const convertOuncesToGrams = (ounces) => {
  return ounces * 28.3495;
}

const prefixObjectKeys = (object, prefix) => {
  const output = {}
  for (const key in object) {
    output[prefix + key] = object[key]
  }
  return output
}

export const getData = ({ title, url, id = null, image, bodyText, categories, sales_data}) => {
  const { shipping_weight, price, sku } = sales_data
  const description = bodyText ? getExcerpt(bodyText) : false
  return prefixObjectKeys({
    name: title,
    url,
    categories,
    id: sku,
    image: image ? getImageURL(image) : false,
    price,
    weight: shipping_weight ? shipping_weight : 300,
    description,
    //taxes: ["TAX-001"]
  }, 'data-item-') 
}