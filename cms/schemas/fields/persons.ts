import { defineField } from "sanity"

export default defineField({
  name: 'persons',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        { type: 'person' }
      ]
    }
  ]
})
