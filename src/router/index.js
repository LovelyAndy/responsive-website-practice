import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Features from '../pages/Features.vue'
import Documentation from '../pages/Documentation.vue'

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
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
