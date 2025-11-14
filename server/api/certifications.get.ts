import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'certifications')
    .where('extension', '=', 'json')
    .first()
}, {
  name: 'certifications-list',
  maxAge: 3600 // 1 hour
})
