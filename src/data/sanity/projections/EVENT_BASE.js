import groq from "groq";
import URL from "./URL";
import BASE from "./BASE";
export default groq`{
  ...${BASE},
  title,
  time_start,
  ...${URL},
}`