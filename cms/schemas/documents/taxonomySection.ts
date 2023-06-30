import { defineType } from 'sanity'
import { title, description, slug } from '../fields'

export default defineType({
  name: 'taxonomySection',
  title: 'Sections',
  type: 'document',
  fields: [
    title,
    slug,
    description
  ],
})

