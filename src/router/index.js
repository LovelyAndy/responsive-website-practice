import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Features from '../pages/Features.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/features',
    name: 'Features',
    component: Features,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
