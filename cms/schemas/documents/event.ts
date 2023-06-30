import { defineField, defineType } from 'sanity'
import { title, description, body, seo, slug, image, references, reference } from '../fields'
import { eventOrdering as orderings } from '../orderings'
import { IoDocumentsOutline as icon } from 'react-icons/io5'


export default defineType({
  name: 'event',
  title: 'Event',
  icon,
  orderings,
  type: 'document',
  fieldsets: [
    {
      name: "time",
      title: "When",
      options: { columns: 2 },
    }
  ],
  fields: [
    {
      ...title,
      description: 'put an *asterisk* around words you want italicized.'
    },
    slug,
    defineField({
      name: "time_start",
      type: "datetime",
      title: "Event Start",
      fieldset: "time",
    }),
    defineField({
      name: "time_end",
      type: "datetime",
      title: "Event End",
      fieldset: "time",
    }),
    defineField({
      name: 'hide_time',
      title: 'Hide Event Time?',
      description: "If checked, the time of the event will be hidden.",
      type: 'boolean',
      fieldset: "time",
    }),
    seo,
    description,
    body,
    defineField({
      name: "link",
      title: "Link",
      type: "url"
    }),
    image,
    reference('venue'),
    {
      name: "reception",
      type: "boolean",
      title: "Reception will follow",
    },
    references(['person']),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'time_start',
      venue: 'venue.title'

    },
    prepare({ title, date, venue }) {
      const previewTitle = [title, venue ? "at " + venue : ""]
      const startDate = "On: " + date.split('T')[0]
      return {
        title: previewTitle.join(' '),
        subtitle: startDate,        
      }
    },
  },
})
