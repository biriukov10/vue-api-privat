import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Convert from '../components/Convert.vue'
import Result from '../components/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/convert',
    name: 'convert',
    component: Convert
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
