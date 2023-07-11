import { defineField, defineType } from 'sanity'
import { IoMdInformationCircleOutline as icon } from 'react-icons/io'
import {body, description, hero, image, seo, slug } from '../fields'


export default defineType({
  name: 'pageShop',
  title: 'Shop Page',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Shop',
    }),
    slug,
    seo,
    body,
    description,
    image,
    hero,
    {
      type: "array",
      name: "products",
      of: [{
        type: "reference",
        to: [{type: "product"}]
      }]
    }
  ]
})