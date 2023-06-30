import { defineField } from "sanity"
import image from "./image"

export default defineField({
  name: 'gallery',
  title: 'gallery',
  type: 'array',
  of: [
    image
  ]
})