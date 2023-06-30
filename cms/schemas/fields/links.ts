import { defineField } from "sanity";
import { url } from "../fields";
export default defineField({
  name: "links",
  title: "Links",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "copy",
          type: "string"
        },
        url,
      ]
    }
  ]
})