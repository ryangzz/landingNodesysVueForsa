import { createRouter, createWebHashHistory } from 'vue-router'
import landing from '@/modules/landing/router/index';
const routes = [
 {
  path:'/',
  ...landing
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
