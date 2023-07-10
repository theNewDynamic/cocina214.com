import { defineType } from "sanity";
import { MdOutlinePinDrop as icon } from "react-icons/md"
export default defineType({
  title: "Location",
  name: 'location',
  type: 'document',
  icon,
  fields: [
    {
      name: "title",
      title: "Name of Location",
      type: "string"
    },
    {
      name: "hours",
      title: "Opening Hours",
      type: "array",
      of: [{
        type: "object",
        fields: [
          {
            name: "label",
            type: "string",
            description: "Ex: Monday - Friday"
          },
          {
            name: "time",
            type: "string",
            description: "9am - 10pm"
          },
        ]
      }]
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
      name: "email",
      title: "Email",
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