import { defineField } from 'sanity'
import { IoTextOutline } from 'react-icons/io5'


export default defineField({
  name: "blocks/text",
  type: "object",
  title: "Text",
  icon: IoTextOutline,
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
    },
    prepare({ title }) {
      return {
        title: 'Text',
        subtitle: title,
        icon: IoTextOutline
      }
    }
  },
})