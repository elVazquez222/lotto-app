import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../features/LandingPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/power-ball',
    name: 'power-ball',
    component: () => import('../features/PowerBall.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
