import { createRouter, createWebHistory } from 'vue-router'
const Explore = () => import('../views/primary/Explore.vue')
const ProjectView = () => import('../views/secondary/ProjectView.vue')
const Project = () => import('../components/Project.vue')

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
          components: {
            main: ProjectView
          },
          children: [
            {
              path: '/projects/:id',
              name: 'project',
              components: {
                timeline: Project
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
