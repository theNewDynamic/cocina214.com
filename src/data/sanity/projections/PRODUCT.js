import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";
import PORTABLE_TEXT_BLOCK from "./PORTABLE_TEXT_BLOCK";
export default groq`{
  title,
  seo,
  ...${URL},
  images[]${IMAGE},
  'date': publishedAt,
  description,
  body[]${PORTABLE_TEXT_BLOCK},
  'bodyText': pt::text(body),
  sales_data,
}`