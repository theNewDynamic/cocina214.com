import { defineField, defineType } from 'sanity'
import { IoMdInformationCircleOutline as icon } from 'react-icons/io'
import {body, description, image, seo } from '../fields'


export default defineType({
  name: 'pageAbout',
  title: 'About',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'About',
    }),
    seo,
    body,
    description,
    image,
    {
      type: "array",
      name: "persons",
      description: "Two first persons will be displayed next to the page body, rest below.",
      of: [{
        type: "reference",
        to: [{type: "person"}]
      }]
    }
  ]
})