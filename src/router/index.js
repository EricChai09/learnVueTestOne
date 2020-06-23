import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由懒加载
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
