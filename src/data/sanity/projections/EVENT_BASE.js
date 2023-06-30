import groq from "groq";
import URL from "./URL";
export default groq`{
  title,
  time_start,
  ...${URL},
}`