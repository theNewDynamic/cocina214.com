import { defineField } from "sanity"

export default defineField({
  type: 'reference',
  name: 'author',
  to: [
    { type: 'person' }
  ]
})
