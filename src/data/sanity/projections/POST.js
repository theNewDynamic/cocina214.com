import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";
import TAXONOMY_TERM from "./TAXONOMY_TERM";
import PORTABLE_TEXT_BLOCK from "./PORTABLE_TEXT_BLOCK";
export default groq`{
  title,
  seo,
  ...${URL},
  'section': 'News',
  image${IMAGE},
  'date': publishedAt,
  description,
  body[]${PORTABLE_TEXT_BLOCK},
  taxonomyCategories[]->${TAXONOMY_TERM},
  'bodyText': pt::text(body),
  'draft': _id in path('drafts.**')
}`