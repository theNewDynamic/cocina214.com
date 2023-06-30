import { defineField } from "sanity"

export default defineField({
  name: 'publishedAt',
  title: 'Date',
  type: 'datetime',
  initialValue: (new Date()).toISOString()
})