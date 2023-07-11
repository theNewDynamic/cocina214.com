import { defineField } from "sanity"
import image from '../fields/image'

export default defineField({
  type: 'object',
  name: 'hero',
  title: 'Hero',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      type: "array",
      name: "images",
      options: {
        layout: "grid",
      },
      of: [
        image
      ]
    },
  ]
})