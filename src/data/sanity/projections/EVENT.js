import groq from "groq";
import URL from "./URL";
export default groq`{
  title,
  'type': _type,
  time_start,
  seo,
  ...${URL},
  body,
  'section': 'Event',
  reception,
  venue->{
    title,
  },
  related->{
    title,
    ...${URL},
  }
}`