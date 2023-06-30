# Astro + Sanity Project Template Repo

This template repo should be used upon starting a new Huge Project. It uses Huge of course, and other useful TND modules and project structure plus loads some basic templates.


## Update values

Search and replace the following {strings} in the project with:

`{siteID}` > Site ID, a string or int with alphanumeric chars (ex: mywebsite)
`{siteTitle}` > Site Title (ex: My Website)
`{siteURL}` > Site URL (ex: https://www.mywebsite.com)
`{sanityProjectID}` > Sanity project ID (ex: sxxx2w)
## Env

Add following filled values as `/cms/.env`

```env
SANITY_STUDIO_PROJECT_ID="{sanityProjectID}"
SANITY_STUDIO_DATASET="production"
SANITY_STUDIO_PROJECT_TITLE="{sanityProjectTitle}"
SANITY_STUDIO_API_VERSION="2022-11-15"
SANITY_STUDIO_USECDN="true"
```

## Setup

```
npm install
```

```
cd cms
npm install
```

## CSS
Handled mostly through tailwind and in-components style tags. We use a `styles/main.css` style for anything that cannot live in components which is imported through the Base component.

## Media

Images are handled using the `Image` component. It takes a mandatory `image` parameter which is an object containg information on said image OR a string in which case, this will be used as is as the image src.

## SEO
SEO is handled and manipulated from the `/util/seo` file. Each entry is expecting an optional `seo` object containing the user overrides.

# Google Analytics

See `data/site.js` `ga_id` key.