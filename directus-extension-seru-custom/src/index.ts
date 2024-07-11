import { defineHook } from '@directus/extensions-sdk'
import tasks from './tasks'
import users from './users'

export default defineHook(async ({ filter, action, init }) => {
  filter('items.read', tasks.apiHandler)

  filter('items.read', users.apiHandler)
})
