import { createRouter, createWebHistory } from 'vue-router'
const Explore = () => import('../views/primary/Explore.vue')
const ProjectView = () => import('../views/secondary/ProjectView.vue')
const Designer = () => import('../components/Designer.vue')
const Developer = () => import('../components/Developer.vue')
const Advisor = () => import('../components/Advisor.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/explore',
      name: 'explore',
      redirect: '/projects',
      component: Explore,
      children: [
        {
          path: '/projects',
          name: 'projects',
          redirect: '/projects/designer',
          components: {
            main: ProjectView
          },
          children: [
            {
              path: '/projects/designer',
              name: 'designer',
              components: {
                timeline: Designer
              }
            },
            {
              path: '/projects/developer',
              name: 'developer',
              components: {
                timeline: Developer
              }
            },
            {
              path: '/projects/advisor',
              name: 'advisor',
              components: {
                timeline: Advisor
              }
            }
          ]
        },
        {
          path: '/notifications',
          name: 'notifications'
        },
        {
          path: '/messages',
          name: 'messages'
        },
        {
          path: '/profile',
          name: 'profile'
        }
      ]
    }
  ]
})

export default router
