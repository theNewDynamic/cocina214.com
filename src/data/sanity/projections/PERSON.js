import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";

export default groq`{
  seo,
  title,
  job_title,
  'full_name': coalesce(title, first_name, last_name),
  image${IMAGE},
  ...${URL}
}`