//import { getSiteSettings } from "@data/sanity/api"

//Those could be populated remotely, const site_settings = await getSiteSettings()
const { title, description, image } = {
  title: `Cocina 214`,
  description: "Cocina 214 is a contemporary Mexican and Tex-Mex kitchen. Our menu combines bold flavors with the freshest local ingredients to create exceptional Tex-Mex – all served in a vibrant, elegant setting.",
  image: '/images/Cocina-214-8-3.jpg',
}

export default {
  title,
  description,
  image,
  ga_id: 'UA-xxxx-2',
  url: import.meta.env.SITE ? import.meta.env.SITE : 'https://cocina214.com',
  env: import.meta.env.ASTRO_ENV ? import.meta.env.ASTRO_ENV : "dev",
  // JSON LD
  site_id: `cocina214`,
  seo: {
    default_image: "/uploads/social-400x400.png",
    site_name: title,
    twitter_handle: "twitter_handle"
  },
  prod: () => process.env.ASTRO_ENV == 'production'
}
// If using mailchimp, those are default values for forms.
export const mailchimp = {
  user_id: '55b3xxxxxxxxxxxxxx2d3d2',
  audience_id: '73xxxx74'
}

// The Sanity information
export const sanity = {
    projectId: 'd8r8fz1h',
    dataset: 'production',
    apiVersion: '2022-12-14',
    useCdn: false,
    token: import.meta.env.SANITY_TOKEN ? import.meta.env.SANITY_TOKEN : false
}

export const socials = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/Cocina214/',
    icon: 'tnd-facebook-circle'

  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/Cocina214/',
    icon: 'tnd-instagram-circle'
  },
  {
    name: 'twitter',
    url: `https://twitter.com/Cocina214`,
    icon: 'tnd-twitter-circle'
  },
]

export const url_mapping = {
   // Add mapping below if the type does not match the destination directory
  'post': 'news',
}
