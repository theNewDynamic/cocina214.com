import groq from "groq";
import URL from "./URL";
import PORTABLE_TEXT_BLOCK from "./PORTABLE_TEXT_BLOCK";
export default groq`{
  title,
  'type': _type,
  time_start,
  seo,
  ...${URL},
  body[]${PORTABLE_TEXT_BLOCK},
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