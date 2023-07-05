import groq from "groq"

export default groq`{
  'dir': _type,
  'slug': slug.current,
  _type == "person" && "staff" in associations => {
    'dir': 'staff'
  },
  _type in ["post", "taxonomyCategory"] => {
    'dir': 'news'
  },
} {
  slug,
  'url': "/" + dir + "/" + slug
}`
