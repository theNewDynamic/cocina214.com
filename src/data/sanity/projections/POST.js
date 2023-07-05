import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";
import TAXONOMY_TERM from "./TAXONOMY_TERM";
export default groq`{
  title,
  seo,
  ...${URL},
  'section': 'News',
  image${IMAGE},
  'date': publishedAt,
  description,
  body,
  taxonomyCategories[]->${TAXONOMY_TERM},
  'bodyText': pt::text(body),
  'draft': _id in path('drafts.**')
}`