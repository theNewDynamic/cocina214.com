import groq from "groq";

export default groq`{
  asset->{
    url,
    altText,
    title,
    description,
    originalFilename,
    'aspectRatio': metadata.dimensions.aspectRatio,
    'width': metadata.dimensions.width,
    'height': metadata.dimensions.height
  },
  caption,
  altText,
  hotspot,
} {
  'src': asset.url,
  'altText': coalesce(altText, asset.altText),
  'title': asset.title,
  'filename': asset.originalFilename,
  'caption': coalesce(caption, asset.description),
  'aspectRatio': asset.aspectRatio,
  'width': asset.width,
  'height': asset.height,
  defined(hotspot) => {
    'focalPoints': {
      'x': hotspot.x,
      'y': hotspot.y
    }
  }
}`