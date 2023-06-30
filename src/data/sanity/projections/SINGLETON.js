import groq from "groq";
import IMAGE from "./IMAGE";
import BLOCKS from "./BLOCKS";
import PAGE_ABOUT from "./PAGE_ABOUT";
export default groq`{
  title,
  seo,
  'slug': slug.current,
  _type,
  'type': _type,
  defined(image) => {
    'image': ${IMAGE}
  },
  description,
  body,
  blocks${BLOCKS},
  _type == 'pageAbout' => ${PAGE_ABOUT},
}`