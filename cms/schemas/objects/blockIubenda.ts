import { defineType } from "sanity"
export default defineType({
  name: 'blockIubenda',
  title: 'Iubenda Content',
  type: 'object',
  fields: [
    {
      title: 'API URL',
      name: "url",
      type: 'url',
      description: "Should look something like: https://www.iubenda.com/api/terms-and-conditions/97879684"
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare({ url }) {
      return {
        title: "Iubenda Content",
        subtitle: url,
      }
    }
  }
})