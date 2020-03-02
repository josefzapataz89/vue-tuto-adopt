import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/cats',
    name: 'cats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cats.vue')
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dogs.vue')
  },
  {
    path: '/pets/:species/:id',
    name: 'pets',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pet.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
