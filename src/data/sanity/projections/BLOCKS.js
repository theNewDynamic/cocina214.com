import groq from "groq";
import POST from "./POST";
import PERSON from "./PERSON";
export default groq`{
  _type == 'blocks/text'=> {
    'layout': 'text',
    title,
    copy,
    links,
  },
  _type == "blocks/posts" => {
    'layout': 'posts',
    title,
    posts[]->${POST}
  },
  _type == 'blocks/personsLists'=> {
    'layout': 'personsLists',
    title,
    lists[]{
      title,
      persons[]->${PERSON}
    }
  },
}`