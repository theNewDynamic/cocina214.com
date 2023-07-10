import { defineType } from 'sanity'
import { title, seo, slug, date, description, image, gallery, references, url, file } from '../fields'
import { defaultOrdering as orderings } from '../orderings'
import { TfiAnnouncement as icon } from "react-icons/tfi"

export default defineType({
  name: 'notice',
  title: 'Notices',
  icon,
  type: 'document',
  orderings,
  fields: [
    title,
    date,
    description,
    {
      type: "array",
      name: "links",
      of: [
        {
          type: "object",
          name: "linkUrl",
          title: "URL",
          fields: [
            {
              name: 'copy',
              type: 'string',
            },
            url,
          ]
        },
        {
          type: "object",
          name: "linkFile",
          title: "File",
          fields: [
            {
              name: 'copy',
              type: 'string',
            },
            file,
          ]
        },
      ]
    }
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
