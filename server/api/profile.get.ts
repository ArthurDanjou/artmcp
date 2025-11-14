import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'profile')
    .where('extension', '=', 'json')
    .first()
}, {
  name: 'profile-info',
  maxAge: 3600 // 1 hour
})
