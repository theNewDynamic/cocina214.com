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
    reference('taxonomySection', {
      title: 'Section',
    }),
    hero,
    body,
    gallery,
  ],
  preview: {
    select: {
      section: 'taxonomySection.title',
      title: 'title',
    },
    prepare({ title, section }) {
      return {
        title,
        subtitle: section,
      }
    },
  },
})
