import { defineField, defineType } from 'sanity'
import { IoHomeOutline } from 'react-icons/io5'
import { blocks, body, description, hero, image, seo } from '../fields'


export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: IoHomeOutline,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Home',
    }),
    seo,
    body,
    description,
    image,
    hero,
    blocks
  ]
})