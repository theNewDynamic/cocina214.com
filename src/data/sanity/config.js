import { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, getSecret } from 'astro:env/server';
export default {
    projectId: SANITY_STUDIO_PROJECT_ID || '{projectId}',
    dataset: SANITY_STUDIO_DATASET || 'production',
    apiVersion: '2022-12-14',
    useCdn: false,
    token: getSecret('SANITY_TOKEN') || false
}