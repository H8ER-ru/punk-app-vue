import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RandomBeer from '../views/RandomBeer'
import Basket from "@/views/Basket";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/random',
    name: 'RandomBeer',
    component: RandomBeer
  }
]

const router = new VueRouter({
  routes
})

export default router
