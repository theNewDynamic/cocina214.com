import groq from "groq";
import BASE from "./BASE";
export default groq`{
  ...${BASE},
  title,
  address_1,
  city,
  state,
  zip,
  phone,
  email,
  google_map_url,
  hours,
  coordinates,
}`