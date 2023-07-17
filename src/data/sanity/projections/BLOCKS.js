import groq from "groq";
import IMAGE from "./IMAGE";
import PORTABLE_TEXT_BLOCK from "./PORTABLE_TEXT_BLOCK";
export default groq`{
  'layout': _type,
  _type == 'blocks/text'=> {
    'layout': 'text',
    title,
    copy,
    links,
  },
  _type == 'blocks/section'=> {
    'layout': 'section',
    title,
    theme,
    'copy': copy[]${PORTABLE_TEXT_BLOCK},
    image${IMAGE}
  },
}`