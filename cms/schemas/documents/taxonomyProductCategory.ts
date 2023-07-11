import { defineType } from 'sanity'
import { title, description, slug } from '../fields'

export default defineType({
  name: 'taxonomyProductCategory',
  title: 'Shop Categories',
  type: 'document',
  fields: [
    title,
    slug,
    description
  ],
})

