import { defineType, defineField } from 'sanity'
import { personOrdering as orderings } from '../orderings'
import { SlUserFemale as icon } from "react-icons/sl";
import { image, associations, description, slug, reference } from '../fields';

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon,
  orderings,
  fieldsets: [
    {
      name: 'name',
      title: 'Full Name',
      options: { columns: 2 },
    }, 
    {
      name: "author",
      title: "Author Information",
      hidden: ({ document }) => !document?.associations?.includes("author")
    },
    {
      name: "staff",
      title: "Staff Information",
      hidden: ({ document }) => !document?.associations?.includes("staff")
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Full Name',
      type: 'string',
    },
    slug,
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      fieldset: 'name',
    },
    {
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      fieldset: 'name',
    },
    associations([
      { value: "author", title: "Author" },
      { value: "staff", title: "Staff" },
    ]),

    image,
    {
      name: "position",
      title: "Position",
      type: "string",
      fieldset: "staff"
    },
    description,
    {
      name: 'body',
      title: "Body",
      type: "blockContent"
    },
    {
      name: 'twitter',
      title: "Twitter Handle",
      type: "string",
    }
  ],
  preview: {
    select: {
      title: 'title',
      associations: 'associations',
      position: 'position',
      image: 'image.asset'
    },
    prepare({ title, image, associations, academic_year, position }) {
      let subtitle = associations ? associations.join(', ') : 'No association'
      let subtitle_strings = []
      if(associations?.includes('staff') && position) {
        subtitle_strings.push(`Staff, ${position}`)
      }
      return {
        title,
        media: image,
        subtitle: subtitle_strings.length ? subtitle_strings.join(', ') : subtitle,
      }
    }
  }
})