import { defineField } from "sanity"
import { image } from "../fields"

const themes = [
  {
    value: 'default',
    title: 'Default',
  },
  {
    value: 'teal',
    title: 'Teal',
  },
  {
    value: 'green',
    title: 'Green',
  },
  {
    value: 'purple',
    title: 'Purple',
  },
  {
    value: 'pink',
    title: 'Pink',
  },
]

export default defineField({
  name: "blocks/entries",
  type: "object",
  title: "Posts",
  fields: [
    {
      name: "title",
      type: 'string',
    },
    image,
    {
      name: 'theme',
      type: 'string',
      initialValue: 'default',
      options: {
        list: themes,
      }
    },
    {
      name: 'entries',
      title: 'Entries to display',
      type: 'array',
      of: [
        { type: 'reference', 
        to: 
          [
            { type: 'post' },
            { type: 'notice' }
          ]
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Announcements',
        subtitle: title,
      }
    }
  }
})