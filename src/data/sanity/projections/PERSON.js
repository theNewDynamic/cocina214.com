import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";

export default groq`{
  'slug': slug.current,
  seo,
  title,
  image${IMAGE},
  'full_name': title,
  ...${URL}
}`