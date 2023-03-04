import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../features/landingpage/LandingPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/power-ball',
    name: 'power-ball',
    component: () => import('../features/powerBall/PowerBall.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
