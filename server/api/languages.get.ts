import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'languages')
    .where('extension', '=', 'json')
    .first()
}, {
  name: 'languages-list',
  maxAge: 3600 // 1 hour
})
