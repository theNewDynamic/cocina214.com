
import { createClient } from '@sanity/client'
import sanity from '@data/sanity/config'

const { projectId, apiVersion, useCdn, dataset, token = false} = sanity

const client = createClient({
  projectId,
  dataset,
  useCdn, // set to `false` to bypass the edge cache
  apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
  token
})


/**
 * Returns entries form the Sanity API either cached or not
 * @param {Object} params_input Lone object as parameter
 * @param {string} params_input.query The GROQ query.
 * @param {Object} params_input.params The GROQ query parameters.
 * @returns {Promise} An array of entries.
 */

export default async function(params_input) {

  const { query, params = {} } = params_input
  const output = await client.fetch(query, params)
  return output
}