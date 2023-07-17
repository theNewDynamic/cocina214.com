import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";
import BLOCKS from "./BLOCKS";
export default groq`{
  title,
  seo,
  hero{
    images[]${IMAGE}
  },
  ...${URL},
  image${IMAGE},
  'date': publishedAt,
  description,
  blocks[]${BLOCKS},
}`