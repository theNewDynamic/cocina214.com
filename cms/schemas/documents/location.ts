import { defineType } from "sanity";
import { MdOutlinePinDrop as icon } from "react-icons/md"
export default defineType({
  title: "Location",
  name: 'location',
  type: 'document',
  icon,
  fieldsets: [
    {
      name: 'services',
      title: 'Tier Services',
    },
    {
      name: 'address',
      title: 'Address',
      options: {
        columns: 2
      }
    },
  ],
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
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "address_1",
      type: "string",
      fieldset: "address"
    },
    {
      name: "address_2",
      type: "string",
      fieldset: "address"
    },
    {
      name: "city",
      type: "string",
      fieldset: "address"
    },
    {
      name: "state",
      type: "string",
      fieldset: "address"
    },
    {
      name: "zip",
      type: "string",
      fieldset: "address"
    },
    {
      name: "phone",
      type: "string",
      fieldset: "address"
    },
    {
      name: "coordinates",
      type: "geopoint",
      title: "Coordinates"
    },
    {
      name: "google_map_url",
      title: "Google Map URL",
      type: "url",
      fieldset: "services",
    },
    {
      name: "resy_id",
      title:" Resy Venue ID",
      type: "string",
      fieldset: "services",
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'address_1'
    },
  }
})