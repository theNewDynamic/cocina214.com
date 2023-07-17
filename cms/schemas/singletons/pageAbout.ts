import { defineField, defineType } from 'sanity'
import { IoMdInformationCircleOutline as icon } from 'react-icons/io'
import {body, description, hero, image, seo, slug } from '../fields'


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
    slug,
    seo,
    hero,
    description,
    image,
    body,
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