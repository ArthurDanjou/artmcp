import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'hobbies').first()
}, {
  name: 'hobbies-list',
  maxAge: 3600 // 1 hour
})
