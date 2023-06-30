import groq from "groq";
import PERSON from "./PERSON";
export default groq`{
  persons[]->{
    ...${PERSON},
    description,
  }
}`