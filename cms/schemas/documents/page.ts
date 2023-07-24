import { defineType } from 'sanity'
import { title, seo, slug,  blocks, hero } from '../fields'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    title,
    slug,
    seo,    
    hero,
    blocks,
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
