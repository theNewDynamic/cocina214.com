import { defineType } from "sanity"
import { FaMailchimp } from 'react-icons/fa'
export default defineType({
  name: 'blockMailchimp',
  title: 'Mailchimp Form',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: "Title",
      type: 'string'
    },
    {
      name: 'audience_id',
      title: "Audience ID",
      type: 'string'
    },
  ],
  preview: {
    select: {
      audience_id: 'audience_id',
    },
    prepare({ audience_id }) {
      return {
        title: "Mailchimp Form",
        subtitle: audience_id,
        media: FaMailchimp,
      }
    }
  }
})