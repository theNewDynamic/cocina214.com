import { defineField } from 'sanity'
import { MdOutlinePinDrop as icon } from "react-icons/md"
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
  name: "blocks/location",
  type: "object",
  title: "Location",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      description: "Title is optional, will default to the location's name"
    },
    {
      name: "location",
      type: "reference",
      to: [{
        type: "location"
      }]
    },
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
      location: 'location.title'
    },
    prepare({ title, location }) {
      const subtitle = title ? title : location
      return {
        title: 'Location',
        subtitle,
        icon
      }
    }
  },
})