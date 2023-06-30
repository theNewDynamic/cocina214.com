import { defineType } from "sanity";

export default defineType({
  title: "Venue",
  name: 'venue',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Name of Venue",
      type: "string"
    },
    {
      name: "address_1",
      type: "string"
    },
    {
      name: "address_2",
      type: "string"
    },
    {
      name: "city",
      type: "string"
    },
    {
      name: "state",
      type: "string"
    },
    {
      name: "zip",
      type: "string"
    },
    {
      name: "phone",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'address_1'
    },
  }
})