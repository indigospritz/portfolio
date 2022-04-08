import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import ProjectsView from '@/views/projects/ProjectsView'
import ContactView from '@/views/ContactView'
import PageNotFound from '@/views/PageNotFound'
import ProjectDetails from '@/views/projects/ProjectDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/projects/project-details/:url',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
