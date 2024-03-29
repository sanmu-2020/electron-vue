import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/discovrMusic.vue'
// import topic from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/discovrMusic',
    name: 'DiscovrMusic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/discovrMusic.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
