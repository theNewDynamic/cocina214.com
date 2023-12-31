import { defineField } from 'sanity'
import { RxSection as icon } from 'react-icons/rx'
import { image } from '../fields'

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
  name: "blocks/section",
  type: "object",
  title: "Section",
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
    },
    image,
    {
      name: 'theme',
      type: 'string',
      initialValue: 'default',
      options: {
        list: themes,
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Section',
        subtitle: title,
        icon
      }
    }
  },
})