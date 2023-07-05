import groq from "groq";
import URL from "./URL";
export default groq`{
  title,
  _id,
  ...${URL},
}`