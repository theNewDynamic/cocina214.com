import { defineField } from 'sanity'
import { FaWpforms as icon } from "react-icons/fa"

export default defineField({
  name: "blocks/form",
  type: "object",
  title: "Form",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      description: "Title is optional"
    },
    {
      name: "copy",
      title: "Copy",
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location.title'
    },
    prepare({ title }) {
      return {
        title: 'Form',
        subtitle: title,
        icon
      }
    }
  },
})