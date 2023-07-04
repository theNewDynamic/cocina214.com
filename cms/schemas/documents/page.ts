import { defineType } from 'sanity'
import { title, body, description, seo, slug, reference, gallery, hero } from '../fields'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    title,
    slug,
    seo,
    description,
    hero,
    body,
    gallery,
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title
      }
    },
  },
})
