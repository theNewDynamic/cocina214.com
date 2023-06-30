import { defineField } from "sanity"

export default (list) => defineField({
  name: "associations",
  type: "array",
  of: [
    { type: "string" }
  ],
  options: {
    layout: "grid",
    list
  }
})