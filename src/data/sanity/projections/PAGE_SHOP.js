import groq from "groq";
import PERSON from "./PERSON";
import IMAGE from "./IMAGE";
import URL from "./URL";
export default groq`{
 'entries': products[]->{
  title,
  ...${URL},
  images[]${IMAGE}
 }
}`