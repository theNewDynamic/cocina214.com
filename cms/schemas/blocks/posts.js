import { defineField } from "sanity"

export default defineField({
  name: "blocks/posts",
  type: "object",
  title: "Posts",
  fields: [
    {
      name: "title",
      type: 'string',
    },
    {
      name: 'posts',
      title: 'Posts to display',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Articles',
      }
    }
  }
})