import groq from "groq";
import URL from "./URL";
import IMAGE from "./IMAGE";
import EVENT_BASE from "./EVENT_BASE";
export default groq`{
  title,
  seo,
  ...${URL},
  defined(taxonomySection) => {
    'section': taxonomySection->{
      title,
      'slug': slug.current
    },
  },
  image${IMAGE},
  'date': publishedAt,
  description,
  body,
  'bodyText': pt::text(body),
  'draft': _id in path('drafts.**'),
  'events': {
    'future': *[_type == "event" && references(^._id) && time_start >= now()]${EVENT_BASE},
    'past': *[_type == "event" && references(^._id) && time_start < now()]${EVENT_BASE},
  }
}`