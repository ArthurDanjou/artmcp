import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'contact')
    .where('extension', '=', 'json')
    .first()
}, {
  name: 'contact-list',
  maxAge: 3600 // 1 hour
})
