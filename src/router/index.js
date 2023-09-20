import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/classification',
    name: 'classification',
   
    component: () => import( '../views/classification.vue')
  },
  {
    path: '/Shopping',
    name: 'Shopping',
   
    component: () => import( '../views/Shopping.vue')
  },
  {
    path: '/Personal',
    name: 'Personal',
   
    component: () => import( '../views/Personal.vue')
  },
  {
    path: '/details',
    name: 'details',
   
    component: () => import( '../views/details.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
