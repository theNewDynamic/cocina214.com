# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## For this Template

It is recommanded to use reusable fields whenever possible. This template has many. See example below for use case and customization:

```js
import { defineType } from 'sanity'
import { title, slug, date, image } from '../fields'
export default defineType({
  name: 'post',
  type: 'document',
  fields: [
    title,
    slug,
    date,
    image,
    // In order to customize some fields of the image field, we simply spread it,
    {
      ...image,
      name: "mobile_image"
      description: "Image for Mobile"
    }
  ]
})
```

The template also provides some fields set as functions which take a few parameters. 

### reference(type, custom_params)

Type parameter defines the type to be referenced. As an array, it will allow multiple type. This is also uses as the default `name` key.

```js
reference('post')
```
will produce the following:
```js
{
  name: 'post',
  type: 'reference',
  to: ['post']
}
```
custom_params will overwrite default assumption.

```js
reference(['post', 'event'], {name: 'related_entry'})
```
will produce the following:
```js
{
  name: 'related_entry',
  type: 'reference',
  to: ['post', 'event']
}
```

### references(type, custom_params)
Same as above but for multiple references as an array.

```js
reference('posts')
```
will produce the following:
```js
{
  name: 'posts',
  type: 'array',
  of: [
    {  
      type: 'reference',
      to: ['post']
    }
  ]
}
```