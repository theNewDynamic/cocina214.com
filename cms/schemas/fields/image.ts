import { defineField } from "sanity"

export default defineField({
  type: 'image',
  name: 'image',
  title: 'Image',
  options: {
    hotspot: true,
    metadata: [
      'exif'
    ],
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Attribution/Description',
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'altText',
      type: 'string',
      description: "Only shows for screen readers. It's important for accessibility!",
      title: 'AltText',
    }
  ]
})