import { defineType } from 'sanity'
import { title, seo, slug, reference, links, image } from '../fields'
import { defaultOrdering as orderings } from '../orderings'
import { IoDocumentTextOutline as icon } from 'react-icons/io5'

export default defineType({
  name: 'product',
  title: 'Product',
  icon,
  type: 'document',
  orderings,
  groups: [
    {
      name: 'sales_data',
      title: 'Sales Data',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'images',
      title: 'Images',
    },
  ],

  fields: [
    title,
    slug,        
    {
      type: "array",
      name: "images",
      group: "images",
      options: {
        layout: "grid",
      },
      of: [
        image
      ]
    },
    reference('taxonomyProductCategory'),
    {
      name: 'body',
      type: 'blockContent',      
    },
    {
      name: 'details',
      type: 'blockSimple',      
    },
    {
      type: 'object',
      name: 'sales_data',
      group: "sales_data",
      fields: [
        {
          type: 'string',
          name: 'sku'
        },
        {
          type: 'boolean',
          name: 'for_sale'
        },
        {
          type: 'number',
          name: 'price'
        },
        {
          type: 'number',
          name: 'weight'
        },
        {
          type: 'number',
          name: 'shipping_weight'
        },
        {
          type: "array",
          name: "variants",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  type: "string"
                },
                {
                  name: "options",
                  type: "array",
                  of: [
                    {type: "string"}
                  ]
                },
              ]
            }
          ]
        },
        {
          ...links,
          title: "Documents URLs"
        }
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      association: 'association',
      subscription: 'sales_data.subscription',
      media: 'image.asset'

    },
    prepare({ title, subscription, association, media }) {
      const subtitle = association == "subscription" && subscription ? `Subscription: ${subscription}` : association

      return {
        title: title,
        subtitle,
        media
      }
    },
  },
})
