import groq from "groq";
import PORTABLE_TEXT_BLOCK from "./PORTABLE_TEXT_BLOCK";
export default groq`{
  title,
  'date': publishedAt,  
  'description': coalesce(body[]${PORTABLE_TEXT_BLOCK}, description),
  body[]${PORTABLE_TEXT_BLOCK},
  'bodyText': pt::text(body),
  'draft': _id in path('drafts.**'),  
  links[]{
    copy,
    url,
    'file': file.asset->url
  }
}`
