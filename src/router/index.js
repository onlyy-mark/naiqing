import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import detail from './../views/detail/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/detail',
    component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
