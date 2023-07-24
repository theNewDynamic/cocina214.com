import { defineField, defineType } from 'sanity'
import { IoMdInformationCircleOutline as icon } from 'react-icons/io'
import {body, hero, seo, slug } from '../fields'


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
    body,
    {
      type: "array",
      name: "persons",
      title: "Staff",
      description: "The first two staff members will be displayed next to the page body, and the rest below.",
      of: [{
        type: "reference",
        to: [{type: "person"}]
      }]
    }
  ]
})