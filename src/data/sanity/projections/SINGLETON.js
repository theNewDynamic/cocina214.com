import groq from "groq";
import IMAGE from "./IMAGE";
import BLOCKS from "./BLOCKS";
import PAGE_ABOUT from "./PAGE_ABOUT";
import URL from "./URL";
import BASE from "./BASE";
export default groq`{
  ...${BASE},
  title,
  seo,
  ...${URL},
  _type,
  hero{
    images[]${IMAGE}
  },
  'type': _type,
  image${IMAGE},
  description,
  body,
  blocks[]${BLOCKS},
  _type == 'pageAbout' => ${PAGE_ABOUT},
  _type == 'home' => {
    'home': true
  }
}`