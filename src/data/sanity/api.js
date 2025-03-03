import groq from 'groq'
import sanityFetch from "@util/sanity/fetch"

import POST from "./projections/POST";
import NOTICE from "./projections/NOTICE";
import EVENT from './projections/EVENT';
import PAGE from './projections/PAGE';
import SINGLETON from './projections/SINGLETON';
import PERSON from './projections/PERSON';
import LOCATION from './projections/LOCATION';
import TAXONOMY_TERM from './projections/TAXONOMY_TERM';
import PRODUCT from './projections/PRODUCT';

export async function getEntry(id){
  const query = groq`*[_id == $id][0]{
    'type': _type,
    _type == "person" => {
      associations,
    },
    _type == "post" => ${POST},
    _type == "notice" => ${NOTICE},
    _type == "event" => ${EVENT},
    _type == "person" => ${PERSON},
    _type == "page" => ${PAGE},
    _type in [
      'pageAbout',
      'home'
    ] => ${SINGLETON}
  }`
  const entry = await sanityFetch({query, params:{
    id
  }});
  return entry
}

export async function getPosts() {
  const query = groq`*[
    !(_id in path('drafts.**'))
    && _type == "post"
  ] | order(publishedAt desc)[]${POST}`;
  const entries = await sanityFetch({query, hash: 'getPosts'});
  return entries
}


export async function getProducts() {
  const query = groq`*[
    !(_id in path('drafts.**'))
    && _type == "product"
  ] | order(publishedAt desc)[]${PRODUCT}`;
  const entries = await sanityFetch({query});
  return entries
}

export async function getTaxonomyCategories() {
  const query = groq`*[
    !(_id in path('drafts.**'))
    && _type == "taxonomyCategory"
  ] | order(publishedAt desc)[]${TAXONOMY_TERM}`;
  const entries = await sanityFetch({query, hash: 'getTaxonomyCategories', forceCache: true});
  return entries
}

export async function getPages() {
  const query = groq`*[
    !(_id in path('drafts.**'))
    && _type == "page"
  ] | order(publishedAt desc)[]${PAGE}`;
  const entries = await sanityFetch({query});
  return entries
}

export async function getLocations() {
  const query = groq`*[
    !(_id in path('drafts.**'))
    && _type == "location"
  ]${LOCATION}`;
  const entries = await sanityFetch({query, hash: 'getLocations', forceCache: true});
  return entries
}

export async function getEvents() {
  const query = groq`*[
      !(_id in path('drafts.**'))
      && _type == "event"
    ] | order(time_start desc)${EVENT}`
  const entries = await sanityFetch({query});
  return entries
}
export async function getStaffMembers() {

  const query = groq`*[
    !(_id in path('drafts.**'))
    && _type == "person"
    && "staff" in associations
  ]${PERSON}`;
  const entries = await sanityFetch({query});
  return entries
}

export async function getHome() {
  const query = groq`*[
    !(_id in path('drafts.**'))
    && _id == "home"
  ][0]${SINGLETON}`
  const entries = await sanityFetch({query});
  return entries
}

export async function getSingletons() {
  const params = {
    types: [
      'home',
      'pageAbout',
      'pageShop'
    ]
  }
  const query = groq`*[
    !(_id in path('drafts.**'))
    && _type in $types
  ]${SINGLETON}`
  return await sanityFetch({query, params});
}