import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";
import BASE from "./BASE";

export default groq`{
  ...${BASE},
  seo,
  title,
  job_title,
  'full_name': coalesce(title, first_name, last_name),
  image${IMAGE},
  ...${URL}
}`