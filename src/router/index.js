import { createRouter, createWebHistory } from 'vue-router'
import landing from '@/modules/landing/router/index';
const routes = [
 {
  path:'/',
  ...landing
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
