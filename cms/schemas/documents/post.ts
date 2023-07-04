import { defineType } from 'sanity'
import { title, seo, slug, date, description, image, gallery, references } from '../fields'
import { defaultOrdering as orderings } from '../orderings'
import { IoDocumentTextOutline as icon } from 'react-icons/io5'

export default defineType({
  name: 'post',
  title: 'News',
  icon,
  type: 'document',
  orderings,
  fields: [
    title,
    slug,
    seo,
    image,
    date,
    description,
    references('taxonomyCategory', {name: 'taxonomyCategories'}),
    {
      name: 'additional_info',
      title: 'Additional info',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    gallery,
  ],

  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',

    },
    prepare({ title, date }) {
      const pubDate = date ? "Published: " + date.split('T')[0] : ""

      return {
        title: title,
        subtitle: pubDate,
        icon,
      }
    },
  },
})
