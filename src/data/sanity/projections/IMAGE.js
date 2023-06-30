import groq from "groq";

export default groq`{  
  asset->{
    url, 
    altText,
    title,
    description,
    'aspectRatio': metadata.dimensions.aspectRatio
  },
  caption,
  altText,
} {
  'src': asset.url,
  'altText': asset.altText,
  'title': asset.title,
  'caption': coalesce(caption, asset.description),
  aspectRatio
}`