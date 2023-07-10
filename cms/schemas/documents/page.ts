import { defineType } from 'sanity'
import { title, body, description, seo, slug, gallery, blocks, hero } from '../fields'

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
    blocks,
    body,
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
