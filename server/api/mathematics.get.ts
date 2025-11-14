import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'mathematics')
    .where('extension', '=', 'md')
    .first()
}, {
  name: 'mathematics-list',
  maxAge: 3600 // 1 hour
})
