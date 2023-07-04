import { defineType } from 'sanity'
import { title, description, slug } from '../fields'

export default defineType({
  name: 'taxonomyCategory',
  title: 'Categories',
  type: 'document',
  fields: [
    title,
    slug,
    description
  ],
})

