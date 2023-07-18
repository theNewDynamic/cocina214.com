import groq from "groq"
import IMAGE from "./IMAGE"
import LOCATION from "./LOCATION"
export default groq`{
  _type == 'blockFiles' => {
    _type,
    _key,
    files[]{
      'copy': title,
      'url': file.asset->url
      
    }
  },
  _type == 'blockLinks' => {
    _type,
    _key,
    links[]{
      copy,
      url,
      
    }
  },
  _type == 'blockLocation' => {
    _type,
    _key,
    location->${LOCATION}
  },
  _type == 'image' => {
    _type,
    _key,
    defined(asset) => {
      'image': {
        ...${IMAGE},
        display
      }
    }
  },
  !(_type in ['blockFiles', 'image', 'blockLinks', 'blockLocation']) => {...}
}`