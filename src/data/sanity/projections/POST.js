import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";
export default groq`{
  title,
  seo,
  ...${URL},
  'section': 'News',
  image${IMAGE},
  'date': publishedAt,
  description,
  body,
  'bodyText': pt::text(body),
  'draft': _id in path('drafts.**')
}`