import { createRouter, createWebHistory } from 'vue-router'
const Explore = () => import('@/views/primary/Explore.vue')
const ProjectView = () => import('@/views/secondary/ProjectView.vue')
const Project = () => import('@/components/Project.vue')
const ThoughtsView = () => import('@/views/secondary/ThoughtsView.vue')
const MessageView = () => import('@/views/secondary/MessageView.vue')
const ProfileView = () => import('@/views/secondary/ProfileView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { // home has no nav
      path: '/',
      name: 'home',
      redirect: '/explore'
    },
    { // explore has nav, but no main content
      path: '/explore',
      name: 'explore',
      redirect: '/projects',
      component: Explore,
      children: [
        { // projects has nav, two-column layout, and main content
          path: '/projects',
          name: 'projects',
          components: {
            view: ProjectView
          },
          children: [
            { // project swaps the main content
              path: '/projects/:id',
              name: 'project',
              components: {
                main: Project
              }
            }
          ]
        },
        {
          path: '/thoughts',
          name: 'thoughts',
          components: {
            view: ThoughtsView
          }
        },
        {
          path: '/messages',
          name: 'messages',
          components: {
            view: MessageView
          }
        },
        {
          path: '/profile',
          name: 'profile',
          components: {
            view: ProfileView
          }
        }
      ]
    }
  ]
})

export default router
