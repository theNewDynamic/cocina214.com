import groq from "groq";
import IMAGE from "./IMAGE";
import BLOCKS from "./BLOCKS";
import PAGE_ABOUT from "./PAGE_ABOUT";
import URL from "./URL";
export default groq`{
  title,
  seo,
  ...${URL},
  _type,
  hero{
    images[]${IMAGE}
  },
  'type': _type,
  defined(image) => {
    'image': ${IMAGE}
  },
  description,
  body,
  blocks[]${BLOCKS},
  _type == 'pageAbout' => ${PAGE_ABOUT},
}`