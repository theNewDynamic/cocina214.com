import { defineType, defineField } from "sanity";
import description from "./description";

export default defineType({
  title: "SEO",
  name: 'seo',
  description: 'These fields allow you to override page elements for the benefit of Search engine meta data',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField(
      {
        name: "title",
        type: "string"
      }
    ),
    defineField(
      {
        name: "image",
        type: "image"
      }
    ),
    description,
    defineField(
      {
        name: "canonical",
        type: "string"
      }
    ),
    defineField(
      {
        name: "private",
        type: "boolean",
        description: "If toggled ON, this entry will not be indexed by search engines."
      }
    )
  ]
})