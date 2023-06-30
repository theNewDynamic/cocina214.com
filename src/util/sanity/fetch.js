import EleventyFetch from '@11ty/eleventy-fetch'
import { createClient } from '@sanity/client'
import site, { sanity } from '@data/site';

const { projectId, apiVersion, useCdn, token = false} = sanity

const client = createClient({
  projectId,
  dataset: 'production',
  useCdn, // set to `false` to bypass the edge cache
  apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
  token
})

/**
 * Returns and cache entries form the Sanity API
 * @param {Object} params_input Lone object as parameter
 * @param {string} params_input.query The GROQ query.
 * @param {Object} params_input.params The GROQ query parameters.
 * @param {string} params_input.hash The GROQ query parameters.
 * @returns {Promise} An array of entries.
 */
const cachedFetch = async function(params_input) {
  const { query, params = {}, hash = "unique" } = params_input
  let url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/production#${hash}`
  const cacheDir = site.env == "dev" ? ".cache" : "/tmp/.cache/"
  const response = await EleventyFetch(url, {
    duration: site.env ==  "dev" ? "1h" : "5m", // save for 5m in production
    type: "json",    // we’ll parse JSON for you
    directory: cacheDir,
    fetchOptions: {
      method: "POST",
      body: JSON.stringify({query, params}),
      headers: {
        // lol
        "Content-Type":"application/groq"
      }
    }
  }).then((res) => res.result );
  return response
}

/**
 * Returns entries form the Sanity API
 * @param {Object} params_input Lone object as parameter
 * @param {string} params_input.query The GROQ query.
 * @param {Object} params_input.params The GROQ query parameters.
 * @returns {Promise} An array of entries.
 */
const normalFetch = async function(params_input) {
  const { query, params = {} } = params_input
  const output = await client.fetch(query, params)
  return output
}
/**
 * Returns entries form the Sanity API either cached or not
 * @param {Object} params_input Lone object as parameter
 * @param {string} params_input.query The GROQ query.
 * @param {Object} params_input.params The GROQ query parameters.
 * @param {string} params_input.hash The GROQ query parameters.
 * @returns {Promise} An array of entries.
 */
export default async function(params_input) {
  const { hash = false, forceCache = false } = params_input
  let useCache = hash && site.env !== "dev"
  if(forceCache){
    useCache = true
  }
  if(useCache) {
    return await cachedFetch(params_input)
  } else {
    return await normalFetch(params_input)
  }
}