import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/aboutme/:id',
    name: 'AboutMe',
    component: () => import(/* webpackChunkName: "AboutEach" */ '../components/AboutMe.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
