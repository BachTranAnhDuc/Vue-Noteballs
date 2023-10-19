import { createRouter, createWebHashHistory } from 'vue-router'
import ShareLayout from '@/layout/ShareLayout.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewNotes from '@/views/ViewNotes.vue'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'global',
      component: ShareLayout,
      children: [
        {
          path: '/',
          component: ViewNotes
        },
        {
          path: '/stats',
          component: ViewStats
        }
      ]
    }
  ]
})

export default router
