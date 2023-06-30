import { defineType, defineField } from "sanity";

export default defineField({
  title: "Block Modules",
  name: 'blocks',
  description: 'Blocks are pieces of content you can control.',
  type: "array",
  of: [
    { type: "blocks/text" },
    { type: "blocks/post" },
  ]
})